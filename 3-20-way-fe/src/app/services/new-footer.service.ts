import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewFooterService {

  footer_content = {
    logo: 'assets/320-WHITE-LOGO.png',
    sections: [
      {
        title: 'Solutions',
        links: [
          { name: 'About Karen Case', href: '#' },
          { name: 'One to One with Karen', href: '#' },
          { name: 'Meet the team', href: '#' },
        ]
      },
      {
        title: 'Support',
        links: [
          { name: 'Submit ticket', href: '#' },
          { name: 'Documentation', href: '#' },
          { name: 'Guides', href: '#' },
        ]
      },
      {
        title: 'Company',
        links: [
          { name: 'About', href: '#' },
          { name: 'Blog', href: '#' },
        ]
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '#' },
          { name: 'Cookie Policy', href: '#' },
          { name: 'Data Policy', href: '#' },
          { name: 'Terms and Conditions', href: '/terms-condition' },
          { name: 'Copyright Notice', href: '/copyright-notice' },
        ]
      }
    ],
    newsletter: {
      title: 'Subscribe to our newsletter',
      description: 'The latest news, articles, and resources, sent to your inbox weekly.'
    },
    social: [
      { name: 'Facebook', href: 'https://www.facebook.com/the320way', icon: 'facebook' },
      { name: 'Instagram', href: 'https://www.instagram.com/the320way/', icon: 'instagram' },
      { name: 'X', href: '#', icon: 'tiktok' },
      // { name: 'GitHub', href: '#', icon: 'github' },
      { name: 'YouTube', href: 'https://www.youtube.com/@The320Way', icon: 'youtube' },
    ],
    copyright: '© 2026 The 3-20 Way Ltd. All rights reserved.'
  };

  constructor() { }
}
