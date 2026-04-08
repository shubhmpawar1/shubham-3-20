import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactDeveloperService {

  constructor() { }

  react_developer_content = {

    hero_section: {
      title: 'Build Future-Ready Web Applications with Skilled React .',
      pill_1: 'Trusted Experts',
      pill_2: 'Proven Results',
      pill_3: 'Partner with the Best',
      quick_look: 'Ready React developers who make your web apps modern and scalable.',
      description: 'Hire experts delivering fast, reliable, and high-quality React solutions.',
      cta_1: {
        text: 'Request Profiles',
        link: '#upload'
      },
      cta_2: {
        text: 'See Hiring Process',
        link: '#model'
      },
      image_1: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      image_2: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259',
      image_3: 'https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401',
      image_4: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80',
      image_5: 'https://images.unsplash.com/photo-1578592308652-794769149ab0',
    },

    testimonials_1: [
      {
        description: "We received a skilled React Developer in no time. His technical expertise exceeded our expectations, and the project was delivered on time. We’re extremely satisfied.",
        name: "Rahul Jadhav",
        designation: "Technical Head",
        company: "Codeflow Solutions",
        image: "https://randomuser.me/api/portraits/men/64.jpg"
      },
      {
        description: "The React Developer delivered clean code, communicated well, and managed deadlines effectively. The team provided by The Contrast Consultancy was a great asset to our project.",
        name: "Neha Gupta",
        designation: "Project Manager",
        company: "Digitech Pvt. Ltd.",
        image: "https://randomuser.me/api/portraits/women/47.jpg"
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
      sub_title: 'Why Companies Choose Our React Developers',
      title: 'Skilled, Project-Ready, and Scalable React Talent',
      description: 'Hire React Developers who are rigorously vetted, technically equipped, and ready to make an immediate impact on your business outcomes.',
      details: [
        {
          title: 'Industry-Tested React Skills',
          description: 'Our developers are trained on production-grade projects using React, Redux, REST APIs, Git workflows, and responsive design.'
        },
        {
          title: 'Quick Onboarding, Zero Setup Hassle',
          description: 'Our talent fits right into your team with minimal ramp-up time — saving you weeks of training and productivity loss.'
        },
        {
          title: 'Deployment-Ready from Day One',
          description: 'Plug React developers directly into live environments. They’re equipped to understand requirements, write clean code, and deliver quickly.'
        },
        {
          title: 'Active Support & Risk-Free Replacement',
          description: 'We monitor performance, ensure accountability, and provide fast replacements if expectations aren’t met — with no extra cost.'
        },
        {
          title: 'Scale Teams as You Grow',
          description: 'Start small and scale effortlessly. We offer flexible engagement models with no long-term contracts.'
        },
        {
          title: 'Agile Collaboration & Transparency',
          description: 'Our developers work in sprints, use Jira, GitHub, and Slack — ensuring alignment, traceability, and clear communication throughout.'
        }
      ]
    },

    beyond_learning: {
      sub_title: 'Not Just Deployment — Empowering React Developers',
      title: 'Beyond Hiring: Real Growth for React Developers',
      description: 'The Contrast Consultancy helps React Developers grow through continuous learning, expert mentorship, and real-world project exposure — ensuring they’re always one step ahead.',
      details: [
        {
          title: 'Guidance from Experts',
          description: 'Senior React developers and architects help sharpen skills and solve real challenges effectively.'
        },
        {
          title: 'Cutting-Edge Upskilling',
          description: 'Hands-on experience with the latest React features, hooks, state management, and supporting tools.'
        },
        {
          title: 'Community & Collaboration',
          description: 'Active participation in React meetups, hackathons, and networking events to stay connected and inspired.'
        }
      ]
    },
    
    language_cta: {
      title: 'Get Skilled React Developers Quickly',
      description: `Looking to hire talented React Developers who can drive your projects forward? Partner with The Contrast Consultancy to access pre-vetted, industry-ready developers and scale your team efficiently.`,
      cta: {
        text: 'Contact Us to Hire',
        link: '#contact'
      }
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'What experience level do your React developers have?',
          answer: 'Our React developers range from freshers to seasoned professionals, all thoroughly assessed and trained to deliver quality results.',
          expanded: false,
        },
        {
          question: 'Can I hire React developers for short-term or freelance projects?',
          answer: 'Absolutely! We offer flexible engagement models including short-term, long-term, and project-based hires tailored to your needs.',
          expanded: false,
        },
        {
          question: 'How do you maintain the quality of React developers?',
          answer: 'Developers undergo stringent technical evaluations, real project exposure, and continuous training provided by The Contrast Consultancy.',
          expanded: false,
        },
        {
          question: 'How soon can you deploy React developers?',
          answer: 'Typically, we deploy developers within 2 to 4 weeks based on your project requirements and availability.',
          expanded: false,
        },
        {
          question: 'Is post-deployment support available?',
          answer: 'Yes, we provide ongoing support to ensure smooth project delivery and address any challenges promptly.',
          expanded: false,
        }
      ]
    },
  }
}

