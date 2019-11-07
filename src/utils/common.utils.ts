import { THasId, TWithKey } from '../models/common';

export const MIN_YEAR = 1500;
export const MAX_YEAR = 2900;

export const getTableDataWithKey = <T extends THasId>(data: T[]): TWithKey<T>[]  => {
  return data.map((item: T) => {
    return {
      ...item,
      key: item.id,
    }
  });
};
