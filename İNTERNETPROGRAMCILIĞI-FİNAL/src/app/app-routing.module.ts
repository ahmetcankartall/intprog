import { KayitsilComponent } from './kayitsil/kayitsil.component';
import { LoginComponent } from './login/login.component';
import { AskComponent } from './ask/ask.component';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import{AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard'
import { KayitduzenleComponent } from './kayitduzenle/kayitduzenle.component';

const redirectLogin=()=>redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path:"",
    component:MainLayoutComponent,
    children:[

    {
      path:"",
      component:HomeComponent,
      canActivate:[AngularFireAuthGuard],
      data:{
        authGuardPipe: redirectLogin

      }
    },
    {
      path:"kayitduzenle/:key",
      component:KayitduzenleComponent,
      canActivate:[AngularFireAuthGuard],
      data:{
        authGuardPipe: redirectLogin

      }
    },
    {
      path:"kayitsil/:key",
      component:KayitsilComponent,
      canActivate:[AngularFireAuthGuard],
      data:{
        authGuardPipe: redirectLogin

      }
    },
    {
      path:"ask",
      component:AskComponent,
      canActivate:[AngularFireAuthGuard],
      data:{
        authGuardPipe: redirectLogin

      }
    },
    
    {
    path:"login",
    component:LoginComponent
    },
    {
      path:"register",
      component:RegisterComponent
      }


    ]
  }









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
