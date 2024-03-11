import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPesoComponent } from './lista-peso.component';

describe('ListaPesoComponent', () => {
  let component: ListaPesoComponent;
  let fixture: ComponentFixture<ListaPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
