import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeCheckComponent } from './modalidade-check.component';

describe('ModalidadeCheckComponent', () => {
  let component: ModalidadeCheckComponent;
  let fixture: ComponentFixture<ModalidadeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalidadeCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
