import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../service/language';

interface Certificate {
  title: string;
  link: string;
  date: string;
  issuer: string;
}

const certificateTranslations = {
  en: {
    title: 'Certificates',
    view: 'View Certificate',
    issuer: 'Issuer'
  },
  hi: {
    title: 'सर्टिफिकेट',
    view: 'सर्टिफिकेट देखें',
    issuer: 'जारीकर्ता'
  },
  mr: {
    title: 'प्रमाणपत्रे',
    view: 'प्रमाणपत्र पाहा',
    issuer: 'जारीकर्ता'
  }
} as const;

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss',
})
export class Certificates {
  constructor(public langService: LanguageService) {}

  get certificateTitle(): string {
    const lang = this.langService.getLanguage();
    return certificateTranslations[lang]?.title ?? certificateTranslations.en.title;
  }

  get viewCertificateLabel(): string {
    const lang = this.langService.getLanguage();
    return certificateTranslations[lang]?.view ?? certificateTranslations.en.view;
  }

  get issuerLabel(): string {
    const lang = this.langService.getLanguage();
    return certificateTranslations[lang]?.issuer ?? certificateTranslations.en.issuer;
  }

  certificates: Certificate[] = [
    {
      title: 'Certificate of Recognition Q2',
      link: 'https://www.linkedin.com/posts/harshad-wagh-26473521a_tcs-certificateofrecognition-angulardevelopment-activity-7273560908600135680-qEWH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdICiwBFjbuDi0ZwFcw4J7WzxkUA3eeU6A',
      date: 'Dec 2024',
      issuer: 'TATA Consultancy Services Pvt. Ltd'
    },
    {
      title: 'Google Cloud Certified Associate Cloud Engineer',
      link: 'https://pdf.credential.net/ydfyytgm_1682152629830_cc2cdfecd936205e143ec8e83dcc256b615db1667a7d5d86489ff25d6652f2ed.pdf',
      date: 'April 2023',
      issuer: 'Google Cloud'
    },
    {
      title: 'Professional JAVA Developer',
      link: 'https://www.linkedin.com/posts/harshad-wagh-26473521a_java-share-developer-activity-7061704786315816962-saU8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADdICiwBFjbuDi0ZwFcw4J7WzxkUA3eeU6A',
      date: 'April 2023',
      issuer: 'SQUAD InfoTech Pvt. Ltd'
    }
  ];
}
