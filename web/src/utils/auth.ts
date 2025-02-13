import { storage } from './storage';

export const getStoredUserRole = (): string | null => {
        console.log('getStoredUserRole');
    // return 'ngo';

    //uncomment below code after implementing the authentication

  const user = storage.getUser();
  return user?.role?.toLowerCase() || null;
};

export const isAuthenticated = (): boolean => {
    console.log('isAuthenticated');
    // return true;
    //uncomment below code after implementing the authentication


  return !!storage.getToken() && !!storage.getUser();
};