export const validation = {
    username: (value: string) => {
      if (!value) return 'Username is required';
      if (value.length < 3) return 'Username must be at least 3 characters';
      return '';
    },
    
    email: (value: string) => {
      if (!value) return 'Email is required';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Invalid email format';
      return '';
    },
    
    mobile: (value: string) => {
      if (!value) return '';  // Optional field
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(value)) return 'Invalid mobile number format';
      return '';
    },

    // update password later.. make it 8 and uncomment that code...
    
    password: (value: string) => {
      if (!value) return 'Password is required';
      if (value.length < 4) return 'Password must be at least 4 characters';
    //   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    //   if (!passwordRegex.test(value)) {
    //     return 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character';
    //   }
      return '';
    },

    };