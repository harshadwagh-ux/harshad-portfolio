import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Translation } from './translation/translation.model';

type Lang = 'en' | 'mr' | 'hi';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {

  private readonly LANGUAGE_KEY = 'app-language';
  private langSubject = new BehaviorSubject<Lang>(this.getStoredLanguage());
  private translationSubject = new BehaviorSubject<Translation | null>(null);

  language$ = this.langSubject.asObservable();
  translations$ = this.translationSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTranslations(this.langSubject.value);
  }

  private getStoredLanguage(): Lang {
    const saved = localStorage.getItem(this.LANGUAGE_KEY) as Lang | null;
    return saved === 'en' || saved === 'mr' || saved === 'hi' ? saved : 'en';
  }

  setLanguage(lang: Lang) {
    if (lang === this.langSubject.value) return;
    localStorage.setItem(this.LANGUAGE_KEY, lang);
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
