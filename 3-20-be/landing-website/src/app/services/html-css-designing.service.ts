import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlCssDesigningService {

  constructor() { }

  html_css_designing_content = {

    hero_section: {
      title: 'Structure with Style. Design with Purpose. Deliver Precisely.',
      pill_1: 'Responsive',
      pill_2: 'Accessible',
      pill_3: 'Elegant',
      quick_look: 'Designing the visual language of the web',
      description: 'At The Contrast, we specialize in creating visually appealing and functionally robust HTML and CSS designs that look perfect on every screen, offering delightful user experiences. Our design systems are structured, scalable, and built for performance.',
      cta_1: {
        text: "View Our HTML/CSS Designs",
        link: '#'
      },
      cta_2: {
        text: 'Get a Free UI Consultation',
        link: '#'
      },
      image_1: 'https://as1.ftcdn.net/jpg/05/31/71/02/1000_F_531710260_ByieqNe7Ut6QBHgIR7xgdsxH7gICrHr1.jpg',
      image_2: 'https://images.unsplash.com/photo-1622858674121-e8cb8b5e6d9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHRtbCUyRmNzc3xlbnwwfHwwfHx8MA%3D%3D',
      image_3: 'https://images.unsplash.com/photo-1599837565318-67429bde7162?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aHRtbHxlbnwwfHwwfHx8MA%3D%3D',
      image_4: 'https://media.istockphoto.com/id/1358013032/photo/web-development-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=LGEn7_vtuw7-Kwam1EpwxsmdT8v6RPCKMaMxnhN3wbY=',
      image_5: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3NzfGVufDB8fDB8fHww'
    },

    testimonials_1: [
      {
        description: "The Contrast delivered a visually stunning and user-friendly website design. Our bounce rate dropped by 40% after the revamp.",
        name: "Ankita Joshi",
        designation: "Marketing Lead",
        company: "BrightReach Media",
        image: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
      },
      {
        description: "Thanks to their clean and well-structured HTML/CSS, our development time was cut in half. The Contrast team balanced design and usability perfectly.",
        name: "Amit Kulkarni",
        designation: "Frontend Developer",
        company: "WebNiche Technologies",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&h=200&q=80"
      },
      {
        description: "Their responsive layouts worked flawlessly across all devices. Our clients were impressed with how smooth and professional everything looked.",
        name: "Pooja More",
        designation: "UI Designer",
        company: "PixelCraft Studio",
        image: "https://images.unsplash.com/photo-1544717305-f9c88f2897bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcCUyMHdpdGglMjBnaXJsfGVufDB8fDB8fHww"
      },
      {
        description: "The Contrast team was instrumental in transforming our app idea into a sleek and scalable mobile experience. Their attention to detail and creative approach made all the difference.",
        name: "Rahul Deshmukh",
        designation: "Product Manager",
        company: "AppNova Solutions",
        image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
      }
    ],

    language_cta: {
      title: 'Learn HTML/CSS in the Language That Empowers You',
      description: `Our HTML/CSS Design course is offered in English, Hindi, and Marathi — enabling you to grasp fundamental concepts with clarity and confidence.

      No matter your background, we make it easy to understand the structure, style, and logic behind modern web design. Learn to build responsive, accessible, and professional websites — all in the language you're most comfortable with.`,
      cta: {
        text: 'Start Learning HTML/CSS Today',
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
          title: 'HTML & CSS Fundamentals',
          description: 'Learn the basics of semantic HTML and modern CSS to build clean, structured web pages.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://plus.unsplash.com/premium_photo-1683120974913-1ef17fdec2a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: 2,
          title: 'Responsive Web Design',
          description: 'Master Flexbox, Grid, and media queries to make your websites responsive on all devices.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZGVpbmd8ZW58MHx8MHx8fDA%3D',
        },
        {
          id: 3,
          title: 'CSS Animations & Transitions',
          description: 'Add motion and interactivity to your UI using keyframes, transitions, and transform effects.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://media.istockphoto.com/id/932559358/photo/silhouette-of-virtual-human-on-circuit-pattern-technology-3d-illustration.webp?a=1&b=1&s=612x612&w=0&k=20&c=FSvJu1jnx06GipCnHOeuk73MtO31XJtIT83U9FWknXA=',
        },
        {
          id: 4,
          title: 'Accessibility & Semantic HTML',
          description: 'Learn to build inclusive, accessible websites that work for all users and devices.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2dyYW1taW5nfGVufDB8fDB8fHww',
        },
        {
          id: 5,
          title: 'Tailwind CSS Masterclass',
          description: 'Speed up your workflow and build beautiful UIs using Tailwind CSS utility-first classes.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://media.istockphoto.com/id/1020834260/photo/html-and-css-code-developing-screenshot-with-light-effects.webp?a=1&b=1&s=612x612&w=0&k=20&c=fOXhxmnWSYcNoFn5BT0BOSXRKKQ8tqrE8NHuy-oJk5c=',
        },
        {
          id: 6,
          title: 'HTML/CSS Live Projects',
          description: 'Build and deploy real-world landing pages and portfolios to showcase your HTML/CSS skills.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D',
        }
      ]
    },

    advanced_curriculum: {
      title: 'Design That Delivers, Code That Connects',
      description_1: `Unlock the power of clean, responsive, and accessible web design through our hands-on HTML/CSS curriculum — tailored for real-world applications and industry standards.`,
      description_2: `Whether you're building sleek landing pages or intricate web layouts, we equip you with the skills to merge structure and creativity — empowering you to develop fast, flexible, and future-proof websites.`,
      image: 'https://images.unsplash.com/photo-1526925539332-aa3b66e35444?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI1fHx8ZW58MHx8fHx8',
      details: [
        {
          title: 'Enhanced User Engagement and Lower Bounce Rates',
          description: 'Our clean and intuitive front-end designs keep users engaged, making them stay longer and explore more.'
        },
        {
          title: 'Faster Page Loads and Improved Search Rankings',
          description: 'We optimize every line of code for speed, boosting your site’s performance and SEO visibility.'
        },
        {
          title: 'Consistent Branding with Pixel-Perfect Design',
          description: 'Every visual element aligns with your brand identity, ensuring a cohesive and professional look across all devices.'
        },
        {
          title: 'Reduced Development Time for Your Backend Team',
          description: 'With structured, reusable HTML/CSS code, backend integration becomes quicker and hassle-free.'
        },
        {
          title: 'Scalable Code for Future Expansion or Redesigns',
          description: 'Our modular and well-documented codebase makes it easy to scale or evolve your website as your business grows.'
        }
      ]
    },

    download_brouchre: {
      title: 'Start Your Web Design Journey — Download Free Resources Today.',
      description: `Get instant access to our in-depth HTML/CSS Design Brochure and a personalized Career Path Guide. Learn how to build beautiful, responsive websites and launch a career in front-end design. Available in English, Hindi, and Marathi.`,
      brochure_link: {
        text: 'Download Course Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'Download Career Plan',
        link: '#'
      }
    },

    // testimonials_2: {
    //   title: `How Learning HTML & CSS Changed Their Careers.`,
    //   description: `From beginners to professional web designers — our students share how mastering HTML and CSS helped them build stunning websites and launch their tech careers.`,
    //   details: [
    //     {
    //       name: 'Sneha Patil',
    //       location: 'Pune, Maharashtra',
    //       video_thumbnail: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60',
    //       video_url: 'https://www.youtube.com/watch?v=htmlcss1',
    //       description: 'From a marketing executive to a front-end developer designing responsive websites.',
    //     },
    //     {
    //       name: 'Rohit Deshmukh',
    //       location: 'Mumbai, Maharashtra',
    //       video_thumbnail: 'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?w=500&auto=format&fit=crop&q=60',
    //       video_url: 'https://www.youtube.com/watch?v=htmlcss2',
    //       description: 'Self-taught designer who built a freelance career designing clean, accessible sites.',
    //     },
    //     {
    //       name: 'Pooja Joshi',
    //       location: 'Aurangabad, Maharashtra',
    //       video_thumbnail: 'https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?w=500&auto=format&fit=crop&q=60',
    //       video_url: 'https://www.youtube.com/watch?v=htmlcss3',
    //       description: 'MBA graduate turned UI designer crafting intuitive web experiences full-time.',
    //     }
    //   ]
    // },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'What does your HTML/CSS design service include?',
          answer: 'We provide responsive, SEO-friendly, and cross-browser compatible HTML/CSS templates built with semantic markup and modern best practices.',
          expanded: false,
        },
        {
          question: 'Do you convert Figma or PSD designs into HTML?',
          answer: 'Yes, we specialize in converting Figma, PSD, Adobe XD, or Sketch files into clean, pixel-perfect HTML/CSS code.',
          expanded: false,
        },
        {
          question: 'Will the designs be mobile-friendly?',
          answer: 'Absolutely. Every layout we deliver is responsive and optimized for desktop, tablet, and mobile devices.',
          expanded: false,
        },
        {
          question: 'Do you use any frameworks like Tailwind or Bootstrap?',
          answer: 'Yes, we can build using raw CSS, Tailwind CSS, Bootstrap, or any preferred framework based on your requirements.',
          expanded: false,
        },
        {
          question: 'Can you integrate the HTML with backend systems?',
          answer: 'We can structure the HTML/CSS to be easily integrated into any backend system (like Angular, React, PHP, etc.) with proper component separation.',
          expanded: false,
        },
        {
          question: 'How many design iterations do you offer?',
          answer: 'We provide 2-3 rounds of design revisions based on feedback to make sure the design meets your exact expectations.',
          expanded: false,
        }
      ]
    },

    technical_benefit: {
      sub_title: `Technical Benefits`,
      title: `Skills that prepare you for front-end development roles`,
      description: `The Contrast equips you with practical, hands-on training in HTML, CSS, and responsive design. Learn to build pixel-perfect, accessible websites that employers want.`,
      details: [
        {
          title: 'Real-World Projects',
          description: 'Create websites and landing pages that mimic industry standards and client requirements — gain real portfolio work.',
          link: '#',
          icon: `<svg class="w-5 h-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Strong Fundamentals',
          description: 'Master HTML semantics, CSS Flexbox/Grid, and responsive design to build flexible, maintainable layouts.',
          link: '#',
          icon: `<svg class="w-5 h-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Mock Interviews & Code Reviews',
          description: 'Participate in mock interviews focused on front-end coding challenges and receive detailed feedback.',
          link: '#',
          icon: `<svg class="w-5 h-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clip-rule="evenodd"/></svg>`
        }
      ],
    },

    beyond_learning: {
      title: `How We Work`,
      // description: `At The Contrast, we go beyond syntax to help you master the craft of modern web design. Learn how to structure clean HTML, style with purpose, and deliver user-friendly, mobile-first websites that stand out.`,
      details: [
        {
          title: 'Requirement Gathering',
          description: 'Understanding your vision, target audience, and project goals.'
        },
        {
          title: 'Wireframing & Prototyping',
          description: 'Creating initial layouts for feedback and approval.'
        },
        {
          title: 'Design Implementation',
          description: 'Translating designs into clean, semantic HTML and CSS code.'
        },
        {
          title: 'Quality Assurance',
          description: 'Cross-browser testing, responsive checks, and accessibility audits.'
        },
        {
          title: 'Delivery & Support',
          description: 'Final handover and ongoing maintenance as needed.'
        },
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
      title: 'Kickstart Your Web Design Career Today.',
      description: 'Whether you’re new to coding or switching careers, our HTML/CSS Design program guides you from basics to building professional, responsive websites. Gain the skills to create visually stunning and user-friendly web pages with The Contrast.',
      cta_1: {
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
      sub_title: 'Beginner’s Mindset in Testing',
      title: 'What You Think You Need vs What You Actually Need',
      description: 'When you\'re stepping into the Software Testing world, it\'s common to focus on buzzwords. But building a solid QA career starts with the fundamentals.',
      think_you_need: [
        'Mastering automation tools like Selenium or Cypress on day one',
        'Knowing every testing type in theory',
        'Learning coding before anything else'
      ],
      actually_need: [
        'Clear understanding of SDLC, STLC & test case writing',
        'Strong manual testing foundation with real-time examples',
        'Analytical mindset and attention to detail'
      ]
    },

  }
}