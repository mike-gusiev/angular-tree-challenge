import {BrowserModule} from '@angular/platform-browser';
import {NgModule,} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {FactoryComponent} from './components/factory/factory.component';
import {NumberComponent} from './components/number/number.component';

@NgModule({
    declarations: [
        AppComponent,
        FactoryComponent,
        NumberComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
