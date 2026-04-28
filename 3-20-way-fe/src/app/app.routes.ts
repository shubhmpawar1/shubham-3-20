import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { LandingVideoComponent } from './pages/landing-video/landing-video.component';
import { LandingPage2Component } from './pages/landing-page-2/landing-page-2.component';
import { LandingPage3Component } from './pages/landing-page-3/landing-page-3.component';
import { LandingPage4Component } from './pages/landing-page-4/landing-page-4.component';
import { CopyrightNoticeComponent } from './pages/copyright-notice/copyright-notice.component';




export const routes: Routes = [
    { path: '', component: LandingVideoComponent },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'landing-page-2', component: LandingPage2Component },
    { path: 'landing-page-3', component: LandingPage3Component },
    { path: 'landing-page-4', component: LandingPage4Component },
    { path: 'copyright-notice', component: CopyrightNoticeComponent },

    {
        path: 'pages', component: AppComponent, children: [
            { path: '', component: LandingPageComponent, },
            { path: 'landing-page', component: LandingPageComponent, },
        ]
    },

];
