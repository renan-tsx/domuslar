import { faker } from '@faker-js/faker';
import { generate as CpfGenetate } from 'gerador-validador-cpf';
import { IUserProps, UserEntity } from '../../user.entity';

describe('UserEntity unit tests', () => {
  let props: IUserProps;
  let sut: UserEntity;
  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      cpf: Number(CpfGenetate()),
      email: faker.internet.email(),
      password: faker.internet.password(),
      address: {
        street: faker.location.street(),
        number: faker.number.int().toString(),
        city: faker.location.city(),
        state: faker.location.state(),
        country: faker.location.country(),
        zipcode: faker.location.zipCode(),
      },
    };

    sut = new UserEntity(props);
  });
  it('Constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.cpf).toEqual(props.cpf);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);

    expect(sut.props.address.street).toEqual(props.address.street);
    expect(sut.props.address.city).toEqual(props.address.city);
    expect(sut.props.address.state).toEqual(props.address.state);
    expect(sut.props.address.country).toEqual(props.address.country);
    expect(sut.props.address.zipcode).toEqual(props.address.zipcode);
  });
});
