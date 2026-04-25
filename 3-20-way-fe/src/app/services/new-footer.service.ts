import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewFooterService {

  footer_content = {
    logo: 'assets/three_twenty_way_logo.png',
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
          { name: 'Terms and Conditions', href: '#' },
          { name: 'Copyright Notice', href: '#' },
        ]
      }
    ],
    newsletter: {
      title: 'Subscribe to our newsletter',
      description: 'The latest news, articles, and resources, sent to your inbox weekly.'
    },
    social: [
      { name: 'Facebook', href: '#', icon: 'facebook' },
      { name: 'Instagram', href: '#', icon: 'instagram' },
      { name: 'X', href: '#', icon: 'x' },
      { name: 'GitHub', href: '#', icon: 'github' },
      { name: 'YouTube', href: '#', icon: 'youtube' },
    ],
    copyright: '© 2026 The 3-20 Way Ltd. All rights reserved.'
  };

  constructor() { }
}
