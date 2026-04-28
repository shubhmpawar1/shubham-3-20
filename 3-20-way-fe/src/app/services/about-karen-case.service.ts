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
    },

    overview: {
      tagline: 'About Karen Case',
      headline: 'A life devoted to better movement for all',
      description: 'Karen Case is a specialist in older-adult movement and functional independence, with over 25 years of experience across health, social care, and community settings.',
      mission: {
        title: 'Overview',
        paragraphs: [
          'Karen Case is a UK-based specialist in older-adult movement and functional independence, with over 20 years’ experience working across health, social care and community settings. Her work focuses on helping older adults and people with limited mobility move safely, confidently and consistently, with the aim of maintaining independence and quality of life.',
          'Karen is the founder and movement expert behind The 3-20 Way, a digital programme designed to make daily movement feel achievable rather than intimidating. Her approach prioritises reassurance, safety and real-life functionality over traditional fitness or performance-based exercise.'
        ]
      },
      images: [
        { src: 'assets/About_Karen.jpg', alt: 'Karen Case' },
        { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?&auto=format&fit=crop&crop=left&w=560&h=560&q=90', alt: 'Movement session' },
        { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?&auto=format&fit=crop&crop=left&w=560&h=560&q=90', alt: 'Community class' },
        { src: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?&auto=format&fit=crop&crop=center&w=560&h=560&q=90', alt: 'Wellness activity' }
      ],
      stats: [
        { label: 'Years experience', value: '25+' },
        { label: 'Instructors trained', value: '2,000+' },
        { label: 'Members helped', value: '10,000+' },
        { label: 'Free trial days', value: '10' }
      ]
    },

    professional_background: {
      tagline: 'Professional Background',
      headline: 'Over 25 years helping people move better',
      image: 'assets/About_Karen.jpg',
      quote: '"Movement is not about performance — it\'s about independence, confidence, and living life on your own terms."',
      quoteAuthor: 'Karen Case',
      quoteRole: 'Founder, The 3-20 Way',
      paragraphs: [
        'Karen began her career in the fitness and wellbeing industry in 2001, qualifying initially as an Exercise to Music and Gym Instructor. Over the following years, she trained across a broad range of disciplines, including multiple Les Mills programmes, yoga and Tai Chi for Health. This early work exposed her to people of varying ages and abilities and highlighted how excluded many older adults feel by mainstream fitness culture.',
        'As her career developed, Karen increasingly focused on supporting those for whom traditional exercise environments felt unsafe, unrealistic or inaccessible. This shift marked the beginning of her long-standing specialism in older-adult and limited-mobility movement.',
        'Karen\'s deep-rooted passion for inclusive movement led her to create The 3-20 Way — a digital programme that brings her expert approach directly into people\'s homes, making daily movement feel achievable for everyone.'
      ],
      stats: [
        { label: 'Years experience', value: '25+' },
        { label: 'Instructors trained', value: '2,000+' },
        { label: 'LifeDock founded', value: '2003' },
        { label: 'Members helped', value: '10,000+' }
      ],
      cta: {
        text: 'Start your 10-day free trial',
        href: '#'
      }
    }

  };

  constructor() { }
}
