import { Component, signal } from '@angular/core';
import { Header } from "./component/header/header";
import { Theme } from './service/core/theme';
import { Home } from "./component/home/home";
import { Exp } from "./component/exp/exp";
import { Skills } from "./component/skills/skills";
import { Education } from "./component/education/education";
import { Contact } from "./component/contact/contact";

@Component({
  selector: 'app-root',
  imports: [Header, Home, Exp, Skills, Education, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('HarshPort');

   constructor(private themeService: Theme) {}

  ngOnInit() {
    this.themeService.initTheme();
  }
}
