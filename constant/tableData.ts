export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

export const data: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
  {
    id: 'bhqecj4p1',
    amount: 721,
    status: 'failed',
    email: '1carmella@hotmail.com',
  },
  {
    id: 'bhqecj4p2',
    amount: 721,
    status: 'failed',
    email: '2carmella@hotmail.com',
  },
  {
    id: 'bhqecj4p3',
    amount: 721,
    status: 'failed',
    email: '3carmella@hotmail.com',
  },
  {
    id: 'bhqecj4p4',
    amount: 721,
    status: 'failed',
    email: '4carmella@hotmail.com',
  },
  {
    id: 'bhqecj4p4',
    amount: 721,
    status: 'failed',
    email: '4carmella@hotmail.com',
  },
  {
    id: 'bhqecj4p5',
    amount: 721,
    status: 'failed',
    email: '5carmella@hotmail.com',
  },
  {
    id: 'bhqecj4p6',
    amount: 721,
    status: 'failed',
    email: '6carmella@hotmail.com',
  },
];
