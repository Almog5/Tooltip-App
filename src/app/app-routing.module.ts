import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturComponent } from './component/pictur-component/pictur-component.component';
import { Pictur2Component } from './component/pictur2-component/pictur2-component.component';


const routes: Routes = [
  { path: '', component: PicturComponent },
  { path: 'picture2Component', component: Pictur2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
