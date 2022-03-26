import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should require valid email', () => {
    component.contactForm.setValue({
      "name": "",
      "email": "invalidemail",
      "message": ""
    });

    expect(component.contactForm.valid).toEqual(false);
  });

  it('should be valid if form value is valid', () => {
    component.contactForm.setValue({
      "name": "Bobby",
      "email": "bobby@bobby.com",
      "message": "Email me a soda, please."
    });

    expect(component.contactForm.valid).toEqual(true);
  });
});
