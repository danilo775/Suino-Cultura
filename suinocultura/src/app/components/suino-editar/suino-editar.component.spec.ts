import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuinoEditarComponent } from './suino-editar.component';

describe('SuinoEditarComponent', () => {
  let component: SuinoEditarComponent;
  let fixture: ComponentFixture<SuinoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuinoEditarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuinoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
