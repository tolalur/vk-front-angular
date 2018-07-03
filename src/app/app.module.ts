import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {AppComponent} from './app.component';
import { ShowUsersComponent } from './show-users/show-users.component';

import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';


@NgModule({
    declarations: [
        AppComponent,
        ShowUsersComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        CardModule,
        ButtonModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
