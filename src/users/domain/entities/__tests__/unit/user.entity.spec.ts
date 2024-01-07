import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { IUserProps, UserEntity } from '../../user.entity';

describe('UserEntity unit tests', () => {
  let props: IUserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});
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

  //NOTE name
  it('Getter of name field', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });

  it('Setter of name field', () => {
    sut['name'] = 'other name';
    expect(sut.props.name).toEqual('other name');
    expect(typeof sut.props.name).toBe('string');
  });

  it('Should update a user', () => {
    sut.updateName('other name');
    expect(sut.props.name).toEqual('other name');
    expect(typeof sut.props.name).toBe('string');
  });

  // NOTE cpf
  it('Getter of cpf field', () => {
    expect(sut.props.cpf).toBeDefined();
    expect(sut.props.cpf).toEqual(props.cpf);
    expect(typeof sut.props.cpf).toBe('string');
  });

  it('Setter of cpf field', () => {
    sut['cpf'] = '21286438055';
    expect(sut.props.cpf).toEqual('21286438055');
    expect(typeof sut.props.cpf).toBe('string');
  });

  it('Should update a cpf', () => {
    sut.updateCpf('34804138030');
    expect(sut.props.cpf).toEqual('34804138030');
    expect(typeof sut.props.cpf).toBe('string');
  });

  // NOTE email
  it('Getter of email field', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });

  it('Setter of email field', () => {
    sut['email'] = 'other-email@gmail.com';
    expect(sut.props.email).toEqual('other-email@gmail.com');
    expect(typeof sut.props.email).toBe('string');
  });

  it('Should update a email', () => {
    sut.updateEmail('other-email@gmail.com');
    expect(sut.props.email).toEqual('other-email@gmail.com');
    expect(typeof sut.props.email).toBe('string');
  });

  // NOTE pefil
  it('Getter of perfil field', () => {
    expect(sut.props.perfil).toBeDefined();
    expect(sut.props.perfil).toEqual(props.perfil);
    expect(typeof sut.props.perfil).toBe('string');
  });

  it('Setter of perfil field', () => {
    sut['perfil'] = 'other perfil';
    expect(sut.props.perfil).toEqual('other perfil');
    expect(typeof sut.props.perfil).toBe('string');
  });

  it('Should update perfil', () => {
    sut.updatePerfil('other perfil');
    expect(sut.props.perfil).toEqual('other perfil');
    expect(typeof sut.props.perfil).toBe('string');
  });

  // NOTE street
  it('Getter of street field', () => {
    expect(sut.props.address.street).toBeDefined();
    expect(sut.props.address.street).toEqual(props.address.street);
    expect(typeof sut.props.address.street).toBe('string');
  });

  it('Setter of street field', () => {
    sut.address['street'] = 'other street';
    expect(sut.props.address.street).toEqual('other street');
    expect(typeof sut.props.address.street).toBe('string');
  });

  it('Should update street', () => {
    sut.updateAddress({ street: 'other street' });
    expect(sut.props.address.street).toEqual('other street');
    expect(typeof sut.props.address.street).toBe('string');
  });

  // NOTE number
  it('Getter of number field', () => {
    expect(sut.props.address.number).toBeDefined();
    expect(sut.props.address.number).toEqual(props.address.number);
    expect(typeof sut.props.address.number).toBe('string');
  });

  it('Setter of number field', () => {
    sut.address['number'] = '100';
    expect(sut.props.address.number).toEqual('100');
    expect(typeof sut.props.address.number).toBe('string');
  });

  it('Should update number', () => {
    sut.updateAddress({ number: 'other number' });
    expect(sut.props.address.number).toEqual('other number');
    expect(typeof sut.props.address.number).toBe('string');
  });

  // NOTE city
  it('Getter of city field', () => {
    expect(sut.props.address.city).toBeDefined();
    expect(sut.props.address.city).toEqual(props.address.city);
    expect(typeof sut.props.address.city).toBe('string');
  });

  it('Setter of city field', () => {
    sut.address['city'] = 'other city';
    expect(sut.props.address.city).toEqual('other city');
    expect(typeof sut.props.address.city).toBe('string');
  });

  it('Should update city', () => {
    sut.updateAddress({ city: 'other city' });
    expect(sut.props.address.city).toEqual('other city');
    expect(typeof sut.props.address.city).toBe('string');
  });

  // NOTE state
  it('Getter of state field', () => {
    expect(sut.props.address.state).toBeDefined();
    expect(sut.props.address.state).toEqual(props.address.state);
    expect(typeof sut.props.address.state).toBe('string');
  });

  it('Setter of state field', () => {
    sut.address['state'] = 'other state';
    expect(sut.props.address.state).toEqual('other state');
    expect(typeof sut.props.address.state).toBe('string');
  });

  it('Should update state', () => {
    sut.updateAddress({ state: 'other state' });
    expect(sut.props.address.state).toEqual('other state');
    expect(typeof sut.props.address.state).toBe('string');
  });

  // NOTE country
  it('Getter of country field', () => {
    expect(sut.props.address.country).toBeDefined();
    expect(sut.props.address.country).toEqual(props.address.country);
    expect(typeof sut.props.address.country).toBe('string');
  });

  it('Setter of country field', () => {
    sut.address['country'] = 'other country';
    expect(sut.props.address.country).toEqual('other country');
    expect(typeof sut.props.address.country).toBe('string');
  });

  it('Should update country', () => {
    sut.updateAddress({ country: 'other country' });
    expect(sut.props.address.country).toEqual('other country');
    expect(typeof sut.props.address.country).toBe('string');
  });

  // NOTE zipcode
  it('Getter of zipcode field', () => {
    expect(sut.props.address.zipcode).toBeDefined();
    expect(sut.props.address.zipcode).toEqual(props.address.zipcode);
    expect(typeof sut.props.address.zipcode).toBe('string');
  });

  it('Setter of zipcode field', () => {
    sut.address['zipcode'] = 'other zipcode';
    expect(sut.props.address.zipcode).toEqual('other zipcode');
    expect(typeof sut.props.address.zipcode).toBe('string');
  });

  it('Should update zipcode', () => {
    sut.updateAddress({ zipcode: 'other zipcode' });
    expect(sut.props.address.zipcode).toEqual('other zipcode');
    expect(typeof sut.props.address.zipcode).toBe('string');
  });

  // NOTE active
  it('Getter of active field', () => {
    expect(sut.props.active).toBeDefined();
    expect(sut.props.active).toEqual(props.active);
    expect(typeof sut.props.active).toBe('boolean');
  });

  it('Setter of active field', () => {
    sut['active'] = false;
    expect(sut.props.active).toEqual(false);
    expect(typeof sut.props.active).toBe('boolean');
  });

  it('Should update active', () => {
    sut.upadateActive(false);
    expect(sut.props.active).toEqual(false);
    expect(typeof sut.props.active).toBe('boolean');
  });

  // NOTE createAt
  it('Getter of createAt field', () => {
    expect(sut.props.createAt).toBeDefined();
    expect(sut.props.createAt).toBeInstanceOf(Date);
  });

  // NOTE updateAt
  it('Getter of updateAt field', () => {
    expect(sut.props.updateAt).toBeDefined();
    expect(sut.props.updateAt).toBeInstanceOf(Date);
  });

  it('Setter of updateAt field', () => {
    const newDate = new Date();
    sut['updateAt'] = newDate;
    expect(sut.props.updateAt).toEqual(newDate);
    expect(sut.props.updateAt).toBeDefined();
    expect(sut.props.updateAt).toBeInstanceOf(Date);
  });

  it('Should update updateAt', () => {
    const newDate = new Date();
    sut.upadateUpdateAt(newDate);
    expect(sut.props.updateAt).toEqual(newDate);
    expect(sut.props.updateAt).toBeDefined();
    expect(sut.props.updateAt).toBeInstanceOf(Date);
  });
});
