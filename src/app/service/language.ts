import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Translation } from './translation/translation.model';

type Lang = 'en' | 'mr' | 'hi';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  private langSubject = new BehaviorSubject<Lang>('en');
  private translationSubject = new BehaviorSubject<Translation | null>(null);

  language$ = this.langSubject.asObservable();
  translations$ = this.translationSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTranslations(this.langSubject.value);
  }

  setLanguage(lang: Lang) {
    if (lang === this.langSubject.value) return;
    this.langSubject.next(lang);
    this.loadTranslations(lang);
  }

  getLanguage(): Lang {
    return this.langSubject.value;
  }

  private loadTranslations(lang: Lang) {
    this.http.get<Translation>(`/${lang}.json`).subscribe({
      next: (data) => {
        this.translationSubject.next(data);
      },
      error: () => {
        console.error(`Failed to load ${lang}.json`);
      }
    });
  }

  t(key: keyof Translation): string {
    const translations = this.translationSubject.value;
    return translations ? translations[key] ?? key : key;
  }
}
