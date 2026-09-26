import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../service/language';

type SkillItem = { name: string };
type SkillCategory = { title: string; skills: SkillItem[] };
type AppLang = 'en' | 'hi' | 'mr';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  constructor(public langService: LanguageService) {}

  private readonly skillData: Record<AppLang, SkillCategory[]> = {
    en: [
      {
        title: 'Frontend',
        skills: [
          { name: 'Angular (8–22+)' },
          { name: 'Standalone Components' },
          { name: 'Signals' },
          { name: 'Angular Material' },
          { name: 'PrimeNG' },
          { name: 'Angular Formly' },
          { name: 'RxJS' },
          { name: 'NgRx' },
          { name: 'GraphQL' },
          { name: 'TypeScript' },
          { name: 'JavaScript (ES6+)' },
          { name: 'HTML5' },
          { name: 'CSS3' },
          { name: 'SCSS' },
          { name: 'Bootstrap' },
          { name: 'Tailwind CSS' },
          { name: 'Chart.js' },
          { name: 'Apex Charts' },
          { name: 'ng CDK' },
          { name: 'VEX Angular' },
          { name: 'Figma' }
        ]
      },
      {
        title: 'Backend',
        skills: [
          { name: 'Core Java' },
          { name: 'Spring Boot (Basic)' },
          { name: 'REST APIs' }
        ]
      },
      {
        title: 'Databases',
        skills: [
          { name: 'Oracle PL/SQL' },
          { name: 'MySQL' },
          { name: 'MongoDB' },
          { name: 'Elasticsearch' }
        ]
      },
      {
        title: 'DevOps & Tools',
        skills: [
          { name: 'Git' },
          { name: 'Jenkins CI/CD' },
          { name: 'Azure DevOps' },
          { name: 'Nexus Repository' },
          { name: 'SonarQube' },
          { name: 'Coverity' },
          { name: 'Jira' },
          { name: 'Postman' },
          { name: 'Swagger' }
        ]
      },
      {
        title: 'Methodologies',
        skills: [
          { name: 'Agile (Scrum)' },
          { name: 'DAST' },
          { name: 'SAST' },
          { name: 'API Integration' },
          { name: 'Mono Frontends' },
          { name: 'Micro Frontends' },
          { name: 'SSR' },
          { name: 'SCA' }
        ]
      },
      {
        title: 'AI Tools',
        skills: [
          { name: 'GitHub Copilot' },
          { name: 'ChatGPT' },
          { name: 'Gemini AI' },
          { name: 'Claude AI' },
          { name: 'Qwen LLM' }
        ]
      }
    ],
    hi: [
      {
        title: 'फ्रंटएंड',
        skills: [
          { name: 'Angular (8–22+)' },
          { name: 'स्टैंडअलोन कंपोनेंट्स' },
          { name: 'सिग्नल्स' },
          { name: 'Angular Material' },
          { name: 'PrimeNG' },
          { name: 'Angular Formly' },
          { name: 'RxJS' },
          { name: 'NgRx' },
          { name: 'GraphQL' },
          { name: 'TypeScript' },
          { name: 'JavaScript (ES6+)' },
          { name: 'HTML5' },
          { name: 'CSS3' },
          { name: 'SCSS' },
          { name: 'Bootstrap' },
          { name: 'Tailwind CSS' },
          { name: 'Chart.js' },
          { name: 'Apex Charts' },
          { name: 'ng CDK' },
          { name: 'VEX Angular' },
          { name: 'Figma' }
        ]
      },
      {
        title: 'बैकएंड',
        skills: [
          { name: 'Core Java' },
          { name: 'Spring Boot (Basic)' },
          { name: 'REST APIs' }
        ]
      },
      {
        title: 'डेटाबेस',
        skills: [
          { name: 'Oracle PL/SQL' },
          { name: 'MySQL' },
          { name: 'MongoDB' },
          { name: 'Elasticsearch' }
        ]
      },
      {
        title: 'डेवऑप्स और टूल्स',
        skills: [
          { name: 'Git' },
          { name: 'Jenkins CI/CD' },
          { name: 'Azure DevOps' },
          { name: 'Nexus Repository' },
          { name: 'SonarQube' },
          { name: 'Coverity' },
          { name: 'Jira' },
          { name: 'Postman' },
          { name: 'Swagger' }
        ]
      },
      {
        title: 'विधियाँ',
        skills: [
          { name: 'Agile (Scrum)' },
          { name: 'DAST' },
          { name: 'SAST' },
          { name: 'API Integration' },
          { name: 'Mono Frontends' },
          { name: 'Micro Frontends' },
          { name: 'SSR' },
          { name: 'SCA' }
        ]
      },
      {
        title: 'एआई टूल्स',
        skills: [
          { name: 'GitHub Copilot' },
          { name: 'ChatGPT' },
          { name: 'Gemini AI' },
          { name: 'Claude AI' },
          { name: 'Qwen LLM' }
        ]
      }
    ],
    mr: [
      {
        title: 'फ्रंटएंड',
        skills: [
          { name: 'Angular (8–22+)' },
          { name: 'स्टँडअलोन कॉम्पोनंट्स' },
          { name: 'सिग्नल्स' },
          { name: 'Angular Material' },
          { name: 'PrimeNG' },
          { name: 'Angular Formly' },
          { name: 'RxJS' },
          { name: 'NgRx' },
          { name: 'GraphQL' },
          { name: 'TypeScript' },
          { name: 'JavaScript (ES6+)' },
          { name: 'HTML5' },
          { name: 'CSS3' },
          { name: 'SCSS' },
          { name: 'Bootstrap' },
          { name: 'Tailwind CSS' },
          { name: 'Chart.js' },
          { name: 'Apex Charts' },
          { name: 'ng CDK' },
          { name: 'VEX Angular' },
          { name: 'Figma' }
        ]
      },
      {
        title: 'बॅकएंड',
        skills: [
          { name: 'Core Java' },
          { name: 'Spring Boot (Basic)' },
          { name: 'REST APIs' }
        ]
      },
      {
        title: 'डेटाबेस',
        skills: [
          { name: 'Oracle PL/SQL' },
          { name: 'MySQL' },
          { name: 'MongoDB' },
          { name: 'Elasticsearch' }
        ]
      },
      {
        title: 'डेव्हऑप्स आणि टूल्स',
        skills: [
          { name: 'Git' },
          { name: 'Jenkins CI/CD' },
          { name: 'Azure DevOps' },
          { name: 'Nexus Repository' },
          { name: 'SonarQube' },
          { name: 'Coverity' },
          { name: 'Jira' },
          { name: 'Postman' },
          { name: 'Swagger' }
        ]
      },
      {
        title: 'पद्धती',
        skills: [
          { name: 'Agile (Scrum)' },
          { name: 'DAST' },
          { name: 'SAST' },
          { name: 'API Integration' },
          { name: 'Mono Frontends' },
          { name: 'Micro Frontends' },
          { name: 'SSR' },
          { name: 'SCA' }
        ]
      },
      {
        title: 'एआय टूल्स',
        skills: [
          { name: 'GitHub Copilot' },
          { name: 'ChatGPT' },
          { name: 'Gemini AI' },
          { name: 'Claude AI' },
          { name: 'Qwen LLM' }
        ]
      }
    ]
  };

  get skillCategories(): SkillCategory[] {
    const lang = this.langService.getLanguage() as AppLang;
    return this.skillData[lang];
  }

}
