import { validateSync } from 'class-validator';
import { FieldsErrors, IValidatorFields } from './validator-fields.interface';

/**
 * NOTE Classe abstrata utiliza o class-validator para validar as propriedade.
 * @template PropsValidated - Representa as propriedades a serem validadas.
 */
export abstract class ClassValidatorFields<PropsValidated>
  implements IValidatorFields<PropsValidated>
{
  // Armazena os erros, caso exista.
  erros: FieldsErrors = null;
  // Armazenas os dados validados.
  validatedData: PropsValidated = null;
  // Método para validar os dados utilizando class-validatos.
  validate(data: any): boolean {
    const errors = validateSync(data);

    if (errors.length) {
      this.erros = {};
      for (const error of errors) {
        const field = error.property;
        this.erros[field] = Object.values(error.constraints);
      }
    } else {
      this.validatedData = data;
    }

    return !errors.length;
  }
}
