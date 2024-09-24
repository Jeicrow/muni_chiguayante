import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLicenciadeconducirComponent } from './form-licenciadeconducir.component';

describe('FormLicenciadeconducirComponent', () => {
  let component: FormLicenciadeconducirComponent;
  let fixture: ComponentFixture<FormLicenciadeconducirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLicenciadeconducirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLicenciadeconducirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
