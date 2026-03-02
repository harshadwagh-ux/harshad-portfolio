import { Component, HostListener, OnInit } from '@angular/core';
import { Theme } from '../../service/core/theme';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from '../../service/language';

type Lang = 'en' | 'mr' | 'hi';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {

  currentLang: Lang = 'en';
  menuOpen = false;
  isScrolled = false;

  day = '☀️ Light Mode';
  night = '🌙 Dark Mode';

  constructor(
    public themeService: Theme,
    private router: Router,
    public langService: LanguageService
  ) {}

  ngOnInit(): void {
    this.currentLang = this.langService.getLanguage();
    this.langService.language$.subscribe(lang => {
      this.currentLang = lang;
    });
  }

  setLanguage(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.langService.setLanguage(select.value as Lang);
  }

  toggleDarkMode(): void {
    this.themeService.toggleTheme();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  navigate(path: string): void {
    this.router.navigate([path]);
    this.menuOpen = false;
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 10;
  }

  scrollTo(section: string): void {
  const element = document.getElementById(section);

  if (element) {
    const headerOffset = 70;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  this.menuOpen = false;
}
}
