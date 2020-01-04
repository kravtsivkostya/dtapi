import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
// import { SubjectComponent } from './subject/subject.component';
import { SpecialityComponent } from './speciality/speciality.component';

const routes: Routes = [
  // { path: '',},
  { path: 'login', component: LoginComponent },
  { path: 'speciality', component: SpecialityComponent },
  // { path: 'subject', component: SubjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
