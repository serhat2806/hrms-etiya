import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { CandidateService } from 'src/app/services/candidate.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-job-advert-add-favourite',
  templateUrl: './job-advert-add-favourite.component.html',
  styleUrls: ['./job-advert-add-favourite.component.css']
})
export class JobAdvertAddFavouriteComponent implements OnInit {

  
  constructor(private userService:UserService,private candidateService:CandidateService
    ,private toastrService:ToastrService) { }
 
  
    favs:JobAdvertisement[]=[]
  id:number
  loading:boolean=true
  loggedCandidate:any
  ngOnInit(): void {
    
    this.getFavs()
    this.id=this.userService.getEmployer().id
    console.log(this.id)
    
  }

  getFavs(){
    this.favs=this.userService.getEmployer().favoriteJobAdvertisements
    this.loggedCandidate=this.userService.getEmployer()
    this.loading=false
  }

  getCandidateById() {
    this.candidateService.getCandidateById(this.id).subscribe((response: any) => {
      this.loggedCandidate = response.data;
      
      this.loading = false;
    })
  }

  removeFavs(jobId: number){
    console.log("lkdshfkjasfdh")
    this.candidateService.removeFavoriteJob(this.loggedCandidate,jobId).subscribe(data=>{
      this.toastrService.warning("Removed")

    })
  }
  // getCandidateById() {
  //   this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
  //     this.loggedCandidate = response.data;
  //     this.favoriteJobs = response.data.favoriteJobAdvertisements;
  //     this.loading = false;
  //   })
  }