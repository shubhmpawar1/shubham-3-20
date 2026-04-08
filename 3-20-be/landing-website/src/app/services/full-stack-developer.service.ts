import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullStackDeveloperService {

  constructor() { }

  full_stack_developer_content = {

    hero_section: {
      title: 'One developer. Full solutions from design to development.',
      pill_1: 'Top Company Deployment',
      pill_2: 'Real-time Industry Projects',
      pill_3: 'Projects with TCS & Adobe',
      quick_look: 'We place talented developers in top tech roles with real growth.',
      description: `Get a developer who’s ready to take care of your entire project from start to finish.`,
      cta_1: {
        text: 'Hire Developers',
        link: '#upload'
      },
      cta_2: {
        text: 'How It Works',
        link: '#model'
      },
      image_1: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      image_2: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259',
      image_3: 'https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401',
      image_4: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80',
      image_5: 'https://images.unsplash.com/photo-1578592308652-794769149ab0',
    },

    testimonials_1: [
      {
        description: "The developers provided were highly skilled and delivered our project well before the deadline. Their professionalism and communication were outstanding.",
        name: "Sanjay Patil",
        designation: "Project Manager",
        company: "Technovista Solutions",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      {
        description: "We were impressed by how quickly the developer understood our requirements and turned them into a working product. A seamless and satisfying experience overall.",
        name: "Anita Mehra",
        designation: "CTO",
        company: "BrightPixel Technologies",
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
      sub_title: 'Key Roles & Responsibilities',
      title: 'What We Expect From Our Full Stack Developers',
      description: 'Our developers are not just technically sound, but also responsible professionals who understand business needs. Here’s what you can expect from them:',
      details: [
        {
          title: 'Applying Skills with Business Impact',
          description: 'Use technical expertise to deliver effective and relevant solutions tailored to client needs.'
        },
        {
          title: 'Prepared and Project-Ready',
          description: 'Stay ready to take on assigned roles and responsibilities based on company requirements.'
        },
        {
          title: 'Effective and Trustworthy Communication',
          description: 'Maintain clear, timely, and professional communication with clients and teams.'
        },
        {
          title: 'Continuous Learning and Adaptability',
          description: 'Stay updated with new technologies and enhance skills to deliver more value over time.'
        },
        {
          title: 'Timely and Quality Project Delivery',
          description: 'Deliver each project within the agreed timeline and meet expected quality standards — that’s our promise.'
        },
        {
          title: 'Proactive Problem Solving',
          description: 'Anticipate challenges and offer timely, effective solutions to ensure smooth execution.'
        }
      ]
    },

    beyond_learning: {
      sub_title: 'A Quick Overview',
      title: 'Why Choose The Contrast Consultancy',
      description: 'We build strong connections between skilled developers and top companies through a reliable, transparent, and developer-focused approach.',
      details: [
        {
          title: 'Trusted Partners',
          description: 'We work with reputed MNCs that offer high-quality projects and stable opportunities — so you always get the right developer for the job.'
        },
        {
          title: 'Transparent Process',
          description: 'We maintain honest and clear communication at every stage, so you’re never left in the dark.'
        },
        {
          title: 'Developer-First Mindset',
          description: 'We prioritize the growth and satisfaction of our developers — which means you get talent that’s committed, capable, and ready to deliver.'
        }
      ]
    },

    language_cta: {
      title: 'Find Skilled Full Stack Developers Quickly',
      description: `Are you looking to hire experienced Full Stack Developers who can drive your projects to success? The Contrast Consultancy connects you with vetted, industry-ready talent to meet your hiring needs efficiently.`,
      cta: {
        text: 'Request Developer Profiles',
        link: '#contact'
      }
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'What technologies do your developers work with?',
          answer: 'Our Full Stack Developers are skilled in frontend, backend, databases, and deployment — capable of handling the complete tech stack.',
          expanded: false
        },
        {
          question: 'How do you ensure the quality of developers?',
          answer: 'Every developer undergoes a thorough screening process including technical evaluations, communication assessments, and real-world project tasks.',
          expanded: false
        },
        {
          question: 'How long does it take to onboard a developer?',
          answer: 'Once project requirements are finalized, we can usually onboard a developer within 3–5 working days.',
          expanded: false
        },
        {
          question: 'Can the developer work in our preferred time zone?',
          answer: 'Yes, many of our developers are flexible and can work according to your time zone, including international overlaps.',
          expanded: false
        },
        {
          question: 'What if the developer doesn’t meet our expectations?',
          answer: 'We offer a quick replacement policy and ensure continuous support to match you with the right talent.',
          expanded: false
        }
      ]
    },
  }
}
