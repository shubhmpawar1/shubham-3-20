import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductManagementService {

  constructor() { }

  product_management_content = {

    hero_section: {
      title: 'Think Strategically. Lead Confidently. Deliver Value.',
      pill_1: 'Think Smart',
      pill_2: 'Lead Boldly',
      pill_3: 'Deliver Real Impact',
      quick_look: 'Lead with customer understanding',
      description: 'Master discovery, design, and Agile with real-world projects and expert guidance.',
      cta_1: {
        text: 'Enroll in Product Management',
        link: '#'
      },
      cta_2: {
        text: 'Request a Free Career Consultation',
        link: '#'
      },
      image_1: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?w=500&auto=format&fit=crop&q=60',
      image_2: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGVib2FyZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      image_3: 'https://images.pexels.com/photos/32299941/pexels-photo-32299941/free-photo-of-dynamic-cryptocurrency-market-analysis-on-screens.jpeg?auto=compress&cs=tinysrgb&w=600',
      image_4: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60',
      image_5: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60'
    },

    testimonials_1: [
      {
        description: "The course helped me master prioritization and stakeholder communication. The practical approach made me ready for real product challenges.",
        name: "Sneha Patil",
        designation: "Associate Product Manager",
        company: "Mumbai",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        description: "I built my first product roadmap during this course, and it helped me ace my job interview for a Product Owner role.",
        name: "Karan Joshi",
        designation: "Product Owner Intern",
        company: "Hyderabad",
        image: "https://randomuser.me/api/portraits/men/34.jpg"
      }
    ],

    language_cta: {
      title: 'Learn Product Management in Your Preferred Language',
      description: `Our course is available in English, Hindi, and Marathi to help you grasp core concepts and tools comfortably.`,
      cta: {
        text: 'Start Learning Now',
        link: '#'
      },
    },

    companies: [
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg', alt: 'Transistor' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg', alt: 'Reform' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg', alt: 'Tuple' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg', alt: 'SavvyCal' },
      { src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg', alt: 'Statamic' },
    ],

    course_curriculum_List: {
      title: 'Product Management Course',
      sub_title: 'Learn to build, launch, and scale successful products.',
      description: 'Gain expertise in market research, product strategy, agile methodologies, and cross-functional leadership to drive product success.',
      image: 'https://filearchive.cnews.ru/img/book/2022/07/21/product-lifecycle-management.png',
      details: [
        {
          title: 'Introduction to Product Management',
          duration: '0.5 Week',
          is_open: false,
          details: [
            { topic: 'What is Product Management?', days: 0.125 },
            { topic: 'Role of a Product Manager', days: 0.125 },
            { topic: 'Product Lifecycle Overview', days: 0.125 },
            { topic: 'Skills Required for PM', days: 0.125 },
          ],
        },
        {
          title: 'Market Research & User Discovery',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Understanding Market Needs', days: 0.2 },
            { topic: 'Competitor Analysis', days: 0.2 },
            { topic: 'User Personas', days: 0.2 },
            { topic: 'Problem Discovery & Validation', days: 0.2 },
            { topic: 'Customer Interviews', days: 0.2 },
          ],
        },
        {
          title: 'Product Strategy & Vision',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Creating Product Vision', days: 0.2 },
            { topic: 'Setting Long-Term Goals', days: 0.2 },
            { topic: 'Defining KPIs & Success Metrics', days: 0.2 },
            { topic: 'Product Differentiation', days: 0.2 },
            { topic: 'Business Model Canvas', days: 0.2 },
          ],
        },
        {
          title: 'Roadmapping & Prioritization',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Creating Product Roadmaps', days: 0.2 },
            { topic: 'MVP vs Full Product', days: 0.2 },
            { topic: 'Prioritization Frameworks (RICE, MoSCoW)', days: 0.2 },
            { topic: 'Feature Scoping', days: 0.2 },
            { topic: 'Stakeholder Communication', days: 0.2 },
          ],
        },
        {
          title: 'Agile & Scrum Methodologies',
          duration: '1.5 Week',
          is_open: false,
          details: [
            { topic: 'Agile Product Development', days: 0.3 },
            { topic: 'Scrum Roles: PO, SM, Team', days: 0.3 },
            { topic: 'Sprint Planning & Backlog Grooming', days: 0.3 },
            { topic: 'Story Writing (User Stories, Acceptance Criteria)', days: 0.3 },
            { topic: 'Daily Stand-ups & Sprint Reviews', days: 0.3 },
          ],
        },
        {
          title: 'Wireframing & Prototyping',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Introduction to Wireframing', days: 0.2 },
            { topic: 'Creating Mockups with Figma / Balsamiq', days: 0.2 },
            { topic: 'Prototyping for Feedback', days: 0.2 },
            { topic: 'Iterative Design Thinking', days: 0.2 },
            { topic: 'Usability Testing', days: 0.2 },
          ],
        },
        {
          title: 'Go-to-Market Strategy & Launch',
          duration: '0.5 Week',
          is_open: false,
          details: [
            { topic: 'Preparing for Product Launch', days: 0.1 },
            { topic: 'Go-to-Market Planning', days: 0.1 },
            { topic: 'Beta Testing & Feedback Loops', days: 0.1 },
            { topic: 'Pricing Strategies', days: 0.1 },
            { topic: 'Product Adoption Lifecycle', days: 0.1 },
          ],
        },
        {
          title: 'Post-Launch & Growth',
          duration: '1 Week',
          is_open: false,
          details: [
            { topic: 'Product Analytics Basics', days: 0.2 },
            { topic: 'User Retention Strategies', days: 0.2 },
            { topic: 'A/B Testing', days: 0.2 },
            { topic: 'Continuous Improvement', days: 0.2 },
            { topic: 'Working with Sales, Marketing & Support Teams', days: 0.2 },
          ],
        },
      ],
    },

    courses: {
      title: `Explore Our Courses`,
      description: `Learn essential skills that boost your product management career.`,
      details: [
        {
          id: 1,
          title: 'Product Discovery & Validation',
          description: 'Master techniques to discover user needs and validate product ideas.',
          cta: {
            text: 'Join Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 2,
          title: 'Agile Product Development',
          description: 'Learn Agile frameworks and manage sprints effectively.',
          cta: {
            text: 'Join Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 3,
          title: 'Product Analytics & Metrics',
          description: 'Understand data-driven decision-making and product KPIs.',
          cta: {
            text: 'Join Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60',
        }
      ],
    },

    advanced_curriculum: {
      title: 'From Theory to Real Product Leadership',
      description_1: `Gain hands-on experience with live product challenges and team collaboration.`,
      description_2: `Learn to use tools like Jira, Confluence, and Mixpanel to manage and analyze your products effectively.`,
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60',
      details: [
        {
          title: 'Customer Research Techniques',
          description: 'Learn how to conduct interviews, surveys, and analyze feedback.'
        },
        {
          title: 'Roadmapping and Prioritization',
          description: 'Create clear product roadmaps and prioritize features based on impact.'
        },
        {
          title: 'Agile Delivery & Scrum',
          description: 'Work in Agile teams, plan sprints, and deliver value incrementally.'
        },
        {
          title: 'Metrics & Data Analysis',
          description: 'Use data to measure success and iterate your product strategy.'
        }
      ]
    },

    download_brouchre: {
      title: 'Download Your Product Management Course Guide',
      description: 'Get the detailed course brochure and personalized career roadmap to kickstart your product management journey.',
      brochure_link: {
        text: 'Download Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'Download Career Plan',
        link: '#'
      },
    },

    testimonials_2: {
      title: `Success Stories from Product Management Graduates`,
      description: `Hear how our alumni transitioned into successful product roles and made impactful changes.`,
      details: [
        {
          name: 'Meera Kulkarni',
          location: 'Pune, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=product_story1',
          summary: 'From software developer to product manager in 6 months.',
        },
        {
          name: 'Siddharth Patil',
          location: 'Nashik, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=product_story2',
          summary: 'MBA graduate who landed a PM role after completing this course.',
        },
        {
          name: 'Aarti Deshmukh',
          location: 'Nagpur, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=product_story3',
          summary: 'Shifted from marketing to product management successfully.',
        }
      ]
    },

    faqs: {
      title: 'Frequently Asked Questions ?',
      details: [
        {
          question: 'Is this course suitable for beginners?',
          answer: 'Yes, this course starts from basics and gradually moves to advanced concepts suitable for all levels.',
          expanded: false,
        },
        {
          question: 'Do I need prior technical knowledge?',
          answer: 'No, prior coding or technical skills are not required. We focus on product skills and tools.',
          expanded: false,
        },
        {
          question: 'How much time do I need to commit weekly?',
          answer: 'Around 6-8 hours per week to complete lectures, assignments, and practical projects.',
          expanded: false,
        },
        {
          question: 'Will I get a certificate after completion?',
          answer: 'Yes, you will receive a verified certificate to showcase your product management skills.',
          expanded: false,
        },
        {
          question: 'Can I access course material after completion?',
          answer: 'Yes, lifetime access to all course materials is provided.',
          expanded: false,
        }
      ]
    },

    technical_benefit: {
      sub_title: `Why Choose Our Product Management Course?`,
      title: `Skills to lead product innovation.`,
      description: `Gain practical expertise in product discovery, Agile workflows, stakeholder management, and data analytics — all critical to becoming a successful product manager.`,
      details: [
        {
          title: 'User-Centered Design',
          description: 'Learn to empathize with users and craft products that solve real problems.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm.75 14.75a.75.75 0 01-1.5 0V11a.75.75 0 011.5 0zm-.75-6a1 1 0 110 2 1 1 0 010-2z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Agile & Scrum Methodologies',
          description: 'Manage projects efficiently using industry-leading frameworks.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4"/></svg>`
        },
        {
          title: 'Data-Driven Decisions',
          description: 'Use analytics and KPIs to steer product success.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3z"/></svg>`
        },
        {
          title: 'Effective Stakeholder Communication',
          description: 'Learn to collaborate and influence cross-functional teams.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path d="M7 8h10v8H7z"/></svg>`
        },
        {
          title: 'Roadmap & Backlog Prioritization',
          description: 'Master the art of prioritizing features and tasks to maximize product impact.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zM4 12h10v2H4zM4 18h8v2H4z"/></svg>`
        },
        {
          title: 'Risk Management & Problem Solving',
          description: 'Identify potential risks early and develop strategies to mitigate them effectively.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zM11 6h2v6h-2V6zm0 8h2v2h-2v-2z"/></svg>`
        }
      ]
    },

    beyond_learning: {
      sub_title: `Beyond Learning`,
      title: `Shape Your Product Management Career with Us.`,
      description: `At The Contrast, we don’t just teach tools — we prepare you to lead. Build leadership, decision-making, and organizational skills essential for tomorrow's PMs.`,
      details: [
        {
          title: '1-on-1 Product Mentorship',
          description: 'Work with senior product managers to develop your thinking around product strategy, prioritization, and stakeholder management.'
        },
        {
          title: 'Product Portfolio & Case Studies',
          description: 'Craft a compelling portfolio with real-world case studies, product specs, and wireframes to showcase your product thinking.'
        },
        {
          title: 'PM Interview Prep',
          description: 'Ace product management interviews with mock case rounds, product design exercises, and business sense assessments.'
        },
        {
          title: 'User Research & Problem Discovery',
          description: 'Learn how to conduct insightful user interviews, synthesize feedback, and define real customer problems worth solving.'
        },
        {
          title: 'Cross-functional Leadership Training',
          description: 'Develop the skills to lead engineering, design, and business teams without formal authority.'
        },
        {
          title: 'Product Management Resource Vault',
          description: 'Lifetime access to templates like PRDs, roadmaps, prioritization matrices, and launch checklists.'
        }
      ]
    },

    learners_section: {
      sub_title: 'Who Are Our Learners',
      title: 'Diverse Learners, One Goal',
      description: `The Contrast supports aspirants from all backgrounds — whether starting fresh or switching careers.`,
      details: [
        {
          description: '“Weekend sessions helped me upskill without quitting my job.”',
          name: 'Sneha Kulkarni',
          role: '#Working Professional',
          image: 'https://tse1.mm.bing.net/th?id=OIP.BnFxTdGXnR3aYi6NeQm41wHaHa&pid=Api&P=0&h=180',
          logo: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
          highlight: true
        },
        {
          description: '“I gained industry-ready skills even before graduating.”',
          name: 'Aarav Patil',
          role: '#College Student',
          image: 'https://tse1.mm.bing.net/th?id=OIP.psKsUtGDhO2DNIUZ9UGh6AHaHa&pid=Api&P=0&h=180',
        },
        {
          description: '“Switching from mechanical to IT was seamless thanks to The Contrast.”',
          name: 'Rohit Jadhav',
          role: '#Career Switcher',
          image: 'https://tse4.mm.bing.net/th?id=OIP.jBOx03JO-3h0Nh7_PVB4aQAAAA&pid=Api&P=0&h=180',
        },
        {
          description: '“Mentorship gave me confidence to handle freelance projects better.”',
          name: 'Neha More',
          role: '#Freelancer',
          image: 'https://tse3.mm.bing.net/th?id=OIP.os7uM5TJXlUufJbHt9t7UAHaHa&pid=Api&P=0&h=180',
        },
        {
          description: '“Their approach made PM skills accessible for diploma holders like me.”',
          name: 'Aniket Shinde',
          role: '#Diploma Holder',
          image: 'https://tse2.mm.bing.net/th?id=OIP.W8pbMr2kaHuKEMhzf3gfNAAAAA&pid=Api&P=0&h=180',
        }
      ]
    },

    have_more_questions: {
      title: 'Kickstart Your Product Management Career Today.',
      description: `At The Contrast, we transform learners into confident, job-ready Project Managers — from fundamentals to leadership skills, with real-world tools and interview prep.`,
      cta_1: {
        text: 'Start your PM journey',
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
      sub_title: 'Beginner’s Mindset in Product Management',
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
