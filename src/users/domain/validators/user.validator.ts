import { ClassValidatorFields } from '@/shared/domain/validators/class-validator-fields';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { IUserProps } from '../entities/user.entity';

class Address {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  street: string;

  @MaxLength(25)
  @IsString()
  @IsNotEmpty()
  number: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  city: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  state: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  country: string;

  @MaxLength(8)
  @IsString()
  @IsNotEmpty()
  zipcode: string;
}

export class UserRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(11)
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @MaxLength(255)
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MaxLength(100)
  @IsString()
  @IsNotEmpty()
  password: string;

  @MaxLength(100)
  @IsString()
  @IsOptional()
  perfil: string;

  address: Address;

  @IsBoolean()
  @IsOptional()
  active: boolean;

  @IsDate()
  @IsOptional()
  createAt: Date;

  @IsDate()
  @IsOptional()
  updateAt: Date;

  constructor({
    name,
    cpf,
    email,
    password,
    perfil,
    address,
    active,
    createAt,
    updateAt,
  }: IUserProps) {
    Object.assign(this, {
      name,
      cpf,
      email,
      password,
      perfil,
      address,
      active,
      createAt,
      updateAt,
    });
  }
}

/**
 * NOTE Classe responsável em validar os dados do usuário
 */
export class UserValidator extends ClassValidatorFields<UserRules> {
  validate(data: IUserProps): boolean {
    return super.validate(new UserRules(data ?? ({} as IUserProps)));
  }
}

/**
 * NOTE Cria uma instância statica de UserValidator
 * @example UserValidatorFactory.create()
 */
export class UserValidatorFactory {
  static create(): UserValidator {
    return new UserValidator();
  }
}
