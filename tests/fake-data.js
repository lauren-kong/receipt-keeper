export const objReceipts = [
  {
    id: 1,
    auth0_id: '1',
    name: 'TV',
    image: '',
    purchase_date: '02 - 04 - 2019',
    store: 'Smiths City',
    price: 2600,
    category_id: 2,
    note: '',
  },
]

export const fakeClientReceipts = [
  {
    id: 1,
    auth0Id: 'auth0|something',
    username: 'Raf',
    name: 'Drill',
    image: JSON.stringify({
      url: 'http://res.cloudinary.com/receipt-keepers/image/upload/v1658051820/eitbxs4xkecu9xgf9zaf.jpg',
      public_id: 'eitbxs4xkecu9xgf9zaf',
      signature: '2f91fa2de7f47078e925fd0c62e58cd0e7d54103',
    }),
    purchaseDate: '10/04/2021',
    store: 'Bunnings',
    price: 1200,
    categoryId: 1,
    categoryType: 'Tools',
    note: 'Powerful drill',
    warrantyId: 1,
    expiryDate: '10/10/2021',
    warrantyPeriod: 6,
    warrantyPeriodUnit: 'month(s)',
  },
  {
    id: 2,
    auth0Id: 'auth0|random',
    username: 'Louis',
    name: 'TV',
    image: JSON.stringify({
      url: 'http://res.cloudinary.com/receipt-keepers/image/upload/v1658051941/dnoaqqf0j3qptepmxosq.webp',
      public_id: 'dnoaqqf0j3qptepmxosq',
      signature: '37880eb90ac016aaf94af30d47bd407807ff673d',
    }),
    purchaseDate: '08/01/2022',
    store: 'Harvey Norman',
    price: 2300,
    categoryId: 3,
    categoryType: 'Electronics',
    note: 'Cheap TV',
    warrantyId: 2,
    expiryDate: '08/07/2022',
    warrantyPeriod: 26,
    warrantyPeriodUnit: 'week(s)',
  },
  {
    id: 3,
    auth0Id: 'auth0|someone',
    username: 'Lauren',
    name: 'Microwave',
    image: JSON.stringify({
      url: 'http://res.cloudinary.com/receipt-keepers/image/upload/v1658051992/tuttn7hdmvpxaggfcppl.jpg',
      public_id: 'tuttn7hdmvpxaggfcppl',
      signature: 'c336638a193d56b64ec43d043da0940c36d71c32',
    }),
    purchaseDate: '10/06/2021',
    store: 'Noel Leeming',
    price: 3400,
    categoryId: 2,
    categoryType: 'Appliance',
    note: 'Expensive microwave',
    warrantyId: null,
    expiryDate: null,
    warrantyPeriod: null,
    warrantyPeriodUnit: null,
  },
  {
    id: 4,
    auth0Id: 'auth0|somebody',
    username: 'Adam',
    name: 'Computer',
    image: JSON.stringify({
      url: 'http://res.cloudinary.com/receipt-keepers/image/upload/v1658051941/dnoaqqf0j3qptepmxosq.webp',
      public_id: 'dnoaqqf0j3qptepmxosq',
      signature: '37880eb90ac016aaf94af30d47bd407807ff673d',
    }),
    purchaseDate: '25/03/2022',
    store: 'PB Tech',
    price: 4500,
    categoryId: 4,
    categoryType: 'PC',
    note: 'Gaming computer',
    warrantyId: 4,
    expiryDate: '25/03/2023',
    warrantyPeriod: 1,
    warrantyPeriodUnit: 'year(s)',
  },
]

export const fakePostReceiptWithWarranty = {
  auth0Id: 'auth0|someperson',
  username: 'Random User',
  name: 'Macbook Pro',
  image: JSON.stringify({
    url: 'http://res.cloudinary.com/receipt-keepers/image/upload/v1658051941/dnoaqqf0j3qptepmxosq.webp',
    public_id: 'dnoaqqf0j3qptepmxosq',
    signature: '37880eb90ac016aaf94af30d47bd407807ff673d',
  }),
  purchaseDate: '18/05/2022',
  store: 'Apple',
  price: 3500,
  categoryId: 4,
  categoryType: 'PC',
  note: 'My new Mac Pro',
  warrantyId: 4,
  expiryDate: '25/05/2022',
  warrantyPeriod: 1,
  warrantyPeriodUnit: 'week(s)',
}

