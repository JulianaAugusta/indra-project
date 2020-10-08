import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientRegisterComponent } from './cadastro/client-register/client-register.component';

import { AccountAccessComponent } from './account/account-access/account-access.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogTermsComponent } from './dialog/dialog-terms/dialog-terms.component';
import { WelcomePageComponent } from './welcome-page/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientRegisterComponent,
    AccountAccessComponent,
    DialogTermsComponent,
    WelcomePageComponent
  ],
  entryComponents: [DialogTermsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'account-access', component: AccountAccessComponent},
      {path: 'client-register', component: ClientRegisterComponent}
    ]),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
