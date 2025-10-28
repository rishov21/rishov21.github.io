import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'supported-options',
    loadComponent: () => import('./pages/examples/examples.component').then(m => m.ExamplesComponent)
  },
  {
    path: 'documentation',
    loadComponent: () => import('./pages/documentation/documentation.component').then(m => m.DocumentationComponent)
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
