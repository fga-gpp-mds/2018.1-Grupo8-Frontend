import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { RequestsService } from './requests.service';
import { FormsModule } from '@angular/forms';
 
const appRoutes:Routes = [
  {
    path: '',
    component: RegisterFormComponent
  },
  {
    path: 'main-page',
    component: MainPageComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterFormComponent,
    MainPageComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [ RequestsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }