import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevopsEngineerService {

  constructor() { }

  devops_Engineer_content = {

    hero_section: {
      title: 'Deploy Skilled. DevOps Engineers. On-Demand.',
      pill_1: 'Cloud Native',
      pill_2: 'CI/CD Experts',
      pill_3: 'Ready in 48hrs',
      quick_look: 'Streamline infra, automate deploys & boost uptime with expert DevOps engineers.',
      description: `Our DevOps experts simplify cloud, CI/CD, and infra with AWS, Docker, and Kubernetes. Automate, monitor, and scale faster.`,
      cta_1: {
        text: 'View Engineer Profiles',
        link: '#engineers'
      },
      cta_2: {
        text: 'Talk to a Specialist',
        link: '#model'
      },
      image_1: 'https://images.unsplash.com/photo-1607743386830-f198fbd7f9c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGV2b3BzJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww',
      image_2: 'https://images.unsplash.com/photo-1631624220291-8f191fbdb543?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGV2b3BzJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww',
      image_3: 'https://images.unsplash.com/photo-1667372335936-3dc4ff716017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGRldm9wcyUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D',
      image_4: 'https://images.unsplash.com/photo-1596560292551-97c0d8871dd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRldm9wcyUyMGRldmVsb3BlciUyMGNvZGV8ZW58MHx8MHx8fDA%3D',
      image_5: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80',
    },

    testimonials_1: [
      {
        description: "The DevOps engineer we hired from The Contrast streamlined our infrastructure and significantly improved deployment automation.",
        name: "Sandeep Kale",
        designation: "Infrastructure Head",
        company: "CloudServe Tech",
        image: "https://randomuser.me/api/portraits/men/65.jpg"
      },
      {
        description: "Thanks to their DevOps team, our software delivery and monitoring processes have become seamless and efficient. They managed our cloud operations perfectly.",
        name: "Priya Deshmukh",
        designation: "System Architect",
        company: "NextGen Solutions",
        image: "https://randomuser.me/api/portraits/women/68.jpg"
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
      sub_title: 'Why Choose Our DevOps Engineers?',
      title: 'Powerful DevOps Benefits for Your Business',
      description: 'Our DevOps professionals optimize your infrastructure and accelerate your software delivery lifecycle.',
      details: [
        {
          title: 'Infrastructure as Code',
          description: 'Automate provisioning with tools like Terraform, Ansible, and CloudFormation.'
        },
        {
          title: 'Continuous Integration & Deployment',
          description: 'Set up CI/CD pipelines using Jenkins, GitHub Actions, or GitLab CI for faster, reliable releases.'
        },
        {
          title: 'Containerization & Orchestration',
          description: 'Manage scalable container deployments with Docker and Kubernetes.'
        },
        {
          title: 'Monitoring & Alerting',
          description: 'Implement robust monitoring solutions with Prometheus, Grafana, ELK stack to ensure uptime.'
        },
        {
          title: 'Cloud Expertise',
          description: 'Deep experience in AWS, Azure, GCP cloud environments to optimize cost and performance.'
        },
        {
          title: 'Security & Compliance',
          description: 'Ensure compliance with industry standards and implement strong security controls.'
        }
      ]
    },

    beyond_learning: {
      sub_title: 'Hire with Assurance',
      title: 'DevOps Engineers Beyond Automation',
      description: 'Our DevOps professionals don’t just automate — they build resilient, secure, and scalable systems tailored to your business.',
      details: [
        {
          title: 'Business-Aligned Infrastructure',
          description: 'Design and maintain systems that directly support your business goals and growth.'
        },
        {
          title: 'Seamless Collaboration',
          description: 'Work effectively across development, QA, and operations teams for smoother delivery.'
        },
        {
          title: 'Proactive Monitoring & Response',
          description: 'Identify and resolve issues before they impact your users.'
        }
      ]
    },

    language_cta: {
      title: 'Streamline Your Infrastructure Now',
      description: `Connect with our skilled DevOps engineers to automate deployments and optimize your cloud environment.`,
      cta: {
        text: 'Hire DevOps Experts',
        link: '#contact'
      }
    },

    faqs: {
      title: 'Frequently Asked Questions',
      details: [
        {
          question: 'Which DevOps tools do your engineers specialize in?',
          answer: 'Our engineers are proficient in Jenkins, Docker, Kubernetes, Terraform, AWS, and more.',
          expanded: false,
        },
        {
          question: 'How do you ensure system uptime and reliability?',
          answer: 'We implement continuous monitoring, automated testing, and alerting systems to maintain high availability.',
          expanded: false,
        },
        {
          question: 'Can you assist with cloud migration projects?',
          answer: 'Yes, we provide end-to-end support for smooth cloud migration and infrastructure optimization.',
          expanded: false,
        },
        {
          question: 'What is your approach to security and compliance?',
          answer: 'Our engineers follow strict security protocols and help maintain compliance with industry standards.',
          expanded: false,
        },
        {
          question: 'How do you handle disaster recovery?',
          answer: 'We design backup strategies and disaster recovery plans to minimize downtime and data loss.',
          expanded: false,
        }
      ]
    },
  }
}
