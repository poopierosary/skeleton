
// Import module level components from librarys here:
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// *********************************************************************


// Import compoents from within the app here
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
//**********************************************************************

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
