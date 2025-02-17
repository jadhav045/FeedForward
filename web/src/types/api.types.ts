export interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
  }
  
  export interface ApiError {
    message: string;
    status: number;
  }
  
  export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    limit: number;
  }

  export interface BasicResponse {
    message:string;
    status: number;
  }