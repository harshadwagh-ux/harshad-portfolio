import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {

  educationList = [
    {
      degree: 'Bachelor of Engineering',
      university: 'Savitribai Phule Pune University, Pune',
      branch: 'Electrical Engineering',
      college: 'Matoshri College Of Engineering & Research Centre, Eklahare, Nashik',
      duration: '2018 - 2021',
      score: '8.36 CGPA'
    },
    {
      degree: 'Diploma in Engineering',
      university: 'Maharashtra State Board of Technical Education, Mumbai',
      branch: 'Electrical Engineering',
      college: 'Matoshri Aasarabai Polytechnic, Eklahare, Nashik',
      duration: '2015 - 2018',
      score: '71.39%'
    },
    {
      degree: 'SSC (10th)',
      university: 'Maharashtra State Board of Secondary & Higher Secondary Education, Pune',
      branch: '',
      college: 'Madhyamik Vidhya Mandir Thermal Power Station, Eklahare, Nashik',
      duration: '2014 - 2015',
      score: '81.60%'
    }
  ];

}
