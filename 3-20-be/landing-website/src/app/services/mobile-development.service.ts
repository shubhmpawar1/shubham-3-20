import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileDevelopmentService {

  constructor() { }

  mobile_development_content = {

    hero_section: {
      title: 'Build Native Apps. Launch App Success. Create Mobile Magic.',
      pill_1: 'Android',
      pill_2: 'iOS',
      pill_3: 'Cross-Platform',
      quick_look: 'Seamless performance, native experience',
      description: `We Build Powerful Mobile Apps That Drive Results – Scalable, Intuitive, and Tailored to Your Business.`,
      cta_1: {
        text: "See Our Work",
        link: '#'
      },
      cta_2: {
        text: 'Get a Free Consultation',
        link: '#'
      },
      image_1: 'https://plus.unsplash.com/premium_photo-1671462506754-f0ff9d24abb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fERldmVsb3BlciUyMHdvcmtpbmclMjBvbiUyMGElMjBtb2JpbGUlMjBhcHAlMjAocmVhbCUyMGNvZGluZyUyMGVudmlyb25tZW50KXxlbnwwfHwwfHx8MA%3D%3D',
      image_2: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&auto=format&fit=crop&q=60',
      image_3: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60',
      image_4: 'https://media.istockphoto.com/id/1174418589/photo/darkweb-darknet-and-hacking-concept-hacker-with-cellphone-man-using-dark-web-with-smartphone.webp?a=1&b=1&s=612x612&w=0&k=20&c=_tD1UkhAh-gIUj5FNWXfXWE-vT5iNC6e4rRocc6OMEo=',
      image_5: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D'
    },

    testimonials_1: [
      {
        description: "From planning to deployment, the process was seamless. The app has improved our operational efficiency by 40%, and user feedback has been overwhelmingly positive.",
        name: "Priya R,",
        designation: "Product Manager",
        company: "NovaTech",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&h=200&w=200&q=80"
      },
      {
        description: "Working with The Contrast was a game-changer. They took our idea and turned it into a sleek, fully functional app in just weeks. Their team felt like an extension of ours.",
        name: "Alex M",
        designation: "Founder",
        company: "LaunchBright",
        image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&h=200&w=200&q=80"
      },
    ],

    language_cta: {
      title: 'Why Choose Us to Build Your Mobile App?',
      description: `We don’t just build apps — we craft digital experiences that solve real problems. Whether you're a startup bringing a bold idea to life or an enterprise optimizing your workflow, our team combines strategy, design, and engineering to deliver apps that are fast, scalable, and user-loved. From concept to launch — and beyond — we’re with you every step of the way.`,
      cta: {
        text: 'Let’s Create Something Exceptional',
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
          title: 'Kotlin for Android Development',
          description: 'Build modern Android apps with Kotlin, Jetpack, and Material Design.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEtvdGxpbiUyMGZvciUyMEFuZHJvaWQlMjBEZXZlbG9wbWVudHxlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          id: 2,
          title: 'SwiftUI for iOS Apps',
          description: 'Learn to create responsive and elegant iOS apps using SwiftUI and Xcode.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1587803537744-c6d63897f2cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGlPUyUyMEFwcCUyMEludGVyZmFjZSUyMG9uJTIwaVBob25lJTIwU2NyZWVufGVufDB8fDB8fHww',
        },
        {
          id: 3,
          title: 'Flutter & Dart Essentials',
          description: 'Master cross-platform mobile app development using Flutter and Dart.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1563019589-7e7db5152430?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEZsdXR0ZXIlMjAlMjYlMjBEYXJ0JTIwRXNzZW50aWFscyUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          id: 4,
          title: 'React Native Bootcamp',
          description: 'Create native mobile apps with React Native and integrate APIs smoothly.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://media.istockphoto.com/id/925623208/photo/atom-abstract-scientific-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=SQ6i8pzwF4Bl9eRPnqJAzfRwmlesPr4G4655Hqh8RHc=',
        },
        {
          id: 5,
          title: 'Advanced Android with Jetpack Compose',
          description: 'Build fast, declarative UIs for Android with Jetpack Compose.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop&q=60',
        },
        {
          id: 6,
          title: 'Full Stack Mobile App Development',
          description: 'Combine frontend (Flutter) and backend (Firebase/Node.js) for complete apps.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60',
        }
      ]
    },

    advanced_curriculum: {
      title: 'Mobile Apps That Drive Your Business Forward',
      description_1: `Your customers are on mobile — your business should be too. We build fast, secure, and engaging mobile applications for both Android and iOS platforms.`,
      description_2: `Whether you're a startup or an enterprise, our mobile development team transforms your ideas into cutting-edge apps with seamless UI/UX, performance, and scalability.`,
      image: 'https://media.istockphoto.com/id/1263424062/photo/learning-of-programming-language-javascript-php-css-xml-html-laptop-and-book-with-programming.webp?a=1&b=1&s=612x612&w=0&k=20&c=HBFmVqYCNph3ZQuVAkucdyPl8IeDrRVVJtX29TT4M7c=',
      details: [
        {
          title: 'Native Android & iOS Development',
          description: 'We create robust and high-performance apps using Kotlin for Android and Swift for iOS tailored to your business needs.'
        },
        {
          title: 'Cross-Platform App Solutions',
          description: 'Build once, deploy everywhere. Using Flutter or React Native, we deliver apps that work seamlessly on both Android and iOS — reducing cost and time to market.'
        },
        {
          title: 'UI/UX Design Excellence',
          description: 'Our design team crafts intuitive and visually appealing mobile interfaces that enhance user experience and engagement.'
        },
        {
          title: 'API & Backend Integration',
          description: 'We integrate your app with secure REST APIs, Firebase, and cloud-based databases for real-time data and scalability.'
        },
        {
          title: 'App Testing & Performance Optimization',
          description: 'We rigorously test your app across devices and optimize for speed, memory usage, crash resistance, and smooth user interaction.'
        },
        {
          title: 'App Store Deployment & Ongoing Support',
          description: 'From Play Store and App Store submissions to post-launch updates, we offer full deployment and maintenance support.'
        }
      ]
    },

    download_brouchre: {
      title: 'Launch Your Native App Development Career — Get Free Resources Today.',
      description: `Download our detailed Native App Development Brochure and a personalized Career Path Guide. Learn how to build Android & iOS apps, work with Kotlin, Swift, Flutter, and grow your career in the mobile app industry. Available in English, Hindi, and Marathi.`,
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
      title: `How Native App Development Transformed Their Careers.`,
      description: `From diverse, non-tech backgrounds to thriving mobile app developers — hear inspiring stories of our students who mastered Android, iOS, and cross-platform frameworks like Flutter and React Native, launching successful tech careers.`,
      details: [
        {
          name: 'Shruti Mane',
          location: 'Nagpur, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=nativeapp1',
          description: 'From B.Com graduate to Android App Developer using Kotlin in just 4 months.',
        },
        {
          name: 'Rohan Kamble',
          location: 'Thane, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=nativeapp2',
          description: 'Mechanical engineer turned Flutter developer working with a US-based startup.',
        },
        {
          name: 'Pooja Joshi',
          location: 'Aurangabad, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=nativeapp3',
          description: 'MBA graduate thriving as a full-time cross-platform app developer using React Native.',
        }
      ]
    },

    faqs: {
      title: 'Frequently Asked Questions ?',
      details: [
        {
          question: 'Do I need prior coding experience to join the Native App Development course?',
          answer: 'No, this course is beginner-friendly. We start from the basics of programming and guide you step-by-step to build real Android and iOS apps.',
          expanded: false,
        },
        {
          question: 'What technologies will I learn in this course?',
          answer: 'You’ll master Flutter, React Native, Kotlin (Android), Swift (iOS), along with essential skills like UI/UX design, API integration, and Firebase.',
          expanded: false,
        },
        {
          question: 'Will I build real apps during the course?',
          answer: 'Absolutely! You’ll develop fully functional apps such as a to-do list, weather app, and a basic e-commerce app, all ready for publishing on app stores.',
          expanded: false,
        },
        {
          question: 'Is this course focused on Android, iOS, or both?',
          answer: 'Both! You’ll learn to create apps for Android and iOS using native tools as well as cross-platform frameworks like Flutter and React Native.',
          expanded: false,
        },
        {
          question: 'Will I get assistance with job placements?',
          answer: 'Yes, we offer resume reviews, mock interviews, portfolio guidance, and connect you with companies hiring app developers.',
          expanded: false,
        },
        {
          question: 'Is the course delivered live or recorded?',
          answer: 'It’s a blended format — live interactive sessions combined with recorded videos accessible anytime, plus dedicated mentor support for your questions.',
          expanded: false,
        },
        {
          question: 'Do I receive a certificate after completing the course?',
          answer: 'Yes. After successful completion and submission of your final project, you will receive an industry-recognized certificate from The Contrast.',
          expanded: false,
        }
      ]
    },

    technical_benefit: {
      sub_title: 'Technical Benefit',
      title: 'Skills That Make You Job-Ready',
      description: 'The Contrast empowers you with hands-on, practical learning in mobile development. From building efficient apps to mastering deployment — we prepare you to excel in the industry.',
      details: [
        {
          title: 'Real-World Mobile Projects',
          description: 'Work on live app projects that simulate real company workflows — build Android and iOS apps from scratch, implement features, fix bugs, and optimize performance.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clip-rule="evenodd"/>
        </svg>`
        },
        {
          title: 'Strong Core Fundamentals',
          description: 'Master key mobile programming languages like Kotlin, Swift, Dart (Flutter), and React Native. Gain deep understanding of app architecture, UI/UX principles, and state management.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clip-rule="evenodd"/>
        </svg>`
        },
        {
          title: 'Cross-Platform Expertise',
          description: 'Develop apps that run seamlessly on both Android and iOS using Flutter and React Native, boosting your employability across platforms.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.5 3a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5zM7 6a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6zm6 0a1 1 0 1 1 2 0v8a1 1 0 1 1-2 0V6z" />
        </svg>`
        },
        {
          title: 'Performance & Security Best Practices',
          description: 'Learn app optimization, memory management, and secure coding standards to build fast, reliable, and safe apps.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M2 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5zm12 1a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" clip-rule="evenodd"/>
        </svg>`
        },
        {
          title: 'Mock Interviews & Placement Support',
          description: 'Benefit from regular mock interviews, resume building, and portfolio reviews — get ready to confidently crack job interviews.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H3.989a.75.75 0 0 0-.75.75v4.242a.75.75 0 0 0 1.5 0v-2.43l.31.31a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.39Zm1.23-3.723a.75.75 0 0 0 .219-.53V2.929a.75.75 0 0 0-1.5 0V5.36l-.31-.31A7 7 0 0 0 3.239 8.188a.75.75 0 1 0 1.448.389A5.5 5.5 0 0 1 13.89 6.11l.311.31h-2.432a.75.75 0 0 0 0 1.5h4.243a.75.75 0 0 0 .53-.219Z" clip-rule="evenodd"/>
        </svg>`
        },
        {
          title: 'End-to-End App Lifecycle Understanding',
          description: 'Learn every stage of app development — from concept and design to testing, deployment, and maintenance on Play Store and App Store.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4zm3 2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H6z" />
        </svg>`
        }
      ],
    },

    beyond_learning: {
      sub_title: 'Beyond Learning',
      title: 'Everything to Kickstart Your Mobile App Career',
      description: 'At The Contrast, we go beyond teaching Flutter or Kotlin — we empower you to become a confident app developer with the right skills, mentorship, portfolio, and career support to thrive in the mobile industry.',
      details: [
        {
          title: '1-on-1 Developer Mentorship',
          description: 'Learn directly from experts in Android, iOS, and cross-platform development — gain insights from their coding expertise and career experiences.'
        },
        {
          title: 'Real Mobile Projects',
          description: 'Build and launch apps like to-do lists, e-commerce platforms, social media clones, and Firebase-integrated tools.'
        },
        {
          title: 'Interview & Resume Support',
          description: 'Get ready for technical interviews, craft standout resumes, and showcase your projects on GitHub and app stores.'
        },
        {
          title: 'Vibrant Developer Community',
          description: 'Join a focused mobile dev community to resolve doubts, share progress, and collaborate on projects and hackathons.'
        },
        {
          title: 'App Store Publishing Guidance',
          description: 'Receive step-by-step help to publish your apps on Google Play and Apple App Store, including monetization strategies.'
        },
        {
          title: 'Developer Resource Pack',
          description: 'Enjoy lifetime access to UI kits, code snippets, animations, testing tools, and project templates for faster development.'
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
      title: 'Kickstart Your Mobile App Career Today.',
      description: 'Whether you’re a beginner or switching careers, our Native App Development program guides you from fundamentals to launching apps on the Play Store. Build stunning, high-performance apps and open doors to exciting opportunities with The Contrast.',
      cta_1: {
        text: 'Start Your App Development Journey',
        link: '#'
      },
      cta_2: {
        text: 'View the Complete Roadmap',
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
      sub_title: 'Beginner’s Mindset in Mobile Development',
      title: 'What You Think You Need vs. What You Actually Need',
      description: `Getting started with mobile app development can feel overwhelming with flashy tools and trends. But a solid mobile career begins with core principles and structured learning.`,
      think_you_need: [
        'Learning all frameworks (Flutter, React Native, Kotlin, Swift) at once',
        'Focusing only on UI design without understanding performance',
        'Publishing an app without mastering debugging or testing'
      ],
      actually_need: [
        'Strong grasp of native vs. hybrid development and platform strengths',
        'Solid foundation in app architecture, UI/UX, and performance optimization',
        'Hands-on practice building real apps with proper deployment flow'
      ]
    }

  }
}
