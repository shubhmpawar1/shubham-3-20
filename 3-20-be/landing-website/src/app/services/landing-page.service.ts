import { Injectable } from '@angular/core';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  landing_page_content = {

    hero_section: {
      title: 'Build with Purpose. Scale with Precision. Deliver with Integrity.',
      pill_1: 'Integrity',
      pill_2: 'Clarity & Trust',
      pill_3: 'Long Term Thinking',
      quick_look: "Where Talent Meets Technology.",
      description: 'Scalable web platforms. Real-world training. One team to engineer your products and empower your people.',
      cta_1: {
        text: "Start Your Project",
        link: '#'
      },
      cta_2: {
        text: 'Explore Training',
        link: '#'
      },
      image_1: 'https://images.unsplash.com/photo-1634464660153-468d44306ac4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwY2xhc3Nyb29tJTIwY29kaW5nfGVufDB8fDB8fHww',
      image_2: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VifGVufDB8fDB8fHww',
      image_3: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80',
      image_4: 'https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80',
      image_5: 'https://images.unsplash.com/photo-1621856625680-282ec3a17db8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGluZyUyMGNsYXNzJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D',

    },

    testimonials: [
      {
        description: "Partnering with The Contrast felt like gaining a CTO, a dedicated development team, and a product consultant — all in one. They didn’t just deliver our platform; they strengthened the entire foundation of our business.",
        name: "Mahadev Gitte",
        designation: "Founder & CEO",
        company: "Private Court India",
        image: "/mahadev-gitte.png",
        // company_logo : '/private-court-symbol-pure-white-min.png'
      },
      {
        description: "I joined The Contrast unsure of my path. Today, I’m not only working in a product team — I understand what quality code and real responsibility mean.”",
        name: "Shreeram Kaudare",
        designation: "Student",
        company: "Front End Developer, Mumbai",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQE8MH_XmdZvOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699466662709?e=2147483647&v=beta&t=Ahx1Oux-jlf6hOM-VV3v_65g04quW_ZU-LlQnCxIg3U",
        // company_logo : 'https://tailwindcss.com/plus-assets/img/logos/tuple-logo-white.svg'
      },
    ],

    language_cta: {
      title: 'Build. Grow. Belong.',
      description: `Whether you're launching a platform or learning to lead one, we’re here with systems, mentorship, and clarity that scale.. Join a growing community of founders, professionals, and learners building powerful products — and stronger careers — with The Contrast.`,
      cta: {
        text: 'Talk to an Expert',
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
      title: 'Plain Education vs Practical Engineering?',
      description_1: `With our personalized task based training, every candidate uniquely advances through his own journey of becoming skilled.`,
      description_2: ` We help you learn to swim directly in the tides and fight with the waves, so that once you get placed, you perform brilliantly and stay confident wherever you go.`,
      image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&h=1104&q=80',
      details: [
        {
          title: 'Psychological Analysis',
          description: 'Every learner is unique. We begin by understanding their mindset, approach, and behavior towards learning. This helps us tailor the curriculum to their strengths and areas of improvement.'
        },
        {
          title: 'Skill-Based Roadmapping',
          description: 'Instead of a one-size-fits-all syllabus, we create a roadmap that aligns with current industry demands and the learner’s personal career goals.'
        },
        {
          title: 'Live Project Involvement',
          description: 'Each student is assigned real-world tasks under guidance. They face practical engineering problems from day one, simulating company-level challenges.'
        },
        {
          title: 'Performance-Driven Iteration',
          description: 'Progress is tracked constantly. Our mentors refine the learner’s journey with weekly reviews, to ensure consistent improvement and readiness for job roles.'
        }
      ]
    },

    download_brouchre: {
      title: 'Start Your Journey with The Contrast',
      description: 'Get instant access to our official brochure and discover how we help founders, teams, and learners build with confidence — from products to careers.',
      brochure_link: {
        text: 'Download Academic Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'Download Engineering Brochure',
        link: '#'
      },
    },

    testimonials_2: {
      title: `Hear from those who’ve experienced the difference we make.`,
      description: `Thank you for putting your trust in us. Our clients' success is our greatest achievement, and we're proud to share their stories. Watch how we’ve helped businesses like yours streamline their processes, boost productivity, and achieve their goals.`,
      details: [
        {
          name: 'Tanmay Deshmukh',
          location: 'Nashik, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7',
          video_url: 'https://www.youtube.com/watch?v=video1', // replace with actual
          description: 'From fresher to Full Stack Developer in 5 months!',
        },
        {
          name: 'Priya Jadhav',
          location: 'Pune, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1690079374922-7f50d5c1a102?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3dpdGNoZWQlMjBmcm9tJTIwdGVhY2hpbmclMjB0byUyMHRlY2h8ZW58MHx8MHx8fDA%3D',
          video_url: 'https://www.youtube.com/watch?v=video2',
          description: 'Switched from teaching to tech — The Contrast made it possible.',
        },
        {
          name: 'Rohit Gokhale',
          location: 'Kolhapur, Maharashtra',
          video_thumbnail: 'https://plus.unsplash.com/premium_photo-1661782639250-9f719c1051a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RXZlbiUyMGZyb20lMjBhJTIwcnVyYWwlMjBiYWNrZ3JvdW5kJTJDJTIwSSUyMGNyYWNrZWQlMjBhbiUyME1OQyUyMGludGVydmlldy58ZW58MHx8MHx8fDA%3D',
          video_url: 'https://www.youtube.com/watch?v=video3',
          description: 'Even from a rural background, I cracked an MNC interview.',
        }
      ],
    },

    faqs: {
      title: 'Frequently Asked Questions ?',
      details: [
        {
          question: 'What does The Contrast offer?',
          answer: 'We offer two core verticals: software engineering services for businesses, and hands-on training programs for learners. One brand — people and products built with purpose.',
          expanded: false,
        },
        {
          question: 'Can I hire The Contrast for a project?',
          answer: 'Yes. Our engineering team takes on full-stack web application projects — from architecture and development to deployment and long-term support.',
          expanded: false,
        },
        {
          question: 'Is The Contrast suitable for freshers or non-tech users?',
          answer: 'Absolutely. If you are learning, we guide you from zero to job-ready. If you are a founder or team without tech knowledge, we help build your product from idea to launch.',
          expanded: false,
        },
        {
          question: 'Do you help with placements?',
          answer: 'Yes. Our academy students receive mentorship, real-world experience, and dedicated support to help them land their first job.',
          expanded: false,
        },
        {
          question: 'What industries do you work with?',
          answer: 'We’ve worked with clients in education, government, real estate, and startups. Our systems are built to scale across use cases.',
          expanded: false,
        },
        {
          question: 'Do you work with individuals or only companies?',
          answer: 'Both. We help individuals upskill and get placed, and we help businesses build and scale their digital systems.',
          expanded: false,
        },
      ]
    },
    technical_benefit: {
      sub_title: `Technical Benefit`,
      title: `Skills that make you job-ready`,
      description: `The Contrast empowers you with practical, task-based learning in engineering. From writing efficient code to solving real-world problems — we cover it all.`,
      details: [
        {
          title: 'Real-World Projects',
          description: 'Work on industry-level tasks that simulate real company projects — not just theory but practical exposure.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Strong Fundamentals',
          description: 'We start from basics and build up your problem-solving, data structure, and core programming skills step-by-step.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd"/></svg>`
        },
        {
          title: 'Mock Interviews',
          description: "With regular mock interviews and feedback, we ensure you're confident and ready for your placement drives.",
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clip-rule="evenodd"/></svg>`
        }
      ],
    },

    beyond_learning: {
      sub_title: `Beyond Learning`,
      title: `Everything to shape your career.`,
      description: `At The Contrast, you don't just learn — you grow. With career guidance, industry connections, and real-world
        exposure, we help you build a future-ready profile.`,
      details: [
        {
          title: '1-on-1 Mentorship',
          description: 'Direct guidance from experienced engineers and placement mentors.'
        },
        {
          title: 'Resume & Portfolio Building',
          description: 'Craft standout resumes and project portfolios that get noticed.'
        },
        {
          title: 'Placement Assistance',
          description: 'We connect you with hiring partners and help prepare for interviews.'
        },
        {
          title: 'Communication Training',
          description: 'Workshops on soft skills and professional communication to ace interviews.'
        },
        {
          title: 'Peer Network',
          description: 'Be part of a learning community that supports and grows together.'
        },
        {
          title: 'Access to Resources',
          description: 'Lifetime access to notes, mock tests, and exclusive job prep materials.'
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

    career_section: {
      title: 'Your breakthrough starts here. With clarity, purpose, and action.',
      description: `At The Contrast, we don’t just ship products or teach skills — we empower people and businesses to grow with confidence, real experience, and systems that scale. From your first idea to your first job — we’re in it with you.`,
      cta_1: {
        text: 'Get started today',
        link: '#'
      },
      cta_2: {
        text: 'Explore What We Offer',
        link: '#'
      }
    },

    mentors_section: {
      title: 'Our team',
      description: 'We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
      details: [
        {
          name: 'Mr. Arun Gounder',
          title: ' Software Development Engineer 3',
          experience: '1.5 years',
          image: 'https://media.licdn.com/dms/image/v2/D4D03AQFnXww3MAYiJQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690352187072?e=2147483647&v=beta&t=CKSPpzRB476DqmjD-sXXBkBY_-CdOSXIPdVXJruEWtQ',
          linkedin: 'https://www.linkedin.com/in/sonal-desai'
        },
        {
          name: 'Mr. Bhavesh Karkare',
          title: ' Software Development Engineer 3',
          experience: '1.5 years',
          image: 'https://media.licdn.com/dms/image/v2/C4D03AQFlgJRW7ZZ5fQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654058388661?e=2147483647&v=beta&t=viJIqj1Bt40PZFZWMwuEh7aat_Fr8_fiem7w_K5v_94',
          linkedin: 'https://www.linkedin.com/in/ramesh-patil'
        },
        {
          name: 'Mr. Mayur Talekar',
          title: ' Software Development Engineer 3',
          experience: '1 years',
          image: 'https://media.licdn.com/dms/image/v2/D4D03AQFVOlxs9mdxTw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726077505919?e=2147483647&v=beta&t=OZC9RBOsDhbnJkE1-m49YzgQwbqx0NCHGqgkS7SzwY4',
          linkedin: 'https://www.linkedin.com/in/ajay-mehta'
        },
        {
          name: 'Mr. Abhishek Jadhav',
          title: ' Software Development Engineer 3',
          experience: '1 Years',
          image: 'https://media.licdn.com/dms/image/v2/D4D03AQGbJNafmnevaw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697094552683?e=2147483647&v=beta&t=oXA2s1FZfo5AC4IvtYDKmdxE4ZbUi073dDJ0YFItEcM',
          linkedin: 'https://www.linkedin.com/in/neha-kulkarni'
        },
        {
          name: 'Mr. Shubham Salunkhe',
          title: ' Software Development Engineer 3',
          experience: '1 years',
          image: 'https://media.licdn.com/dms/image/v2/D5603AQE_5MJ-wRtz4A/profile-displayphoto-shrink_200_200/B56ZWJ1aDyGQAY-/0/1741774234951?e=2147483647&v=beta&t=ZJESKTKyQmebxLYXA07U3hnyfYeAlCtF80enp1F8SdI',
          linkedin: 'https://www.linkedin.com/in/rajeev-sinha'
        },
        {
          name: 'Mr. Shreeram Kaudare',
          title: ' Software Development Engineer 4',
          experience: '8 Months',
          image: 'https://media.licdn.com/dms/image/v2/D4D03AQE8MH_XmdZvOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699466662709?e=2147483647&v=beta&t=Ahx1Oux-jlf6hOM-VV3v_65g04quW_ZU-LlQnCxIg3U',
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
