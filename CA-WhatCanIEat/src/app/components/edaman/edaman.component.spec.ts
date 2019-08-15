import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdamanComponent } from './edaman.component';

describe('EdamanComponent', () => {
  let component: EdamanComponent;
  let fixture: ComponentFixture<EdamanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdamanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdamanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
