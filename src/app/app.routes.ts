import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadComponent: () => import('./pages/matrix-page/matrix-page.component').then(mod => mod.MatrixPageComponent) },
    //{ path: 'lotr', loadComponent: () => import('./pages/lotr-page/lotr-page.component').then(mod => mod.LotrPageComponent) },
    { path: 'boring', loadComponent: () => import('./pages/boring-page/boring-page.component').then(mod => mod.BoringPageComponent) },
    { path: 'starwars', loadComponent: () => import('./pages/start-war-page/start-war-page.component').then(mod => mod.StartWarPageComponent) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
  ]
