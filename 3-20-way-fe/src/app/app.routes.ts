import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { App } from './app';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {
        path: 'pages', component: App, children: [
            { path: '', component: LandingPageComponent, },
            { path: 'landing-page', component: LandingPageComponent, },
        ]
    }
];
