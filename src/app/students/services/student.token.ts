import { InjectionToken } from '@angular/core';
import { IStudentService } from './student.service.interface';

export const STUDENT_SERVICE = new InjectionToken<IStudentService>(
  'STUDENT_SERVICE'
);
