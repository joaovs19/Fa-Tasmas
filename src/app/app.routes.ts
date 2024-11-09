import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InitialPageComponent } from './pages/initial-page/initial-page.component';
import { CacaPageComponent } from './pages/caca-page/caca-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: InitialPageComponent},
  {path:'coin', component:CacaPageComponent}
];
