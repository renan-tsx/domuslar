import { Entity } from '@/shared/domain/entities/entity';

export interface IUserProps {
  name: string;
  cpf: number;
  email: string;
  password: string;
  perfil: string;
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
  };
  active: boolean;
  createAt: Date;
  updateAt: Date;
}

export class UserEntity extends Entity<IUserProps> {
  constructor(
    public readonly props: IUserProps,
    id?: string,
  ) {
    super(props, id);
    this.props.createAt = this.props.createAt ?? new Date();
    this.props.updateAt = this.props.updateAt ?? new Date();
    this.props.active = this.props.active ?? true;
    this.props.perfil = this.props.perfil ?? 'SAS';
  }

  get name() {
    return this.props.name;
  }

  get cpf() {
    return this.props.cpf;
  }

  get email() {
    return this.props.email;
  }

  get address() {
    return this.props.address;
  }

  get active() {
    return this.props.active;
  }

  get createAt() {
    return this.props.createAt;
  }

  get updateAt() {
    return this.props.updateAt;
  }
}
