import { faker } from '@faker-js/faker';
import { generate as CpfGenetate } from 'gerador-validador-cpf';
import { IUserProps } from '../../entities/user.entity';

interface Props {
  name?: string;
  cpf?: string;
  email?: string;
  password?: string;
  perfil?: 'SAS';
  address?: {
    street?: string;
    number?: string;
    city?: string;
    state?: string;
    country?: string;
    zipcode?: string;
  };
  active?: boolean;
  createAt?: Date;
  updateAt?: Date;
}

/**
 * Cria os dados do usuário
 * @param props Propriedades opcionais para personalizar os dados do usuário
 * @returns IUserProps - Objeto contendo os dados do usuário
 * @example UserDataBuilder({})
 * @example UserDataBuilder({name: 'John Doe'})
 */
export function UserDataBuilder(props: Props): IUserProps {
  return {
    name: props.name ?? faker.person.fullName(),
    cpf: props.cpf ?? CpfGenetate(),
    email: props.email ?? faker.internet.email(),
    password: props.password ?? faker.internet.password(),
    perfil: props.perfil ?? 'SAS',
    address: {
      street: props.address?.street ?? faker.location.street(),
      number: props.address?.number ?? faker.number.int().toString(),
      city: props.address?.city ?? faker.location.city(),
      state: props.address?.state ?? faker.location.state(),
      country: props.address?.country ?? faker.location.country(),
      zipcode: props.address?.zipcode ?? faker.location.zipCode(),
    },
    active: props.active ?? true,
    createAt: props.createAt ?? new Date(),
    updateAt: props.updateAt ?? new Date(),
  };
}
