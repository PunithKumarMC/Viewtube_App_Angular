import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterGuardGuard } from './register-guard.guard';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ShellComponent } from './shell/shell.component';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';

const routes: Routes = [
  { path: '', component: ShellComponent },
  { path: 'studio', component: StudioUploadComponent, canActivate: [RegisterGuardGuard] },
  { path: 'viewtube', component: ShellComponent },
  { path: 'liveStream', component: LiveStreamComponent },
  {
    path: 'register-login', component: RegisterLoginComponent,
    children: [
      { path: 'register', component: RegisterPageComponent },
      { path: 'login', component: LoginPageComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
