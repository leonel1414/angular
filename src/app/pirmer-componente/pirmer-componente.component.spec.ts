import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirmerComponenteComponent } from './pirmer-componente.component';

describe('PirmerComponenteComponent', () => {
  let component: PirmerComponenteComponent;
  let fixture: ComponentFixture<PirmerComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PirmerComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PirmerComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
