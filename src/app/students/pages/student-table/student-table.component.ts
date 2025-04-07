import { Component } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';
import { Router } from '@angular/router';
import { ToastService } from '../../../shared/services/toast.service';
import { StudentModule } from '../../../shared/modules/student.module';

@Component({
  selector: 'app-student-table',
  standalone: true,
  imports: [StudentModule],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.scss',
})
export class StudentTableComponent {
  constructor(
    private readonly studentService: StudentService,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) {}

  get students$() {
    return this.studentService.getStudents();
  }

  onDelete(id: number) {
    this.studentService.deleteStudent(id);
    this.toastService.showSuccess('Student deleted successfully!');
  }

  onEdit(student: Student) {
    this.router.navigate(['/form', student.id]);
  }
}
