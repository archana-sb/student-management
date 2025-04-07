import { Observable } from 'rxjs';
import { Student } from '../models/student.model';

export interface IStudentService {
  getStudents(): Observable<Student[]>;
  addStudent(student: Student): void;
  updateStudent(student: Student): void;
  deleteStudent(id: number): void;
  getStudentById(id: number): Student | undefined;
}
