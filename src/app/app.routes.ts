import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BingeComponent } from './binge/binge.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page',
      },
      {
        path: 'binge',
        component: BingeComponent,
        title: 'Results',
      },
];
