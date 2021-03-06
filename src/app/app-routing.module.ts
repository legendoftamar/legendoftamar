import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'; 
import { PaintingsComponent } from './paintings/paintings.component'; 
import { SketchesComponent } from './sketches/sketches.component';
import { PrintsComponent } from './prints/prints.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ArtworkDetailsComponent } from './artwork-details/artwork-details.component';


const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'paintings', component: PaintingsComponent},
  { path: 'sketches', component: SketchesComponent},
  { path: 'prints', component: PrintsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: ':title', component: ArtworkDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
