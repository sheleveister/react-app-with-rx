import { Column } from '../models/table';
import { InputType, RawItem, TModelToInput } from '../models/common';
import { ITrack } from '../models/track';

export const columns: Column[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Duration',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
];

export const defaultTrackCard: RawItem<ITrack> = {
  name: '',
  author: '',
  duration: undefined,
  year: undefined,
};

export const mapTrackToInput: TModelToInput<RawItem<ITrack>> = {
  name: {
    type: InputType.text,
    placeholder: 'Name',
  },
  author: {
    type: InputType.text,
    placeholder: 'Author',
  },
  duration: {
    type: InputType.number,
    placeholder: 'Duration',
  },
  year: {
    type: InputType.number,
    placeholder: 'Year',
  },
}
