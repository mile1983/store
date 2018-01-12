import { Injectable } from '@angular/core';

@Injectable()
export class BuyersService {

  constructor() { }

  public getBuyers()
  {
    return [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        products: []
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@mail.com',
        products: []
      },
      {
        firstName: 'Martin',
        lastName: 'Hess',
        email: 'martin@mail.com',
        products: []
      },
    ];
  }
}