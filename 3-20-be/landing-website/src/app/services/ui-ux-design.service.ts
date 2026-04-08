import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiUxDesignService {

  constructor() { }

  ui_ux_design_content = {

    hero_section: {
      // title: 'Learn Design Fast Build Real Projects Launch Your Career',
      title: 'Design With Purpose. Create With Impact. Grow Into Expert.',
      pill_1: 'Zero to Designer',
      pill_2: 'Build Cool Stuff',
      pill_3: 'Get Hired Fast',
      quick_look: 'Your UI/UX Journey Starts Here',
      description: 'Learn design from scratch, build real products, and create a job-ready portfolio with expert guidance.',
      cta_1: {
        text: 'Explore the Curriculum',
        link: '#'
      },
      cta_2: {
        text: 'Apply Now',
        link: '#'
      },
      image_1: 'https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?ga=GA1.1.1185719165.1748505501&semt=ais_hybrid&w=740',
      image_2: 'https://images.unsplash.com/photo-1698945298361-365595d400eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dWklMjB1eCUyMGRlc2luZyUyMHBjJTIwc2NyZWVuJTIwY3lhbiUyMGNvbG9yJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D',
      image_3: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzaWdufGVufDB8fDB8fHww',
      image_4: 'https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VUklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
      image_5: 'https://media.istockphoto.com/id/2181117755/photo/web-designer-using-sticky-notes-planning-website-design-on-desk.webp?a=1&b=1&s=612x612&w=0&k=20&c=Er8X0kUENx2vUtHAZnn8_uPIH9DS1HDNYEFVN0gNVVQ='
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
      title: 'Learn in the Language You’re Comfortable With.',
      description: `Join hundreds of students learning UI/UX in English, Hindi, and Marathi. Whether you're just starting or upskilling, choose the language that helps you learn best.`,
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

    course_curriculum_List: {
      title: 'UI/UX Designing Course',
      sub_title: 'Design seamless and user-friendly digital experiences.',
      description: `This UI/UX Designing course equips you with essential design principles, user research techniques, and modern tools like Figma. From wireframes to prototypes, learn to craft intuitive interfaces that engage users and solve real-world problems effectively.`,
      image: 'https://www.nakshtechnologies.com/wp-content/uploads/2021/08/ux2.png',
      details: [
        {
          title: 'Introduction to UI/UX',
          duration: '0.5 Week',
          is_open: false,
          details: [
            { topic: 'What is UI and UX?', days: 0.125 },
            { topic: 'Importance of User-Centered Design', days: 0.125 },
            { topic: 'Difference between UI and UX', days: 0.125 },
            { topic: 'Overview of the Design Process', days: 0.125 },
          ],
        },
        {
          title: 'User Research',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Understanding Target Users', days: 0.2 },
            { topic: 'Creating User Personas', days: 0.2 },
            { topic: 'Empathy Mapping', days: 0.2 },
            { topic: 'User Journey Mapping', days: 0.2 },
            { topic: 'Competitor Analysis', days: 0.2 },
          ],
        },
        {
          title: 'Wireframing & Prototyping',
          duration: '1.5 Week',
          is_open: false,
          details: [
            { topic: 'Low-fidelity vs High-fidelity Wireframes', days: 0.3 },
            { topic: 'Sketching Techniques', days: 0.3 },
            { topic: 'Tools: Figma, Adobe XD, Balsamiq', days: 0.3 },
            { topic: 'Clickable Prototypes', days: 0.3 },
            { topic: 'Feedback & Iteration', days: 0.3 },
          ],
        },
        {
          title: 'Visual Design Principles',
          duration: '1.5 Week',
          is_open: false,
          details: [
            { topic: 'Typography, Colors, and Layouts', days: 0.3 },
            { topic: 'Design Systems & Style Guides', days: 0.3 },
            { topic: 'Brand Consistency', days: 0.3 },
            { topic: 'White Space & Visual Hierarchy', days: 0.3 },
            { topic: 'Accessibility Design (WCAG)', days: 0.3 },
          ],
        },
        {
          title: 'Figma Mastery',
          duration: '2 Week',
          is_open: false,
          details: [
            { topic: 'Figma Interface Deep Dive', days: 0.4 },
            { topic: 'Design Components and Variants', days: 0.4 },
            { topic: 'Auto Layout', days: 0.4 },
            { topic: 'Interactive Prototypes', days: 0.4 },
            { topic: 'Collaboration in Figma', days: 0.4 },
          ],
        },
        {
          title: 'UI/UX for Web & Mobile',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Responsive Design Basics', days: 0.2 },
            { topic: 'Mobile-first Design Approach', days: 0.2 },
            { topic: 'Adaptive vs Responsive UI', days: 0.2 },
            { topic: 'Designing for Android & iOS', days: 0.2 },
            { topic: 'UI Guidelines for Web & Mobile', days: 0.2 },
          ],
        },
        {
          title: 'Project & Portfolio',
          duration: '1.5 Week',
          is_open: false,
          details: [
            { topic: 'Design Brief Understanding', days: 0.3 },
            { topic: 'End-to-End Project Design', days: 0.3 },
            { topic: 'Usability Testing & Feedback', days: 0.3 },
            { topic: 'Portfolio Presentation', days: 0.3 },
            { topic: 'Case Study Writing', days: 0.3 },
          ],
        },
      ],
    },


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
      title: 'Design That Works. Looks That Matter.',
      description_1: `Learn to balance beauty and usability with a user-first approach that blends research, creativity, and real-world tools.`,
      description_2: `From raw ideas to polished screens, build experiences that not only look amazing but feel effortless to use — on any device.`,
      image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzaWdufGVufDB8fDB8fHww',
      details: [
        {
          title: 'User Research & Empathy Mapping',
          description: 'Talk to real users, map their pain points, and discover what truly matters to them before you start designing.'
        },
        {
          title: 'Wireframes & UX Planning',
          description: 'Sketch screen flows and structure content clearly to guide users smoothly — from first tap to final action.'
        },
        {
          title: 'Visual UI & Prototypes',
          description: 'Design beautiful, consistent interfaces using Figma. Create clickable prototypes that feel like the real thing.'
        },
        {
          title: 'Test, Improve, Repeat',
          description: 'Get honest user feedback, test interactions, and refine your designs until they’re friction-free and polished.'
        }
      ]
    },

    download_brouchre: {
      title: 'Welcome to the UI/UX Design Journey !',
      description: `You have been accepted to join the UI/UX Design class.  
  Before your course begins, please carefully review the following information:  
  - Start with Design Fundamentals  
  - Hands-on projects and prototyping  
  - Learn tools like Figma and Adobe XD  
  - Career support and portfolio guidance  
  We are here to support you in building a successful career.  
  Our team will contact you soon with the next steps.`,
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
      title: 'Frequently Asked Questions ?',
      details: [
        {
          question: 'What does the UI/UX Design course cover?',
          answer: 'Our UI/UX course covers user research, wireframing, prototyping, design tools like Figma, and user testing to build real-world, intuitive designs.',
          expanded: false,
        },
        {
          question: 'Is this course suitable for someone without a design background?',
          answer: 'Yes, the course is beginner-friendly and designed for anyone interested in design — no prior experience needed.',
          expanded: false,
        },
        {
          question: 'Will I be able to build a portfolio by the end of the course?',
          answer: 'Absolutely. You will work on real projects and case studies to create a professional design portfolio.',
          expanded: false,
        },
        {
          question: 'Which tools will I learn during this course?',
          answer: 'You will master tools like Figma, Adobe XD, and other modern UI/UX platforms used by top companies.',
          expanded: false,
        },
        {
          question: 'Do you provide job assistance after the course?',
          answer: 'Yes, we help you with resume building, portfolio review, mock interviews, and job referrals in the design industry.',
          expanded: false,
        },
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
      title: 'Design the Future. One Interface at a Time.',
      description: `At The Contrast, UI/UX isn’t just about pixels — it’s about people.  
  Our course transforms your curiosity into creativity, your sketches into structured designs, and your ideas into real-world user experiences.  
  Learn by doing, build a portfolio that stands out, and grow with mentorship from experienced designers.  
  Whether you're starting fresh or shifting careers, we’ll guide you through every click, curve, and concept.`,
      cta_1: {
        text: 'Start Your Design Journey',
        link: '#'
      },
      cta_2: {
        text: 'Explore Course Details',
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
      sub_title: 'Beginner’s Mindset Shift',
      title: 'What You Think You Need vs What You Truly Need',
      description: "When starting in UI/UX, it’s tempting to chase fancy visuals. But great design isn’t about trends — it’s about solving real problems with simplicity.",
      think_you_need: [
        'Perfect color schemes and trendy gradients',
        'Dribbble-style flashy mockups',
        'Mastery of every design tool on day one',
      ],
      actually_need: [
        'Empathy for users and real-world pain points',
        'Clear layouts and strong UX flow',
        'Focus on usability over looks',
      ],
    }
  }
}
