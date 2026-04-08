import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainingLandingPageService {

  constructor() { }


  tranining_landing_page_content = {

    hero_section: {
  title: 'Master the Skills. Build Your Future.',
  pill_1: 'Full Stack Development',
  pill_2: 'UI/UX',
  pill_3: 'Software Testing',
  quick_look: 'Hands-on training in Full Stack Development, UI/UX, Software Testing, and more.',
  description: `Gain practical experience with real-world projects, expert mentorship, and placement support. Empower your tech career by learning what truly matters in the industry.`,
  cta_1: {
    text: 'Download Brochure',
    link: '/pages/contact-page'
  },
  cta_2: {
    text: 'Talk to Expert',
    link: '/pages/contact-page'
  },
  image_1: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image_2: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image_3: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1152&h=842&q=80',
  image_4: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  image_5: 'https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXxlbnwwfHwwfHx8MA%3D%3D'
},

    courses: {
      title: 'Our Courses',
      description: 'Master in-demand skills with job-oriented training across technology, design, and management.',
      details: [
        {
          id: 1,
          title: 'Full Stack NodeJS Development',
          description: 'Master JavaScript, Node.js, Express, MongoDB, and frontend skills to build complete web apps.',
          cta: { text: 'Enroll Now', link: '/pages/full-stack-nodejs-development-page' },
          image: 'https://images.unsplash.com/photo-1635875060146-80ec95d47043?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RnVsbCUyMFN0YWNrJTIwTm9kZUpTJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: 2,
          title: 'UI/UX Design',
          description: 'Learn user research, wireframing, prototyping, and tools like Figma to design smart, user-friendly interfaces.',
          cta: { text: 'Enroll Now', link: '/pages/ui-ux-design-page' },
          image: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 3,
          title: 'Software Testing',
          description: 'Become a QA pro with manual testing, automation tools, bug reporting, and real-time testing scenarios.',
          cta: { text: 'Enroll Now', link: '/pages/software-testing-page' },
          image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjB0ZXN0aW5nfGVufDB8fDB8fHww',
        },
        {
          id: 4,
          title: 'Product Management',
          description: 'Learn how to plan, build, and launch products through user research, roadmapping, and agile execution.',
          cta: { text: 'Enroll Now', link: '/pages/product-management-page' },
          image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c29mdHdhcmUlMjB0ZXN0aW5nfGVufDB8fDB8fHww',
        },
        {
          id: 5,
          title: 'Project Management',
          description: 'Lead teams and projects using agile, scrum, and waterfall methodologies with real-time tools.',
          cta: { text: 'Enroll Now', link: '/pages/project-management-page' },
          image: 'https://plus.unsplash.com/premium_photo-1690303193655-db7040673780?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvamVjdCUyME1hbmFnZW1lbnQlMjBjb2Rpbmd8ZW58MHx8MHx8fDA%3D',
        },
      ]
    },

    technical_benefit: {
      sub_title: 'Technical Benefits',
      title: 'Skills That Set You Apart',
      description: `Whether it's building full stack applications, crafting user-centric designs, testing software for perfection, or managing products and projects we equip you with in-demand practical skills to succeed across every tech role.`,
      details: [
        {
          title: 'Real-World Projects Across Domains',
          description: 'Build and deploy full stack apps, create user-focused UI/UX, run test cases, and manage agile product lifecycles all through hands-on projects.',
          link: '#',
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" /></svg>`
        },
        {
          title: 'Job-Ready Tools & Workflows',
          description: 'Use industry-standard tools like Figma, Postman, GitHub, JIRA, Selenium, Node.js, and more to simulate real company environments.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="..." clip-rule="evenodd"/></svg>`
        },
        {
          title: 'End-to-End Product Thinking',
          description: 'Understand the full lifecycle from ideation, design, development, to testing and agile delivery across tech and management domains.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="..." clip-rule="evenodd"/></svg>`
        }
      ]
    },

    advanced_curriculum: {
      title: 'Traditional Learning vs Real-World Tech Training?',
      description_1: `At The Contrast, we bridge the gap between theory and practice. Our task-based curriculum ensures that every learner whether in development, design, testing, or management gets hands-on exposure from day one.`,
      description_2: `Instead of passive learning, you’ll be solving real problems, building products, testing workflows, and collaborating across tech roles just like you would in a real startup or company.`,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      details: [
        {
          title: 'Personalized Career Mapping',
          description: 'Based on your interests whether frontend, UX, testing, or product we align your roadmap with your job goals.'
        },
        {
          title: 'Hands-On Task Modules',
          description: 'From building UI components to writing test cases or managing user stories, each module delivers skills via real tasks.'
        },
        {
          title: 'Agile Workflows & Tools',
          description: 'Learn to work in sprints, manage tasks with tools like Trello, Figma, Postman, GitHub, and simulate team collaboration.'
        },
        {
          title: 'Industry Mentorship & Feedback',
          description: 'Every week includes expert reviews, retrospectives, and 1:1 feedback to help refine your output and deploy with confidence.'
        }
      ]
    },

    beyond_learning: {
      sub_title: 'Beyond Learning',
      title: 'Career Focused Learning.',
      description: `At The Contrast, learning is only the beginning. We empower you with personalized mentorship, real industry exposure, and a vibrant peer community to shape your future-ready career profile.`,
      details: [
        {
          title: '1-on-1 Mentorship',
          description: 'Get personalized career guidance from experienced engineers and placement experts to move forward with clarity and confidence.'
        },
        {
          title: 'Resume & Portfolio Building',
          description: 'Craft impressive resumes and project portfolios that showcase your real strengths and accomplishments.'
        },
        {
          title: 'Placement Assistance',
          description: 'Connect with top hiring partners and prepare thoroughly for interviews with hands-on practice and expert tips.'
        },
        {
          title: 'Communication Training',
          description: 'Participate in live sessions to build soft skills, improve professional etiquette, and speak confidently in interviews.'
        },
        {
          title: 'Peer Network',
          description: 'Be part of a supportive learner community that grows, collaborates, and motivates each other throughout the journey.'
        },
        {
          title: 'Lifetime Access to Resources',
          description: 'Get lifetime access to updated notes, mock interviews, and exclusive job-prep materials — even after course completion.'
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
        description: "The Contrast transformed my coding skills — now I confidently build full stack applications from scratch.",
        name: "Rohit Deshmukh",
        designation: "Full Stack Developer Intern",
        company: "Pune",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        description: "The UI/UX Design course helped me create user-friendly designs that clients love.",
        name: "Sneha Patil",
        designation: "UI/UX Designer",
        company: "Mumbai",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww"
      },
      {
        description: "Product Management sessions helped me understand how to plan and launch successful products effectively.",
        name: "Priya More",
        designation: "Product Manager Intern",
        company: "Hyderabad",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww"
      },
      {
        description: "Project Management coaching taught me agile techniques to efficiently manage IT projects.",
        name: "Sanjay Wagh",
        designation: "Project Manager Trainee",
        company: "Chennai",
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
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
      title: 'Kickstart Your Career with Our Top Courses',
      description: 'Download brochure and career plan for Full Stack, UI/UX, Testing, Product & Project Management. Available in English, Hindi, Marathi.',
      brochure_link: {
        text: 'Download Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'Download Career Plan',
        link: '#'
      }
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'What is The Contrast Full Stack Development Program about?',
          answer: 'A practical, project-based training covering frontend to backend development with real-world tools and mentorship.',
          expanded: false,
        },
        {
          question: 'Who should join these courses?',
          answer: 'Anyone looking to build job-ready skills in Full Stack Development, UI/UX Design, Software Testing, Product or Project Management.',
          expanded: false,
        },
        {
          question: 'Are these courses suitable for beginners?',
          answer: 'Yes, all courses start with fundamentals and progress to advanced practical skills.',
          expanded: false,
        },
        {
          question: 'Do you provide placement assistance?',
          answer: 'Yes, we offer resume building, mock interviews, and connect you with hiring partners.',
          expanded: false,
        }
      ]
    },

  }

}
