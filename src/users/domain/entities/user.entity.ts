import { Entity } from '@/shared/domain/entities/entity';
import { UserValidatorFactory } from '../validators/user.validator';

export interface IAddress {
  street: string;
  number: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export interface IOptionalAddress extends Partial<IAddress> {}
export interface IUserProps {
  name: string;
  cpf: string;
  email: string;
  password: string;
  perfil: 'SAS';
  address: IAddress;
  active: boolean;
  createAt: Date;
  updateAt: Date;
}

export class UserEntity extends Entity<IUserProps> {
  constructor(
    public readonly props: IUserProps,
    id?: string,
  ) {
    UserEntity.validate(props);
    super(props, id);
    this.props.createAt = this.props.createAt ?? new Date();
    this.props.updateAt = this.props.updateAt ?? new Date();
    this.props.active = this.props.active ?? true;
    this.props.perfil = this.props.perfil ?? 'SAS';
  }

  // NOTE perfil
  updatePerfil(value: 'SAS'): void {
    UserEntity.validate({ ...this.props, perfil: value });
    this.perfil = value;
  }

  get perfil() {
    return this.props.perfil;
  }

  private set perfil(value: 'SAS') {
    this.props.perfil = value;
  }

  // NOTE Name
  updateName(value: string): void {
    UserEntity.validate({ ...this.props, name: value });
    this.name = value;
  }

  get name() {
    return this.props.name;
  }

  private set name(value: string) {
    this.props.name = value;
  }

  // NOTE CPF
  updateCpf(value: string): void {
    UserEntity.validate({ ...this.props, cpf: value });
    this.cpf = value;
  }

  get cpf() {
    return this.props.cpf;
  }

  private set cpf(value: string) {
    this.props.cpf = value;
  }

  // NOTE Email
  updateEmail(value: string): void {
    UserEntity.validate({ ...this.props, email: value });
    this.email = value;
  }

  get email() {
    return this.props.email;
  }

  private set email(value: string) {
    this.props.email = value;
  }

  // NOTE Address
  updateAddress(value: IOptionalAddress): void {
    UserEntity.validate({ ...this.props, address: value } as IUserProps);
    this.address = value;
  }

  get address() {
    return this.props.address;
  }

  private set address(value: IOptionalAddress) {
    this.props.address = value as IAddress;
  }

  // NOTE Active
  upadateActive(value: boolean): void {
    UserEntity.validate({ ...this.props, active: value });
    this.active = value;
  }

  get active() {
    return this.props.active;
  }

  private set active(value: boolean) {
    this.props.active = value;
  }

  // NOTE createAt
  get createAt() {
    return this.props.createAt;
  }

  // NOTE updateAt
  upadateUpdateAt(value: Date): void {
    UserEntity.validate({ ...this.props, updateAt: value });
    this.updateAt = value;
  }

  get updateAt() {
    return this.props.updateAt;
  }

  private set updateAt(value: Date) {
    this.props.updateAt = value;
  }

  static validate(props: IUserProps) {
    const validator = UserValidatorFactory.create();
    validator.validate(props);
  }
}
