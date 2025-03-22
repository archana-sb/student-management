import { Routes } from '@angular/router';
import { StudentDetailFormComponent } from './students/components/student-detail-form/student-detail-form.component';
import { StudentTableComponent } from './students/pages/student-table/student-table.component';
import { EditStudentDetailFormComponent } from './students/components/edit-student-detail-form/edit-student-detail-form.component';

export const routes: Routes = [
  { path: 'form', component: StudentDetailFormComponent },
  { path: 'table', component: StudentTableComponent },
  { path: 'form/:id', component: EditStudentDetailFormComponent },
  { path: '**', redirectTo: '/form', pathMatch: 'full' },
];
