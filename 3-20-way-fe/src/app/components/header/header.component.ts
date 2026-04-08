import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router'; // ✅ Correct Angular Router import

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, NgClass, NgFor],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  isTrainingOpen = false;
  isServicesOpen = false;
  isCompanyOpen = false;
  isResourcingOpen = false;
  isMenuOpen = false;
  isLandingOpen = false;

  currentUrl: string = '';

  // Tracking once-per-section landing navigation
  private hasNavigated = {
    training: false,
    services: false,
    resourcing: false,
  };

  private shouldOpenDropdown: 'training' | 'services' | 'resourcing' | null = null;

  @Input() color = 'cyan';

  constructor(private eRef: ElementRef, private router: Router) {
    this.currentUrl = this.router.url;

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;

        if (
          event.url.startsWith('/pages/training-landing-page') ||
          event.url.startsWith('/training/')
        ) {
          if (this.shouldOpenDropdown === 'training') {
            this.isTrainingOpen = true;
            this.closeOtherMenus('training');
            this.shouldOpenDropdown = null;
          }
        }

        if (
          event.url.startsWith('/pages/services-landing-page') ||
          event.url.startsWith('/services/')
        ) {
          if (this.shouldOpenDropdown === 'services') {
            this.isServicesOpen = true;
            this.closeOtherMenus('services');
            this.shouldOpenDropdown = null;
          }
        }

        if (
          event.url.startsWith('/pages/resourcing-landing-page') ||
          event.url.startsWith('/resourcing/')
        ) {
          if (this.shouldOpenDropdown === 'resourcing') {
            this.isResourcingOpen = true;
            this.closeOtherMenus('resourcing');
            this.shouldOpenDropdown = null;
          }
        }
      }
    });
  }

  toggleDropdown(menu: string) {
    switch (menu) {
      case 'training':
        if (!this.hasNavigated.training) {
          this.hasNavigated.training = true; // Mark visited immediately
          this.shouldOpenDropdown = 'training';
          this.router.navigate(['/pages/training-landing-page']);
        } else {
          this.isTrainingOpen = !this.isTrainingOpen;
          this.closeOtherMenus('training');
        }
        break;

      case 'services':
        if (!this.hasNavigated.services) {
          this.hasNavigated.services = true;
          this.shouldOpenDropdown = 'services';
          this.router.navigate(['/pages/services-landing-page']);
        } else {
          this.isServicesOpen = !this.isServicesOpen;
          this.closeOtherMenus('services');
        }
        break;

      case 'resourcing':
        if (!this.hasNavigated.resourcing) {
          this.hasNavigated.resourcing = true;
          this.shouldOpenDropdown = 'resourcing';
          this.router.navigate(['/pages/resourcing-landing-page']);
        } else {
          this.isResourcingOpen = !this.isResourcingOpen;
          this.closeOtherMenus('resourcing');
        }
        break;

      case 'company':
        this.isCompanyOpen = !this.isCompanyOpen;
        this.closeOtherMenus('company');
        break;

      case 'landing':
        this.isLandingOpen = !this.isLandingOpen;
        this.closeOtherMenus('landing');
        break;
    }
  }

  navigateToCourse(link: string, event: MouseEvent) {
    event.stopPropagation(); // Prevent dropdown toggle on click

    // Close training dropdown so it won't auto-open landing page on navigation end
    this.isTrainingOpen = false;
    this.isServicesOpen = false;
    this.isResourcingOpen = false;

    this.router.navigate([link]);
  }

  closeOtherMenus(active: string) {
    this.isTrainingOpen = active === 'training' ? this.isTrainingOpen : false;
    this.isServicesOpen = active === 'services' ? this.isServicesOpen : false;
    this.isCompanyOpen = active === 'company' ? this.isCompanyOpen : false;
    this.isResourcingOpen = active === 'resourcing' ? this.isResourcingOpen : false;
    this.isLandingOpen = active === 'landing' ? this.isLandingOpen : false;
  }

  closeAllMenus() {
    this.isTrainingOpen = false;
    this.isServicesOpen = false;
    this.isCompanyOpen = false;
    this.isResourcingOpen = false;
    this.isLandingOpen = false;
  }

  toggleMainMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closeAllMenus();
      this.isMenuOpen = false;
    }
  }

  trainingmenuitems = {
    title: 'Training',
    items: [
      {
        title: 'All Trainings',
        discription: 'Explore all practical tech trainings in one place.',
        link: '/pages/all-trainings',
        iconPath:
          'M12 2C10.343 2 9 3.343 9 5v2.126c-.305.111-.597.242-.875.39C5.457 8.592 4 10.184 4 12s1.457 3.408 4.125 4.484C9.403 16.758 9.695 16.889 10 17V19a2 2 0 104 0v-2c.305-.111.597-.242.875-.39C18.543 15.408 20 13.816 20 12s-1.457-3.408-4.125-4.484A7.502 7.502 0 0015 7.126V5c0-1.657-1.343-3-3-3zM12 0c2.21 0 4 1.79 4 4v2.024c2.766 1.02 5 3.49 5 5.976s-2.234 4.956-5 5.976V20a4 4 0 01-8 0v-2.024c-2.766-1.02-5-3.49-5-5.976s2.234-4.956 5-5.976V4c0-2.21 1.79-4 4-4z',
      },
      {
        title: 'Full Stack NodeJS Development',
        discription: 'Backend to frontend practical coding skills.',
        link: '/pages/full-stack-nodejs-development-page',
        iconPath:
          'M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z',
      },
      {
        title: 'UI / UX Design',
        discription: 'Smart design for better learning experience.',
        link: '/pages/ui-ux-design-page',
        iconPath:
          'M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59',
      },
      {
        title: 'Software Testing',
        discription: 'Bug-free software with real-world testing skills.',
        link: '/pages/software-testing-page',
        iconPath:
          'm15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
      },
      {
        title: 'Product Management',
        discription: 'Plan, build, and launch successful products.',
        link: '/pages/product-management-page',
        iconPath:
          'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z',
      },
      {
        title: 'Project Management',
        discription: 'Manage IT projects with agile techniques.',
        link: '/pages/project-management-page',
        iconPath:
          'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75',
      },
    ],
  };

  servicesData = [
    {
      category: 'Core Services',
      items: [
        {
          title: 'Web Development',
          description: 'Modern, responsive websites.',
          link: '/pages/web-development-page',
          icon: 'M17.25 6.75 22.5 12l-5.25 5.25M6.75 18l-5.25-6 5.25-5.25M13.5 3 9 19.5',
        },
        {
          title: 'Mobile Development (Hybrid / Native)',
          description: 'Android & iOS apps.',
          link: '/pages/mobile-development-page',
          icon: 'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
        },
        {
          title: 'Native Application Development',
          description: 'Fast, full-featured apps.',
          link: '/pages/native-application-development-page',
          icon: 'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z',
        },
      ],
    },
    {
      category: 'Outsourcing',
      items: [
        {
          title: 'Project Management',
          description: 'Plan & track projects.',
          link: '/pages/service-project-management-page',
          icon: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75',
        },
        {
          title: 'Product Management',
          description: 'Build successful products.',
          link: '/pages/service-product-management-page',
          icon: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
        },
        {
          title: 'UI / UX Planning',
          description: 'Smart, user-first design.',
          link: '/pages/ui-ux-planning-page',
          icon: 'M16.862 4.487 18.549 2.8a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10',
        },
        {
          title: 'HTML / CSS Designing',
          description: 'Clean, responsive layouts.',
          link: '/pages/html-css-designing-page',
          icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
        },
      ],
    },
  ];

  resourcingItems = [
    {
      title: 'All resourcing',
      description: 'Find all expert resourcing solutions in one place.',
      link: '/pages/all-resourcing',
      iconPath:
        'M9.75 2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V3h1.5A2.25 2.25 0 0118 5.25v13.5A2.25 2.25 0 0115.75 21H8.25A2.25 2.25 0 016 18.75V5.25A2.25 2.25 0 018.25 3H9.75V2.25zM9 3v.75h6V3H9z',
    },
    {
      title: 'Full Stack Developer',
      description: 'Upload resume for Full Stack Developer jobs with.',
      link: '/pages/full-stack-developer-page',
      iconPath:
        'm6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z',
    },
    {
      title: 'Angular Developer',
      description: 'Upload resume for Angular Developer jobs with.',
      link: '/pages/angular-developer-page',
      iconPath:
        'm21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25',
    },
    {
      title: 'React Developer',
      description: 'Upload resume for React Developer jobs with.',
      link: '/pages/react-developer-page',
      iconPath:
        'M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z',
    },
    {
      title: 'NodeJS Developer',
      description: 'Upload resume for NodeJS Developer jobs with.',
      link: '/pages/nodejs-developer-page',
      iconPath:
        'M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z',
    },
    {
      title: 'DevOps Engineer',
      description: 'Upload resume for DevOps Engineer jobs with.',
      link: '/pages/devops-engineer-page',
      iconPath:
        'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
    },
    {
      title: 'Project Management',
      description: 'Plan & track projects.',
      link: '/pages/project-manager-page',
      iconPath:
        'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75',
    },
    {
      title: 'Product Management',
      description: 'Build successful products.',
      link: '/pages/product-manager-page',
      iconPath:
        'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
    },
  ];

  companyDropdown = {
    button: {
      label: 'Company',
      svgViewBox: '0 0 20 20',
      svgPath:
        'M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z',
    },
    menuItems: [
      {
        routerLink: '/pages/about-page',
        icon: {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 1.5,
          stroke: 'currentColor',
          pathD:
            'M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z',
        },
        title: 'About us',
        description: 'Who we are and what we do.',
      },
      {
        routerLink: '/pages/career-page',
        icon: {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 1.5,
          stroke: 'currentColor',
          pathD:
            'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z',
        },
        title: 'Careers',
        description: 'Work with our growing team.',
      },
      {
        routerLink: '/pages/contact-page',
        icon: {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 1.5,
          stroke: 'currentColor',
          pathD:
            'M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3',
        },
        title: 'Contact',
        description: 'We’re here to support your journey.',
      },
      {
        routerLink: '/pages/blog.thecontrast.in',
        icon: {
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          viewBox: '0 0 24 24',
          strokeWidth: 1.5,
          stroke: 'currentColor',
          pathD:
            'm16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10',
        },
        title: 'Blog',
        description: 'Insights, updates, and tips.',
      },
    ],
    bottomLinks: [
      {
        routerLink: '/pages/contact-page',
        iconPath:
          'M2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm6.39-2.908a.75.75 0 0 1 .766.027l3.5 2.25a.75.75 0 0 1 0 1.262l-3.5 2.25A.75.75 0 0 1 8 12.25v-4.5a.75.75 0 0 1 .39-.658Z',
        label: 'Talk To Expert',
      },
      {
        routerLink: '/pages/contact-page',
        iconPath:
          'M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z',
        label: 'Contact sales',
      },
    ],
  };
}
