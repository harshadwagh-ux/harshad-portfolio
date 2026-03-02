import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'Angular' },
        { name: 'Angular Material' },
        { name: 'Ng Prime' },
        { name: 'Formly' },
        { name: 'RxJS' },
        { name: 'NgRx' },
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Chart.js' },
        { name: 'ApexCharts' },
        { name: 'HTML5' },
        { name: 'CSS3 / SCSS' },
        { name: 'Bootstrap' },
        { name: 'Tailwind CSS' },
        { name: 'Material Icons' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Core Java' },
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
        { name: 'Jenkins' },
        { name: 'Jasmine' },
        { name: 'Karma' },
        { name: 'Git' },
        { name: 'SonarQube' },
        { name: 'Azure DevOps' },
        { name: 'Jira' },
        { name: 'Postman' }
      ]
    },
    {
      title: 'Concepts',
      skills: [
        { name: 'Micro-frontends' },
        { name: 'Agile / Scrum' },
        { name: 'TDD / BDD' },
        { name: 'Secure Coding' },
        { name: 'API Integration' },
        { name: 'State Management (NgRx)' }
      ]
    }
  ];


}
