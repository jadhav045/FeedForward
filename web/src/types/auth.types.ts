export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
      role: 'admin' | 'donor' | 'ngo';
      name: string;
    };
  }