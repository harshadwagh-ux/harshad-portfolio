import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  role: string;
  company: string;
  location: string;
  start: Date;
  end: Date | null;
}

@Component({
  selector: 'app-exp',
  imports: [CommonModule],
  templateUrl: './exp.html',
  styleUrl: './exp.scss',
})
export class Exp {

  experiences: Experience[] = [
    {
      role: 'Senior Engineer – Angular Development',
      company: 'RESERVE BANK INFORMATION TECHNOLOGY PRIVATE LIMITED',
      location: 'Navi Mumbai, Maharashtra, India',
      start: new Date('2025-12-01'),
      end: null
    },
    {
      role: 'Software Developer - Angular Frontend',
      company: 'NETXCELL LTD.',
      location: 'Mumbai, Maharashtra, India',
      start: new Date('2025-07-01'),
      end: new Date('2025-12-01')
    },
    {
      role: 'System Engineer - Frontend Angular Developer',
      company: 'TATA CONSULTANCY SERVICES PVT. LTD.',
      location: 'Thane, Maharashtra, India',
      start: new Date('2022-03-01'),
      end: new Date('2025-07-01')
    }
  ];

 totalExperience: string = '';
  rbitExperience: string = '';
  netxcellExperience: string = '';
  tcsExperience: string = '';

 ngOnInit() {

    const tcsStart = new Date('2022-03-01');
    const netxcellStart = new Date('2025-07-01');
    const netxcellEnd = new Date('2025-12-01');
    const rbitStart = new Date('2025-12-01');

    const today = new Date();

    this.tcsExperience = this.calculateExperience(tcsStart, netxcellStart);
    this.netxcellExperience = this.calculateExperience(netxcellStart, netxcellEnd);
    this.rbitExperience = this.calculateExperience(rbitStart, today);

    this.totalExperience = this.calculateExperience(tcsStart, today);
  }

    calculateExperience(start: Date, end: Date): string {

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();

    if (days < 0) {
      months--;
      const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${years} Years ${months} Months ${days} Days`;
  }

  getDuration(start: Date, end: Date | null): string {
    const endDate = end || new Date();

    let months =
      (endDate.getFullYear() - start.getFullYear()) * 12 +
      (endDate.getMonth() - start.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    return `${years} yr ${remainingMonths} mo`;
  }

    calculateTotalExperience() {
    const first = this.experiences[this.experiences.length - 1].start;
    const now = new Date();

    let months =
      (now.getFullYear() - first.getFullYear()) * 12 +
      (now.getMonth() - first.getMonth());

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    this.totalExperience = `${years}+ years`;
  }

}
