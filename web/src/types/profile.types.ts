// src/types/profile.types.ts
export interface BaseProfile {
    username: string;
    email: string;
    mobileNo?: string;
    photo?: string;
    address?: string;
    longitude?: string;
    latitude?: string;

    orgType?: string;
    fullName?: string;
    profession?: string;

    regNo?: string;
    foodType?: string;

    motive?: string;
    employeeNos?: string;
    history?:[{
      eventName?: string;
      photo?: string;
      address?: string;
      longitude?: string;
      latitude?: string;
      details?: string;
    }]
  }
