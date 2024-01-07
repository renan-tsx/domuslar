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
});