export const fakeCreatedReceiptWithWarranty = {
  id: 5,
  auth0Id: 'auth0|someperson',
  username: 'Random User',
  name: 'Macbook Pro',
  image: JSON.stringify({
    url: 'http://res.cloudinary.com/receipt-keepers/image/upload/v1658051941/dnoaqqf0j3qptepmxosq.webp',
    public_id: 'dnoaqqf0j3qptepmxosq',
    signature: '37880eb90ac016aaf94af30d47bd407807ff673d',
  }),
  purchaseDate: '18/05/2022',
  store: 'Apple',
  price: 3500,
  categoryId: 4,
  categoryType: 'PC',
  note: 'My new Mac Pro',
  warrantyId: 4,
  expiryDate: '25/05/2022',
  warrantyPeriod: 1,
  warrantyPeriodUnit: 'week(s)',
}

export const fakePostReceiptWithNoWarranty = {
  auth0Id: 'auth0|someperson',
  username: 'Random User',
  name: 'Macbook Pro',
  image: JSON.stringify({
    url: 'http://res.cloudinary.com/receipt-keepers/image/upload/v1658051941/dnoaqqf0j3qptepmxosq.webp',
    public_id: 'dnoaqqf0j3qptepmxosq',
    signature: '37880eb90ac016aaf94af30d47bd407807ff673d',
  }),
  purchaseDate: '18/05/2022',
  store: 'Apple',
  price: 3500,
  categoryId: 4,
  categoryType: 'PC',
  note: 'My new Mac Pro',
  warrantyId: 5,
  expiryDate: null,
  warrantyPeriod: null,
  warrantyPeriodUnit: null,
}

export const fakeCreatedReceiptWithNoWarranty = {
  id: 6,
  auth0Id: 'auth0|someperson',
  username: 'Random User',
  name: 'Macbook Pro',
  image: JSON.stringify({
    url: 'http://res.cloudinary.com/receipt-keepers/image/upload/v1658051941/dnoaqqf0j3qptepmxosq.webp',
    public_id: 'dnoaqqf0j3qptepmxosq',
    signature: '37880eb90ac016aaf94af30d47bd407807ff673d',
  }),
  purchaseDate: '18/05/2022',
  store: 'Apple',
  price: 3500,
  categoryId: 4,
  categoryType: 'PC',
  note: 'My new Mac Pro',
  warrantyId: 5,
  expiryDate: null,
  warrantyPeriod: null,
  warrantyPeriodUnit: null,
}

export const fakeReceipt = {
  id: 5,
  auth0Id: 'auth0|someperson',
  username: 'Random User',
  name: 'Macbook Pro',
  image: JSON.stringify({
    url: 'http://res.cloudinary.com/receipt-keepers/image/upload/v1658051941/dnoaqqf0j3qptepmxosq.webp',
    public_id: 'dnoaqqf0j3qptepmxosq',
    signature: '37880eb90ac016aaf94af30d47bd407807ff673d',
  }),
  purchaseDate: '18/05/2022',
  store: 'Apple',
  price: 3500,
  categoryId: 4,
  categoryType: 'PC',
  note: 'My new Mac Pro',
  warrantyId: 4,
  expiryDate: '25/05/2022',
  warrantyPeriod: 1,
  warrantyPeriodUnit: 'week(s)',
}

export const fakePatchReceipt = {
  id: 5,
  auth0Id: 'auth0|someperson',
  username: 'Random User',
  name: 'Macbook Pro Max',
  image: JSON.stringify({
    url: 'http://res.cloudinary.com/receipt-keepers/image/upload/v1658051941/dnoaqqf0j3qptepmxosq.webp',
    public_id: 'dnoaqqf0j3qptepmxosq',
    signature: '37880eb90ac016aaf94af30d47bd407807ff673d',
  }),
  purchaseDate: '18/05/2022',
  store: 'Apple',
  price: 5000,
  categoryId: 4,
  categoryType: 'PC',
  note: 'My new Mac Pro Max',
  warrantyId: 4,
  expiryDate: '18/05/2023',
  warrantyPeriod: 1,
  warrantyPeriodUnit: 'year(s)',
}

export const fakePatchedReceipt = fakePatchReceipt
