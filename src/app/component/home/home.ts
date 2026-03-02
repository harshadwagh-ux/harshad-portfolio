import { Component } from '@angular/core';
import { LanguageService } from '../../service/language';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  constructor(     public langService: LanguageService){

  }

download() {
  const link = document.createElement('a');
  link.href = '/ResumeHarshadWagh.pdf';
  link.download = 'ResumeHarshadWagh.pdf';
  link.click();
}

}
