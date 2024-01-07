import * as libClassValidator from 'class-validator';
import { ClassValidatorFields } from '../../class-validator-fields';

/**
 * NOTE Testes unitários para a classe ClassValidatorFields.
 * É esperado que o teste valide o comportamento da classe.
 */

class stubClassValidatorFields extends ClassValidatorFields<{
  field: string;
}> {}

describe('ClassValidatorFields unit tests', () => {
  it('Should initialize erros and validatedData variables with null', () => {
    const sut = new stubClassValidatorFields();

    expect(sut.erros).toBeNull();
    expect(sut.validatedData).toBeNull();
  });

  it('Should validate with erros', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([
      {
        property: 'field',
        constraints: { isRequired: 'test error' },
      },
    ]);

    const sut = new stubClassValidatorFields();

    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toBeNull();
    expect(sut.erros).toStrictEqual({ field: ['test error'] });
  });

  it('Should validate without erros', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([]);

    const sut = new stubClassValidatorFields();

    expect(sut.validate({ field: 'value' })).toBeTruthy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toStrictEqual({ field: 'value' });
    expect(sut.erros).toBeNull();
  });
});
