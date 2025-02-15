export const roleBasedNavigation = {
    admin: [
      { name: 'Dashboard', href: '/admin' },
      { name: 'Users', href: '/admin/users' },
      { name: 'Reports', href: '/admin/reports' },
      { name: 'My Profile', href: '/admin/profile' },
    ],
    donor: [
      { name: 'Dashboard', href: '/donor' },
      { name: 'My Profile', href: '/donor/profile' },
      { name: 'History', href: '/donor/history' },
      {name:'Notifications', href:'/donor/notifications'},
      {name: 'Postings', href: '/donor/postings'}
      
    ],
    ngo: [
      { name: 'Dashboard', href: '/ngo' },
      { name: 'My Profile', href: '/ngo/profile' },
      { name: 'History', href: '/ngo/history' },
      {name:'Notifications', href:'/ngo/notifications'},
      {name:'Requests', href:'/ngo/requests'}
    ],
};