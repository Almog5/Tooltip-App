import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturComponentComponent } from './pictur-component.component';

describe('PicturComponentComponent', () => {
  let component: PicturComponentComponent;
  let fixture: ComponentFixture<PicturComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicturComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
