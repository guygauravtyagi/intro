import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'matrix', loadComponent: () => import('./pages/matrix-page/matrix-page.component').then(mod => mod.MatrixPageComponent) },
    //{ path: 'lotr', loadComponent: () => import('./pages/lotr-page/lotr-page.component').then(mod => mod.LotrPageComponent) },
    { path: 'boringPage', loadComponent: () => import('./pages/boring-page/boring-page.component').then(mod => mod.BoringPageComponent) },
    //{ path: 'starwars', loadComponent: () => import('./pages/start-war-page/start-war-page.component').then(mod => mod.StartWarPageComponent) },
    //{ path: 'slides', loadComponent: () => import('./pages/slides-page/slides-page.component').then(mod => mod.SlidesPageComponent) },
    { path: '', redirectTo: '/matrix', pathMatch: 'full' },
    { path: '**', redirectTo: '/matrix' },
  ]
