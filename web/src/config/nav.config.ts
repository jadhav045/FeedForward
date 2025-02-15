export const roleBasedNavigation = {
    admin: [
      { name: 'Dashboard', href: '/admin' },
      { name: 'Users', href: '/admin/users' },
      { name: 'Reports', href: '/admin/reports' },
    ],
    donor: [
      { name: 'Dashboard', href: '/donor' },
      { name: 'My Profile', href: '/donor/profile' },
      
    ],
    ngo: [
      { name: 'Dashboard', href: '/ngo' },
      { name: 'Available Donations', href: '/ngo/available' },
      { name: 'My Collections', href: '/ngo/collections' },
    ],
  };