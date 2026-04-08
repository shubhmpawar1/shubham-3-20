import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { FullStackNodeJsDevelopmentPageComponent } from './pages/full-stack-node-js-development-page/full-stack-node-js-development-page.component';
import { UiUxDesignPageComponent } from './pages/ui-ux-design-page/ui-ux-design-page.component';
import { SoftwareTestingPageComponent } from './pages/software-testing-page/software-testing-page.component';
import { ProductManagementPageComponent } from './pages/product-management-page/product-management-page.component';
import { ProjectManagementPageComponent } from './pages/project-management-page/project-management-page.component';
import { WebDevelopmentPageComponent } from './pages/web-development-page/web-development-page.component';
import { MobileDevelopmentPageComponent } from './pages/mobile-development-page/mobile-development-page.component';
import { NativeApplicationDevelopmentPageComponent } from './pages/native-application-development-page/native-application-development-page.component';
import { UiUxPlanningPageComponent } from './pages/ui-ux-planning-page/ui-ux-planning-page.component';
import { HtmlCssDesigningPageComponent } from './pages/html-css-designing-page/html-css-designing-page.component';
import { CareersPageComponent } from './pages/careers-page/careers-page.component';
import { SupportPageComponent } from './pages/support-page/support-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProjectManagmentServicePageComponent } from './pages/project-managment-service-page/project-managment-service-page.component';
import { ProductManagmentServicePageComponent } from './pages/product-managment-service-page/product-managment-service-page.component';
import { FullStackDeveloperPageComponent } from './pages/full-stack-developer-page/full-stack-developer.component';
import { AngularDeveloperComponent } from './pages/angular-developer/angular-developer.component';
import { ReactDeveloperComponent } from './pages/react-developer/react-developer.component';
import { NodejsDeveloperComponent } from './pages/nodejs-developer/nodejs-developer.component';
import { DevopsEngineerComponent } from './pages/devops-engineer/devops-engineer.component';
import { ProjectManagerPageComponent } from './pages/project-manager-page/project-manager-page.component';
import { ProductManagerPageComponent } from './pages/product-manager-page/product-manager-page.component';
import { TrainingLandingPageComponent } from './pages/training-landing-page/training-landing-page.component';
import { ServiceLandingPageService } from './services/service-landing-page.service';
import { ServicesLandingPageComponent } from './pages/services-landing-page/services-landing-page.component';
import { ConsultancyLandingPageComponent } from './pages/consultancy-landing-page/consultancy-landing-page.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {
        path: 'pages', component: AppComponent, children: [
            { path: '', component: LandingPageComponent, },
            { path: 'landing-page', component: LandingPageComponent, },
            { path: 'full-stack-nodejs-development-page', component: FullStackNodeJsDevelopmentPageComponent },
            { path: 'ui-ux-design-page', component: UiUxDesignPageComponent },
            { path: 'software-testing-page', component: SoftwareTestingPageComponent },
            { path: 'product-management-page', component: ProductManagementPageComponent },
            { path: 'project-management-page', component: ProjectManagementPageComponent },
            // Services
            { path: 'web-development-page', component: WebDevelopmentPageComponent },
            { path: 'mobile-development-page', component: MobileDevelopmentPageComponent },
            { path: 'native-application-development-page', component: NativeApplicationDevelopmentPageComponent },
            { path: 'service-project-management-page', component: ProjectManagmentServicePageComponent },
            { path: 'service-product-management-page', component: ProductManagmentServicePageComponent },
            { path: 'ui-ux-planning-page', component: UiUxPlanningPageComponent },
            { path: 'html-css-designing-page', component: HtmlCssDesigningPageComponent },
            //consultancy
            { path: 'full-stack-developer-page', component: FullStackDeveloperPageComponent },
            { path: 'angular-developer-page', component: AngularDeveloperComponent },
            { path: 'react-developer-page', component: ReactDeveloperComponent },
            { path: 'nodejs-developer-page', component: NodejsDeveloperComponent },
            { path: 'devops-engineer-page', component: DevopsEngineerComponent },
            { path: 'project-manager-page', component: ProjectManagerPageComponent },
            { path: 'product-manager-page', component: ProductManagerPageComponent },
            // Company
            { path: 'about-page', component: AboutUsPageComponent },
            { path: 'career-page', component: CareersPageComponent },
            { path: 'contact-page', component: ContactPageComponent },
            { path: 'blog.thecontrast.in', component: BlogPageComponent },
            // landing pages
            { path: 'training-landing-page', component: TrainingLandingPageComponent },
            { path: 'services-landing-page', component: ServicesLandingPageComponent },
            { path: 'resourcing-landing-page', component: ConsultancyLandingPageComponent },
        ]
    },

];
