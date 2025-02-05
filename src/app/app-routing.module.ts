import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageAboutComponent } from './pages/page-about/page-about.component';
import { PageContactComponent } from './pages/page-contact/page-contact.component';
import { PageGalleryComponent } from './pages/page-gallery/page-gallery.component';
import { PageProductComponent } from './pages/page-product/page-product.component';

const routes: Routes = [
  { path: '',redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: PageHomeComponent },
  { path: 'sobre', component: PageAboutComponent },
  { path: 'produtos', component: PageProductComponent },
  { path: 'galeria', component: PageGalleryComponent },
  { path: 'contactos', component: PageContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
