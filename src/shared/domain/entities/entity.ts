import { v4 as uuidv4 } from 'uuid';

/**
 * NOTE This class is used in all other entities.
 * Generating the id for all entites.
 * Generating method for JSON that returns antity properties.
 */
export abstract class Entity<Props = any> {
  public readonly _id: string;
  public readonly props: Props;

  constructor(props: Props, id?: string) {
    this.props = props;
    this._id = id || uuidv4();
  }

  get id() {
    return this.id;
  }

  toJSON(): Required<{ id: string } & Props> {
    return {
      id: this._id,
      ...this.props,
    } as Required<{ id: string } & Props>;
  }
}
