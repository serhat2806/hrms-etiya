import { ListResponseModel } from "../../response/listResponseModel";
import { CandidateLanguage } from "../candidate-language/candidateLanguage";
import { CandidateExperience } from "./candidateExperience";

export interface CandidateJobExperienceListResponse extends ListResponseModel<CandidateExperience> {}