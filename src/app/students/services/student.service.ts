import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../models/student.model';
import { IStudentService } from './student.service.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentService implements IStudentService {
  private studentsList: Student[] = [];
  private readonly students$ = new BehaviorSubject<Student[]>(
    this.studentsList
  );

  getStudents() {
    return this.students$.asObservable();
  }

  addStudent(student: Student) {
    student.id = this.studentsList.length + 1;
    this.studentsList = [...this.studentsList, student];
    this.students$.next(this.studentsList);
  }

  updateStudent(updatedStudent: Student) {
    const index = this.studentsList.findIndex(
      (s) => s.id === updatedStudent.id
    );
    if (index > -1) {
      this.studentsList[index] = updatedStudent;
      this.students$.next(this.studentsList);
    }
  }

  getStudentById(id: number): Student | undefined {
    return this.studentsList.find((student) => student.id === id);
  }

  deleteStudent(id: number) {
    this.studentsList = this.studentsList.filter((s) => s.id !== id);
    this.students$.next(this.studentsList);
  }
}
