import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultancyLandingPageService {

  constructor() { }

  consultancy_landing_page_content = {


    hero_section: {
  title: 'Build Your Dream Team with Our Expert Developers.',
  pill_1: 'Full Stack & Frontend',
  pill_2: 'DevOps & Backend',
  pill_3: 'Product & Project Managers',
  quick_look: 'Get access to pre-vetted, job-ready developers across modern tech stacks — ready to contribute from Day 1.',
  description: `We connect you with highly skilled professionals in Full Stack, Angular, React, NodeJS, DevOps, and Project/Product Management. Hire top talent who deliver quality, reliability, and speed — aligned to your business goals.`,
  cta_1: {
    text: 'Hire Developers',
    link: '/pages/contact-page'
  },
  cta_2: {
    text: 'Talk to Expert',
    link: '/pages/contact-page'
  },
  image_1: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzfGVufDB8fDB8fHww',
  image_2: 'https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D',
  image_3: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1152&h=842&q=80',
  image_4: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVza3xlbnwwfHwwfHx8MA%3D%3D',
  image_5: 'https://images.unsplash.com/photo-1560264280-88b68371db39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y3VzdG9tZXIlMjBzZXJ2aWNlfGVufDB8fDB8fHww'
},

    courses: {
      title: 'Experienced Developers Available for Your Company',
      description: 'We provide skilled Full Stack, Angular, React, NodeJS, DevOps engineers, as well as Project and Product Managers tailored to your company’s needs.',
      details: [
        {
          id: 1,
          title: 'Full Stack Developer',
          description: 'Experienced Full Stack Developers ready to build complete web applications for your projects.',
          cta: { text: 'Contact Us', link: '/pages/full-stack-developer-page' },
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 2,
          title: 'Angular Developer',
          description: 'Skilled Angular Developers available to join your team and deliver quality projects.',
          cta: { text: 'Contact Us', link: '/pages/angular-developer-page' },
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 3,
          title: 'React Developer',
          description: 'Our React Developers are ready to contribute to your product development.',
          cta: { text: 'Contact Us', link: '/pages/react-developer-page' },
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 4,
          title: 'NodeJS Developer',
          description: 'Expert NodeJS Developers available for your backend development needs.',
          cta: { text: 'Contact Us', link: '/pages/nodejs-developer-page' },
          image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 5,
          title: 'DevOps Engineer',
          description: 'DevOps Engineers skilled in automation and infrastructure management ready to support your projects.',
          cta: { text: 'Contact Us', link: '/pages/devops-engineer-page' },
          image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 6,
          title: 'Project Management',
          description: 'Experienced Project Managers to plan, lead, and ensure successful project delivery.',
          cta: { text: 'Contact Us', link: '/pages/project-manager-page' },
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 7,
          title: 'Product Management',
          description: 'Professional Product Managers to drive your product vision and execution.',
          cta: { text: 'Contact Us', link: '/pages/product-manager-page' },
          image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60',
        },
      ]
    },

    technical_benefit: {
      sub_title: 'Technical Edge',
      title: 'Industry-Ready Developers Available for Immediate Deployment',
      description: `Our developers are experienced professionals equipped with real-world expertise, ready to join your team and deliver results from day one. Whether you need front-end, back-end, DevOps, or product leadership — we have the right talent to match your needs.`,
      details: [
        {
          title: 'Real-World Project Experience',
          description: 'Our developers have worked across domains like full stack development, UI/UX design, software testing, and DevOps — ensuring they can handle actual business challenges and contribute immediately.',
          link: '#',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`
        },
        {
          title: 'Proficient with Modern Tools',
          description: 'They come equipped with hands-on experience in tools like GitHub, JIRA, Postman, Figma, Selenium, and more, seamlessly integrating into your existing workflows and delivery pipelines.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="..." clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Ready for Agile Product Teams',
          description: 'Our talent understands agile practices, rapid iteration, and collaborative delivery — bringing a product-oriented mindset and cross-functional awareness to your team.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="..." clip-rule="evenodd"/></svg>`
        }
      ]
    },

    advanced_curriculum: {
      title: 'Skilled Professionals, Ready to Deliver from Day One',
      description_1: `Our developers, designers, testers, and project managers come with hands-on experience and deep familiarity with industry tools and workflows. They can integrate seamlessly into your company environment.`,
      description_2: `From building user-focused features to managing user stories, writing test cases, and contributing within agile teams — our talent is equipped to add value from day one.`,
      image: 'https://images.unsplash.com/photo-1551836022-b06985bceb24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbnN1bHRhbmN5fGVufDB8fDB8fHww',
      details: [
        {
          title: 'Role-Specific Expertise',
          description: 'Whether it’s frontend, UX, QA, backend, or product — each professional brings strong capabilities aligned with their functional responsibilities.'
        },
        {
          title: 'Task-Oriented Execution',
          description: 'They have worked on feature development, backlog management, test case creation, and full-cycle project delivery with clear ownership.'
        },
        {
          title: 'Tool & Workflow Proficiency',
          description: 'Well-versed in tools like GitHub, JIRA, Trello, Figma, and Postman, and experienced in agile collaboration to fit right into your processes.'
        },
        {
          title: 'Industry-Aligned Delivery',
          description: 'Their hands-on involvement in real business projects ensures they bring both technical depth and delivery focus to your team.'
        }
      ]
    },

    beyond_learning: {
      sub_title: 'Beyond Training',
      title: 'Professionals Ready to Contribute Day-One.',
      description: `We prepare candidates not just with tech skills, but with the confidence, communication, and professionalism needed to thrive in real workplaces. From mentorship to mock interviews — we deliver production-ready professionals.`,
      details: [
        {
          title: '1-on-1 Career Mentorship',
          description: 'Each candidate receives guided feedback and career mapping to align with roles your company needs.'
        },
        {
          title: 'Professional Resume & Portfolio',
          description: 'We ensure every candidate presents their skills through solid resumes and real project portfolios.'
        },
        {
          title: 'Job-Ready Interview Practice',
          description: 'With mock interviews and live assessments, our trainees are well-prepared for technical and behavioral rounds.'
        },
        {
          title: 'Communication & Soft Skills',
          description: 'Live training sessions on etiquette, client communication, and English fluency help them work across teams.'
        },
        {
          title: 'Strong Peer Collaboration',
          description: 'Our learning community emphasizes collaboration, version control, and working in agile teams — like in real orgs.'
        },
        {
          title: 'Ongoing Learning Support',
          description: 'Even after deployment, candidates can access fresh content, interview questions, and tools to stay productive.'
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
        description: "Hiring a developer trained by The Contrast was seamless — they integrated into our team quickly and contributed from week one.",
        name: "Ramesh Kulkarni",
        designation: "Tech Lead",
        company: "DigitalWorks Pvt. Ltd.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVufGVufDB8fDB8fHww"
      },
      {
        description: "The UI/UX designer we hired from The Contrast delivered high-quality, user-friendly designs that impressed our stakeholders.",
        name: "Neha Sharma",
        designation: "Design Manager",
        company: "PixelTree Studios",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww"
      },
      {
        description: "The product intern from The Contrast showed strong ownership and clarity in roadmap planning — rare in fresh talent.",
        name: "Arvind Menon",
        designation: "Product Lead",
        company: "InnoTech",
        image: "https://images.unsplash.com/photo-1610088441520-4352457e7095?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVufGVufDB8fDB8fHww"
      },
      {
        description: "We onboarded a Project Management trainee from The Contrast — their agile understanding and communication skills stood out.",
        name: "Divya Iyer",
        designation: "Sr. Project Manager",
        company: "Cloud9 Systems",
        image: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],

    companies: [
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg', alt: 'Transistor' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg', alt: 'Reform' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg', alt: 'Tuple' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg', alt: 'SavvyCal' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg', alt: 'Statamic' },
    ],

    download_brochure: {
      title: 'Explore Our Developer Profiles & Training Plans',
      description: 'Download detailed brochures and skill-mapping career plans for Full Stack, UI/UX, Testing, Product, and Project Management talent — available in English, Hindi, and Marathi.',
      brochure_link: {
        text: 'Download Talent Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'Download Career Mapping Plan',
        link: '#'
      }
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'What kind of developers or professionals do you offer?',
          answer: 'We provide trained talent in Full Stack Development, Angular, React, UI/UX, Software Testing, Product and Project Management — all trained on real tools and projects.',
          expanded: false
        },
        {
          question: 'How experienced are your candidates?',
          answer: 'Our candidates undergo hands-on, task-based training using tools like GitHub, Figma, Postman, and Jira. They’re ready to contribute from day one.',
          expanded: false
        },
        {
          question: 'Can we assess candidates before hiring?',
          answer: 'Yes, we support technical evaluations, interviews, or short task-based assessments before final onboarding.',
          expanded: false
        },
        {
          question: 'Do you assist with onboarding or post-hire support?',
          answer: 'Absolutely. We help streamline onboarding and provide extended support for skill refreshers or upskilling when needed.',
          expanded: false
        }
      ]
    }
  }
}
