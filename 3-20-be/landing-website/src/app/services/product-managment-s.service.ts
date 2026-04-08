import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductManagmentSService {

  product_management_content = {

    hero_section: {
      title: 'Define the Vision. Drive the Roadmap. Deliver Real Value.',
      pill_1: 'Strategic Thinking',
      pill_2: 'Agile Execution',
      pill_3: 'Impactful Delivery',
      quick_look: 'Transform ideas into market-ready products',
      description: 'Join our Product Management program to master the skills and tools needed to lead successful products from conception to launch. gain hands-on experience with real-world projects.',
      cta_1: {
        text: 'Enroll Now Product Management',
        link: '#'
      },
      cta_2: {
        text: 'Schedule a Free Consultation',
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
        description: "The product strategy workshop helped us clarify our vision and prioritize features that mattered most. It was a game-changer for our MVP planning.",
        name: "Rohit Deshpande",
        designation: "Founder",
        company: "AgriNext Solutions",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        description: "The consultation helped us align our product roadmap with real user needs. Their team’s clarity, structure, and market insights were exceptional.",
        name: "Sneha Kulkarni",
        designation: "Product Lead",
        company: "FinWise",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      },
      {
        description: "We saved months of development time by focusing only on what users truly wanted. Their MVP planning process is incredibly effective and lean.",
        name: "Vikram Joshi",
        designation: "CTO",
        company: "EduNova",
        image: "https://randomuser.me/api/portraits/men/45.jpg"
      },
      {
        description: "They didn’t just consult—they became part of our product team. The roadmap, user flow, and go-to-market support gave us the confidence to launch successfully.",
        name: "Anuja Patil",
        designation: "CEO",
        company: "FitLife App",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
      }
    ],

    language_cta: {
      title: 'Product Management in Your Preferred Language',
      description: `Language available in English, Hindi, and Marathi to help you grasp core concepts and tools comfortably.`,
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
      title: 'Product Strategy & Consultation',
      description_1: 'We help you define a clear and actionable product strategy tailored to your business goals and market needs.',
      description_2: 'Our goal is to empower your team to build products that resonate with your customers and achieve sustainable growth.',
      image: 'https://images.unsplash.com/photo-1571573750055-39cfc5545c23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVyc29uJTIwd29ya2luZyUyMG9uJTIwcHJvZHVjdCUyMHBsYW5uaW5nJTIwd2l0aCUyMG5vdGVzfGVufDB8fDB8fHww',
      details: [
        {
          title: 'Market Analysis & Competitor Benchmarking',
          description: 'Identify opportunities through comprehensive market research and competitor analysis.'
        },
        {
          title: 'Product Vision & Value Proposition',
          description: 'Define a compelling product vision, mission, and unique value proposition.'
        },
        {
          title: 'Roadmap Planning',
          description: 'Craft detailed product roadmaps with prioritized features and milestones.'
        },
        {
          title: 'Goal Alignment',
          description: 'Align product goals with overall business objectives and customer needs.'
        },
        {
          title: 'Resource & Risk Management',
          description: 'Advise on optimal resource allocation, risk mitigation, and go-to-market planning.'
        },
        {
          title: 'Continuous Strategic Guidance',
          description: 'Provide ongoing support to adapt strategy based on market changes and user feedback.'
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
      title: 'What Our Clients Say',
      description: 'Startups to scale-ups – our clients have turned ideas into impactful products with our strategic guidance. Here’s what they have to say about working with us.',
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
          question: "What exactly is the Product Management service?",
          answer: "This service handles the entire product lifecycle – from idea validation to feature prioritization, user flow design, roadmap preparation, execution support, and go-to-market strategy.",
          expanded: false,
        },
        {
          question: "Can this service work with our existing development or design team?",
          answer: "Yes. Our approach is collaborative. We work closely with your internal developers, designers, and stakeholders to ensure alignment.",
          expanded: false,
        },
        {
          question: "Will you create a roadmap for us?",
          answer: "Absolutely. We develop a clear and practical product roadmap aligned with your goals.",
          expanded: false,
        },
        {
          question: "What is included in MVP planning?",
          answer: "MVP planning includes feature prioritization (must-have vs nice-to-have), user flow design, wireframing, and resource estimation.",
          expanded: false,
        },
        {
          question: "How long does this service take to complete?",
          answer: "Initial strategy and planning typically take 2–3 weeks. The execution phase duration depends on product complexity and milestones.",
          expanded: false,
        },
        {
          question: "Which tools are used in this service?",
          answer: "We use modern product management tools like Jira, Confluence, Miro, Notion, Google Analytics, and Mixpanel.",
          expanded: false,
        }
      ]
    },

    technical_benefit: {
      sub_title: 'Why Choose Our Product Management Service?',
      title: 'Technical Benefits That Drive Success',
      description: 'Our product management approach integrates the latest tools and methodologies to ensure efficient, data-driven, and user-centric product delivery.',
      details: [
        {
          title: 'Data-Driven Decision Making',
          description: 'Leverage analytics and user feedback to prioritize features and optimize product performance continuously.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm.75 14.75a.75.75 0 01-1.5 0V11a.75.75 0 011.5 0zm-.75-6a1 1 0 110 2 1 1 0 010-2z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Agile & Adaptive Processes',
          description: 'Implement agile methodologies ensuring quick iterations, faster time-to-market, and flexible responses to change.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm.75 14.75a.75.75 0 01-1.5 0V11a.75.75 0 011.5 0zm-.75-6a1 1 0 110 2 1 1 0 010-2z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Comprehensive Roadmapping',
          description: 'Create clear, actionable product roadmaps aligned with business goals and customer needs.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm.75 14.75a.75.75 0 01-1.5 0V11a.75.75 0 011.5 0zm-.75-6a1 1 0 110 2 1 1 0 010-2z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Cross-Functional Collaboration',
          description: 'Facilitate seamless coordination between design, development, marketing, and sales teams to deliver cohesive products.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm.75 14.75a.75.75 0 01-1.5 0V11a.75.75 0 011.5 0zm-.75-6a1 1 0 110 2 1 1 0 010-2z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Risk Mitigation & Resource Optimization',
          description: 'Identify potential risks early and allocate resources effectively to maximize ROI and reduce delays.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm.75 14.75a.75.75 0 01-1.5 0V11a.75.75 0 011.5 0zm-.75-6a1 1 0 110 2 1 1 0 010-2z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Enhanced User Experience',
          description: 'Focus on user research and validation to build intuitive products that truly solve customer problems.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm.75 14.75a.75.75 0 01-1.5 0V11a.75.75 0 011.5 0zm-.75-6a1 1 0 110 2 1 1 0 010-2z" clip-rule="evenodd"/></svg>`
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
      title: 'Have More Questions?',
      description: 'We are here to help you clear all your doubts. Reach out through the options below to get more information.',
      cta_1: {
        text: 'Enroll Now',
        link: '#'
      },
      cta_2: {
        text: 'Contact Us',
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
      sub_title: 'Perception vs Reality',
      title: 'What You Think You Need vs What You Actually Need',
      description: "Understanding the difference between perceived needs and actual requirements is key to building successful products.",
      think_you_need: [
        'A beautiful and attractive design only',
        'Lots of features all at once',
        'Launching the product as quickly as possible',
        'Following every market trend'
      ],
      actually_need: [
        'A design that truly meets user needs',
        'Focus on important and impactful features',
        'Careful product development with proper planning',
        'Selecting trends that align with your goals'
      ]
    }
  }
}
