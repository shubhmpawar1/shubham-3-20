import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    {
        path: 'pages', component: AppComponent, children: [
            { path: '', component: LandingPageComponent, },
            { path: 'landing-page', component: LandingPageComponent, },
        ]
    },

];
