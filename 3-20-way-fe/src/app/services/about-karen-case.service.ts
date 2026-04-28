import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutKarenCaseService {

  page_content = {

    hero_section_tailwind: {
      logo: 'assets/320-WHITE-LOGO.png',
      navigation: [
        { name: 'Product', href: '#' },
        { name: 'Features', href: '#' },
        { name: 'Marketplace', href: '#' },
        { name: 'Company', href: '#' },
      ],
      announcement: {
        text: 'Meet the founder of The 3-20 Way.',
        linkText: 'Learn more',
        href: '#'
      },
      headline: {
        line1: 'About Karen Case',
        line2: 'Founder of The 3-20 Way'
      },
      description: 'Karen Case is a specialist in older-adult movement and functional independence, with over 25 years of experience across health, social care, and community settings.',
      primaryCTA: {
        text: 'Start your 10 day free trial',
        href: '#'
      },
      secondaryCTA: {
        text: 'Learn more',
        href: '#'
      },
      bgImage: 'assets/hero.jpg'
    }

  };

  constructor() { }
}
