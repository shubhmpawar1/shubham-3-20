import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NodejsDeveloperService {

  constructor() { }

  nodejs_developer_content = {

    hero_section: {
      title: 'Deploy Pre-Vetted. NodeJS Developers. Fast & Reliable.',
      pill_1: 'Flexible Hiring',
      pill_2: 'Node.js Experts',
      pill_3: 'Join in 48hrs',
      quick_look: 'Boost your backend with scalable, high-performance NodeJS developers.',
      description: `Build real-time apps, APIs, or microservices faster with expert Node.js developers and a startup-ready mindset.`,
      cta_1: {
        text: 'View Developer Profiles',
        link: '#developers'
      },
      cta_2: {
        text: 'Talk to an Expert',
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
        description: "The Node.js developer we hired from The Contrast integrated seamlessly and improved our API performance by 40%. Truly reliable talent.",
        name: "Rohan Mehta",
        designation: "CTO",
        company: "TechNova Solutions",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        description: "We scaled our backend in record time thanks to their NodeJS team. The developers were skilled, proactive, and fast to onboard.",
        name: "Anjali Rao",
        designation: "Product Manager",
        company: "SmartKart",
        image: "https://randomuser.me/api/portraits/women/45.jpg"
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
      sub_title: 'Why Hire Our NodeJS Developers?',
      title: 'Technical Advantages You Get',
      description: 'Our NodeJS experts deliver fast, scalable, and reliable backend solutions tailored to your project needs.',
      details: [
        {
          title: 'Event-Driven Architecture',
          description: 'Build highly scalable applications using Node.js’s non-blocking, event-driven model.'
        },
        {
          title: 'Microservices & APIs',
          description: 'Design and implement RESTful and GraphQL APIs with clean, modular microservices.'
        },
        {
          title: 'Real-time Applications',
          description: 'Expertise in WebSockets and frameworks like Socket.io for chat apps, live updates, and notifications.'
        },
        {
          title: 'Efficient Database Integration',
          description: 'Seamless integration with NoSQL (MongoDB) and SQL databases with optimized queries.'
        },
        {
          title: 'Robust Testing & CI',
          description: 'Use of Jest, Mocha and CI/CD pipelines to ensure high code quality and quick delivery.'
        },
        {
          title: 'Security Best Practices',
          description: 'Implement secure coding standards and protect applications from common vulnerabilities.'
        }
      ]
    },

    beyond_learning: {
      sub_title: 'Hire Confidently',
      title: 'More Than Just Node.js Developers',
      description: 'Our developers bring business insight, collaboration skills, and problem-solving attitude along with top-notch Node.js expertise.',
      details: [
        {
          title: 'Business-Focused Development',
          description: 'They write code that aligns perfectly with your project goals and business needs.'
        },
        {
          title: 'Clear Communication',
          description: 'Maintain smooth and transparent interactions with your in-house teams and stakeholders.'
        },
        {
          title: 'Proactive & Solution-Oriented',
          description: 'Identify potential issues early and deliver effective solutions proactively.'
        }
      ]
    },

    language_cta: {
      title: 'Ready to Build with Node.js?',
      description: `Hire expert Node.js developers today and accelerate your backend development with scalable, efficient solutions.`,
      cta: {
        text: 'Get Started',
        link: '#contact'
      }
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'What experience do your NodeJS developers have?',
          answer: 'Our developers have built scalable APIs, real-time apps, and microservices using Node.js and Express.',
          expanded: false,
        },
        {
          question: 'How quickly can a developer join our project?',
          answer: 'Developers can typically onboard within 1 to 2 weeks based on availability and project needs.',
          expanded: false,
        },
        {
          question: 'Do your developers follow security best practices?',
          answer: 'Yes, we ensure industry-standard security measures like input validation, authentication, and encryption.',
          expanded: false,
        },
        {
          question: 'Can developers work with our existing tech stack?',
          answer: 'Our developers are flexible and can integrate with your current backend, databases, and APIs seamlessly.',
          expanded: false,
        },
        {
          question: 'What is the communication process during the project?',
          answer: 'We maintain clear communication through regular updates, video calls, and project management tools.',
          expanded: false,
        }
      ]
    },
  }
}

