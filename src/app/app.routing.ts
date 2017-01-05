
// Import module level components from librarys here:
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// *********************************************************************


// Import compoents from within the app here
import { HomePage } from './pages/home.page';
import { AboutPage } from './pages/about.page';
//**********************************************************************

const appRoutes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'about',
        component: AboutPage
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
