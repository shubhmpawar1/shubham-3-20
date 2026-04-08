import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagementService {

  constructor() { }

  project_management_content = {

    hero_section: {
      title: 'Smart Planning. Seamless Execution. Powerful Results.',
      pill_1: 'Plan smart',
      pill_2: 'Execute fast',
      pill_3: 'Lead with impact',
      quick_look: 'Lead projects with real impact.',
      description: 'Master the full project lifecycle from planning to delivery, using agile tools, collaboration, and leadership skills.',
      cta_1: {
        text: "View Project Management Course",
        link: '#'
      },
      cta_2: {
        text: "Book a Free Project Planning Session",
        link: '#'
      },
      image_1: 'https://images.unsplash.com/photo-1541960071727-c531398e7494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NydW18ZW58MHx8MHx8fDA%3D',
      image_2: 'https://images.pexels.com/photos/5582867/pexels-photo-5582867.jpeg?auto=compress&cs=tinysrgb&w=600',
      image_3: 'https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      image_4: 'https://images.unsplash.com/photo-1632910121591-29e2484c0259?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2plY3QlMjB0ZXN0aW5nJTIwZGV2bG9wZXJ8ZW58MHx8MHx8fDA%3D',
      image_5: 'https://images.unsplash.com/photo-1631203924626-549ba231917e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8S2FuYmFufGVufDB8fDB8fHww'
    },

    testimonials_1: [
      {
        description: "This course gave me complete clarity on project lifecycles and stakeholder handling. I now lead multiple agile teams with confidence.",
        name: "Siddharth Kulkarni",
        designation: "Project Coordinator",
        company: "Pune",
        image: "https://images.unsplash.com/photo-1642364861013-2c33f2dcfbcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwcGVyc29uJTIwaW5kaWFufGVufDB8fDB8fHww"
      },
      {
        description: "As a fresher from engineering, I wanted to get into project management. This course helped me understand everything from documentation to delivery.",
        name: "Ritika Desai",
        designation: "Project Management Trainee",
        company: "Mumbai",
        image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8fDA%3D"
      },
      {
        description: "I was working in operations and wanted to transition. This course's real-world templates, risk management tips, and mentorship were game changers.",
        name: "Tanmay Patil",
        designation: "Junior Project Manager",
        company: "Bangalore",
        image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&h=200&w=200&q=80"
      },
      {
        description: "The tools taught here — like Jira, ClickUp, and Gantt chart planning — are exactly what I use now daily in my remote project role.",
        name: "Ankita Ghosh",
        designation: "Remote Project Intern",
        company: "Kolkata",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&h=200&w=200&q=80"
      }
    ],

    language_cta: {
      title: 'Manage Projects In the Language You’re Most Confident In.',
      description: `Our Project Management course is available in English, Hindi, and Marathi — making it easy for you to understand, apply, and lead projects effectively in any work setting.`,
      cta: {
        text: 'Learn Project Management in Your Language',
        link: '#'
      }
    },

    companies: [
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg', alt: 'Transistor' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg', alt: 'Reform' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg', alt: 'Tuple' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg', alt: 'SavvyCal' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg', alt: 'Statamic' }
    ],

    course_curriculum_List: {
      title: 'Project Management Course',
      sub_title: 'Plan, execute, and deliver successful projects.',
      description: 'Master project planning, scheduling, budgeting, and team management using industry-standard tools and agile methodologies.',
      image: 'https://alpha.invensislearning.com/storage/images/articles/Info-graphics/roles-of-project-manager.png',
      details: [
        {
          title: 'Introduction to Project Management',
          duration: '0.5 Week',
          is_open: false,
          details: [
            { topic: 'What is Project Management?', days: 0.125 },
            { topic: 'Role of a Project Manager', days: 0.125 },
            { topic: 'Project Lifecycle Overview', days: 0.125 },
            { topic: 'Stakeholders and Deliverables', days: 0.125 },
          ],
        },
        {
          title: 'Project Initiation & Planning',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Creating Project Charter', days: 0.2 },
            { topic: 'Defining Scope and Objectives', days: 0.2 },
            { topic: 'Work Breakdown Structure (WBS)', days: 0.2 },
            { topic: 'Resource Planning', days: 0.2 },
            { topic: 'Risk Identification and Management', days: 0.2 },
          ],
        },
        {
          title: 'Project Scheduling & Estimation',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Time Estimation Techniques', days: 0.2 },
            { topic: 'Gantt Charts & Timelines', days: 0.2 },
            { topic: 'Critical Path Method (CPM)', days: 0.2 },
            { topic: 'PERT Charts', days: 0.2 },
            { topic: 'Milestone Planning', days: 0.2 },
          ],
        },
        {
          title: 'Agile & Scrum Methodology',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Agile Fundamentals', days: 0.2 },
            { topic: 'Scrum Framework & Roles', days: 0.2 },
            { topic: 'Sprint Planning & Execution', days: 0.2 },
            { topic: 'Product Backlog & User Stories', days: 0.2 },
            { topic: 'Scrum Artifacts & Ceremonies', days: 0.2 },
          ],
        },
        {
          title: 'Project Execution & Monitoring',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Project Kick-off', days: 0.2 },
            { topic: 'Task Assignment and Tracking', days: 0.2 },
            { topic: 'Project Monitoring Tools', days: 0.2 },
            { topic: 'Earned Value Management', days: 0.2 },
            { topic: 'Status Reporting & Communication', days: 0.2 },
          ],
        },
        {
          title: 'Quality & Risk Management',
          duration: '0.5 Week',
          is_open: false,
          details: [
            { topic: 'Defining Quality Standards', days: 0.1 },
            { topic: 'Quality Assurance vs Quality Control', days: 0.1 },
            { topic: 'Common Risks in Projects', days: 0.1 },
            { topic: 'Risk Assessment Matrix', days: 0.1 },
            { topic: 'Mitigation Strategies', days: 0.1 },
          ],
        },
        {
          title: 'Project Closure',
          duration: '0.5 Week',
          is_open: false,
          details: [
            { topic: 'Project Review & Final Deliverables', days: 0.125 },
            { topic: 'Lessons Learned Documentation', days: 0.125 },
            { topic: 'Stakeholder Sign-Off', days: 0.125 },
            { topic: 'Project Closure Report', days: 0.125 },
          ],
        },
        {
          title: 'Tools & Case Studies',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Using MS Project / Jira / Trello / Asana', days: 0.25 },
            { topic: 'Project Documentation Templates', days: 0.25 },
            { topic: 'Real-time Case Study Walkthroughs', days: 0.2 },
            { topic: 'Interview Preparation', days: 0.15 },
            { topic: 'Portfolio & Resume Preparation', days: 0.15 },
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
          title: 'Jira & Project Tools',
          description: 'Hands-on training on Jira, Trello, and Confluence for managing teams.',
          cta: {
            text: 'Join Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1581090700227-1e8e203b347b?w=500&auto=format&fit=crop&q=60',
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
      title: 'Build, Execute, Deliver',
      description_1: `Our project management curriculum is built for real-world leadership. You won’t just learn theory you'll drive actual product outcomes.`,
      description_2: `Work through product case studies, manage agile sprints, collaborate with cross-functional teams, and use tools like Jira, Trello, and Miro just like a real PM.`,
      image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: [
        {
          title: 'PM Thinking & Business Analysis',
          description: 'Understand customer problems, define product goals, and break down business needs into actionable solutions.'
        },
        {
          title: 'Agile Methodologies in Action',
          description: 'Run live scrum sprints, write user stories, manage backlogs, and practice sprint planning like a real Product Owner.'
        },
        {
          title: 'Tools of a Modern PM',
          description: 'Master tools like Jira, Miro, Confluence, and Trello to manage tasks, communicate vision, and lead product execution.'
        },
        {
          title: 'Live Product Simulations',
          description: 'Work on real product challenges and collaborate in peer squads to present roadmaps, wireframes, and launch strategies.'
        }
      ]
    },

    download_brouchre: {
      title: 'Plan Better Projects, Build a Stronger Career.',
      description: 'Download our Project Management Course Brochure and your personalized Career Plan. Get a clear roadmap to mastering workflows, Agile, tools, and team leadership — available in English, Hindi, and Marathi.',
      brochure_link: {
        text: 'Download Project Management Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'Download Career Plan',
        link: '#'
      },
    },

    testimonials_2: {
      title: `See how Project Management changed their careers.`,
      description: `Learners from diverse academic and professional backgrounds have transitioned into project-based roles after our training. These success stories show how mastering workflows, Agile, and team collaboration can unlock real opportunities.`,
      details: [
        {
          name: 'Aniket Jadhav',
          location: 'Pune, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=project1',
          description: 'From mechanical engineering to managing IT projects — all in 5 months.',
        },
        {
          name: 'Rutuja Shinde',
          location: 'Nashik, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D',
          video_url: 'https://www.youtube.com/watch?v=project2',
          description: 'MBA graduate to Agile Coordinator — landed her first project role confidently.',
        },
        {
          name: 'Vikram Desai',
          location: 'Kolhapur, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D',
          video_url: 'https://www.youtube.com/watch?v=project3',
          description: 'Switched from support to Scrum Master role after completing the course.',
        }
      ]
    },

    faqs: {
      title: 'Frequently Asked Questions ?',
      details: [
        {
          question: 'Do I need prior experience to join the Project Management course?',
          answer: 'No, this course is designed for beginners and professionals alike. We start from basics and go up to advanced project management techniques.'
        },
        {
          question: 'Will I learn Agile and Scrum methodologies?',
          answer: 'Yes, Agile and Scrum form a core part of the curriculum with practical exercises and real-world case studies.'
        },
        {
          question: 'Is there placement assistance after completing the course?',
          answer: 'Absolutely. We offer mock interviews, resume support, and connect you with companies looking for project management talent.'
        },
        {
          question: 'Are the classes live or self-paced?',
          answer: 'Our program includes live instructor-led sessions along with recorded materials for revision and practice.'
        },
        {
          question: 'What tools will I learn during the course?',
          answer: 'You will master tools like Jira, Trello, MS Project, Miro, and Confluence to manage projects efficiently.'
        },
        {
          question: 'Do you provide certification?',
          answer: 'Yes, on successful completion of the course and project, you will receive a recognized certificate.'
        }
      ]
    },

    technical_benefit: {
      sub_title: `Technical Benefits`,
      title: `Skills that make you project-ready.`,
      description: `Our Project Management program empowers you with practical knowledge of managing real projects, team collaboration, and tools like Jira, Trello, and Agile boards — everything needed to succeed in a PM role.`,
      details: [
        {
          title: 'Agile & Scrum Methodologies',
          description: 'Gain deep understanding of Agile practices, Scrum roles, sprint planning, and ceremonies used in modern project teams.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2a10 10 0 1 1-7.07 2.93A10 10 0 0 1 12 2Zm0 18a8 8 0 1 0-5.66-2.34A8 8 0 0 0 12 20Zm-1-9V8a1 1 0 1 1 2 0v3a1 1 0 0 1-.293.707l-2 2a1 1 0 0 1-1.414-1.414L11 11Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Hands-on Tools Training',
          description: 'Work with real project tools like Jira, Trello, Asana, and MS Project. Learn task tracking, backlog grooming, and Gantt chart creation.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h5a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 16 9v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm12 5.414L10.586 6H4v10h10V9.414Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Real-World PM Scenarios',
          description: 'Simulate real project challenges — manage deadlines, team conflicts, sprint re-planning — and learn to lead like a pro.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm9-3a1 1 0 1 0-2 0v2a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414-1.414L11 9.586V7Z"/></svg>`
        }
      ]
    },


    beyond_learning: {
      sub_title: `Beyond Learning`,
      title: `Everything to Shape Your Project Manager Career.`,
      description: `Learn how to lead teams, manage timelines, handle clients, and deliver successful projects. This is your step-by-step path to becoming a confident and capable Project Manager.`,
      details: [
        {
          title: 'End-to-End Project Lifecycle Mastery',
          description: 'Plan, execute, monitor, and deliver projects using industry best practices and proven frameworks.'
        },
        {
          title: 'Leadership & Team Management',
          description: 'Build the skills to inspire teams, resolve conflicts, and manage roles and responsibilities effectively.'
        },
        {
          title: 'Agile & Scrum Execution',
          description: 'Master agile methodologies, run sprint cycles, manage daily standups, and ensure timely delivery.'
        },
        {
          title: 'Client & Stakeholder Handling',
          description: 'Communicate progress, manage expectations, and deliver reports with clarity and confidence.'
        },
        {
          title: 'Tool Proficiency',
          description: 'Get hands-on with tools like Jira, Trello, Confluence, and Gantt charts for full control over your projects.'
        },
        {
          title: 'Project Manager Career Prep',
          description: 'Ace interviews, build your resume, and create case studies that showcase your ability to lead real projects.'
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
      description: 'At The Contrast, we don’t just train you to test — we transform you into a confident, job-ready Quality Analyst. Whether you come from a non-technical background or are switching roles, our program takes you from basics to mastery through real tools, projects, and interview prep.',
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
      sub_title: 'Beginner’s Mindset in Project Management',
      title: 'What You Think You Need vs. What You Actually Need',
      description: "Many new PMs chase certifications or tools first. But true success starts with mindset, communication, and planning fundamentals.",
      think_you_need: [
        'Instant PMP or PRINCE2 certification',
        'Mastering complex tools like MS Project or JIRA immediately',
        'Memorizing every project methodology (Agile, Scrum, etc.)'
      ],
      actually_need: [
        'Clear understanding of project lifecycle, scope, and stakeholder management',
        'Strong communication, planning, and team coordination skills',
        'Hands-on experience with small projects and real scenarios'
      ]
    }
  }
}