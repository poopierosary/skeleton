// Import Module level components from libraries here:
import { NgModule }            from '@angular/core';
import { BrowserModule }   from '@angular/platform-browser';
import { HttpModule }          from '@angular/http';
import { FormsModule }       from '@angular/forms';
//*****************************************************************************************


// Import components/views/pages within the app here
import { AppComponent }                from './app.component';
//*****************************************************************************************

@NgModule({
    imports:            [ BrowserModule ],
    declarations:    [ AppComponent ],
    bootstrap:        [ AppComponent ]
})

export class AppModule { }