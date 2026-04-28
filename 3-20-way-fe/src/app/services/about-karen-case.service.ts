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
    },

    life_dock: {
      tagline: 'LifeDock Training',
      headline: 'The UK\'s leading specialist movement training provider',
      description: 'In 2003, Karen co-founded LifeDock Training — now the UK\'s leading provider of specialist physical activity programmes for older adults and people with limited mobility. Through LifeDock, she has trained over 2,000 instructors across the UK.',
      features: [
        {
          title: 'Co-founder & Programme Leadership',
          description: 'In 2003, Karen co-founded LifeDock Training, now recognised as the UK’s leading provider of specialist physical-activity programmes for older adults, people with disabilities and individuals with limited mobility.',
          icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.75.75 0 0 1 1.04 0l2.122 2.02a.75.75 0 0 0 .44.21l2.93.426a.75.75 0 0 1 .416 1.279l-2.12 2.067a.75.75 0 0 0-.216.664l.5 2.914a.75.75 0 0 1-1.088.79L12 12.347l-2.504 1.318a.75.75 0 0 1-1.088-.79l.5-2.914a.75.75 0 0 0-.216-.664L6.57 7.434a.75.75 0 0 1 .416-1.28l2.93-.425a.75.75 0 0 0 .44-.21l2.122-2.02Z" />`
        },
        {
          title: 'Instructor Training & Education',
          description: 'LifeDock is an OCNNI-accredited training centre and develops evidence-informed programmes that equip physical-activity and wellbeing leaders to deliver safe, effective and inclusive movement. Through LifeDock, Karen has trained over 2,000 instructors across the UK.',
          icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />`
        },
        {
          title: 'National Partnerships & Reach',
          description: 'Karen and LifeDock have worked with a wide range of organisations, including all five Northern Ireland Health Trusts, NHS England, NHS Scotland, major care providers, and charities such as Arthritis UK, Age NI and Parkinson’s UK.',
          icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253" />`
        },
        {
          title: 'National Partnerships & Reach',
          description: 'Notably, Arthritis UK selected Chi Me as its primary physical-activity offering for the people it supports, reflecting trust in Karen’s approach to safe, accessible movement.',
          icon: `<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />`
        }
      ]
    },
    feature_data: {
      title: 'Lived experience and personal insight',
      description: 'Combining lived experience with professional expertise to deliver safe, inclusive and effective movement approaches.',
      items: [
        {
          title: 'Personal Health Journey',
          description: 'In 2012, Karen was diagnosed with breast cancer and experienced first-hand the physical and emotional challenges of recovery. During treatment and rehabilitation, she found that appropriate movement played a critical role in restoring strength, confidence and mental wellbeing.',
          link: '#',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-white">
  <circle cx="12" cy="12" r="9" />
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor">1</text>
</svg>`
        },
        {
          title: 'Recovery Through Movement',
          description: 'Karen became a founding member of Lagan Dragons, Northern Ireland’s first breast cancer survivors’ dragon boat team, and has previously served as team Captain. Her involvement with the team reinforced her belief that rest alone is not sufficient for recovery, and that gentle, supported movement can be transformative at any stage of life or health.',
          link: '#',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-white">
  <circle cx="12" cy="12" r="9" />
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor">2</text>
</svg>`
        },
        {
          title: 'Empathy & Lived Experience',
          description: 'This combination of professional expertise and lived experience continues to inform Karen’s empathetic, reassurance-led approach.',
          link: '#',
          icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-white">
  <circle cx="12" cy="12" r="9" />
  <text x="12" y="12" text-anchor="middle" dominant-baseline="central" font-size="10" fill="currentColor">3</text>
</svg>`
        }
      ]
    },

    philosophy: {
      image: 'assets/About_Karen.jpg',
      quote: 'Movement is not about performance — it\'s about independence, confidence, and living life on your own terms. From as little as 3 minutes a day, I\'ve seen people transform their quality of life. That\'s what drives everything we do at The 3-20 Way.',
      authorName: 'Karen Case',
      authorRole: 'Founder, The 3-20 Way'
    }

  };

  constructor() { }
}
