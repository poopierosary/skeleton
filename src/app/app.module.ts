// Import Module level components from libraries here:
import { NgModule }            from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { HttpModule }          from '@angular/http';
import { FormsModule }       from '@angular/forms';
//******************************************************************************************************************


// Import components/views/pages within the app here
import { AppComponent }                                              from './app.component';
import { NavbarComponent }                                         from './components/navbar.component';
import { JumbotronComponent }                                   from './components/jumbotron.component';
import { HomePage }                                                      from './pages/home.page';
import { AboutPage }                                                      from './pages/about.page';
import { routing }                                                             from './app.routing';
//******************************************************************************************************************

@NgModule({
    imports:            [ BrowserModule, routing ],
    declarations:    [ AppComponent, NavbarComponent,
                              JumbotronComponent, HomePage,
                              AboutPage ],
    bootstrap:        [ AppComponent ]
})

export class AppModule { }