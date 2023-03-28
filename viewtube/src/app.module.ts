import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChipsComponent } from './chips/chips.component';
import { VideoContentComponent } from './video-content/video-content.component';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule} from '@angular/material/input';
import { LayoutModule } from '@angular/cdk/layout';
import { StudioUploadComponent } from './studio-upload/studio-upload.component';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { UrlValidationDirective } from './url-validation.directive';
import { MatNativeDateModule } from '@angular/material/core';
import { LiveStreamComponent } from './live-stream/live-stream.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LiveStreamValidationDirective } from './live-stream-validation.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';

// import { ChipsBarComponent } from './chips-bar/chips-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChipsComponent,
    VideoContentComponent,
    ShellComponent,
    StudioUploadComponent,
    UrlValidationDirective,
    LiveStreamComponent,
    LiveStreamValidationDirective,
    PageNotFoundComponent,
    RegisterLoginComponent,
    RegisterPageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatTooltipModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    LayoutModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
