const PRODUCTS = [
  'Laptop',
  'Phone',
  'Speaker',
  'Desktop PC',
  'Server',
  'Mouse',
  'Keyboard',
];

const NEW_PRODUCTS = PRODUCTS.filter((item) => item.length > 5);

const USERS = [
  { fullName: 'Serhat ALTINSOY', isActive: false },
  { fullName: 'Burak ALTINSOY', isActive: true },
  { fullName: 'Zuleyha Abdulai', isActive: false },
];

// const ACTIVE_USERS = USERS.filter((users) => users.isActive === true);
const ACTIVE_USERS = USERS.filter((users) => users.isActive);
console.log(ACTIVE_USERS);
