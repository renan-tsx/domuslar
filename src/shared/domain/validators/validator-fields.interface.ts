export type FieldsErrors = {
  [key: string]: string[];
};

export interface IValidatorFields<PropsValidated> {
  erros: FieldsErrors;
  validatedData: PropsValidated;
  validate(data: any): boolean;
}
