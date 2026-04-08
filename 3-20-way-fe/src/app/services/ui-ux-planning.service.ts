import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiUxPlanningService {

  constructor() { }

  ui_ux_planning_content = {

    hero_section: {
      title: 'Design Smarter. Engage Seamlessly. Deliver Better.',
      pill_1: 'Empathy',
      pill_2: 'Clarity',
      pill_3: 'Impact',
      quick_look: 'Crafting experiences that users love',
      description: 'We design seamless and intuitive user interfaces that elevate user engagement and drive conversions across web and mobile platforms.',
      cta_1: {
        text: "Explore Our UI/UX Work",
        link: '#'
      },
      cta_2: {
        text: 'Book Free Consultation',
        link: '#'
      },
      image_1: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlJTIwYXBwJTIwZGVzaWdufGVufDB8fDB8fHww',
      image_2: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      image_3: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      image_4: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww',
      image_5: 'https://media.istockphoto.com/id/1346294889/photo/web-designing.webp?a=1&b=1&s=612x612&w=0&k=20&c=J8J3ymuS5rzf5YoKEn1FxUhsMgMVjvziJs3NbinEjhY='
    },

    testimonials_1: [
      {
        description: "The UI/UX team at The Contrast truly understands user behavior. Our app's engagement rate doubled after the redesign.",
        name: "Sneha Patil",
        designation: "Product Manager",
        company: "TechNova Solutions",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&h=200&q=80"
      },
      {
        description: "Clean design, smooth experience, and excellent communication. We loved working with their UI/UX experts.",
        name: "Rohit Deshmukh",
        designation: "Founder & CEO",
        company: "StartIQ",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lbnxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],

    language_cta: {
      title: 'Build. Grow in the Language You Know.',
      description: `Join hundreds of learners and professionals mastering skills in English, Hindi, and Marathi. Whether you're training your team or building your next big idea, we speak your language.`,
      cta: {
        text: 'Start Learning in Your Language',
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
      title: 'Aesthetic Vision vs Usable Design?',
      description_1: `With our user-centered, research-backed process, we make sure every interface speaks directly to your users' needs and emotions.`,
      description_2: `From idea to execution, we craft intuitive digital experiences that not only look beautiful but work flawlessly across devices.`,
      image: 'https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D',
      details: [
        {
          title: 'User Research & Persona Creation',
          description: 'Understanding your target audience through interviews, surveys, and analytics to create detailed personas and empathize with real user challenges.'
        },
        {
          title: 'Wireframing & UX Architecture',
          description: 'Sketching user journeys, low-fidelity wireframes, and UX flow diagrams to structure information and streamline interaction.'
        },
        {
          title: 'Visual Design & Prototyping',
          description: 'Crafting visually appealing UI mockups with consistent typography, color systems, and component libraries using tools like Figma.'
        },
        {
          title: 'Usability Testing & Iteration',
          description: 'Testing prototypes with real users to identify friction points and iterating designs based on actionable feedback for a polished final product.'
        }
      ]
    },

    download_brouchre: {
      title: 'Your Career, Your Way Download Now.',
      description:
        'Get instant access to our official Course Brochure and a personalized Custom Career Plan. Discover your learning roadmap with The Contrast, available in English, Hindi, and Marathi.',
      brochure_link: {
        text: 'Download Course Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'Download Career Plan',
        link: '#'
      }
    },

    testimonials_2: {
      title: `Hear from aspiring designers who've transformed their careers.`,
      description: `These talented individuals transitioned into the UI/UX world with the help of our training. Watch how they mastered design tools, built portfolios, and landed roles at top companies.`,
      details: [
        {
          name: 'Snehal Patil',
          location: 'Pune, Maharashtra',
          video_thumbnail: 'https://media.istockphoto.com/id/2159138781/photo/portrait-of-smiling-indian-girl-using-laptop-do-thumbs-up-career-opportunities-browsing.webp?a=1&b=1&s=612x612&w=0&k=20&c=RwUwcT2mkSupDy7aJrUm2Ka_X3-FsED_DVxImtbPhJs=',
          video_url: 'https://www.youtube.com/watch?v=uiux1', // replace with actual
          description: 'From Arts Graduate to UI Designer — My design journey.',
        },
        {
          name: 'Kunal Waghmare',
          location: 'Nagpur, Maharashtra',
          video_thumbnail: 'https://media.istockphoto.com/id/1390285717/photo/asian-programmer-writing-code-on-a-laptop.webp?a=1&b=1&s=612x612&w=0&k=20&c=OlRDjzDJd4fqk1Zka0hxV5GTZyIY-njscZkB17A2bbM=',
          video_url: 'https://www.youtube.com/watch?v=uiux2',
          description: 'Got hired as a UX Intern within 3 months of learning!',
        },
        {
          name: 'Rutuja Shinde',
          location: 'Mumbai, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
          video_url: 'https://www.youtube.com/watch?v=uiux3',
          description: 'Built my UI/UX portfolio and landed freelance projects globally.',
        }
      ]
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'What does your UI/UX design service include?',
          answer: 'Our service includes user research, wireframes, high-fidelity UI designs, prototyping, usability testing, and design handoff to developers.',
          expanded: false,
        },
        {
          question: 'Which industries do you serve with your design solutions?',
          answer: 'We work with startups, enterprises, and agencies across industries like eCommerce, education, finance, healthcare, SaaS, and more.',
          expanded: false,
        },
        {
          question: 'Do you use Figma or Adobe XD for UI/UX design?',
          answer: 'Yes, we primarily use Figma for collaborative design and prototyping. We also work with Adobe XD and Sketch on request.',
          expanded: false,
        },
        {
          question: 'Will I get responsive/mobile-friendly designs?',
          answer: 'Absolutely. All designs are responsive by default — optimized for desktop, tablet, and mobile screens.',
          expanded: false,
        },
        {
          question: 'How many revisions do you offer?',
          answer: 'We offer 2-3 rounds of design revisions based on your feedback to ensure the final output meets your expectations.',
          expanded: false,
        },
        {
          question: 'Do you offer design-to-development handoff?',
          answer: 'Yes, we provide design assets, component specs, and developer notes to ensure a smooth transition to your development team.',
          expanded: false,
        }
      ]
    },
    
    technical_benefit: {
      sub_title: `Technical Benefit`,
      title: `Skills that make you job-ready`,
      description: `The Contrast empowers you with task-based learning in UI/UX. From wireframes to prototypes — get real design experience.`,
      details: [
        {
          title: 'Real-World UI/UX Projects',
          description: 'Design complete app and website interfaces, solve real user problems, and present your case studies like a pro.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M3 6a1 1 0 0 1 1-1h7V4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7v-1H4a1 1 0 0 1-1-1V6Zm10-2v2h7a1 1 0 0 1 1 1v4h-2V8h-6v8h6v-3h2v4a1 1 0 0 1-1 1h-7v2h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-7Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'User-Centered Design Fundamentals',
          description: 'Learn research techniques, personas, empathy maps, and design thinking to craft interfaces users love.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a4 4 0 0 0-4 4v2H5a2 2 0 0 0-2 2v1h14v-1a2 2 0 0 0-2-2h-1V6a4 4 0 0 0-4-4Zm0 12a4 4 0 0 1-4-4H4a4 4 0 0 0 8 0h-2a2 2 0 0 1-2 2Z"/></svg>`
        },
        {
          title: 'Design Tools & Portfolio',
          description: 'Master Figma and other tools, and build a portfolio with mobile apps, websites, and design systems.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a3 3 0 0 0-3 3v2h3a3 3 0 1 1 0 6H7v2a3 3 0 1 0 3-3h-3V5a3 3 0 0 1 3-3Z"/></svg>`
        }
      ]
    },

    beyond_learning: {
      sub_title: `UI/UX Design`,
      title: `Design experiences that users love.`,
      description: `At The Contrast, we equip you with the skills to create intuitive, accessible, and beautiful user interfaces. From design principles to real-world projects, get ready to transform ideas into delightful digital experiences.`,
      details: [
        {
          title: 'User-Centered Design',
          description: 'Learn to design with empathy, focusing on real user needs and behaviors.'
        },
        {
          title: 'Figma Mastery',
          description: 'Hands-on training with industry-standard tools like Figma and Adobe XD.'
        },
        {
          title: 'Design Systems',
          description: 'Understand how to build consistent, scalable UI systems for modern apps.'
        },
        {
          title: 'Real-World Projects',
          description: 'Build complete UI/UX case studies to showcase in your portfolio.'
        },
        {
          title: 'Usability & Accessibility',
          description: 'Design interfaces that are easy to use and accessible to all users.'
        },
        {
          title: 'Portfolio & Career Prep',
          description: 'Create a stunning portfolio and get guidance for UI/UX job roles and freelancing.'
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
      title: 'Your design career breakthrough starts here.',
      description: `At The Contrast, we don’t just teach UI/UX skills — we build your creative confidence, connect you with industry experts, and equip you with a standout portfolio. From wireframes to user testing, we guide you through every step of your design journey.`,
      cta_1: {
        text: 'Start Designing Now',
        link: '#'
      },
      cta_2: {
        text: 'Explore Career Paths',
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

    what_you_think: {
      sub_title: 'Beginner’s Perspective',
      title: 'What You Think You Need vs What You Actually Need',
      description: "When you're starting your web development journey, it's easy to focus on shiny tools. But what really matters might surprise you.",
      think_you_need: [
        'Complex animations and UI effects',
        'Advanced frameworks like React or Vue right away',
        'Fancy dashboards and admin panels',
      ],
      actually_need: [
        'Strong foundation in HTML, CSS, and JS',
        'Mobile-friendly layouts and basic responsiveness',
        'Simple, clean, and accessible UI',
      ],
    },

  }
}
