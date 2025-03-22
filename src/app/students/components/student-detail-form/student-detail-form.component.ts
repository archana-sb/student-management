import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { ToastService } from '../../../shared/services/toast.service';
import { Router } from '@angular/router';
import { StudentModule } from '../../../shared/modules/student.module';

@Component({
  selector: 'app-student-detail-form',
  standalone: true,
  imports: [StudentModule],
  templateUrl: './student-detail-form.component.html',
  styleUrl: './student-detail-form.component.scss',
})
export class StudentDetailFormComponent {
  studentForm: FormGroup;
  editStudentId: number | null = null;
  skillsList = ['Programming', 'Design', 'Marketing'];

  constructor(
    protected fb: FormBuilder,
    protected studentService: StudentService,
    protected toastService: ToastService,
    protected router: Router
  ) {
    this.studentForm = this.fb.group({
      name: [''],
      age: [''],
      course: [''],
      gender: [''],
      skills: this.fb.array([]),
    });
  }

  ngOnInit() {}

  get skills() {
    return this.studentForm.get('skills') as FormArray;
  }

  onCheckboxChange(event: any, skill: string) {
    if (event.checked) {
      this.skills.push(this.fb.control(skill));
    } else {
      const index = this.skills.controls.findIndex((x) => x.value === skill);
      if (index > -1) this.skills.removeAt(index);
    }
  }

  onSubmit() {
    if (this.studentForm.valid) {
      const studentData: Student = {
        ...this.studentForm.value,
        skills: this.skills.value,
      };
      if (this.editStudentId) {
        this.updateStudentData({ ...studentData, id: this.editStudentId });
      } else this.addNewStudent(studentData);
      this.router.navigate(['/table']);

      this.resetForm();
    } else {
      this.toastService.showError('Please check entered details');
    }
  }

  updateStudentData(data: Student) {
    this.studentService.updateStudent(data);
    this.toastService.showSuccess('Updated student data successfully!');
  }

  addNewStudent(data: Student) {
    this.studentService.addStudent(data);
    this.toastService.showSuccess('Student added successfully!');
  }

  resetForm() {
    this.studentForm.reset();
    this.skills.clear();
  }
}
