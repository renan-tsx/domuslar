export interface IUserProps {
  name: string;
  cpf: number;
  email: string;
  password: string;
  perfil?: string;
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    country: string;
    zipcode: string;
  };
  active?: boolean;
  createAt?: Date;
  updateAt?: Date;
}

export class UserEntity {
  constructor(public readonly props: IUserProps) {
    this.props.createAt = this.props.createAt ?? new Date();
    this.props.updateAt = this.props.updateAt ?? new Date();
    this.props.active = this.props.active ?? true;
    this.props.perfil = this.props.perfil ?? 'SAS';
  }
}
