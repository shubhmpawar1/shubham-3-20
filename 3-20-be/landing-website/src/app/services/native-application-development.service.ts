import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NativeApplicationDevelopmentService {

  constructor() { }

  native_app_development_content = {

    hero_section: {
      title: 'Build Native Power. Optimize for Speed. Smooth Launch.',
      pill_1: 'Android',
      pill_2: 'iOS',
      pill_3: 'Cross-Platform',
      quick_look: 'Seamless performance, native experience',
      description: 'Build high-performance mobile apps using native technologies like Kotlin, Swift, and Flutter. Whether its Android, iOS, or cross-platform we ensure smooth, responsive, and secure applications that scale with your business.',
      cta_1: {
        text: "Explore Native App Projects",
        link: '#'
      },
      cta_2: {
        text: 'Book a Free App Consultation',
        link: '#'
      },
      image_1: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
      image_2: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
      image_3: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D',
      image_4: 'https://media.istockphoto.com/id/2177184303/photo/white-man-programmer-or-it-specialist-software-developer-with-glasses-working-late-into-the.webp?a=1&b=1&s=612x612&w=0&k=20&c=XLBlBQCGyuWBaJTbzG7bntaoYBB-GdTiI6z4Co5mjAg=',
      image_5: 'https://media.istockphoto.com/id/1152446348/photo/software-development-after-sundown.webp?a=1&b=1&s=612x612&w=0&k=20&c=8A-nlmVOZC4thMhoOVobwo4Qe6FOz0HEQqPNRk-9iSs='
    },

    testimonials_1: [
      {
        description: "What impressed us most was their commitment to performance. The Kotlin-based Android app loads quickly and works even in low-network areas — just what we needed for our customer base.",
        name: "Rutuja Borkar",
        designation: "CEO",
        company: "Pune",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&h=200&w=200&q=80"
      },
      {
        description: "From UI/UX design to native development, everything was smooth. The app helps our delivery teams track packages live and update statuses in real time. Truly professional work.",
        name: "Aditya Joshi",
        designation: "Founder",
        company: "Nagpur",
        image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&h=200&w=200&q=80"
      }
    ],

    language_cta: {
      title: 'Build Native Apps in the Language That Resonates',
      description: `Our Native Application Development service supports projects in English, Hindi, and Marathi — helping you connect with your audience more meaningfully. We ensure clear communication, culturally relevant UX, and intuitive design tailored to your users' preferred language.`,
      cta: {
        text: 'Start',
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
          image: 'https://images.unsplash.com/photo-1607798748738-b15c40d33d57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          id: 2,
          title: 'SwiftUI for iOS Apps',
          description: 'Learn to create responsive and elegant iOS apps using SwiftUI and Xcode.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          id: 3,
          title: 'Flutter & Dart Essentials',
          description: 'Master cross-platform mobile app development using Flutter and Dart.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          id: 4,
          title: 'React Native Bootcamp',
          description: 'Create native mobile apps with React Native and integrate APIs smoothly.',
          cta: {
            text: 'Enroll Now',
            link: '#'
          },
          image: 'https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
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
          image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
        }
      ]
    },
    advanced_curriculum: {
      title: 'Design. Develop. Launch. Evolve.',
      description_1: `Our Native App Development program is built to deliver more than just coding skills — it empowers you to design, engineer, and launch high-performance Android and iOS applications for real-world business impact.`,
      description_2: `Gain expertise across Android (Kotlin), iOS (Swift), and modern cross-platform technologies like Flutter and React Native. Work hands-on with production-grade projects, performance tuning, and seamless app store deployments.`,
      image: 'https://images.unsplash.com/photo-1551739440-5dd934d3a94a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vbml0b3J8ZW58MHx8MHx8fDA%3D',
      details: [
        {
          title: 'Mobile UI/UX Design Principles',
          description: 'Apply platform-specific standards like Material Design and Human Interface Guidelines to build intuitive, user-centric interfaces.'
        },
        {
          title: 'Native Android with Kotlin',
          description: 'Develop scalable and robust Android applications using Kotlin, Jetpack libraries, and clean MVVM architecture.'
        },
        {
          title: 'iOS Development with Swift',
          description: 'Leverage Swift and SwiftUI to build elegant, high-performance iOS apps, managed through an efficient Xcode workflow.'
        },
        {
          title: 'Cross-Platform Development',
          description: 'Deliver apps faster using Flutter or React Native — write once, deploy seamlessly on both Android and iOS.'
        },
        {
          title: 'APIs & Data Integration',
          description: 'Integrate REST APIs, work with Firebase, and manage real-time data using Firestore or SQLite with production reliability.'
        },
        {
          title: 'App Deployment & Maintenance',
          description: 'Package, publish, and maintain apps on the Play Store and App Store with full version control, update strategies, and crash analytics.'
        }
      ]
    },

    download_brouchre: {
      title: 'Launch Your Native App Project — Access Exclusive Resources',
      description: `Download our Native Application Development Service Brochure to discover how we turn ideas into scalable mobile solutions. From Android and iOS to cross-platform apps, we leverage Kotlin, Swift, and Flutter to deliver performance-driven applications tailored to your business goals.`,
      brochure_link: {
        text: 'Download Service Brochure',
        link: '#'
      },
      career_plan_link: {
        text: 'View Project Execution Plans',
        link: '#'
      }
    },

    testimonials_2: {
      title: `How Native App Development Transformed Their Careers.`,
      description: `Coming from non-technical backgrounds, our learners successfully transitioned into mobile app developers. Through Android, iOS, Flutter, and React Native, they unlocked new career opportunities in the tech industry. Discover their inspiring journeys.`,
      details: [
        {
          name: 'Shruti Mane',
          location: 'Nagpur, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=nativeapp1',
          description: 'Transitioned from a B.Com graduate to a Kotlin-based Android App Developer in just 4 months.',
        },
        {
          name: 'Rohan Kamble',
          location: 'Thane, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1529429612779-c8e40ef2f36d?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=nativeapp2',
          description: 'A mechanical engineer who became a Flutter developer working for a U.S.-based startup.',
        },
        {
          name: 'Pooja Joshi',
          location: 'Aurangabad, Maharashtra',
          video_thumbnail: 'https://images.unsplash.com/photo-1585624882829-f92c2d4cd89d?w=500&auto=format&fit=crop&q=60',
          video_url: 'https://www.youtube.com/watch?v=nativeapp3',
          description: 'An MBA graduate now building cross-platform applications full-time using React Native.',
        }
      ]
    },

    faqs: {
      title: 'Frequently Asked Questions ?',
      details: [
        {
          question: 'Do you provide both design and development services?',
          answer: 'Yes, we deliver comprehensive end-to-end solutions including UI/UX design, frontend, and backend development.',
          expanded: false,
        },
        {
          question: 'Can you upgrade or redesign an existing website?',
          answer: 'Absolutely. We can revamp your current website to enhance performance, aesthetics, and user experience.',
          expanded: false,
        },
        {
          question: 'Will my website be mobile-friendly and fully responsive?',
          answer: 'Yes, all websites we develop are fully responsive and optimized for seamless performance across all devices.',
          expanded: false,
        },
        {
          question: 'Do you offer ongoing website maintenance and support?',
          answer: 'Yes, our service packages include regular updates, backups, and dedicated technical support.',
          expanded: false,
        },
        {
          question: 'What technologies do you specialize in?',
          answer: 'We utilize modern technology stacks including React, Node.js, Next.js, WordPress, Shopify, among others, tailored to your project needs.',
          expanded: false,
        },
        {
          question: 'What is the typical timeline to complete a website project?',
          answer: 'Project timelines vary based on scope, but most websites are delivered within 4 to 6 weeks.',
          expanded: false,
        },
        {
          question: 'Can you assist with SEO and performance optimization?',
          answer: 'Yes, we apply SEO best practices and optimize code and assets to ensure fast load times and improved search visibility.',
          expanded: false,
        }
      ]
    },

    technical_benefit: {
      sub_title: `Technical Excellence`,
      title: `Core Skills to Accelerate Your Mobile App Career`,
      description: `Our Native App Development program equips you with industry-leading technologies and professional expertise to craft high-quality, performant, and reliable mobile applications. From intuitive UI/UX design to seamless app store deployment — master the full lifecycle of mobile app creation with confidence.`,
      details: [
        {
          title: 'Cross-Platform Development Expertise',
          description: 'Gain deep proficiency in building unified, high-performance apps for both Android and iOS using Flutter and React Native.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M2 12l9 9 11-11-2-2-9 9-7-7z"/></svg>`
        },
        {
          title: 'Native Android & iOS Proficiency',
          description: 'Master platform-specific development with Kotlin for Android and Swift for iOS, ensuring superior user experience through industry best practices.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>`
        },
        {
          title: 'Firebase & API Integration Mastery',
          description: 'Implement real-time databases, secure authentication, and cloud functions with Firebase alongside RESTful API integrations for robust backend connectivity.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4zm0 4h8v2H4z"/></svg>`
        },
        {
          title: 'Version Control & Deployment Excellence',
          description: 'Leverage Git/GitHub for efficient version management and confidently publish your apps to Google Play and Apple App Stores with industry-standard workflows.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7v13h20V7L12 2z"/></svg>`
        },
        {
          title: 'Performance Optimization Techniques',
          description: 'Learn advanced techniques to optimize app performance, improve load times, and ensure smooth user interactions on all devices.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2z"/></svg>`
        },
        {
          title: 'Security Best Practices',
          description: 'Understand and apply essential mobile app security measures to protect user data and safeguard apps against vulnerabilities.',
          link: '#',
          icon: `<svg class="size-5 flex-none text-indigo-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5 3 9 9 9s9-4 9-9V5l-9-4z"/></svg>`
        }
      ]
    },

    beyond_learning: {
      sub_title: 'Beyond Learning',
      title: 'Comprehensive Support to Launch Your Mobile App Career',
      description: `At The Contrast, we go beyond teaching just Flutter or Kotlin — we empower you to become a confident, industry-ready app developer. With expert mentorship, real-world projects, career guidance, and ongoing community support, we prepare you to thrive in the competitive mobile development landscape.`,
      details: [
        {
          title: 'Personalized 1-on-1 Mentorship',
          description: 'Receive direct guidance from experienced Android, iOS, and cross-platform developers, gaining valuable insights from their professional journeys and codebases.'
        },
        {
          title: 'Hands-On Project Experience',
          description: 'Design, build, and deploy practical applications such as to-do lists, e-commerce platforms, social media clones, and Firebase-integrated tools.'
        },
        {
          title: 'Career Preparation & Interview Support',
          description: 'Access dedicated assistance for technical interview readiness, resume optimization tailored for app developers, and portfolio showcasing on GitHub and app stores.'
        },
        {
          title: 'Active Mobile Developer Community',
          description: 'Engage with a focused network of mobile professionals to share knowledge, collaborate on projects, and participate in hackathons.'
        },
        {
          title: 'App Store Publishing Guidance',
          description: 'Receive step-by-step support to publish your applications on Google Play and Apple App Store, including monetization best practices.'
        },
        {
          title: 'Exclusive Developer Resource Access',
          description: 'Benefit from lifetime access to UI kits, reusable code snippets, animation libraries, testing tools, and project templates to accelerate your development process.'
        }
      ]
    },

    learners_section: {
      sub_title: 'Who Are Our Learners',
      title: 'Learners from Diverse Backgrounds',
      description: `The Contrast proudly supports learners from all walks of life — whether you are just starting your journey or making a career transition.`,
      details: [
        {
          description: '“Their weekend sessions made it easy to upskill without impacting my job.”',
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
          description: '“Switching from mechanical engineering to IT seemed challenging, but The Contrast made it seamless.”',
          name: 'Rohit Jadhav',
          role: '#Career Switcher',
          image: 'https://tse4.mm.bing.net/th?id=OIP.jBOx03JO-3h0Nh7_PVB4aQAAAA&pid=Api&P=0&h=180',
        },
        {
          description: '“The mentorship and resources empowered me to confidently take on better freelance projects.”',
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
      title: 'Your Mobile App Career Breakthrough Starts Here.',
      description: 'Whether you’re just starting out or transitioning into mobile development, our Native App Development program guides you from fundamentals to Play Store-ready apps. Learn to build stunning, high-performance applications and unlock new opportunities with The Contrast.',
      cta_1: {
        text: 'Start Your App Development Journey',
        link: '#'
      },
      cta_2: {
        text: 'Explore the Roadmap',
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
      sub_title: 'Beginner’s Perspective in Mobile Development',
      title: 'What You Think You Need vs What You Actually Need',
      description: `Many beginners jump into flashy UI or frameworks, but a strong career is built on solid fundamentals and practical skills.`,
      think_you_need: [
        'Focus on Flutter or React Native before mastering native basics',
        'Only prioritize UI design and animations',
        'Publish apps without understanding architecture or lifecycle'
      ],
      actually_need: [
        'Strong foundation in Kotlin (Android) and Swift (iOS) native development',
        'Deep understanding of app lifecycle, navigation, and architecture patterns (MVVM, MVC)',
        'Hands-on experience building, debugging, and optimizing real-world apps'
      ]
    }
  }
}
