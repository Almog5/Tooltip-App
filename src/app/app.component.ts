import { Component, ElementRef, Renderer2 } from '@angular/core';
import { rendererTypeName } from '@angular/compiler';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tooltip-Assignment-Nipendo';
  access: boolean = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  changePageStyle() {
    console.log("hello from access")
    this.access = !this.access
    if (this.access == true) {
      document.body.style.backgroundColor = "#000000bf"
      document.body.style.color = "white"  
    }
    else {
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      
    }
  }
}

