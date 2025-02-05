import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageGalleryComponent } from './pages/page-gallery/page-gallery.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageProductComponent } from './pages/page-product/page-product.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageAboutComponent,
    PageProductComponent,
    PageGalleryComponent,
    PageContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
