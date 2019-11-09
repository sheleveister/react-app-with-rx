export type THasId = {
  id: string;
}

export type TWithKey<T> = T & { key: string; }

export type RawItem<T extends THasId> = Omit<T, 'id'>;

export enum InputType {
  text = 'string',
  number = 'number',
}

export type TModelToInput<T extends Object > = {
  [key in keyof T]: {
    type: InputType;
    placeholder: string;
  };
}

export type KeyOf<T> = keyof T;
export type ValueOf<T> = T[KeyOf<T>];
