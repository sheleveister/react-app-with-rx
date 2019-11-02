import { THasId, TWithKey } from '../models/common';

export const getTableDataWithKey = <T extends THasId>(data: T[]): TWithKey<T>[]  => {
  return data.map((item: T) => {
    return {
      ...item,
      key: item.id,
    }
  });
};
