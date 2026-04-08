import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CareersService {

  constructor() { }

  careers_page_content = {

    advanced_curriculum: {
      title: 'Just Jobs or Real Career Building?',
      description_1: `At The Contrast, we don’t just help you get a job — we prepare you for a long-term, successful career in the tech industry.`,
      description_2: `Through deep mentorship, real project exposure, and personalized guidance, we make sure you enter the workforce not just as an employee, but as a confident professional ready to grow.`,
      image: 'https://media.istockphoto.com/id/1081869356/photo/taking-on-the-late-shift-with-true-dedication.webp?a=1&b=1&s=612x612&w=0&k=20&c=2fB4km8-W3elF6qr9pUhV8nDwARZLLiWorjnjE5oq-Y=',
      details: [
        {
          title: 'Personalized Career Mapping',
          description: 'We analyze your goals, strengths, and interests to design a clear path from where you are now to where you want to be in your tech career.'
        },
        {
          title: 'Industry-Relevant Upskilling',
          description: 'From in-demand technologies to soft skills, we help you gain everything recruiters look for in modern professionals.'
        },
        {
          title: 'Mentor-Led Career Support',
          description: 'Our experienced mentors guide you not just technically, but also on career decisions, interview preparation, and communication.'
        },
        {
          title: 'Confidence Through Real Experience',
          description: 'Get hands-on experience on real-world problems, work in teams, and present solutions just like in the corporate world. By the time you’re placed, you’re already trained to perform.'
        }
      ]
    },

    testimonials_1: [
      {
        description: "Mentoring students and watching them grow into developers is the most rewarding part of my journey.",
        name: "Mr. Arun Gounder",
        designation: "Software Development Engineer 3",
        company: "1.5 years experience",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQFnXww3MAYiJQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690352187072?e=2147483647&v=beta&t=CKSPpzRB476DqmjD-sXXBkBY_-CdOSXIPdVXJruEWtQ"
      },
      {
        description: "Helping students solve real-world coding problems makes mentoring truly satisfying.",
        name: "Mr. Bhavesh Karkare",
        designation: "Software Development Engineer 3",
        company: "1.5 years experience",
        image: "https://media.licdn.com/dms/image/v2/C4D03AQFlgJRW7ZZ5fQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1654058388661?e=2147483647&v=beta&t=viJIqj1Bt40PZFZWMwuEh7aat_Fr8_fiem7w_K5v_94"
      },
      {
        description: "At The Contrast, I enjoy guiding students on real tech stacks and seeing their confidence grow.",
        name: "Mr. Mayur Talekar",
        designation: "Software Development Engineer 3",
        company: "1 years experience",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQFVOlxs9mdxTw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726077505919?e=2147483647&v=beta&t=OZC9RBOsDhbnJkE1-m49YzgQwbqx0NCHGqgkS7SzwY4"
      },
      {
        description: "I believe mentorship accelerates growth. It's amazing to help learners achieve real career results.",
        name: "Mr. Abhishek Jadhav",
        designation: "Software Development Engineer 3",
        company: "1 Years experience",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQGbJNafmnevaw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1697094552683?e=2147483647&v=beta&t=oXA2s1FZfo5AC4IvtYDKmdxE4ZbUi073dDJ0YFItEcM"
      },
      {
        description: "From code reviews to project feedback, mentoring at The Contrast has been a fulfilling experience.",
        name: "Mr. Shubham Salunkhe",
        designation: "Software Development Engineer 3",
        company: "1 years experience",
        image: "https://media.licdn.com/dms/image/v2/D5603AQE_5MJ-wRtz4A/profile-displayphoto-shrink_200_200/B56ZWJ1aDyGQAY-/0/1741774234951?e=2147483647&v=beta&t=ZJESKTKyQmebxLYXA07U3hnyfYeAlCtF80enp1F8SdI"
      },
      {
        description: "Mentorship helps me stay grounded in tech while making a difference for aspiring developers.",
        name: "Mr. Shreeram Kaudare",
        designation: "Software Development Engineer 4",
        company: "8 Months experience",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQE8MH_XmdZvOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699466662709?e=2147483647&v=beta&t=Ahx1Oux-jlf6hOM-VV3v_65g04quW_ZU-LlQnCxIg3U"
      }
    ],

    language_cta: {
      title: 'Build. Grow in the Language You Know.',
      description: `Join hundreds of learners and professionals mastering skills in English, Hindi, and Marathi. Whether you're training your team or building your next big idea, we speak your language.`,
      image: 'https://images.unsplash.com/photo-1616469839671-d8700f112895?auto=format&fit=crop&w=1600&q=80',
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
          title: 'Full Stack Web Development',
          description: 'Learn frontend and backend with real-world projects.',
          image: 'https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnVsbCUyMFN0YWNrJTIwV2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D',
          cta: {
            text: 'Enroll Now',
            link: '#'
          }
        },
        {
          title: 'UI/UX Design Essentials',
          description: 'Master design principles and tools like Figma.',
          image: 'https://plus.unsplash.com/premium_photo-1733306548826-95daff988ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VUklMkZVWCUyMERlc2lnbiUyMEVzc2VudGlhbHN8ZW58MHx8MHx8fDA%3D',
          cta: {
            text: 'Enroll Now',
            link: '#'
          }
        },
        {
          title: 'MERN Stack Bootcamp',
          description: 'Build scalable web apps using MongoDB, React, Node.',
          image: 'https://images.unsplash.com/photo-1731160807880-daf859b64420?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TUVSTiUyMFN0YWNrJTIwQm9vdGNhbXB8ZW58MHx8MHx8fDA%3D',
          cta: {
            text: 'Enroll Now',
            link: '#'
          }
        },
        {
          title: 'Software Testing & QA',
          description: 'Learn manual & automation testing with real tools.',
          image: 'https://images.unsplash.com/photo-1637073849667-91120a924221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29mdHdhcmUlMjBUZXN0aW5nJTIwJTI2JTIwUUF8ZW58MHx8MHx8fDA%3D',
          cta: {
            text: 'Enroll Now',
            link: '#'
          }
        },
        {
          title: 'Project Management Basics',
          description: 'Understand workflows, Agile, and project planning.',
          image: 'https://plus.unsplash.com/premium_photo-1668446396640-11fa8d483856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHJvamVjdCUyME1hbmFnZW1lbnQlMjBCYXNpY3N8ZW58MHx8MHx8fDA%3D',
          cta: {
            text: 'Enroll Now',
            link: '#'
          }
        },
        {
          title: 'HTML, CSS & JavaScript Mastery',
          description: 'Deep dive into frontend foundations and interactivity.',
          image: 'https://plus.unsplash.com/premium_photo-1723849222657-e1e48a0a306e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SFRNTCUyQyUyMENTUyUyMCUyNiUyMEphdmFTY3JpcHQlMjBNYXN0ZXJ5fGVufDB8fDB8fHww',
          cta: {
            text: 'Enroll Now',
            link: '#'
          }
        }
      ]
    },

    download_brouchre: {
      title: 'Design Your Career Path with Confidence.',
      description: 'Unlock your future with our expertly crafted Course Brochure and a Personalized Career Plan. Explore real career tracks, tools, and technologies curated by top industry mentors. Whether you’re just starting or aiming to upskill, this is your roadmap to success – available in English, Hindi, and Marathi.',
      brochure_link: {
        text: 'Download Full Course Brochure',
        link: '#'  // Replace with actual link to the PDF
      },
      career_plan_link: {
        text: 'Upload Your Resume to Get a Custom Career Plan',
        link: '#'  // Replace with link to upload resume (form or file upload handler)
      }
    },


  }
}