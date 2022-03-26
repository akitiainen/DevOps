import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {AuthService} from "./auth.service";
import {of} from "rxjs";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let authServiceSpy = jasmine.createSpyObj('AuthService', ['login']);
  authServiceSpy.login.and.returnValue(of());

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule, ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        {
          provide: AuthService, useValue: authServiceSpy
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow user to log in', () => {
    const formData = {
      "email": "something@somewhere.com",
      "password": "8938ndisn@din"
    };
    component.loginForm.setValue(formData);
    component.login();

    expect(authServiceSpy.login).toHaveBeenCalledWith(formData.email, formData.password);
  });

  it('should not allow user to log in', () => {
    const formData = {
      "email": "invalidemail",
      "password": "8938ndisn@din"
    };
    component.loginForm.setValue(formData);
    component.login();

    expect(component.loginForm.invalid).toEqual(true);
    expect(authServiceSpy.login).toHaveBeenCalledTimes(0);
  });
});
