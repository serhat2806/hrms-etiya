import { Employer } from "../employer/employer";
import { JobPosition } from "../jobPosition/jobPosition";

export  interface JobAdvertisement{
    
    employer:Employer
    position:JobPosition
    cityId:number
    deadline:string
    employerId:number
    id:number
    jobDescription:string
    maxSalary:number
    minSalary:number
    openPositions:number
    positionId:number
    workModel:string
    workTime:string
    companyName:string
    createdAt:string
    active:boolean
    verified: boolean;
    
}