import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AskComponent } from './ask/ask.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MainNavComponent } from './nav/main-nav/main-nav.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { KayitduzenleComponent } from './kayitduzenle/kayitduzenle.component';
import { KayitsilComponent } from './kayitsil/kayitsil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AskComponent,
    LoginComponent,
    MainLayoutComponent,
    MainNavComponent,
    RegisterComponent,
    KayitduzenleComponent,
    KayitsilComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
