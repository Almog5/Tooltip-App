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
      this.renderer.setStyle(this.elRef.nativeElement.ownerDocument.body,'backgroundColor', "#000000bf",)
      this.renderer.setStyle(this.elRef.nativeElement.ownerDocument.body,'color', "white")
    }
    else {
      this.renderer.setStyle(this.elRef.nativeElement.ownerDocument.body,'backgroundColor', "white")
      this.renderer.setStyle(this.elRef.nativeElement.ownerDocument.body,'color', "black")
    }
  }
}

