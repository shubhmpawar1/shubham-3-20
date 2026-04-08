import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class FullStackNodeJsDevelopmentService {

  constructor() { }

  full_stack_page_content = {

    hero_section: {
      title: 'Learn with Curiosity. Grow with Purpose. Practice Purposefully.',
      pill_1: 'Front-End',
      pill_2: 'Back-End',
      pill_3: 'Career-Ready',
      quick_look: 'Turn your ideas into real-world applications.',
      description: `Master full stack development with expert mentorship, real-world projects, and in-demand tools — from sleek UI to robust backend.`,
      cta_1: {
        text: 'Start Free Online Class',
        link: '#'
      },
      cta_2: {
        text: 'Book a Free Career Call',
        link: '#'
      },
      image_1: 'https://media.istockphoto.com/id/2200128716/photo/ai-powers-big-data-analysis-and-automation-workflows-showcasing-neural-networks-and-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=Wct3RqstuZiHOEexd0kSDNufRHJZ_ZcCeBUAkbWKjDo=',
      image_2: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnVsbCUyMHN0YWNrJTIwZGV2ZWxvcG1lbnQlMjB0ZWFtJTIwJTJGJTIwY29sbGFib3JhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
      image_3: 'https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D',
      image_4: 'https://media.istockphoto.com/id/1481562843/photo/user-can-check-data-storage-from-sql-database-on-computer-screen-with-database-and-server.webp?a=1&b=1&s=612x612&w=0&k=20&c=ok4mA2n6I0C_SbMRwK7YowgUh6fqceYjuHJCr9Tj4Lo=',
      image_5: 'https://images.unsplash.com/photo-1578592308652-794769149ab0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmVzcG9uc2l2ZSUyMHdlYnNpdGUlMjBwcmV2aWV3JTIwb24lMjBsYXB0b3AlMjBvciUyMG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D',

    },

    testimonials_1: [
      {
        description: "The Contrast gave me confidence in coding. Now I’ve built my first client website!",
        name: "Viraj Patil",
        designation: "Web Developer Intern",
        company: "Pune",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        description: "Their training helped me land an internship at a startup in Mumbai within 2 months.",
        name: "Abhishek Deshmukh",
        designation: "Web Developer Intern",
        company: "Mumbai",
        image: "https://images.unsplash.com/photo-1637589274892-9bc2d5200eab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVuJTIwaW5kaWFuJTIwb2ZmaWNlfGVufDB8fDB8fHww"
      }
    ],

    language_cta: {
      title: 'Build. Grow in the Language You Know.',
      description: `Just starting out? Learn Full Stack Node.js Development from scratch — in English, Hindi, and Marathi! From HTML, CSS, and JavaScript to MongoDB and Node.js, everything is taught in a language you’re comfortable with.
No coding fear – we teach in a simple, practical, and step-by-step way.
Begin your learning journey today!`,
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
          cta: { text: 'Enroll Now', link: '#' },
          image: 'https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 2,
          title: 'MERN Stack Bootcamp',
          description: 'Build scalable web apps using MongoDB, React, Node.',
          cta: { text: 'Enroll Now', link: '#' },
          image: 'https://images.unsplash.com/photo-1731160807880-daf859b64420?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 3,
          title: 'MEAN Stack Development',
          description: 'Master MongoDB, Express, Angular, and Node.js.',
          cta: { text: 'Enroll Now', link: '#' },
          image: 'https://images.unsplash.com/photo-1581090700227-1e8e1f95a94c?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 4,
          title: 'Full Stack Python Development',
          description: 'Build full stack apps using Django, React, and REST APIs.',
          cta: { text: 'Enroll Now', link: '#' },
          image: 'https://images.unsplash.com/photo-1614850523545-7d315aa34647?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 5,
          title: 'Java Full Stack Development',
          description: 'Learn Spring Boot, React, and MySQL integration.',
          cta: { text: 'Enroll Now', link: '#' },
          image: 'https://images.unsplash.com/photo-1626952817631-967b62f29b5c?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 6,
          title: 'Full Stack with .NET Core',
          description: 'Develop enterprise apps with .NET Core and Angular.',
          cta: { text: 'Enroll Now', link: '#' },
          image: 'https://images.unsplash.com/photo-1581090700020-fd1c3c4bd9e3?w=500&auto=format&fit=crop&q=60',
        },

      ]
    },

    course_curriculum_List: {
      title: 'Full Stack Development Course',
      sub_title: 'Build entire web apps from front‑end to back‑end.',
      description: `Master HTML, CSS, JavaScript, Angular, SQL & MongoDB with hands‑on projects to launch your dev career.`,
      image: 'https://www.webstackacademy.com/wp-content/uploads/2023/01/fullStack-MERN.png',
      details: [
        {
          title: 'HTML 5',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Text formatting Tags', days: 1 },
            { topic: 'HTML Structures - List, Tables', days: 1 },
            { topic: 'HTML Forms', days: 1 },
            { topic: 'Fieldset and Legend Tag', days: 1 },
            { topic: 'HTML5 elements', days: 1 },
            { topic: 'Audio,Video tags', days: 2 },
          ],
        },
        {
          title: 'CSS 3',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Types of CSS', days: 1 },
            { topic: 'CSS Selectors', days: 1 },
            { topic: 'CSS Properties', days: 1 },
            { topic: 'CSS3 Properties', days: 1 },
            { topic: 'CSS Advanced Properties', days: 1 },
            { topic: 'Transition Properties', days: 0.5 },
            { topic: 'Keyframe Animation', days: 0.5 },
            { topic: 'Responsive Layout', days: 0.5 },
            { topic: 'Media Queries', days: 0.5 },
          ],
        },
        {
          title: 'JavaScript',
          duration: '3 Week',
          is_open: false,
          details: [
            { topic: 'Variables and Datatypes', days: 2 },
            { topic: 'Control Structure', days: 2 },
            { topic: 'Functions', days: 3 },
            { topic: 'Anonymous Function', days: 2 },
            { topic: 'Arrow Function', days: 1 },
            { topic: 'JavaScript Objects', days: 3 },
            { topic: 'Window - Screen,Location,History', days: 2 },
            { topic: 'Document object', days: 2 },
            { topic: 'DOM Property Manipulation', days: 4 },
          ],
        },
        {
          title: 'Bootstrap 5.2',
          duration: '0.5 Week',
          is_open: false,
          details: [
            { topic: 'Layout and Content', days: 0.5 },
            { topic: 'Bootstrap components', days: 0.5 },
            { topic: 'Bootstrap utilities', days: 0.5 },
            { topic: 'Bootstrap icons', days: 0.5 },
            { topic: 'Forms', days: 0.5 },
            { topic: 'Utilities', days: 0.5 },
            { topic: 'Form Grid', days: 0.25 },
            { topic: 'Gutters', days: 0.25 },
            { topic: 'Column Sizing', days: 0.25 },
            { topic: 'Inline Forms', days: 0.25 },
          ],
        },
        {
          title: 'Angular',
          duration: '5 Week',
          is_open: false,
          details: [
            { topic: 'Basics of Typescript & Angular', days: 3 },
            { topic: 'Data Binding', days: 2 },
            { topic: 'Pipes & Custom Pipes', days: 2 },
            { topic: 'Component Communication', days: 2 },
            { topic: 'Services', days: 2 },
            { topic: 'Backend API Call using HttpService', days: 3 },
            { topic: 'Integrating APIs with Angular frontend App', days: 3 },
            { topic: 'Advanced Routing', days: 3 },
            { topic: 'Forms - Reactive Forms, Custom Validators', days: 4 },
            { topic: 'Angular Modules', days: 2 },
            { topic: 'Integration with Angular Material', days: 2 },
            { topic: 'Building and Deploying Angular Application', days: 3 },
          ],
        },
        {
          title: 'SQL',
          duration: '3.5 Week',
          is_open: false,
          details: [
            { topic: 'Database Management System', days: 2 },
            { topic: 'SQL Syntax', days: 2 },
            { topic: 'Data Manipulation Language', days: 3 },
            { topic: 'Data Query Language', days: 3 },
            { topic: 'Built in functions in SQL', days: 3 },
            { topic: 'Sub-Query & Joins', days: 3 },
            { topic: 'Stored Procedure and Function', days: 3 },
            { topic: 'Cursor', days: 2.5 },
            { topic: 'Triggers', days: 3 },
          ],
        },
        {
          title: 'MongoDB',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'What is NoSQL?', days: 1 },
            { topic: 'Difference between SQL and NoSQL', days: 1 },
            { topic: 'What is MongoDB?', days: 1 },
            { topic: 'Installing MongoDB on local machine', days: 1 },
            { topic: 'Data Types in MongoDB', days: 1 },
            { topic: 'Using MongoDB Shell', days: 1 },
            { topic: 'Perform CRUD Operations in MongoDB', days: 1 },
            { topic: 'Finding Documents', days: 0.5 },
            { topic: 'Various MongoDB operators', days: 0.5 },
          ],
        },
      ]
    },

    advanced_curriculum: {
      title: 'Traditional Learning vs Full Stack Engineering?',
      description_1: `Our task-driven training ensures every full stack developer gets hands-on experience from day one making learning efficient, practical, and career-ready.`,
      description_2: `Instead of just theory, you’ll be building apps, solving backend challenges, and deploying projects – just like you would in a real company.`,
      // image: 'https://images.unsplash.com/photo-1581091012184-5c8af63fdaec?auto=format&fit=crop&w=1344&h=1104&q=80',
      image: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&h=1874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: [
        {
          title: 'Learner Profiling & Goal Mapping',
          description: 'We assess your current understanding of frontend/backend and career goals to customize your journey.'
        },
        {
          title: 'Task-Based Skill Blocks',
          description: 'Each module is tied to practical tasks like “Build a login system” or “Design a REST API” instead of theory-first lectures.'
        },
        {
          title: 'Real-Time Project Workflows',
          description: 'You’ll build scalable apps in sprints using Git, Trello, and APIs — collaborating like a real dev team with code reviews and documentation.'
        },
        {
          title: 'Feedback Loops & Deployment Reviews',
          description: 'Every week includes mentor reviews where we check app performance, bug handling, code quality, and deployment confidence.'
        }
      ]
    },


    download_brochure: {
      title: 'Master Full Stack Development Start Your Journey Today.',
      description: 'Download our Full Stack Developer Course Brochure and get a personalized Career Plan that fits your goals. Explore frontend to backend technologies and build your path to becoming a job-ready Full Stack Engineer. Available in English, Hindi, and Marathi.',
      brochure_link: {
        text: 'Download Full Stack Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'Download Full Stack Career Plan',
        link: '#'
      }
    },

    testimonials_2: {
      title: `See how Full Stack transformed real careers.`,
      description: `Don’t just take our word for it. Listen to real success stories of learners who went from zero experience to landing jobs as Full Stack Developers. Their journeys prove what’s possible with the right mentorship and real-world training.`,
      details: [
        {
          name: 'Tanmay Deshmukh',
          location: 'Nashik, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7',
          video_url: 'https://www.youtube.com/watch?v=video1',
          description: 'From complete fresher to Full Stack Developer in just 5 months with The Contrast!',
        },
        {
          name: 'Priya Jadhav',
          location: 'Pune, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1690079374922-7f50d5c1a102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3dpdGNoZWQlMjBmcm9tJTIwdGVhY2hpbmclMjB0byUyMHRlY2h8ZW58MHx8MHx8fDA%3D',
          video_url: 'https://www.youtube.com/watch?v=video2',
          description: 'Switched from teaching to a tech career with confidence — thanks to Full Stack training.',
        },
        {
          name: 'Rohit Gokhale',
          location: 'Kolhapur, Maharashtra',
          video_thumbnail: 'https://plus.unsplash.com/premium_photo-1661782639250-9f719c1051a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXZlbiUyMGZyb20lMjBhJTIwcnVyYWwlMjBiYWNrZ3JvdW5kJTJDJTIwSSUyMGNyYWNrZWQlMjBhbiUyME1OQyUyMGludGVydmlldy58ZW58MHx8MHx8fDA%3D',
          video_url: 'https://www.youtube.com/watch?v=video3',
          description: 'Came from a rural background, built real projects, and cracked an MNC interview.',
        }
      ]
    },

    faqs: {
      title: 'Frequently Asked Questions ?',
      details: [
        {
          question: 'What is The Contrast Full Stack Development Program all about?',
          answer: 'It’s a hands-on, task-based training program where you learn full stack engineering — from frontend to backend — through real projects, industry tools, and personalized mentoring.',
          expanded: false,
        },
        {
          question: 'Is this Full Stack course suitable for absolute beginners or freshers?',
          answer: 'Yes! Whether you’re a fresher, non-IT graduate, or career switcher — we begin from the basics and help you grow step-by-step through personalized tasks and real-world challenges.',
          expanded: false,
        },
        {
          question: 'Do you offer job placement support after course completion?',
          answer: 'Absolutely. Our curriculum, mock interviews, and resume building sessions are all designed to get you job-ready and placed at companies hiring Full Stack developers.',
          expanded: false,
        },
        {
          question: 'What if I have zero coding background?',
          answer: 'That’s totally fine! We teach everything from scratch — HTML, CSS, JavaScript, backend, databases, deployment — all with guidance tailored to your speed and comfort.',
          expanded: false,
        },
        {
          question: 'How long does it take to become job-ready?',
          answer: 'Most of our students become job-ready within 5–6 months, depending on your pace, dedication, and task completion consistency.',
          expanded: false,
        },
        {
          question: 'What technologies are covered in the Full Stack course?',
          answer: 'You’ll learn HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git, deployment tools, APIs, and project architecture — everything required for real-world full stack development.',
          expanded: false,
        }
      ]
    },

    technical_benefit: {
      sub_title: `Technical Benefits`,
      title: `Skills that Make You Job-Ready`,
      description: `The Contrast empowers you with practical, task-based learning in full stack development. From writing efficient code to deploying real-world applications — we cover every step to make you industry-ready.`,
      details: [
        {
          title: 'Real-World Projects',
          description: 'Build and deploy full stack applications that mimic real company workflows — not just theory but practical, hands-on experience.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Strong Fundamentals',
          description: 'Learn core web technologies: HTML, CSS, JavaScript, plus backend concepts like Node.js, Express, and databases, building a solid foundation.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Mock Interviews & Resume Building',
          description: "Prepare for technical interviews with mock sessions, coding challenges, and personalized resume reviews to land your dream job.",
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clip-rule="evenodd"/></svg>`
        }
      ]
    },

    beyond_learning: {
      sub_title: `Beyond Learning`,
      title: `More Than Just Education We Shape Your Career`,
      description: `At The Contrast, learning is just the beginning. We empower you with career mentorship, industry exposure, and a supportive community to build a future-ready professional profile.`,
      details: [
        {
          title: '1-on-1 Mentorship',
          description: 'Personalized guidance from seasoned engineers and placement experts to navigate your career path confidently.'
        },
        {
          title: 'Resume & Portfolio Building',
          description: 'Create compelling resumes and project portfolios that highlight your skills and achievements effectively.'
        },
        {
          title: 'Placement Assistance',
          description: 'Direct connections with top hiring partners and comprehensive interview preparation for your dream job.'
        },
        {
          title: 'Communication Training',
          description: 'Interactive workshops focusing on soft skills, professional etiquette, and confident communication.'
        },
        {
          title: 'Peer Network',
          description: 'Join a vibrant community of learners who motivate and support each other throughout the journey.'
        },
        {
          title: 'Lifetime Access to Resources',
          description: 'Unlimited access to updated notes, mock tests, and exclusive job preparation materials even after course completion.'
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
      title: 'Your career breakthrough starts here.',
      description: `At The Contrast, we don’t just teach skills — we empower learners with confidence, industry exposure, and the tools to thrive. From foundation to future, we’re with you every step of the way.`,
      cta_1: {
        text: 'Get started today',
        link: '#'
      },
      cta_2: {
        text: 'Learn more',
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
    }
  }
}