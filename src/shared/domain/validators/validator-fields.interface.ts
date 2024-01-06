// NOTE Define a estrutura de erros para os campos.
export interface FieldsErrors {
  [key: string]: string[];
}

// NOTE Define os métodos que devem ser implementados por classes de validação.
export interface IValidatorFields<PropsValidated> {
  erros: FieldsErrors;
  validatedData: PropsValidated;
  validate(data: any): boolean;
}
