import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LanguageService } from '../../service/language';

type EducationItem = {
  degree: string;
  university: string;
  branch: string;
  college: string;
  duration: string;
  score: string;
};

type AppLang = 'en' | 'hi' | 'mr';

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {

  constructor(public langService: LanguageService) {}

  private readonly educationData: Record<AppLang, EducationItem[]> = {
    en: [
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
    ],
    hi: [
      {
        degree: 'बी.ई. (इंजीनियरिंग)',
        university: 'सावित्रीबाई फुले पुणे विश्वविद्यालय, पुणे',
        branch: 'विद्युत अभियांत्रिकी',
        college: 'माटोश्री कॉलेज ऑफ इंजीनियरिंग एंड रिसर्च सेंटर, एकलहरे, नाशिक',
        duration: '2018 - 2021',
        score: '8.36 सीजीपीए'
      },
      {
        degree: 'डिप्लोमा इन इंजीनियरिंग',
        university: 'महाराष्ट्र राज्य तांत्रिक शिक्षा बोर्ड, मुंबई',
        branch: 'विद्युत अभियांत्रिकी',
        college: 'माटोश्री आशाराबाई पॉलीटेक्निक, एकलहरे, नाशिक',
        duration: '2015 - 2018',
        score: '71.39%'
      },
      {
        degree: 'एसएससी (10वीं)',
        university: 'महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षा बोर्ड, पुणे',
        branch: '',
        college: 'माध्यमिक विद्यालय, थर्मल पावर स्टेशन, एकलहरे, नाशिक',
        duration: '2014 - 2015',
        score: '81.60%'
      }
    ],
    mr: [
      {
        degree: 'बीई (इंजिनियरिंग)',
        university: 'सावित्रीबाई फुले पुणे विद्यापीठ, पुणे',
        branch: 'विद्युत अभियांत्रिकी',
        college: 'माटोश्री कॉलेज ऑफ इंजिनियरिंग अँड रिसर्च सेंटर, एकलहरे, नाशिक',
        duration: '2018 - 2021',
        score: '8.36 सीजीपीए'
      },
      {
        degree: 'डिप्लोमा इन इंजिनियरिंग',
        university: 'महाराष्ट्र राज्य तांत्रिक शिक्षण मंडळ, मुंबई',
        branch: 'विद्युत अभियांत्रिकी',
        college: 'माटोश्री आशाराबाई पोलिटेक्निक, एकलहरे, नाशिक',
        duration: '2015 - 2018',
        score: '71.39%'
      },
      {
        degree: 'एसएससी (10वी)',
        university: 'महाराष्ट्र राज्य माध्यमिक व उच्च माध्यमिक शिक्षण मंडळ, पुणे',
        branch: '',
        college: 'माध्यमिक विद्यालय, थर्मल पॉवर स्टेशन, एकलहरे, नाशिक',
        duration: '2014 - 2015',
        score: '81.60%'
      }
    ]
  };

  get educationList(): EducationItem[] {
    const lang = this.langService.getLanguage() as AppLang;
    return this.educationData[lang];
  }

}
