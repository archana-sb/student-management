import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentDetailFormComponent } from '../student-detail-form/student-detail-form.component';
import { StudentService } from '../../services/student.service';
import { ToastService } from '../../../shared/services/toast.service';
import { FormBuilder } from '@angular/forms';

import { StudentModule } from '../../../shared/modules/student.module';

@Component({
  selector: 'app-edit-student-form',
  standalone: true,
  imports: [StudentModule],
  templateUrl: '../student-detail-form/student-detail-form.component.html',
  styleUrls: ['../student-detail-form/student-detail-form.component.scss'],
})
export class EditStudentDetailFormComponent extends StudentDetailFormComponent {
  constructor(
    private readonly route: ActivatedRoute,
    fb: FormBuilder,

    studentService: StudentService,
    toastService: ToastService,
    router: Router
  ) {
    super(fb, studentService, toastService, router);

    this.route.paramMap.subscribe((params) => {
      const studentId = params.get('id');
      if (studentId) {
        this.editStudentId = Number(studentId);
        this.loadStudentData(Number(studentId));
      }
    });
  }

  loadStudentData(studentId: number) {
    const student = this.studentService.getStudentById(studentId);
    if (student) {
      this.studentForm.patchValue(student);
      student.skills.forEach((skill) =>
        this.skills.push(this.fb.control(skill))
      );
    }
  }
}
