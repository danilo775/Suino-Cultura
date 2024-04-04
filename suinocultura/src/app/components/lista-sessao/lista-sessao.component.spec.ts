import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSessaoComponent } from './lista-sessao.component';

describe('ListaSessaoComponent', () => {
  let component: ListaSessaoComponent;
  let fixture: ComponentFixture<ListaSessaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaSessaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaSessaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
