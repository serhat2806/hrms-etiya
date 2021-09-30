export interface ListResponseModel<T> {
    success: boolean;
    message: string;
    data: T[];
  }