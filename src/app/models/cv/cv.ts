import { CandidateExperience } from "../candidate/candidate-experience/candidateExperience";
import { Language } from "../language/language";
import { School } from "../school/school";
import { Skill } from "../skill/skill";

export interface Cv{
    id: number;
    candidateId: number;
    candidateJobExperienceIds: CandidateExperience[];
    candidateLanguageIds: Language[];
    candidateSchoolIds: School[];
    candidateSkillIds: Skill[];
    coverLetter: string;
    title: string;
}