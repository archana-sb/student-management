import { Component, OnInit } from '@angular/core';
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
export class StudentTableComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private readonly studentService: StudentService,
    private readonly toastService: ToastService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  onDelete(id: number) {
    this.studentService.deleteStudent(id);
    this.toastService.showSuccess('Student deleted successfully!');
  }

  onEdit(student: Student) {
    this.router.navigate(['/form', student.id]);
  }
}
