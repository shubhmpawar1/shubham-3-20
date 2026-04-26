import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { LandingVideoComponent } from './pages/landing-video/landing-video.component';



export const routes: Routes = [
    { path: '', component: LandingVideoComponent },
    { path: 'landing-page', component: LandingPageComponent },
    {
        path: 'pages', component: AppComponent, children: [
            { path: '', component: LandingPageComponent, },
            { path: 'landing-page', component: LandingPageComponent, },
        ]
    },

];
