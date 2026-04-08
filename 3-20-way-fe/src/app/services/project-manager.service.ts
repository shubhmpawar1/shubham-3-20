import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  constructor() { }

  project_manager_content = {

    hero_section: {
      title: 'Empower Your Teams with Skilled Project Managers.',
      pill_1: 'Agile & Scrum Ready',
      pill_2: 'Enterprise Project Experience',
      pill_3: 'Cross-Team Coordination Experts',
      quick_look: 'We place project managers who accelerate delivery and align teams efficiently.',
      description: `The Contrast Consultancy helps companies scale their delivery by placing experienced Project Managers trained in real industry scenarios.`,
      cta_1: {
        text: 'Get Project Manager Profiles',
        link: '#upload'
      },
      cta_2: {
        text: 'How Our Process Works',
        link: '#model'
      },
      image_1: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbSUyMHdvcmt8ZW58MHx8MHx8fDA%3D',
      image_2: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
      image_3: 'https://images.unsplash.com/photo-1603201667141-5a2d4c673378?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW0lMjB3b3JrJTIwcHJvamVjdCUyMG1hbmVnZXJ8ZW58MHx8MHx8fDA%3D',
      image_4: 'https://plus.unsplash.com/premium_photo-1707155465551-0d2b570926d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2plY3QlMjBtYW5lZ2VyJTIwaW4lMjB3b3JrJTIwaXQlMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D',
      image_5: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80',
    },

    testimonials_1: [
      {
        description: "Thanks to The Contrast, we onboarded a Project Manager who took over stakeholder communication, improved sprint velocity, and streamlined reporting — all in the first month.",
        name: "Amit Jain",
        designation: "VP - Product",
        company: "TechNova Solutions",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        description: "The Project Manager we hired brought immediate process clarity. Our internal team synced faster and our clients were happier with delivery timelines.",
        name: "Rashmi Kulkarni",
        designation: "COO",
        company: "Skyline Systems",
        image: "https://randomuser.me/api/portraits/women/52.jpg"
      }
    ],

    companies: [
      { src: 'https://vectorseek.com/wp-content/uploads/2023/08/TCS-Tata-Consultancy-Services-Logo-Vector.svg-.png', alt: 'TCS' },
      { src: 'https://tse1.mm.bing.net/th?id=OIP.B6ZDxkXIEhuneOFcU6UHcwHaCK&pid=Api&P=0&h=180', alt: 'India Bison' },
      { src: 'https://tse2.mm.bing.net/th?id=OIP.DA8FBCaBvcANLGxl2R_dJwHaEq&pid=Api&P=0&h=180', alt: 'capgemini' },
      { src: 'https://tse2.mm.bing.net/th?id=OIP.B5QRWIA0kq0u9SfrwYF6NgAAAA&pid=Api&P=0&h=180', alt: 'Hubblehox' },
      { src: 'https://logos-world.net/wp-content/uploads/2020/06/Adobe-Logo.png', alt: 'Adobe' }
    ],

    technical_benefit: {
      title: 'Why Hire Project Managers from The Contrast?',
      description: 'Our Project Managers bring structure, leadership, and accountability to your project teams.',
      details: [
        {
          title: 'Trained in Agile & PMI Standards',
          description: 'Each Project Manager is certified and trained in Agile, Scrum, and PMI best practices.'
        },
        {
          title: 'Cross-Functional Team Leadership',
          description: 'Our professionals handle timelines, reporting, stakeholders, and delivery across teams.'
        },
        {
          title: 'Deployment-Ready Talent',
          description: 'Quickly deploy our vetted managers into your team with zero ramp-up time.'
        }
      ]
    },

    beyond_learning: {
      title: 'Real-World Project Exposure',
      description: 'Every Project Manager we place has worked on simulated enterprise projects and capstones.',
      details: [
        {
          title: 'Client Communication',
          description: 'Trained to manage client expectations and reporting.'
        },
        {
          title: 'Remote & Hybrid Adaptability',
          description: 'Ready for virtual teams with tools like Jira, Trello, and Slack.'
        },
        {
          title: 'Agile Project Delivery',
          description: 'Experienced in sprint planning, backlog grooming, and running effective stand-ups.'
        }
      ]
    },

    language_cta: {
      title: 'Looking to Hire a Project Manager?',
      description: `Share your requirements and get access to vetted Project Managers trained to lead from day one.`,
      cta: {
        text: 'Request Project Manager Profiles',
        link: '#upload'
      }
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'How experienced are your Project Managers?',
          answer: 'Our candidates have 1-3 years of industry-facing project experience including capstone-level simulations.',
          expanded: false,
        },
        {
          question: 'Do you provide Project Managers trained in Agile/Scrum?',
          answer: 'Yes. All managers are trained in Agile, Scrum, Jira, and team collaboration tools.',
          expanded: false,
        },
        {
          question: 'What industries do your Project Managers work in?',
          answer: 'We provide managers for IT, software, digital, and product delivery teams across industries.',
          expanded: false,
        }
      ]
    }
  }
}
