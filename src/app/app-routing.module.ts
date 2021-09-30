import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CandidateListComponent } from './features/candidate/candidate-list/candidate-list.component';

import { CandidateSignComponent } from './features/candidate/candidate-sign/candidate-sign.component';
import { CvAddComponent } from './features/cv/cv-add/cv-add.component';
import { CvDetailComponent } from './features/cv/cv-detail/cv-detail.component';
import { ApplyChangesComponent } from './features/employee/apply-changes/apply-changes.component';
import { EmployeeProfileComponent } from './features/employee/employee-profile/employee-profile.component';
import { EmployerAdvertComponent } from './features/employers/employer-advert/employer-advert.component';
import { EmployerListComponent } from './features/employers/employer-list/employer-list.component';
import { EmployerSignComponent } from './features/employers/employer-sign/employer-sign.component';
import { EmployeProfilComponent } from './features/employers/profil/profil.component';
import { HomeComponent } from './features/home/home.component';
import { ActivJobAdvertByEmployerComponent } from './features/job-advertisement/activ-job-advert-by-employer/activ-job-advert-by-employer.component';
import { ActiveJobAdvertByDateComponent } from './features/job-advertisement/active-job-advert-by-date/active-job-advert-by-date.component';
import { ActiveJobAdvertListComponent } from './features/job-advertisement/active-job-advert-list/active-job-advert-list.component';
import { CloseJobAdvertisementComponent } from './features/job-advertisement/close-job-advertisement/close-job-advertisement.component';
import { JobAdvertAddFavouriteComponent } from './features/job-advertisement/job-advert-add-favourite/job-advert-add-favourite.component';
import { JobAdvertisementAddComponent } from './features/job-advertisement/job-advertisement-add/job-advertisement-add.component';
import { VerificateJobAdvertComponent } from './features/job-advertisement/verificate-job-advert/verificate-job-advert.component';
import { JobPositionAddComponent } from './features/job/job-position-add/job-position-add.component';
import { JobPositionListComponent } from './features/job/job-position-list/job-position-list.component';
import { LoginComponent } from './features/login/login/login.component';
import { ApplychangesGuard } from './guards/applychanges.guard';
import { CandidateListGuard } from './guards/candidate-list.guard';
import { CloseJobAdvertGuard } from './guards/close-job-advert.guard';
import { CvAddGuard } from './guards/cv-add.guard';
import { CvDetailGuard } from './guards/cv-detail.guard';
import { EmployeeProfileGuard } from './guards/employee-profile.guard';
import { EmployeeVerificationGuard } from './guards/employee-verification.guard';
import { EmployerAdvertListGuard } from './guards/employer-advert-list.guard';
import { EmployerListGuard } from './guards/employer-list.guard';
import { EmployerUpdateGuard } from './guards/employer-update.guard';
import { FavAdvertAddGuard } from './guards/fav-advert-add.guard';
import { JobAdvertisemenentAddGuard } from './guards/job-advertisemenent-add.guard';
import { PositionAddGuard } from './guards/position-add.guard';


const routes: Routes = [
  // {path:"candidateList",component:CandidateListComponent},
  {path:"", pathMatch:"full", component:HomeComponent},
  

  {path:"candidateAdd",component:CandidateSignComponent},
  {path:"candidateList",component:CandidateListComponent,canActivate:[CandidateListGuard]},
  {path:"employerList",component:EmployerListComponent,canActivate:[EmployerListGuard]},
  {path:"jobPositionList",component:JobPositionListComponent},
  {path:"employerAdd",component:EmployerSignComponent},
  {path:"login",component:LoginComponent},
  {path:"jobPositionAdd",component:JobPositionAddComponent,canActivate:[PositionAddGuard]},
  {path:"jobAdvertisementAdd",component:JobAdvertisementAddComponent,canActivate:[JobAdvertisemenentAddGuard]},
  {path:"activeJobAdvertList",component:ActiveJobAdvertListComponent},
  {path:"activeJobAdvertListByDate",component:ActiveJobAdvertByDateComponent},
  {path:"activeJobAdvertListByEmployer",component:ActivJobAdvertByEmployerComponent},
  {path:"changeActivite",component:CloseJobAdvertisementComponent,canActivate:[CloseJobAdvertGuard]},

  {path:"cv",component:CvAddComponent,canActivate:[CvAddGuard]},
  {path:"employerUpdate",component:EmployeProfilComponent,canActivate:[EmployerUpdateGuard]},
  {path:"cvDetail",component:CvDetailComponent,canActivate:[CvDetailGuard]},
  {path:"verification",component:VerificateJobAdvertComponent,canActivate:[EmployeeVerificationGuard]},
  {path:"employeeProfile",component:EmployeeProfileComponent,canActivate:[EmployeeProfileGuard]},
  {path:"approval",component:ApplyChangesComponent,canActivate:[ApplychangesGuard]},
  {path:"favs",component:JobAdvertAddFavouriteComponent,canActivate:[FavAdvertAddGuard]},
  {path:"employerAdvertList",component:EmployerAdvertComponent,canActivate:[EmployerAdvertListGuard]}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
