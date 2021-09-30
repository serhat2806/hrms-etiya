import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { CandidateService } from 'src/app/services/candidate.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-active-job-advert-list',
  templateUrl: './active-job-advert-list.component.html',
  styleUrls: ['./active-job-advert-list.component.css']
})
export class ActiveJobAdvertListComponent implements OnInit {

  loggedCandidate: any
  activeJobAdverts: JobAdvertisement[] = []
  candidate: any
  id:number
  user:boolean=false
  message:any
  favs: JobAdvertisement[] = []
  loading: boolean = true
  constructor
  (private jobAdvetisementService: JobAdvertisementService,
    private userService: UserService,
    private candidateService: CandidateService,
    private favAdverts: CandidateService,
    private toastrService: ToastrService,
    private favoriteService: CandidateService
  ) { }

  ngOnInit(): void {
    this.getJobAdvertActive()
   
    console.log(this.checkUser()+"aasd")
    this.id=this.userService.getEmployer().id
    this.getCandidateById()
  }

  getJobAdvertActive() {
    this.jobAdvetisementService.getJobsByActive().subscribe((data: any) => {
      this.activeJobAdverts = data.data
      console.log(this.activeJobAdverts)
      this.loading = false
    })
  }

  changeActivite(jobAdvertisement: JobAdvertisement) {
    this.jobAdvetisementService.closeJobAdvertisement(jobAdvertisement).subscribe((response: any) => {
    })
  }

  getCandidataId(): any {
    this.candidate = JSON.parse(localStorage.getItem("user"))
   
    return this.candidate.data.id
  }
  checkUser(){
   if( JSON.parse(localStorage.getItem('user'))){
     this.message= JSON.parse(localStorage.getItem('user')).message
     if(this.message.includes("candidate"))
     {
       this.user=true
     }
    
   }
   return this.user=false
   
  }
  



  addToFavs(jobAdvertisement: JobAdvertisement) {
    this.favAdverts.addFavoritesJob(jobAdvertisement, this.getCandidataId()).subscribe(data => {
      this.toastrService.success("Eklendi")
    setTimeout(()=>  window.location.reload(),1000)
    })
    console.log(jobAdvertisement.id)
  }
  getCandidateById() {
    this.candidateService.getCandidateById(this.id).subscribe((response: any) => {
      this.loggedCandidate = response.data;
      this.favs=response.data.favoriteJobAdvertisements

      this.loading = false;
    })
  }

  removeFavs(jobId: number) {
    this.favoriteService.removeFavoriteJob(this.loggedCandidate, jobId).subscribe(data => {
      this.toastrService.warning("Removed")
      setTimeout(()=>  window.location.reload(),1000)
    })
  }

  checkFavJob(id:number){
    let favJobValue= this.favs.find((f)=>f.id===id)
    if(favJobValue){
      return true
    }

    else{
      return false
    }
  }
}
