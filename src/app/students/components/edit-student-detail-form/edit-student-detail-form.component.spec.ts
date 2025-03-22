import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentDetailFormComponent } from './edit-student-detail-form.component';

describe('EditStudentDetailFormComponent', () => {
  let component: EditStudentDetailFormComponent;
  let fixture: ComponentFixture<EditStudentDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStudentDetailFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStudentDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
