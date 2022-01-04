import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormMessageComponent } from './person-form-message.component';

describe('PersonFormMessageComponent', () => {
  let component: PersonFormMessageComponent;
  let fixture: ComponentFixture<PersonFormMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonFormMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonFormMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
