import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ClientRegisterComponent } from './cadastro/client-register/client-register.component';

import { AccountAccessComponent } from './account/account-access/account-access.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientRegisterComponent,
    AccountAccessComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'account-access', component: AccountAccessComponent},
      {path: 'client-register', component: ClientRegisterComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
