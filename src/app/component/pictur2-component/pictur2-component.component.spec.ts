import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pictur2ComponentComponent } from './pictur2-component.component';

describe('Pictur2ComponentComponent', () => {
  let component: Pictur2ComponentComponent;
  let fixture: ComponentFixture<Pictur2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pictur2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pictur2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
