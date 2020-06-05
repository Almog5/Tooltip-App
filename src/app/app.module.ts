import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TooltipDirective} from './tooltip.directive';
import {PicturComponent} from './component/pictur-component/pictur-component.component';
import {Pictur2Component} from './component/pictur2-component/pictur2-component.component';


// const appRoutes:Routes=[
//   {path : 'pictureComponent', component:PicturComponent},
//   {path:'picture2Component' , component:Pictur2Component}
// ];

@NgModule({
  declarations: [
    AppComponent,
    TooltipDirective,
    PicturComponent,
    Pictur2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
