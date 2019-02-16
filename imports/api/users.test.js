import expect from 'expect';
import { Meteor } from 'meteor/meteor';

import { validateNewUser } from './users';

if (Meteor.isServer) {
  describe('users', function () {
    it('should allow valid email address', function () {
      const testUser = {
        emails: [
          {
            address: 'edwinhaver@gmail.com'
          }
        ]
      }
      const res = validateNewUser(testUser);
  
      expect(res).toBe(true);
    });

    it('should not allow an invalid email address', function () {
      const testUser = {
        emails: [
          {
            address: 'edwinhaver'
          }
        ]
      }
      expect(() => {
        validateNewUser(testUser);
      }).toThrow();
    });
  });
}

// const add = (a, b) => {
//   if (typeof b !== 'number') {
//     return a + a;
//   }
//   return a + b;
// };

// const square = (a) => a * a;
// import expect from 'expect';

// describe('add', function () {
//   it("should add two numbers", function () {
//     const res = add(11, 9);
  
//     expect(res).toBe(20);
//   });
  
//   it("should double a single number", function () {
//     const res = add(11);
  
//     expect(res).toBe(22);
//   });
// });

// describe('square', function () {
//   it("should square a number", function () {
//     const res = square(2);

//     expect(res).toBe(4);
//   });
// });
