import { Routes, RouterModule } from '@angular/router';
import { eventsRoutes } from './events';
import { NoContent } from './no-content';
import { LocationComponent } from './core/location.component';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  ...eventsRoutes,
  { path: 'location', component: LocationComponent},
  { path: '**',    component: NoContent },
];
