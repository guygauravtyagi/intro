import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'matrix', loadComponent: () => import('./pages/matrix-page/matrix-page.component').then(mod => mod.MatrixPageComponent) },
    //{ path: 'lotr', loadComponent: () => import('./pages/lotr-page/lotr-page.component').then(mod => mod.LotrPageComponent) },
    { path: 'home', loadComponent: () => import('./pages/boring-page/boring-page.component').then(mod => mod.BoringPageComponent) },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
  ]
