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

  it('Getter of name field', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });

  it('Getter of cpf field', () => {
    expect(sut.props.cpf).toBeDefined();
    expect(sut.props.cpf).toEqual(props.cpf);
    expect(typeof sut.props.cpf).toBe('number');
  });

  it('Getter of email field', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });

  it('Getter of perfil field', () => {
    expect(sut.props.perfil).toBeDefined();
    expect(sut.props.perfil).toEqual(props.perfil);
    expect(typeof sut.props.perfil).toBe('string');
  });

  it('Getter of street field', () => {
    expect(sut.props.address.street).toBeDefined();
    expect(sut.props.address.street).toEqual(props.address.street);
    expect(typeof sut.props.address.street).toBe('string');
  });

  it('Getter of number field', () => {
    expect(sut.props.address.number).toBeDefined();
    expect(sut.props.address.number).toEqual(props.address.number);
    expect(typeof sut.props.address.number).toBe('string');
  });

  it('Getter of city field', () => {
    expect(sut.props.address.city).toBeDefined();
    expect(sut.props.address.city).toEqual(props.address.city);
    expect(typeof sut.props.address.city).toBe('string');
  });

  it('Getter of state field', () => {
    expect(sut.props.address.state).toBeDefined();
    expect(sut.props.address.state).toEqual(props.address.state);
    expect(typeof sut.props.address.state).toBe('string');
  });

  it('Getter of country field', () => {
    expect(sut.props.address.country).toBeDefined();
    expect(sut.props.address.country).toEqual(props.address.country);
    expect(typeof sut.props.address.country).toBe('string');
  });

  it('Getter of zipcode field', () => {
    expect(sut.props.address.zipcode).toBeDefined();
    expect(sut.props.address.zipcode).toEqual(props.address.zipcode);
    expect(typeof sut.props.address.zipcode).toBe('string');
  });

  it('Getter of active field', () => {
    expect(sut.props.active).toBeDefined();
    expect(sut.props.active).toEqual(props.active);
    expect(typeof sut.props.active).toBe('boolean');
  });

  it('Getter of createAt field', () => {
    expect(sut.props.createAt).toBeDefined();
    expect(sut.props.createAt).toBeInstanceOf(Date);
  });

  it('Getter of updateAt field', () => {
    expect(sut.props.updateAt).toBeDefined();
    expect(sut.props.updateAt).toBeInstanceOf(Date);
  });
});
