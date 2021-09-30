import { ListResponseModel } from "../response/listResponseModel";
import { User } from "./user";

export interface UserListResponse extends ListResponseModel<User> {}