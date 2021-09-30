import { Cv } from "../cv/cv";
import { Image } from "../image/image";
import { LanguageListResponse } from "../language/languageListResponse";
import { SchoolListResponse } from "../school/schoolListResponse";
import { SkillListResponse } from "../skill/skillListResponse";
import { CandidateJobExperienceListResponse } from "./candidate-experience/candidateExperienceList";

export interface Candidate{
    id:number
    firstName:string
    lastName:string
    email:string
    profileImg?: any;
    password:string
    birthYear:number
    nationalityId:string
    candidateJobExperiences: CandidateJobExperienceListResponse[];
    candidateSkills: SkillListResponse[];
    candidateLanguages: LanguageListResponse[];
    candidateSchools: SchoolListResponse[];
    cvs: Cv[];
    githubAccount:string
    linkedinAccount:string
    images: Image[];
}