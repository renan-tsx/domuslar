import { IUserProps } from '@/users/domain/entities/user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import {
  UserRules,
  UserValidator,
  UserValidatorFactory,
} from '../../user.validator';

let sut: UserValidator;
let userProps: IUserProps;
let isValid: boolean;

describe('UserValidator unit tests', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create();
    userProps = UserDataBuilder({});
  });

  describe('Name field validation', () => {
    describe('Invalidation cases', () => {
      it('Should be invalid for null input', () => {
        isValid = sut.validate(null);
        expect(isValid).toBeFalsy();
        expect(sut.erros.name).toStrictEqual([
          'name should not be empty',
          'name must be a string',
          'name must be shorter than or equal to 255 characters',
        ]);
      });

      it('Should be invalid for an empty name ', () => {
        isValid = sut.validate({ ...userProps, name: '' });
        expect(isValid).toBeFalsy();
        expect(sut.erros.name).toStrictEqual(['name should not be empty']);
      });
      it('Should be invalid for an name greater than 255 caracters', () => {
        isValid = sut.validate({ ...userProps, name: 'a'.repeat(256) });
        expect(isValid).toBeFalsy();
        expect(sut.erros.name).toStrictEqual([
          'name must be shorter than or equal to 255 characters',
        ]);
      });
      it('Should be invalid for a numeric name', () => {
        isValid = sut.validate({ ...userProps, name: 10 as any });
        expect(isValid).toBeFalsy();
        expect(sut.erros.name).toStrictEqual([
          'name must be a string',
          'name must be shorter than or equal to 255 characters',
        ]);
      });
    });

    describe('Valid cases', () => {
      it('Should be valid for an name ', () => {
        userProps = UserDataBuilder({});
        isValid = sut.validate({ ...userProps });
        expect(isValid).toBeTruthy();
        expect(sut.validatedData).toStrictEqual(new UserRules(userProps));
      });
    });
  });

  describe('CPF field validation', () => {
    describe('Invalidation cases', () => {
      it('Should be invalid for null input', () => {
        isValid = sut.validate(null);
        expect(isValid).toBeFalsy();
        expect(sut.erros.cpf).toStrictEqual([
          'cpf should not be empty',
          'cpf must be a string',
          'cpf must be shorter than or equal to 11 characters',
        ]);
      });

      it('Should be invalid for an empty cpf ', () => {
        isValid = sut.validate({ ...userProps, cpf: '' });
        expect(isValid).toBeFalsy();
        expect(sut.erros.cpf).toStrictEqual(['cpf should not be empty']);
      });
      it('Should be invalid for an cpf greater than 11 caracters', () => {
        isValid = sut.validate({ ...userProps, cpf: '1'.repeat(12) });
        expect(isValid).toBeFalsy();
        expect(sut.erros.cpf).toStrictEqual([
          'cpf must be shorter than or equal to 11 characters',
        ]);
      });
      it('Should be invalid for a numeric cpf', () => {
        isValid = sut.validate({ ...userProps, cpf: 10 as any });
        expect(isValid).toBeFalsy();
        expect(sut.erros.cpf).toStrictEqual([
          'cpf must be a string',
          'cpf must be shorter than or equal to 11 characters',
        ]);
      });
    });

    describe('Valid cases', () => {
      it('Should be valid for an cpf ', () => {
        userProps = UserDataBuilder({});
        isValid = sut.validate({ ...userProps });
        expect(isValid).toBeTruthy();
        expect(sut.validatedData).toStrictEqual(new UserRules(userProps));
      });
    });
  });

  describe('Email field validation', () => {
    describe('Invalidation cases', () => {
      it('Should be invalid for null input', () => {
        isValid = sut.validate(null);
        expect(isValid).toBeFalsy();
        expect(sut.erros.email).toStrictEqual([
          'email should not be empty',
          'email must be an email',
          'email must be a string',
          'email must be shorter than or equal to 255 characters',
        ]);
      });

      it('Should be invalid for an empty email ', () => {
        isValid = sut.validate({ ...userProps, email: '' });
        expect(isValid).toBeFalsy();
        expect(sut.erros.email).toStrictEqual([
          'email should not be empty',
          'email must be an email',
        ]);
      });
      it('Should be invalid for an email greater than 255 caracters', () => {
        isValid = sut.validate({ ...userProps, email: 'a'.repeat(256) });
        expect(isValid).toBeFalsy();
        expect(sut.erros.email).toStrictEqual([
          'email must be an email',
          'email must be shorter than or equal to 255 characters',
        ]);
      });
      it('Should be invalid for a numeric email', () => {
        isValid = sut.validate({ ...userProps, email: 10 as any });
        expect(isValid).toBeFalsy();
        expect(sut.erros.email).toStrictEqual([
          'email must be an email',
          'email must be a string',
          'email must be shorter than or equal to 255 characters',
        ]);
      });

      describe('ivalid email cases', () => {
        it('Should be invalid for an email without @ ', () => {
          isValid = sut.validate({ ...userProps, email: 'exampleemail.com' });
          expect(isValid).toBeFalsy();
          expect(sut.erros.email).toStrictEqual(['email must be an email']);
        });
        it('Should be invalid for an email without a dot (.) in the doman', () => {
          isValid = sut.validate({ ...userProps, email: 'example@emailcom' });
          expect(isValid).toBeFalsy();
          expect(sut.erros.email).toStrictEqual(['email must be an email']);
        });
        it('Should be invalid for an email with special caracter', () => {
          isValid = sut.validate({ ...userProps, email: 'example#email.com' });
          expect(isValid).toBeFalsy();
          expect(sut.erros.email).toStrictEqual(['email must be an email']);
        });
        it('Should be invalid for an email with @ at the beginning', () => {
          isValid = sut.validate({ ...userProps, email: '@email.com' });
          expect(isValid).toBeFalsy();
          expect(sut.erros.email).toStrictEqual(['email must be an email']);
        });
        it('Should be invalid for an email with @ at the end', () => {
          isValid = sut.validate({ ...userProps, email: 'example@' });
          expect(isValid).toBeFalsy();
          expect(sut.erros.email).toStrictEqual(['email must be an email']);
        });
      });
    });

    describe('Valid cases', () => {
      it('Should be valid for an email ', () => {
        userProps = UserDataBuilder({});
        isValid = sut.validate({ ...userProps });
        expect(isValid).toBeTruthy();
        expect(sut.validatedData).toStrictEqual(new UserRules(userProps));
      });
    });
  });

  describe('Password field validation', () => {
    describe('Invalidation cases', () => {
      it('Should be invalid for null input', () => {
        isValid = sut.validate(null);
        expect(isValid).toBeFalsy();
        expect(sut.erros.password).toStrictEqual([
          'password should not be empty',
          'password must be a string',
          'password must be shorter than or equal to 100 characters',
        ]);
      });

      it('Should be invalid for an empty password ', () => {
        isValid = sut.validate({ ...userProps, password: '' });
        expect(isValid).toBeFalsy();
        expect(sut.erros.password).toStrictEqual([
          'password should not be empty',
        ]);
      });
      it('Should be invalid for an password greater than 100 caracters', () => {
        isValid = sut.validate({ ...userProps, password: 'a'.repeat(256) });
        expect(isValid).toBeFalsy();
        expect(sut.erros.password).toStrictEqual([
          'password must be shorter than or equal to 100 characters',
        ]);
      });
      it('Should be invalid for a numeric password', () => {
        isValid = sut.validate({ ...userProps, password: 10 as any });
        expect(isValid).toBeFalsy();
        expect(sut.erros.password).toStrictEqual([
          'password must be a string',
          'password must be shorter than or equal to 100 characters',
        ]);
      });
    });

    describe('Valid cases', () => {
      it('Should be valid for an name ', () => {
        userProps = UserDataBuilder({});
        isValid = sut.validate({ ...userProps });
        expect(isValid).toBeTruthy();
        expect(sut.validatedData).toStrictEqual(new UserRules(userProps));
      });
    });
  });

  describe('Perfil field validation', () => {
    describe('Invalidation cases', () => {
      it('Should be invalid for null input', () => {
        isValid = sut.validate(null);
        expect(isValid).toBeFalsy();
      });
      it('Should be invalid for a perfil that is not of type SAS ', () => {
        isValid = sut.validate({ ...userProps, perfil: '' as any });
        expect(isValid).toBeFalsy();
        expect(sut.erros.perfil).toStrictEqual(['perfil must be SAS']);
      });
      it('Should be invalid for a numeric perfil', () => {
        isValid = sut.validate({ ...userProps, perfil: 10 as any });
        expect(isValid).toBeFalsy();
        expect(sut.erros.perfil).toStrictEqual([
          'perfil must be SAS',
          'perfil must be a string',
          'perfil must be shorter than or equal to 100 characters',
        ]);
      });
    });

    describe('Valid cases', () => {
      it('Should be valid for an perfil ', () => {
        userProps = UserDataBuilder({});
        isValid = sut.validate({ ...userProps });
        expect(isValid).toBeTruthy();
        expect(sut.validatedData).toStrictEqual(new UserRules(userProps));
      });
    });
  });

  describe('Street field validation', () => {
    describe('Invalidation cases', () => {
      // it('Should be invalid for null input', () => {
      //   isValid = sut.validate(unll);
      //   console.log(sut.erros);
      //   expect(isValid).toBeFalsy();
      //   expect(sut.erros.street).toStrictEqual([
      //     'street should not be empty',
      //     'street must be a string',
      //     'street must be shorter than or equal to 255 characters',
      //   ]);
      // });
      it('Should be invalid for an empty street', () => {
        isValid = sut.validate({
          ...userProps,
        });
        console.log(sut.validatedData);
        console.log(sut.erros);
        expect(isValid).toBeFalsy();
        // expect(sut.erros.address.street).toStrictEqual([
        //   'street should not be empty',
        // ]);
      });
      // it('Should be invalid for an street greater than 255 caracters', () => {
      //   isValid = sut.validate({ ...userProps, street: 'a'.repeat(256) });
      //   expect(isValid).toBeFalsy();
      //   expect(sut.erros.street).toStrictEqual([
      //     'street must be shorter than or equal to 255 characters',
      //   ]);
      // });
      // it('Should be invalid for a numeric street', () => {
      //   isValid = sut.validate({ ...userProps, street: 10 as any });
      //   expect(isValid).toBeFalsy();
      //   expect(sut.erros.street).toStrictEqual([
      //     'street must be a string',
      //     'street must be shorter than or equal to 255 characters',
      //   ]);
      // });
    });

    // describe('Valid cases', () => {
    //   it('Should be valid for an name ', () => {
    //     userProps = UserDataBuilder({});
    //     isValid = sut.validate({ ...userProps });
    //     expect(isValid).toBeTruthy();
    //     expect(sut.validatedData).toStrictEqual(new UserRules(userProps));
    //   });
    // });
  });
});
