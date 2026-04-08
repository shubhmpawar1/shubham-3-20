import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagmentSService {

  project_management_content = {

    hero_section: {
      title: 'Strategic Planning. Seamless Execution. Scalable Growth.',
      pill_1: 'Plan Smart',
      pill_2: 'Execute Fast',
      pill_3: 'On-Time Delivery',
      quick_look: 'Turn vision into measurable results.',
      description: 'Delivering successful projects isn’t just about deadlines — it’s about driving real business outcomes. Our Project Management Services provide strategic planning, expert execution, and full-cycle oversight to ensure your IT initiatives are delivered on time, within budget, and with measurable impact.',
      cta_1: {
        text: "View our Work",
        link: '#'
      },
      cta_2: {
        text: "Schedule Your No-Cost Planning Consultation",
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
        description: "We struggled with missed deadlines before bringing in The Contrast. Their team not only delivered flawlessly but also helped us establish better internal processes.",
        name: "Siddharth Kulkarni",
        designation: "Project Coordinator",
        company: "Pune",
        image: "https://images.unsplash.com/photo-1642364861013-2c33f2dcfbcf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8b2ZmaWNlJTIwcGVyc29uJTIwaW5kaWFufGVufDB8fDB8fHww"
      },
      {
        description: "Incredible attention to detail and communication. They acted like true partners, keeping stakeholders aligned and managing risks proactively. Highly recommend.",
        name: "Ritika Desai",
        designation: "CTO",
        company: "Mumbai",
        image: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tYW58ZW58MHx8MHx8fDA%3D"
      },
      {
        description: "They took our vague idea and turned it into a structured project with clear milestones. The execution was seamless, and their reporting kept everyone in the loop.",
        name: "Tanmay Patil",
        designation: "Junior Project Manager",
        company: "Bangalore",
        image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&h=200&w=200&q=80"
      },
      {
        description: "Professional, proactive, and detail-oriented. The Contrast brought real value by managing our cloud migration project with precision and transparency.",
        name: "Ankita Ghosh",
        designation: "Operations Manager",
        company: "Kolkata",
        image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&h=200&w=200&q=80"
      }
    ],

    language_cta: {
      title: 'Manage Projects with Precision and Expertise',
      description: `Our Project Management service ensures your IT initiatives are planned, executed, and delivered seamlessly. We bring structured processes, industry best practices, and dedicated leadership to manage every phase of your project—minimizing risks and maximizing results.`,
      cta: {
        text: 'Comprehensive Project Oversight from Start to Finish',
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
      title: 'Plan. Execute. Deliver.',
      description_1: `Our Project Management services are built for impact. We don’t just manage timelines — we drive measurable outcomes by aligning strategy with execution and ensuring every detail is handled with precision.`,
      description_2: `Work with experienced project leads who manage agile sprints, collaborate with cross-functional teams, and utilize tools like Jira, Trello, and Miro to keep your initiatives on track and on target.`,
      image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=600',
      details: [
        {
          title: 'Strategic Planning & Business Alignment',
          description: 'We translate your business goals into actionable project plans—defining scope, identifying risks, and aligning deliverables with strategic objectives..'
        },
        {
          title: 'Agile Project Delivery',
          description: 'We lead projects using Agile methodologies—managing backlogs, running stand-ups and sprints, and continuously adapting to changing needs to accelerate delivery.'
        },
        {
          title: 'Tools that Power Execution',
          description: 'From Jira and Trello to Confluence and Miro, we use the latest project management tools to streamline workflows, enhance transparency, and drive accountability.'
        },
        {
          title: 'Real-World Implementation',
          description: 'Our teams operate in real environments, collaborating across departments to build roadmaps, manage resources, and execute launches with confidence and control.'
        }
      ]
    },

    download_brouchre: {
      title: 'Plan Better Projects, Deliver Stronger Results.',
      description: 'Download our Project Management Services Brochure to explore how we help businesses execute complex projects with precision. Get a clear view of our approach, tools, and delivery frameworks designed to drive success at every stage.',
      brochure_link: {
        text: 'Download Project Management Services Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'View Service Overview',
        link: '#'
      },
    },

    testimonials_2: {
      title: `See How We Transformed Businesses`,
      description: `Organizations across industries have achieved smoother execution, faster delivery, and greater ROI by partnering with us. These stories highlight how expert project management leads to real, measurable impact.`,
      details: [
        {
          name: 'Aniket Jadhav',
          location: 'Pune, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=project1',
          description: 'We partnered with The Contrast to manage a time-sensitive software project. They ensured every milestone was met without compromising quality.',
        },
        {
          name: 'Rutuja Shinde',
          location: 'Nashik, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXB1dGVyJTIwc29mdHdhcmV8ZW58MHx8MHx8fDA%3D',
          video_url: 'https://www.youtube.com/watch?v=project2',
          description: 'From planning to execution, their support helped us deliver a multi-team ERP rollout with zero scope creep. We couldn’t have done it without them.',
        },
        {
          name: 'Vikram Desai',
          location: 'Kolhapur, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVzdGluZ3xlbnwwfHwwfHx8MA%3D%3D',
          video_url: 'https://www.youtube.com/watch?v=project3',
          description: 'Our internal team lacked structure in managing client deliverables. Their services brought clarity, transparency, and real progress.',
        }
      ]
    },

    faqs: {
      title: 'Frequently Asked Questions ?',
      details: [
        {
          question: 'What types of projects do you manage?',
          answer: 'We manage a wide range of IT and business projects including software development, cloud migrations, infrastructure upgrades, digital transformations, and more.'
        },
        {
          question: 'Do you follow Agile or traditional project management methods?',
          answer: 'Yes, we tailor our approach based on your project needs. Our team is experienced in Agile, Scrum, and traditional Waterfall methodologies to ensure the most effective delivery.'
        },
        {
          question: 'Can you work with our in-house teams?',
          answer: 'Absolutely. We collaborate closely with your internal teams, stakeholders, and vendors to ensure alignment, transparency, and seamless execution.'
        },
        {
          question: 'What tools do you use for project tracking and communication?',
          answer: 'We use industry-standard tools like Jira, Trello, Confluence, Asana, and Miro for task management, sprint planning, documentation, and team collaboration.'
        },
        {
          question: 'How do you ensure projects stay on time and within budget?',
          answer: 'Through detailed planning, regular progress reviews, risk management, and clear communication, we keep your project aligned with timelines and financial goals.'
        },
        {
          question: 'Can we request a dedicated Project Manager?',
          answer: 'Yes, based on the project scope and complexity, we assign dedicated Project Managers to lead your initiatives from start to finish.'
        }
      ]
    },

    technical_benefit: {
      sub_title: `Project Management Excellence`,
      title: `Solutions that make your projects run smarter, faster, and smoother.`,
      description: `Our Project Management Services deliver real value by applying structured methodologies, effective collaboration, and the right tools to ensure your project’s success every time.`,
      details: [
        {
          title: 'Agile & Scrum Execution',
          description: 'We lead projects using Agile frameworks—managing backlogs, facilitating sprints, and conducting reviews to ensure continuous progress and rapid delivery.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2a10 10 0 1 1-7.07 2.93A10 10 0 0 1 12 2Zm0 18a8 8 0 1 0-5.66-2.34A8 8 0 0 0 12 20Zm-1-9V8a1 1 0 1 1 2 0v3a1 1 0 0 1-.293.707l-2 2a1 1 0 0 1-1.414-1.414L11 11Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Tools that Drive Productivity',
          description: 'We leverage powerful tools like Jira, Trello, Asana, and MS Project to track progress, manage resources, and provide complete visibility into every phase of your project.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M2 4a2 2 0 0 1 2-2h5a1 1 0 0 1 .707.293l6 6A1 1 0 0 1 16 9v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm12 5.414L10.586 6H4v10h10V9.414Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Real-World Delivery Expertise',
          description: 'From shifting priorities to cross-team coordination, we handle real project dynamics—keeping your initiatives on time, on budget, and aligned with business goals.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm9-3a1 1 0 1 0-2 0v2a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414-1.414L11 9.586V7Z"/></svg>`
        }
      ]
    },


    beyond_learning: {
      sub_title: `Your Vision. Delivered with Precision.`,
      title: `Comprehensive Project Management That Moves Business Forward.`,
      description: `Our services are designed to turn strategy into execution — managing complexity, aligning stakeholders, and ensuring results without compromise.`,
      details: [
        {
          title: 'Full-Scope Project Delivery',
          description: 'We handle every stage — from scoping and scheduling to risk control and final handover — ensuring your project meets goals on time and within budget.'
        },
        {
          title: 'Team Leadership & Execution Control',
          description: 'Our experienced PMs bring structure and clarity, keeping teams productive, timelines intact, and progress measurable.'
        },
        {
          title: 'Agile & Scrum Implementation',
          description: 'We manage Agile sprints, daily standups, retrospectives, and backlogs to keep delivery on track and adaptive to change.'
        },
        {
          title: 'Client & Stakeholder Engagement',
          description: 'Expect proactive communication, transparent reporting, and effective stakeholder management throughout the project lifecycle.'
        },
        {
          title: 'Advanced Tool Proficiency',
          description: 'We use Jira, Trello, Asana, Confluence, and more to give you full visibility and control — from planning to execution.'
        },
        {
          title: 'Stakeholder Confidence',
          description: 'We keep stakeholders informed and engaged through clear communication, detailed reporting, and proactive issue management.'
        }
      ]
    },


    learners_section: {
      sub_title: 'Who We Work With',
      title: 'Clients from All Sectors. Projects of Every Scale.',
      description: `Our Project Management Services support organizations across industries — whether you're launching a product, scaling operations, or streamlining complex workflows.`,
      details: [
        {
          description: '“Their structured approach brought clarity and momentum to our product rollout.”',
          name: 'Sneha Kulkarni',
          role: '#Startup Founder',
          image: 'https://tse1.mm.bing.net/th?id=OIP.BnFxTdGXnR3aYi6NeQm41wHaHa&pid=Api&P=0&h=180',
          logo: 'https://tailwindcss.com/plus-assets/img/logos/savvycal-logo-gray-900.svg',
          highlight: true
        },
        {
          description: '“They helped our internal team stay focused and deliver a key client project on time.”',
          name: 'Aarav Patil',
          role: '#IT Manager',
          image: 'https://tse1.mm.bing.net/th?id=OIP.psKsUtGDhO2DNIUZ9UGh6AHaHa&pid=Api&P=0&h=180',
        },
        {
          description: '“Managing our first cross-functional initiative felt easy with their leadership.”',
          name: 'Rohit Jadhav',
          role: '#Operations Head',
          image: 'https://tse4.mm.bing.net/th?id=OIP.jBOx03JO-3h0Nh7_PVB4aQAAAA&pid=Api&P=0&h=180',
        },
        {
          description: '“We had tight deadlines and changing requirements — they handled it all with precision.”',
          name: 'Neha More',
          role: '#Digital Agency Lead',
          image: 'https://tse3.mm.bing.net/th?id=OIP.os7uM5TJXlUufJbHt9t7UAHaHa&pid=Api&P=0&h=180',
        },
        {
          description: '“Their project managers brought structure and visibility to our otherwise scattered efforts.”',
          name: 'Aniket Shinde',
          role: '#Manufacturing Coordinator',
          image: 'https://tse2.mm.bing.net/th?id=OIP.W8pbMr2kaHuKEMhzf3gfNAAAAA&pid=Api&P=0&h=180',
        }
      ]
    },

    have_more_questions: {
      title: 'Ready to Deliver with Confidence?',
      description: 'At The Contrast, we don’t just manage timelines — we lead projects to success. Whether you’re launching, scaling, or optimizing, our expert project managers bring precision, accountability, and seamless execution to every phase.',
      cta_1: {
        text: 'Get Project Management Support',
        link: '#'
      },
      cta_2: {
        text: 'Explore Our Work',
        link: '#'
      },
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
      sub_title: 'The Real Value of Expert Project Management',
      title: 'What You Think You Need vs. What Actually Delivers Results',
      description: "Many organizations assume that buying tools or adopting a framework is enough. But real impact comes from clear strategy, skilled leadership, and end-to-end execution.",
      think_you_need: [
        'The latest project management software',
        'A rigid Agile or Scrum implementation',
        'Hiring more people to solve delays'
      ],
      actually_need: [
        'A clear roadmap, scope control, and milestone tracking',
        'Experienced project leaders who align teams and remove blockers',
        'Proactive communication, risk management, and on-time delivery'
      ]
    }
  }
}
