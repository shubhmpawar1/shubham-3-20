import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularDeveloperService {

  constructor() { }

  angular_developer_content = {

    hero_section: {
      title: 'Get Ready-to-Deploy Angular Developers',
      pill_1: 'UI-Focused Coding',
      pill_2: 'Project-Ready Talent',
      pill_3: 'Immediate Joining',
      quick_look: 'Hire Angular Developers with proven frontend expertise.',
      description: `Deploy clean, scalable Angular code with developers trained on real projects.`,
      cta_1: {
        text: 'View Profiles',
        link: '#profiles'
      },
      cta_2: {
        text: 'Hiring Process',
        link: '#model'
      },
      image_1: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
      image_2: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259',
      image_3: 'https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401',
      image_4: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      image_5: 'https://images.unsplash.com/photo-1578592308652-794769149ab0',
    },

    testimonials_1: [
      {
        description: "We hired an Angular Developer through The Contrast Consultancy, and the results exceeded expectations. The developer quickly adapted to our stack, delivered high-quality code, and was proactive in problem-solving.",
        name: "Amit Deshmukh",
        designation: "Engineering Manager",
        company: "CodeSync Technologies, Mumbai",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        description: "The developer we onboarded through The Contrast was not only technically strong but also communicated well with our team. Our frontend velocity improved noticeably within weeks.",
        name: "Neha Rane",
        designation: "CTO",
        company: "WebAura Innovations, Bangalore",
        image: "https://randomuser.me/api/portraits/women/39.jpg"
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
      sub_title: 'Why Our Angular Developers Make a Difference',
      title: 'Get Scalable, High-Performance Angular Solutions Without the Hiring Hassle',
      description: 'We provide experienced Angular developers who are project-ready from day one. Clean code, fast delivery, and strong communication — everything your frontend team needs.',
      details: [
        {
          title: 'Proven Angular Expertise',
          description: 'Our developers have worked on high-traffic Angular applications with reusable components, RxJS, and robust architecture.'
        },
        {
          title: 'Fast Project Onboarding',
          description: 'Get Angular developers onboarded in 3–5 days. No long hiring cycles, no delay in development.'
        },
        {
          title: 'Smooth Backend Integration',
          description: 'Our Angular engineers easily integrate with REST/GraphQL APIs, auth systems, and third-party libraries.'
        },
        {
          title: 'Modern UI, Better UX',
          description: 'We follow Material Design and Tailwind best practices to deliver clean, user-friendly, and responsive UIs.'
        },
        {
          title: 'Optimized Code & Maintenance',
          description: 'Developers write modular TypeScript code with state management (NgRx or Signals) to ensure clean structure and easy maintenance.'
        },
        {
          title: 'Agile Communication & Reporting',
          description: 'Work transparently with developers using Jira, GitHub, and Slack. Daily standups and weekly updates ensure smooth progress.'
        }
      ]
    },

    beyond_learning: {
      sub_title: 'Not just deployment — real developer evolution.',
      title: 'Developers Who Grow as Your Project Grows',
      description: 'We don’t just place Angular Developers — we help them become high-performing professionals who bring long-term value to your team.',
      details: [
        {
          title: 'Mentorship from Senior Experts',
          description: 'Our developers are guided by experienced Angular leads and project managers to help them make smarter, real-world decisions.'
        },
        {
          title: 'Continuous Upskilling & Live Project Training',
          description: 'Developers stay ahead with hands-on experience in the latest Angular tools, architecture patterns, and real-time project challenges.'
        },
        {
          title: 'Community Access & Tech Events',
          description: 'We connect our developers with active Angular communities, webinars, and meetups to encourage learning, growth, and peer support.'
        }
      ]
    },

    language_cta: {
      title: 'Get Skilled Angular Developers for Your Team',
      description: `Looking for expert Angular Developers for your projects? Partner with The Contrast Consultancy and quickly access industry-ready, experienced Angular professionals.`,
      cta: {
        text: 'Contact Us Now',
        link: '#contact'
      }
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'Will the developer understand our existing project architecture?',
          answer: 'Yes, our Angular developers are trained to quickly understand and adapt to ongoing project structures and coding standards.',
          expanded: false,
        },
        {
          question: 'Can I interview or test the developer before hiring?',
          answer: 'Absolutely. We encourage client interviews, code tests, or trial tasks to ensure the right match.',
          expanded: false,
        },
        {
          question: 'Do developers work in our timezone or follow a fixed shift?',
          answer: 'We provide flexible working arrangements, including timezone alignment if needed, to ensure smooth coordination.',
          expanded: false,
        },
        {
          question: 'Are your Angular developers updated with the latest frameworks and tools?',
          answer: 'Yes. We ensure ongoing upskilling in Angular, TypeScript, RxJS, state management (NgRx/Signals), and best practices.',
          expanded: false,
        },
        {
          question: 'What if the developer does not meet performance expectations?',
          answer: 'We offer replacement support and performance reviews to ensure you always have the right talent on your team.',
          expanded: false,
        }
      ]
    }
  }
}