import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebDevelopmentService {

  constructor() { }

  web_development_content = {

    hero_section: {
      title: 'From Concept to Launch We Build What Grows Your Business.',
      pill_1: 'Frontend',
      pill_2: 'Backend',
      pill_3: 'Full Stack',
      quick_look: 'Strategic, Scalable, and Stunning Web Development',
      description: `We build fast, secure, and scalable web applications from elegant frontends to powerful backends tailored to your business goals.`,
      cta_1: {
        text: 'Know More',
        link: '#services'
      },
      cta_2: {
        text: 'Book a Free Consultation',
        link: '#contact'
      },
      image_1: 'https://media.istockphoto.com/id/1147195672/photo/focused-developer-coding-on-computer-monitors-working-late-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=KNoIGeMSyYpF_ygxiux6GQ-3kfQDtXT0KxEv_GhDTyw=',
      image_2: 'https://images.unsplash.com/photo-1618422168439-4b03d3a05b15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fERldmVsb3BlciUyMHdyaXRpbmclMjBjb2RlJTIwb24lMjBzY3JlZW58ZW58MHx8MHx8fDA%3D',
      image_3: 'https://images.unsplash.com/photo-1674083401393-97d24148e4e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlJTIwY29sb3IlMjBwYyUyMHNjcmVlbiUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      image_4: 'https://images.unsplash.com/photo-1737408011230-995d7a7aca1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmFja2VuZCUyMGRldmVsb3BtZW50JTIwJTJGJTIwU2VydmVyJTIwc2V0dXB8ZW58MHx8MHx8fDA%3D',
      image_5: 'https://plus.unsplash.com/premium_photo-1682141007707-1f09c5a1d814?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fERldmVsb3BlciUyMHdyaXRpbmclMjBjb2RlJTIwb24lMjBzY3JlZW58ZW58MHx8MHx8fDA%3D'
    },

    testimonials_1: [
      {
        description: "Working with The Contrast was a game-changer for our business. They delivered a clean, fast, and fully responsive website — exactly what we needed!.",
        name: "Rahul Joshi",
        designation: "Manger",
        company: "Infosys",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        description: "We had a rough idea, and they turned it into a powerful web application. The process was smooth, and their support was outstanding.",
        name: "Sneha Patil",
        designation: "Project Manager",
        company: "TCS",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      }
    ],

    language_cta: {
      title: 'Transform Your Online Presence with Expert Web Development',
      description: `We offer professional Web Development Services to help businesses create fast, secure, and mobile-friendly websites. From personal portfolios to full-scale e-commerce platforms — we build it all with precision and performance.`,
      cta: {
        text: 'Start Now',
        link: '#'
      }
    },

    companies: [
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg', alt: 'Transistor' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg', alt: 'Reform' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg', alt: 'Tuple' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg', alt: 'SavvyCal' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg', alt: 'Statamic' },
    ],

    courses: {
      title: `Our Courses`,
      description: `Level up with in-demand tech skills designed for real-world impact.`,
      details: [
        {
          id: 1,
          title: 'Full Stack Web Development',
          description: 'Learn frontend and backend with real-world projects.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnVsbCUyMFN0YWNrJTIwV2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: 2,
          title: 'UI/UX Design Essentials',
          description: 'Master design principles and tools like Figma.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://plus.unsplash.com/premium_photo-1733306548826-95daff988ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VUklMkZVWCUyMERlc2lnbiUyMEVzc2VudGlhbHN8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: 3,
          title: 'MERN Stack Bootcamp',
          description: 'Build scalable web apps using MongoDB, React, Node.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1731160807880-daf859b64420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TUVSTiUyMFN0YWNrJTIwQm9vdGNhbXB8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: 4,
          title: 'Software Testing & QA',
          description: 'Learn manual & automation testing with real tools.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1637073849667-91120a924221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29mdHdhcmUlMjBUZXN0aW5nJTIwJTI2JTIwUUF8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: 5,
          title: 'Project Management Basics',
          description: 'Understand workflows, Agile, and project planning.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://plus.unsplash.com/premium_photo-1668446396640-11fa8d483856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvamVjdCUyME1hbmFnZW1lbnQlMjBCYXNpY3N8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: 6,
          title: 'HTML, CSS & JavaScript Mastery',
          description: 'Deep dive into frontend foundations and interactivity.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SFRNTCUyQyUyMENTUyUyMCUyNiUyMEphdmFTY3JpcHQlMjBNYXN0ZXJ5fGVufDB8fDB8fHww',
        }
      ]
    },

    advanced_curriculum: {
      title: 'Web Development Services',
      description_1: 'We craft high-performance, secure, and scalable websites that elevate your business. From startups to enterprises we turn ideas into digital experiences.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
      details: [
        {
          title: 'Custom Website Development',
          description: 'Tailored websites using the latest technologies like HTML5, CSS3, JavaScript, React, and more.'
        },
        {
          title: 'E-commerce Solutions',
          description: 'Fully functional online stores with payment integration, inventory, and seamless checkout experiences.'
        },
        {
          title: 'Web App Development',
          description: 'Powerful web applications designed for performance, functionality, and user experience.'
        },
        {
          title: 'Maintenance & Support',
          description: 'Ongoing support, security updates, and performance optimization for your web platforms.'
        }
      ]
    },

    download_brouchre: {
      title: 'Lets Build Your Digital Presence',
      description: 'Looking for a reliable partner to design and develop your website? We offer end-to-end Web Development Services from strategy to launch and beyond.',
      brochure_link: {
        text: 'Download Service Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'Explore Our Recent Projects',
        link: '#'
      }
    },

    testimonials_2: {
      title: `See How Our Web Development Solutions Transformed Businesses.`,
      description: `From startups to growing brands, our clients trust us to deliver powerful, user-friendly, and scalable websites. These stories highlight how our web solutions have helped businesses improve their online presence, boost engagement, and drive growth.`,
      details: [
        {
          name: 'Aniket Jadhav',
          location: 'Pune, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=project1',
          summary: 'From mechanical engineering to managing IT projects — all in 5 months.',
        },
        {
          name: 'Rutuja Shinde',
          location: 'Nashik, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D',
          video_url: 'https://www.youtube.com/watch?v=project2',
          summary: 'MBA graduate to Agile Coordinator — landed her first project role confidently.',
        },
        {
          name: 'Vikram Desai',
          location: 'Kolhapur, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D',
          video_url: 'https://www.youtube.com/watch?v=project3',
          summary: 'Switched from support to Scrum Master role after completing the course.',
        }
      ]
    },
    faqs: {
      title: 'Frequently Asked Questions ?',
      details: [
        {
          question: 'Do you provide both design and development?',
          answer: 'Yes, we offer end-to-end solutions including UI/UX design, frontend, and backend development.',
          expanded: false,
        },
        {
          question: 'Can you upgrade or redesign an existing website?',
          answer: 'Absolutely. We can revamp your current site to improve performance, appearance, and user experience.',
          expanded: false,
        },
        {
          question: 'Will my website be mobile-friendly and responsive?',
          answer: 'Yes, every website we build is fully responsive and optimized for all devices.',
          expanded: false,
        },
        {
          question: 'Do you offer website maintenance and support?',
          answer: 'We do. Our service packages include regular updates, backups, and technical support.',
          expanded: false,
        },
        {
          question: 'What technologies do you work with?',
          answer: 'We use modern stacks like React, Node.js, Next.js, WordPress, Shopify, and more—based on your needs.',
          expanded: false,
        },
        {
          question: 'How long does it take to complete a website project?',
          answer: 'Timelines vary depending on project scope, but we typically deliver most sites within 4–6 weeks.',
          expanded: false,
        },
        {
          question: 'Can you help with SEO and performance optimization?',
          answer: 'Yes, we implement SEO best practices and ensure fast load times with optimized code and assets.',
          expanded: false,
        }
      ]
    },

    technical_benefit: {
      sub_title: 'Why Choose Our Web Development Service?',
      title: 'Build High-Performance, Business-Ready Websites',
      description: 'We deliver complete web solutions — from stunning user interfaces to powerful backend systems and seamless deployment.',
      details: [
        {
          title: 'Custom Frontend Solutions',
          description: 'We create engaging, responsive, and accessible interfaces that reflect your brand and drive user interaction.',
          icon: `<svg class="size-5 flex-none text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v2H4z"/></svg>`
        },
        {
          title: 'Secure & Scalable Backend Development',
          description: 'Our backend systems are built to scale — with robust APIs, secure databases, and optimized performance for growth.',
          icon: `<svg class="size-5 flex-none text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 1 10 10v10H2V12A10 10 0 0 1 12 2z"/></svg>`
        },
        {
          title: 'DevOps & Cloud Deployment',
          description: 'From automation to cloud hosting, we ensure your website is fast, secure, and always up and running.',
          icon: `<svg class="size-5 flex-none text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3z"/></svg>`
        }
      ]
    },

    beyond_learning: {
      sub_title: 'Beyond Just Development',
      title: 'Everything You Need to Launch Your Online Presence',
      description: 'At The Contrast, we don’t just build websites we help you establish a strong digital foundation. From custom web applications to scalable backend systems and cloud deployment, we ensure your business is ready for the digital world.',
      details: [
        {
          title: 'Dedicated Project Manager',
          description: 'Work closely with an experienced project lead who ensures smooth communication and timely delivery.'
        },
        {
          title: 'Custom Web Solutions',
          description: 'Get tailor-made websites and web apps whether you need an e-commerce platform, a dashboard, or a marketing site.'
        },
        {
          title: ' SEO & Performance Optimization',
          description: 'We craft fast, search engine–friendly websites to boost your visibility and drive traffic.'
        },
        {
          title: 'Ongoing Support & Maintenance',
          description: 'Stay worry-free with continuous updates, security patches, and performance monitoring.'
        },
        {
          title: 'Open Source & Integration Ready',
          description: 'Our solutions integrate seamlessly with APIs, third-party tools, and are often built on scalable open-source technologies.'
        },
        {
          title: 'Resource & Handoff Package',
          description: 'Get complete access to your project files, documentation, and editable assets for future use.'
        }
      ]
    },

    learners_section: {
      sub_title: 'Who are our learners',
      title: 'Learners from all walks of life',
      description: `The Contrast is proud to support learners from diverse backgrounds – whether you're starting your journey or shifting your career.`,
      details: [
        {
          description: '“Their weekend sessions made it easy to upskill without leaving my job.”',
          name: 'Sneha Kulkarni',
          role: '#Working Professional',
          image: 'https://tse1.mm.bing.net/th?id=OIP.BnFxTdGXnR3aYi6NeQm41wHaHa&pid=Api&P=0&h=180',
          logo: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
          highlight: true
        },
        {
          description: '“The Contrast helped me develop industry-ready skills even before graduation.”',
          name: 'Aarav Patil',
          role: '#College Student',
          image: 'https://tse1.mm.bing.net/th?id=OIP.psKsUtGDhO2DNIUZ9UGh6AHaHa&pid=Api&P=0&h=180',
        },
        {
          description: '“Switching from mechanical to IT seemed hard, but The Contrast made it seamless.”',
          name: 'Rohit Jadhav',
          role: '#Career Switcher',
          image: 'https://tse4.mm.bing.net/th?id=OIP.jBOx03JO-3h0Nh7_PVB4aQAAAA&pid=Api&P=0&h=180',
        },
        {
          description: '“The mentorship and resources helped me take on better freelance projects confidently.”',
          name: 'Neha More',
          role: '#Freelancer',
          image: 'https://tse3.mm.bing.net/th?id=OIP.os7uM5TJXlUufJbHt9t7UAHaHa&pid=Api&P=0&h=180',
        },
        {
          description: '“Coming from a diploma background, I found their approach very accessible and practical.”',
          name: 'Aniket Shinde',
          role: '#Diploma Holder',
          image: 'https://tse2.mm.bing.net/th?id=OIP.W8pbMr2kaHuKEMhzf3gfNAAAAA&pid=Api&P=0&h=180',
        }
      ]
    },

    have_more_questions: {
      title: 'Your Web Development Career Starts Here.',
      description: `Whether you're a complete beginner or making a career switch, our Web Development program is designed to take you from zero to job-ready. Learn to code, build real-world projects, and break into tech — with expert guidance at every step from The Contrast.`,
      cta_1: {
        text: 'Start Your Web Dev Journey',
        link: '#'
      },
      cta_2: {
        text: 'Explore the Complete Roadmap',
        link: '#'
      }
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
          title: 'SDE-III',
          experience: '1.5 years',
          image: 'assets/Arun-gounder.jpg',
          linkedin: 'https://www.linkedin.com/in/sonal-desai'
        },
        {
          name: 'Mr. Bhavesh Karkare',
          title: 'SDE-III',
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

    // what_you_think: {
    //   sub_title: 'Beginner’s Mindset in Product Management',
    //   title: 'What You Think You Need vs. What You Actually Need',
    //   description: "Many new PMs chase certifications or tools first. But true success starts with mindset, communication, and planning fundamentals.",
    //   think_you_need: [
    //     'Instant PMP or PRINCE2 certification',
    //     'Mastering complex tools like MS Project or JIRA immediately',
    //     'Memorizing every project methodology (Agile, Scrum, etc.)'
    //   ],
    //   actually_need: [
    //     'Clear understanding of project lifecycle, scope, and stakeholder management',
    //     'Strong communication, planning, and team coordination skills',
    //     'Hands-on experience with small projects and real scenarios'
    //   ]
    // }

    what_you_think: {
      sub_title: 'Beginner’s Mindset in Web Development',
      title: 'What You Think You Need vs. What You Actually Need',
      description: "Most new developers focus on fancy frameworks or certifications. But the real growth starts with core concepts, problem-solving, and real coding practice.",
      think_you_need: [
        'Mastering React, Angular, or Vue from day one',
        'Memorizing syntax of every language and framework',
        'Relying on certifications to get hired'
      ],
      actually_need: [
        'Strong understanding of HTML, CSS, JavaScript fundamentals',
        'Problem-solving skills and consistent hands-on coding practice',
        'Building real-world projects to showcase in your portfolio'
      ]
    }
  }
}