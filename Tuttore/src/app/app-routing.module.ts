import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchComponent } from './components/search/search.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './guards/auth.guard';
import { LoggedGuard } from './guards/logged.guard';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ChatComponent } from './components/chat/chat.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  { path: 'profile/:id', component: ProfileComponent, canActivate:[AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate:[AuthGuard] },
  { path: 'chat/:username', component: ChatComponent, canActivate:[AuthGuard] },
  { path: 'search/:subject', component: SearchComponent, canActivate:[AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate:[AuthGuard] },
  { path: 'sign-up', component: SignUpComponent, canActivate:[LoggedGuard] },
  { path: 'sign-in', component: LogInComponent, canActivate:[LoggedGuard] },
  { path: 'home-page', component: HomePageComponent, canActivate:[LoggedGuard] },
  { path: '', pathMatch: 'full', redirectTo: 'home', canActivate:[AuthGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'home', canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
