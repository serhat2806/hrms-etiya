import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateSignComponent } from './features/candidate/candidate-sign/candidate-sign.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NaviComponent } from './features/navi/navi.component';
import { EmployerSignComponent } from './features/employers/employer-sign/employer-sign.component';
import { LoginComponent } from './features/login/login/login.component';
import { JobPositionAddComponent } from './features/job/job-position-add/job-position-add.component';
import { EmployerListComponent } from './features/employers/employer-list/employer-list.component';
import { JobPositionListComponent } from './features/job/job-position-list/job-position-list.component';
import { JobAdvertisementAddComponent } from './features/job-advertisement/job-advertisement-add/job-advertisement-add.component';
import { CandidateListComponent } from './features/candidate/candidate-list/candidate-list.component';
import { ActiveJobAdvertListComponent } from './features/job-advertisement/active-job-advert-list/active-job-advert-list.component';
import { ActiveJobAdvertByDateComponent } from './features/job-advertisement/active-job-advert-by-date/active-job-advert-by-date.component';
import { ActivJobAdvertByEmployerComponent } from './features/job-advertisement/activ-job-advert-by-employer/activ-job-advert-by-employer.component';
import { CloseJobAdvertisementComponent } from './features/job-advertisement/close-job-advertisement/close-job-advertisement.component';
import { CvAddComponent } from './features/cv/cv-add/cv-add.component';
import { CandidateSchoolComponent } from './features/candidate/candidate-school/candidate-school.component';
import { CandidateExperienceComponent } from './features/candidate/candidate-experience/candidate-experience.component';
import { CandidateSkillComponent } from './features/candidate/candidate-skill/candidate-skill.component';
import { CandidateLanguageComponent } from './features/candidate/candidate-language/candidate-language.component';
import { CandidateImageComponent } from './features/candidate/candidate-image/candidate-image.component';
import { CandidateGithubComponent } from './features/candidate/candidate-links/candidate-github/candidate-github.component';
import { CandidateLinkedinComponent } from './features/candidate/candidate-links/candidate-linkedin/candidate-linkedin.component';
import { CvDetailComponent } from './features/cv/cv-detail/cv-detail.component';
import {MenuItem} from 'primeng/api';
import { SideMenuComponent } from './features/side-menu/side-menu.component';
import { VerificateJobAdvertComponent } from './features/job-advertisement/verificate-job-advert/verificate-job-advert.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { CandidateSchoolUpdateComponent } from './features/candidate/candidate-update/candidate-school-update/candidate-school-update.component';
import { HomeComponent } from './features/home/home.component';
import { NaviUserInfoComponent } from './features/navi-user-info/navi-user-info.component';
import { NaviLoginComponent } from './features/navi-login/navi-login.component';
import { CandidateExperienceDeleteComponent } from './features/candidate/delete/candidate-experience-delete/candidate-experience-delete.component';
import { UpdateCompanyNameComponent } from './features/employers/employer-update/update-company-name/update-company-name.component';
import { UpdatePhoneNumberComponent } from './features/employers/employer-update/update-phone-number/update-phone-number.component';
import { UpdateEmailPasswordComponent } from './features/employers/employer-update/update-email-password/update-email-password.component';
import { JobAdvertVerifyComponent } from './features/employee/job-advert-verify/job-advert-verify.component';
import { JobAdvertAddFavouriteComponent } from './features/job-advertisement/job-advert-add-favourite/job-advert-add-favourite.component';
import {AccordionModule} from 'primeng/accordion';
import { CandidateSideMenuComponent } from './features/candidate-side-menu/candidate-side-menu.component';
import { EmployerSideMenuComponent } from './features/employer-side-menu/employer-side-menu.component';
import { EmployeeSideMenuComponent } from './features/employee-side-menu/employee-side-menu.component';
import { EmployeeProfileComponent } from './features/employee/employee-profile/employee-profile.component';
import { DividerModule } from "primeng/divider";
import { UpdateComponent } from './features/employee/update/update.component';
import { UpdateEmployeeLastNameComponent } from './features/employee/update-employee-last-name/update-employee-last-name.component';
import { ApplyChangesComponent } from './features/employee/apply-changes/apply-changes.component';
import { UpdateCvTitleComponent } from './features/cv/update-cv-title/update-cv-title.component';
import { UpdateCvLetterComponent } from './features/cv/update-cv-letter/update-cv-letter.component';
import { FooterComponent } from './features/footer/footer.component';
import{EmployerAdvertComponent} from "./features/employers/employer-advert/employer-advert.component"




@NgModule({
  declarations: [
    AppComponent,
    CandidateSignComponent,
    CandidateListComponent,
    NaviComponent,
    EmployerSignComponent,
    LoginComponent,
    JobPositionAddComponent,
    EmployerListComponent,
    JobPositionListComponent,
    JobAdvertisementAddComponent,
    ActiveJobAdvertListComponent,
    ActiveJobAdvertByDateComponent,
    ActivJobAdvertByEmployerComponent,
    CloseJobAdvertisementComponent,
    CvAddComponent,
    CandidateSchoolComponent,
    CandidateExperienceComponent,
    CandidateSkillComponent,
    CandidateLanguageComponent,
    CandidateImageComponent,
    CandidateGithubComponent,
    CandidateLinkedinComponent,
    CvDetailComponent,
    SideMenuComponent,
    VerificateJobAdvertComponent,
    CandidateSchoolUpdateComponent,
    HomeComponent,
    NaviUserInfoComponent,
    NaviLoginComponent,
    CandidateExperienceDeleteComponent,
    EmployerAdvertComponent,
    
    UpdateEmailPasswordComponent,
    JobAdvertVerifyComponent,
    JobAdvertAddFavouriteComponent,
    CandidateSideMenuComponent,
    EmployerSideMenuComponent,
    EmployeeSideMenuComponent,
    EmployeeProfileComponent,
    UpdateComponent,
    UpdateEmployeeLastNameComponent,
    ApplyChangesComponent,
    UpdateCvTitleComponent,
    UpdateCvLetterComponent,
    FooterComponent,
    UpdateCompanyNameComponent,
    UpdateEmployeeLastNameComponent,
    UpdatePhoneNumberComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    TableModule,
    ButtonModule,
    DividerModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"}),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
