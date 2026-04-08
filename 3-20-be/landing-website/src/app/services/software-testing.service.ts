import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoftwareTestingService {

  constructor() { }

  software_testing_content = {

    hero_section: {
      title: 'Confident testing. Trusted quality. Remarkable delivery.',
      pill_1: 'Precision',
      pill_2: 'Automation',
      pill_3: 'Quality',
      quick_look: 'Ensure excellence with every release',
      description: 'Learn software testing from fundamentals to automation. Get hands-on with tools, real-world projects, and industry-ready skills.',
      cta_1: {
        text: `View Software Testing Course`,
        link: '#'
      },
      cta_2: {
        text: 'Book a Free QA Session',
        link: '#'
      },
      image_1: 'https://media.istockphoto.com/id/1500238408/photo/program-code-development-icon-on-a-digital-lcd-display-with-reflection.webp?a=1&b=1&s=612x612&w=0&k=20&c=uTjfgbLtEA4-jBhCz_tV5txb7FcmNlSUiIzqC2LgXnY=',
      image_2: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      image_3: 'https://images.unsplash.com/photo-1536148935331-408321065b18?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      image_4: 'https://media.istockphoto.com/id/2148575948/photo/asian-and-indian-developer-devops-team-working-about-coding-promgram-with-software-computer.webp?a=1&b=1&s=612x612&w=0&k=20&c=2aEhU-WUBreM6P7KcqucSyNXe2a84lvYXAQeIhzuOl8=',
      image_5: 'https://media.istockphoto.com/id/1289411982/photo/cyber-security-web-development-and-work-in-it-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=GK0fGDBVr1cgf0bAknund8m2ZJa9PrberTUtt_UE5c4='
    },

    testimonials_1: [
      {
        description: "The Software Testing course gave me hands-on experience with automation tools. I cleared my first interview confidently!",
        name: "Sneha Joshi",
        designation: "QA Intern",
        company: "Nagpur",
        image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&h=200&w=200&q=80"
      },
      {
        description: "The mentorship and real-time projects helped me understand Selenium and API testing practically.",
        name: "Priya Deshmukh",
        designation: "QA Analyst Intern",
        company: "Mumbai",
        image: "https://sp.yimg.com/ib/th?id=OIP.IpCxKWqV6ZyaZLBC7rl_XQHaLH&pid=Api&w=148&h=148&c=7&rs=1"
      }
    ],

    language_cta: {
      title: 'Test Smarter In the Language You’re Comfortable With.',
      description: `Our Software Testing course is available in English, Hindi, and Marathi — making it easy for you to grasp concepts, practice with real tools, and crack interviews confidently.`,
      cta: {
        text: 'Learn Software Testing in Your Language',
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
      title: 'Software Testing Course',
      sub_title: 'Master manual and automation testing techniques.',
      description: 'Learn core testing concepts, tools like Selenium, and industry practices to ensure software quality and reliability.',
      image: 'http://1.bp.blogspot.com/-XM5qR6LK8gU/VP2GTTUHHsI/AAAAAAAAAPc/IOF1xEXDl0s/s1600/types+of+software+testing.png',
      details: [
        {
          title: 'Introduction to Software Testing',
          duration: '0.5 Week',
          is_open: false,
          details: [
            { topic: 'What is Software Testing?', days: 0.125 },
            { topic: 'Importance of Quality Assurance', days: 0.125 },
            { topic: 'SDLC vs STLC', days: 0.125 },
            { topic: 'Types of Testing – Manual & Automation', days: 0.125 },
          ],
        },
        {
          title: 'Manual Testing Fundamentals',
          duration: '1.5 Week',
          is_open: false,
          details: [
            { topic: 'Test Case, Test Scenario, Test Data', days: 0.3 },
            { topic: 'Bug Life Cycle & Defect Management', days: 0.3 },
            { topic: 'Functional & Non-Functional Testing', days: 0.3 },
            { topic: 'Smoke, Sanity, Regression Testing', days: 0.3 },
            { topic: 'Test Plan & Strategy', days: 0.3 },
          ],
        },
        {
          title: 'Testing Techniques',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Black Box Testing', days: 0.2 },
            { topic: 'White Box Testing', days: 0.2 },
            { topic: 'Boundary Value Analysis', days: 0.2 },
            { topic: 'Equivalence Partitioning', days: 0.2 },
            { topic: 'Exploratory Testing', days: 0.2 },
          ],
        },
        {
          title: 'JIRA & Test Management Tools',
          duration: '0.5 Week',
          is_open: false,
          details: [
            { topic: 'Introduction to JIRA', days: 0.1 },
            { topic: 'Creating Projects, Epics & User Stories', days: 0.1 },
            { topic: 'Bug Reporting & Tracking', days: 0.1 },
            { topic: 'Xray Plugin for Test Management', days: 0.1 },
            { topic: 'Test Execution Reports', days: 0.1 },
          ],
        },
        {
          title: 'Automation Testing with Selenium',
          duration: '2 Week',
          is_open: false,
          details: [
            { topic: 'Introduction to Automation Testing', days: 0.3 },
            { topic: 'Selenium WebDriver Basics', days: 0.4 },
            { topic: 'Locators and XPath', days: 0.4 },
            { topic: 'Handling Alerts, Frames, Windows', days: 0.3 },
            { topic: 'TestNG Framework Integration', days: 0.3 },
            { topic: 'Cross Browser Testing', days: 0.3 },
          ],
        },
        {
          title: 'Java for Testers',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Java Basics: Variables, Data Types', days: 0.2 },
            { topic: 'Control Statements & Loops', days: 0.2 },
            { topic: 'OOPs Concepts', days: 0.2 },
            { topic: 'Exception Handling', days: 0.2 },
            { topic: 'Collections Framework', days: 0.2 },
          ],
        },
        {
          title: 'API Testing using Postman',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Basics of APIs', days: 0.2 },
            { topic: 'Using Postman for Manual API Testing', days: 0.2 },
            { topic: 'Authentication: Bearer Token, Basic Auth', days: 0.2 },
            { topic: 'Assertions & Validations', days: 0.2 },
            { topic: 'Collection Runner & Automation', days: 0.2 },
          ],
        },
        {
          title: 'Real-Time Projects & Interview Prep',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Live Project Testing Practice', days: 0.2 },
            { topic: 'Test Case Design for Web Applications', days: 0.2 },
            { topic: 'Bug Reporting Practice', days: 0.2 },
            { topic: 'Mock Interviews', days: 0.2 },
            { topic: 'Resume & Portfolio Building', days: 0.2 },
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
      title: 'Theory of Testing vs Real Bug Hunting?',
      description_1: `Our hands-on curriculum makes you job-ready from Day 1. We don’t just teach test cases – we teach how to catch real bugs in real products.`,
      description_2: `You’ll get your hands dirty with live scenarios, learn tools like Selenium, JMeter, Postman, and work like an actual QA in a fast-paced product environment.`,
      image: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmV8ZW58MHx8MHx8fDA%3D',
      details: [
        {
          title: 'Testing Mindset Assessment',
          description: 'We analyze your current understanding and approach towards problem-solving and software quality, so we can guide you better in critical thinking and test design.'
        },
        {
          title: 'Manual to Automation Transition',
          description: 'You’ll first master the basics: writing test cases, reporting bugs, exploratory testing — then slowly move to tools like Selenium WebDriver and TestNG.'
        },
        {
          title: 'Live Product Testing',
          description: 'You’ll work on real apps and simulate user behavior to catch bugs. This helps build intuition for quality and performance bottlenecks.'
        },
        {
          title: 'Feedback-Focused Sprints',
          description: 'Each task includes detailed mentor feedback. Weekly QA sprints mimic company cycles — preparing you for your future role in agile teams.'
        }
      ]
    },

    download_brouchre: {
      title: 'Download Your Software Testing Journey Toolkit.',
      description: 'Access our detailed Course Brochure and a customized Career Plan to kickstart your QA journey. Explore tools, skills, and job paths — available in English, Hindi, and Marathi. Learn with clarity and confidence, only at The Contrast.',
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
      title: `See how Software Testing changed their careers.`,
      description: `Learners from diverse backgrounds have trusted our Software Testing program to enter the IT industry with confidence. Their success stories speak louder than words — watch their journey from beginners to certified QA professionals.`,
      details: [
        {
          name: 'Meenal Kshirsagar',
          location: 'Aurangabad, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=software1',
          description: 'From pharmacy background to QA Analyst in just 4 months!',
        },
        {
          name: 'Nilesh Pawar',
          location: 'Satara, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D',
          video_url: 'https://www.youtube.com/watch?v=software2',
          description: 'No coding experience? Still cracked automation testing role.',
        },
        {
          name: 'Shruti Bhosale',
          location: 'Nagpur, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D',
          video_url: 'https://www.youtube.com/watch?v=software3',
          description: 'Switched from BPO to IT — Now working as Software Tester.',
        }
      ]
    },

    faqs: {
      title: 'Frequently Asked Questions ?',
      details: [
        {
          question: 'What is the Software Testing course all about?',
          answer: 'It’s a hands-on program that covers both manual and automation testing, preparing you for real industry QA roles.',
          expanded: false,
        },
        {
          question: 'Is this course beginner-friendly?',
          answer: 'Yes, absolutely. We start from scratch and guide you through real-world testing tools and workflows.',
          expanded: false,
        },
        {
          question: 'Which tools will I learn during the course?',
          answer: 'You’ll gain experience with tools like Selenium, Postman, JIRA, TestNG, and more, along with test case writing and bug reporting.',
          expanded: false,
        },
        {
          question: 'Will I get help with interviews and placements?',
          answer: 'Definitely. We provide mock interviews, resume building, and full placement support to help you crack QA roles.',
          expanded: false,
        },
        {
          question: 'Can I take the course in my preferred language?',
          answer: 'Yes. The course is available in English, Hindi, and Marathi so you can learn comfortably.',
          expanded: false,
        }
      ]
    },

    technical_benefit: {
      sub_title: `Technical Benefits`,
      title: `Skills that make you test-ready.`,
      description: `Our Software Testing program equips you with essential manual and automation skills to become a top-notch QA professional. From writing test cases to running Selenium scripts, we cover it all.`,
      details: [
        {
          title: 'Hands-on Testing Practice',
          description: 'Learn by doing — test real web applications, log bugs, and create effective test cases in a practical environment.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 2a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8Zm1.707 10.293a1 1 0 0 1-1.414 1.414L7 10.414V13a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1h5a1 1 0 0 1 0 2H8.414l2.293 2.293Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Automation with Selenium',
          description: 'Master automation testing using Selenium WebDriver with real-world scenarios and live demo projects.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm3.71 7.29-5.88 5.88-2.12-2.12a1 1 0 0 0-1.42 1.42l2.83 2.83a1 1 0 0 0 1.42 0l6.59-6.59a1 1 0 0 0-1.42-1.42Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Industry-Focused Mock Interviews',
          description: 'Prepare with real QA interview questions, bug-reporting rounds, and HR simulations tailored for software testing roles.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 0 0-8 8c0 4.41 3.59 8 8 8a8 8 0 0 0 5.66-13.66A8 8 0 0 0 10 2Zm0 14a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6Zm1-5V9a1 1 0 0 0-2 0v2a1 1 0 0 0 .293.707l2 2a1 1 0 1 0 1.414-1.414L11 11Z"/></svg>`
        }
      ]
    },

    beyond_learning: {
      sub_title: `Beyond Learning`,
      title: `Everything to shape your QA Career.`,
      description: `At The Contrast, we go beyond just teaching tools — we shape you into a confident, job-ready software tester. Our ecosystem builds your technical depth, professional polish, and real-world confidence.`,
      details: [
        {
          title: '1-on-1 QA Mentorship',
          description: 'Get direct mentorship from experienced QA engineers who guide your learning and career journey.'
        },
        {
          title: 'Resume & Case Study Portfolio',
          description: 'Build a standout QA resume and add impactful bug reports, test cases, and automation projects to your portfolio.'
        },
        {
          title: 'Placement Preparation',
          description: 'We help you crack real QA interviews with mock rounds, feedback, and direct hiring connects.'
        },
        {
          title: 'Bug Reporting & Communication',
          description: 'Learn to report bugs professionally and communicate clearly with developers and stakeholders.'
        },
        {
          title: 'Testing Community Access',
          description: 'Be part of an active QA peer group — share bugs, test ideas, interview tips, and grow together.'
        },
        {
          title: 'Resource Bank for Testers',
          description: 'Lifetime access to checklists, templates, real bug samples, automation code, and interview prep kits.'
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
      title: 'Your QA career breakthrough starts here.',
      description: `At The Contrast, we don’t just train you to test — we transform you into a confident, job-ready Quality Analyst. Whether you come from a non-technical background or are switching roles, our program takes you from basics to mastery through real tools, projects, and interview prep.`,
      cta_1: {
        text: 'Start your QA journey',
        link: '#'
      },
      cta_2: {
        text: 'Explore the roadmap',
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
      sub_title: 'Beginner’s Mindset in Testing',
      title: 'What You Think You Need vs What You Actually Need',
      description: "When you're stepping into the Software Testing world, it's common to focus on buzzwords. But building a solid QA career starts with the fundamentals.",
      think_you_need: [
        'Mastering automation tools like Selenium or Cypress on day one',
        'Knowing every testing type in theory',
        'Learning coding before anything else',
      ],
      actually_need: [
        'Clear understanding of SDLC, STLC & test case writing',
        'Strong manual testing foundation with real-time examples',
        'Analytical mindset and attention to detail',
      ],
    }
  }
}
