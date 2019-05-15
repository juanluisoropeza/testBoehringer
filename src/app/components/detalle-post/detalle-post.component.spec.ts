import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallePostComponent } from './detalle-post.component';

describe('DetallePostComponent', () => {
  let component: DetallePostComponent;
  let fixture: ComponentFixture<DetallePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
