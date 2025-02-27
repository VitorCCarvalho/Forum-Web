import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
    { path: 'signup-page', loadComponent: () => import('./pages/signup-page/signup-page.component').then(m => m.SignupPageComponent) },
    { path: '**', redirectTo: 'home' }

];
