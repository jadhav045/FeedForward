// src/types/docs.types.ts
export interface ApiResponse {
  status: number;
  description: string;
  data: any;
}

export interface ApiEndpoint {
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  description: string;
  requestBody?: Record<string, string>;
  responseBody?: Record<string, any>;
  responses?: ApiResponse[];
  requiresAuth?: boolean;
}
  
  export interface ApiSection {
    title: string;
    description: string;
    endpoints: ApiEndpoint[];
  }
  
  export interface ApiDocumentation {
    sections: ApiSection[];
  }