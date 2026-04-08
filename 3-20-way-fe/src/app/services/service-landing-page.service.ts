import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceLandingPageService {

  constructor() { }

  service_landing_page_content = {

hero_section: {
  title: 'Power Your Business with Expert Tech Services',
  pill_1: 'Web Development',
  pill_2: 'Mobile Apps',
  pill_3: 'UI/UX & Project Management',
  quick_look: 'From modern websites to scalable mobile apps, we deliver full-cycle development services tailored to your needs.',
  description: `Whether you need web & mobile development, project or product management, or expert UI/UX design — our skilled teams ensure real business outcomes with strategic execution and quality delivery.`,
  cta_1: {
    text: 'Get a Proposal',
    link: '/pages/contact-page'
  },
  cta_2: {
    text: 'Talk to Our Team',
    link: '/pages/contact-page'
  },
  image_1: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image_2: 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image_3: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image_4: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image_5: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D'
},

    courses: {
      title: 'Our Services',
      description: 'We help businesses transform ideas into scalable digital solutions across development, design, and management.',
      details: [
        {
          id: 1,
          title: 'Web Development',
          description: 'Get modern, fast, and responsive websites that work seamlessly across all devices crafted for performance and user experience.',
          cta: { text: 'Get Started', link: '/pages/web-development-page' },
          image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 2,
          title: 'Mobile Development (Hybrid / Native)',
          description: 'We build scalable Android & iOS apps using Flutter, React Native, or native stacks optimized for speed and reliability.',
          cta: { text: 'Build Your App', link: '/pages/mobile-development-page' },
          image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 3,
          title: 'Native Application Development',
          description: 'High-performance native apps built for speed, offline access, and rich functionality tailored for enterprise and consumer needs.',
          cta: { text: 'Start Now', link: '/pages/native-application-development-page' },
          image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 4,
          title: 'Project Management',
          description: 'Plan, track, and deliver projects efficiently. Our PMs use agile methodologies and real-time tools to ensure successful execution.',
          cta: { text: 'Consult with Us', link: '/pages/service-project-management-page' },
          image: 'https://images.unsplash.com/photo-1677078610588-aed2834ad968?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvamVjdCUyME1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: 5,
          title: 'Product Management',
          description: 'From idea to launch we help define, build, and refine products that align with user needs and market success.',
          cta: { text: 'Let’s Build Together', link: '/pages/service-product-management-page' },
          image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFByb2R1Y3QlMjBNYW5hZ2VtZW50fGVufDB8fDB8fHww',
        },
        {
          id: 6,
          title: 'UI / UX Planning',
          description: 'Design intuitive and delightful digital experiences through smart user flows, wireframes, and design systems.',
          cta: { text: 'Design with Us', link: '/pages/ui-ux-planning-page' },
          image: 'https://images.unsplash.com/photo-1735639013995-086e648eaa38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFVJJTIwJTJGJTIwVVglMjBQbGFubmluZ3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          id: 7,
          title: 'HTML / CSS Designing',
          description: 'Pixel-perfect, semantic HTML and CSS that turns your UI designs into high-performing, responsive interfaces.',
          cta: { text: 'Get Frontend Help', link: '/pages/html-css-designing-page' },
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60',
        }
      ]
    },

    technical_benefit: {
      sub_title: 'Technical Edge',
      title: 'Why Clients Choose Us',
      description: `We don’t just build we deliver quality, scalability, and innovation. From startups to enterprises, our team ensures every project is built with modern standards, agile execution, and end-user focus.`,
      details: [
        {
          title: 'Enterprise-Grade Execution',
          description: 'From web apps to mobile platforms, we deliver secure, scalable, and high-performance solutions tailored to your business goals.',
          link: '#',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12h12M6 16h12M6 8h12M4 6v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z" />
</svg>`
        },
        {
          title: 'Agile Delivery & Collaboration',
          description: 'We follow agile workflows and real-time collaboration tools to keep clients in the loop and products on track.',
          link: '#',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm-1 14.414L7.293 12.707a1 1 0 1 1 1.414-1.414L11 13.586l4.293-4.293a1 1 0 0 1 1.414 1.414z" clip-rule="evenodd" />
</svg>`
        },
        {
          title: 'Tech Stack Versatility',
          description: 'We work across all major stacks — MERN, MEAN, Flutter, React Native, Swift, Kotlin, Django, and more to suit your product vision.',
          link: '#',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="size-6" viewBox="0 0 20 20">
  <path d="M10.185 2.02a.75.75 0 0 0-1.37 0l-6.5 14.5a.75.75 0 0 0 1.37.66L5.86 13h8.28l2.175 4.18a.75.75 0 0 0 1.37-.66l-6.5-14.5zM6.81 11.5 10 4.934 13.19 11.5H6.81z"/>
</svg>`
        }
      ]
    },

    advanced_curriculum: {
      title: 'Process-Driven Execution vs Traditional Service Models',
      description_1: `At The Contrast, we follow a modern, task-driven service delivery approach that mirrors how top tech teams build and scale solutions. We don't just ship we solve, iterate, and improve through structured collaboration.`,
      description_2: `Our workflow ensures you stay informed at every phase, with transparent milestones, modular deliverables, and collaborative tools. From design to deployment, we execute with clarity, speed, and strategic insight.`,
      image: 'https://images.unsplash.com/photo-1587089879249-87bf7d2972df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VydmljZXxlbnwwfHwwfHx8MA%3D%3D',
      details: [
        {
          title: 'Tailored Project Planning',
          description: 'We begin with deep discovery understanding your goals, scope, and audience to create a solution that truly fits your vision.'
        },
        {
          title: 'Modular & Agile Execution',
          description: 'Our work is broken into meaningful, reviewable tasks so you see real progress every sprint, not just at the end.'
        },
        {
          title: 'Transparent Tools & Milestones',
          description: 'We use platforms like Trello, Notion, Figma, GitHub, and Slack so you’re always in sync with what’s happening.'
        },
        {
          title: 'Iterative Review & Refinement',
          description: 'Frequent feedback loops, demos, and retrospectives ensure your product stays aligned with your evolving goals.'
        }
      ]
    },

    beyond_learning: {
      sub_title: 'Beyond Delivery',
      title: 'Long-Term Value & Partnership',
      description: `At The Contrast, we don’t stop at project completion. We believe in building long-term relationships by offering proactive support, scalable solutions, and a commitment to your continued growth.`,
      details: [
        {
          title: 'Dedicated Post-Launch Support',
          description: 'We offer structured maintenance plans, uptime monitoring, and priority issue resolution to keep your platform stable and secure.'
        },
        {
          title: 'Performance Optimization',
          description: 'We don’t just launch — we monitor, analyze, and refine your digital assets for better speed, usability, and conversions.'
        },
        {
          title: 'Scalability Consulting',
          description: 'Whether you need to expand features, onboard new users, or integrate with third-party systems — we guide your growth.'
        },
        {
          title: 'Training & Handover Sessions',
          description: 'We provide detailed walkthroughs and documentation so your internal teams can confidently manage and scale your solution.'
        },
        {
          title: 'Relationship-Driven Communication',
          description: 'We stay connected beyond the contract — sharing insights, roadmaps, and collaboration ideas to help you evolve faster.'
        },
        {
          title: 'Priority for Returning Clients',
          description: 'As a partner-first agency, our loyal clients receive early access to upgrades, beta tools, and scheduling preferences.'
        }
      ]
    },

    mentors_section: {
      title: 'Our Team',
      description: 'We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
      details: [
        {
          name: 'Mr. Akash Sadavarte',
          title: 'Founder & CEO',
          experience: '1.5 years',
          image: 'assets/akash-sadavarte.jpg',
          linkedin: 'https://www.linkedin.com/in/sonal-desai'
        },
        {
          name: 'Mr. Arun Gounder',
          title: 'SDE-II',
          experience: '1.5 years',
          image: 'assets/Arun-gounder.jpg',
          linkedin: 'https://www.linkedin.com/in/sonal-desai'
        },
        {
          name: 'Mr. Bhavesh Karkare',
          title: 'SDE-II',
          experience: '1.5 years',
          image: 'assets/Bhavesh-karkare.jpg',
          linkedin: 'https://www.linkedin.com/in/ramesh-patil'
        },
        {
          name: 'Mr. Mayur Talekar',
          title: 'SDE-III',
          experience: '1 years',
          image: 'assets/Mayur-talekar.jpg',
          linkedin: 'https://www.linkedin.com/in/ajay-mehta'
        },
        {
          name: 'Mr. Abhishek Jadhav',
          title: 'SDE-III',
          experience: '1 Years',
          image: 'assets/Abhishek-Jadhav.jpg',
          linkedin: 'https://www.linkedin.com/in/neha-kulkarni'
        },
        {
          name: 'Mr. Shubham Salunkhe',
          title: 'SDE-III',
          experience: '1 years',
          image: 'assets/Shubam-salunkhe.jpg',
          linkedin: 'https://www.linkedin.com/in/rajeev-sinha'
        },
        {
          name: 'Mr. Shreeram Kaudare',
          title: 'SDE-IV',
          experience: '8 Months',
          image: 'assets/Shreeram-kaudare..jpg',
          linkedin: 'https://www.linkedin.com/in/shruti-deshpande'
        },
        {
          name: 'Mr. Rudra Belwalkar',
          title: 'SDE-IV',
          experience: '8 Months',
          image: 'assets/Rudra-Belvalkar.jpg',
          linkedin: 'https://www.linkedin.com/in/shruti-deshpande'
        },
        {
          name: 'Mr. Viraj Bhingardeve',
          title: 'SDE-IV',
          experience: '8 Months',
          image: 'assets/Vira.jpg',
          linkedin: 'https://www.linkedin.com/in/shruti-deshpande'
        },
        {
          name: 'Mrs. Poonam Salunkhe',
          title: 'SDE-IV',
          experience: '8 Months',
          image: 'assets/Poonam-salunkhe.jpg',
          linkedin: 'https://www.linkedin.com/in/shruti-deshpande'
        },
        {
          name: 'Mrs. Divyanshi Patidar',
          title: 'Project Coordinator',
          experience: '8 Months',
          image: 'assets/Divyanshi_Patidar.jpg',
          linkedin: 'https://www.linkedin.com/in/shruti-deshpande'
        },
        {
          name: 'Mr. Shubham Pawar',
          title: 'Software Engineer Trainee',
          experience: '8 Months',
          image: 'assets/Shubham Salunkhe new.jpg',
          linkedin: 'https://www.linkedin.com/in/shruti-deshpande'
        }

      ]
    },

    testimonials_1: [
      {
        description: "The team delivered our mobile app ahead of schedule with excellent performance and UI quality. Highly impressed!",
        name: "Amit Kulkarni",
        designation: "Founder & CEO",
        company: "SwiftLink Solutions",
        image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        description: "We outsourced a major part of our frontend development — The Contrast team handled everything with great precision and professionalism.",
        name: "Nisha Mehra",
        designation: "Product Manager",
        company: "GrowNow Digital",
        image: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        description: "Their UI/UX planning gave our website a fresh, user-friendly design that significantly boosted engagement.",
        name: "Rakesh Patil",
        designation: "Marketing Head",
        company: "WebNest Agency",
        image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        description: "Thanks to their project management expertise, we were able to streamline our entire development workflow. Communication was seamless.",
        name: "Priya Verma",
        designation: "CTO",
        company: "HealthSync Tech",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],

    companies: [
      { src: 'https://indiabison.com/wp-content/uploads/2022/12/cropped-INDIA-BISON-LOGO_173-x-50-mm_.png', alt: 'indiabison' },
      { src: 'https://tse2.mm.bing.net/th?id=OIP.B5QRWIA0kq0u9SfrwYF6NgAAAA&pid=Api&P=0&h=180', alt: 'HubbleHox' },
      { src: 'https://cdn.worldvectorlogo.com/logos/microsoft-4.svg', alt: 'Microsoft' },
      { src: 'https://cdn.worldvectorlogo.com/logos/airbnb-1.svg', alt: 'Airbnb' },
      { src: 'http://pngimg.com/uploads/uber/uber_PNG24.png', alt: 'Uber' }
    ],

    download_brochure: {
      title: 'Explore Our End-to-End Digital Services',
      description: 'Download our brochure and service catalog to discover how we help businesses build modern websites, mobile apps, enterprise systems, and design smart user experiences. Available in English.',
      brochure_link: {
        text: 'Download Services Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'Download Capability Deck',
        link: '#'
      }
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'What types of services does The Contrast offer?',
          answer: 'We provide a wide range of services including Web Development, Mobile Apps (Hybrid/Native), UI/UX Planning, HTML/CSS Designing, Project & Product Management, and Outsourcing.',
          expanded: false,
        },
        {
          question: 'What technologies do you use for Web Development?',
          answer: 'We use modern technologies like React, Angular, Node.js, MongoDB, HTML, CSS, Tailwind, and more to build responsive and scalable websites.',
          expanded: false,
        },
        {
          question: 'Do you develop Hybrid or Native Mobile Apps?',
          answer: 'We develop both Hybrid apps (using Flutter, React Native) and Native apps (using Kotlin for Android and Swift for iOS) based on client needs.',
          expanded: false,
        },
        {
          question: 'What is Outsourcing service about?',
          answer: 'We provide companies with experienced developers, designers, and managers who work remotely to support their tech projects efficiently.',
          expanded: false,
        },
        {
          question: 'How do you support Project and Product Management?',
          answer: 'Our experts use agile methodologies to help plan, execute, and track your projects effectively for timely delivery.',
          expanded: false,
        }
      ]
    }
  }
}