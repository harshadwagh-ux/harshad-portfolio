import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  
  private readonly DARK_THEME = 'dark-theme';
  private readonly THEME_KEY = 'theme';

  initTheme() {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme === 'dark') {
      document.body.classList.add(this.DARK_THEME);
    }
  }

  toggleTheme() {
    const isDark = document.body.classList.toggle(this.DARK_THEME);
    localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
  }

  isDarkMode(): boolean {
    return document.body.classList.contains(this.DARK_THEME);
  }
}
