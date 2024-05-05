import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'matrix', loadComponent: () => import('./pages/matrix-page/matrix-page.component').then(mod => mod.MatrixPageComponent) },
    //{ path: 'lotr', loadComponent: () => import('./pages/lotr-page/lotr-page.component').then(mod => mod.LotrPageComponent) },
    { path: '', redirectTo: '/matrix', pathMatch: 'full' },
    { path: '**', redirectTo: '/matrix' },
  ]
