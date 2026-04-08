import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductManagerService {

  constructor() { }

  product_manager_content = {

    hero_section: {
      title: 'Get Product Managers Who Deliver Results.',
      pill_1: 'Real-World Trained',
      pill_2: 'Roadmaps & Research',
      pill_3: 'Tech–Business Bridge',
      quick_look: 'We deploy product managers with practical experience and strategic mindset.',
      description: `At The Contrast Consultancy, we train and deploy Product Managers who are customer-obsessed, data-driven, and execution-focused.`,
      cta_1: {
        text: 'Request PM Profiles',
        link: '#upload'
      },
      cta_2: {
        text: 'See How It Works',
        link: '#model'
      },
      image_1: 'https://images.unsplash.com/photo-1642229407671-7ec2ba313386?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdCUyMG1hbmVnYXIlMjBpbmZvcm1hdGlvbiUyMHRlY2hub2xneXxlbnwwfHwwfHx8MA%3D%3D',
      image_2: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80',
      image_3: 'https://images.unsplash.com/photo-1577375729152-4c8b5fcda381?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcmR3YXJlfGVufDB8fDB8fHww',
      image_4: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80',
      image_5: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8OHx8aGFyZHdhcmV8ZW58MHx8MHx8fDA%3D',
    },

    testimonials_1: [
      {
        description: "The Product Manager from The Contrast brought structured thinking and clarity to our go-to-market plan. Within weeks, we were aligned on product goals and priorities.",
        name: "Ravi Mahajan",
        designation: "Head of Product",
        company: "Upstride AI",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      {
        description: "We found a brilliant PM through The Contrast who immediately took over sprint planning, user testing, and release cycles. Great experience!",
        name: "Kavita Shah",
        designation: "CTO",
        company: "BrightPath Tech",
        image: "https://randomuser.me/api/portraits/women/58.jpg"
      }
    ],

    companies: [
      { src: 'https://vectorseek.com/wp-content/uploads/2023/08/TCS-Tata-Consultancy-Services-Logo-Vector.svg-.png', alt: 'TCS' },
      { src: 'https://tse1.mm.bing.net/th?id=OIP.B6ZDxkXIEhuneOFcU6UHcwHaCK&pid=Api&P=0&h=180', alt: 'India Bison' },
      { src: 'https://tse2.mm.bing.net/th?id=OIP.DA8FBCaBvcANLGxl2R_dJwHaEq&pid=Api&P=0&h=180', alt: 'capgemini' },
      { src: 'https://tse2.mm.bing.net/th?id=OIP.B5QRWIA0kq0u9SfrwYF6NgAAAA&pid=Api&P=0&h=180', alt: 'Hubblehox' },
      { src: 'https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo.png', alt: 'Adobe' }
    ],

    technical_benefit: {
      title: 'Why Choose Our Product Managers?',
      description: 'Our PMs are trained to work at the intersection of customer needs, business goals, and engineering delivery.',
      details: [
        {
          title: 'Business & Tech Alignment',
          description: 'Our PMs act as the bridge between stakeholders, users, and developers — ensuring smooth delivery.'
        },
        {
          title: 'Customer-Centric Approach',
          description: 'We train PMs to validate problems, prioritize solutions, and measure outcomes — not just outputs.'
        },
        {
          title: 'Roadmap Ownership',
          description: 'Every PM is equipped to manage product strategy, releases, and feedback loops.'
        }
      ]
    },

    beyond_learning: {
      title: 'Product Thinking Beyond the Classroom',
      description: 'All our Product Managers work on simulations of real startups, user research, and launch planning.',
      details: [
        {
          title: 'Product Strategy Simulations',
          description: 'Trained to build MVP roadmaps, conduct market analysis, and define product KPIs.'
        },
        {
          title: 'Cross-Functional Collaboration',
          description: 'Experience in working with design, development, and marketing teams on live projects.'
        },
        {
          title: 'User-Centered Problem Solving',
          description: 'Each PM is trained to identify real customer pain points through user interviews and usability testing.'
        }
      ]
    },

    language_cta: {
      title: 'Looking for Product Managers Who Deliver Value?',
      description: `Access a pool of trained Product Managers with real-world decision-making experience. Ready to contribute from day one.`,
      cta: {
        text: 'Get PM Profiles',
        link: '#upload'
      }
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'Do your Product Managers have technical background?',
          answer: 'Yes, many of them come from tech or engineering backgrounds and are trained to collaborate effectively with development teams.',
          expanded: false
        },
        {
          question: 'Are they trained in Product Discovery?',
          answer: 'Absolutely. All PMs learn product discovery techniques, user research, and experimentation frameworks.',
          expanded: false
        },
        {
          question: 'How soon can we deploy a Product Manager?',
          answer: 'Once we align on your needs, we can share profiles and initiate deployment within 3–5 days.',
          expanded: false
        }
      ]
    }
  }
}
