import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubModalidadeComponent } from './sub-modalidade.component';

describe('SubModalidadeComponent', () => {
  let component: SubModalidadeComponent;
  let fixture: ComponentFixture<SubModalidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubModalidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
