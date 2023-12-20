import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

interface IStubProps {
  prop1: string;
  prop2: number;
}

class StubEntity extends Entity<IStubProps> {}
describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 100 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 100 };
    const id = 'b012e2a1-37be-49bf-af01-b66359c10610';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy();
    expect(entity._id).toBe(id);
  });

  it('Should convert a entity to a Javascript Object', () => {
    const props = { prop1: 'value1', prop2: 100 };
    const id = 'b012e2a1-37be-49bf-af01-b66359c10610';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
