import React, { Component } from 'react';

import TableControls from '../../components/TableControls';
import TableComponent from '../../components/Table';
import { columns } from '../../utils/tracks.utils';
import { ITrack, TTrackToAdd } from '../../models/track';

import TracksCard from './TracksCard';
import './Tracks.scss';


export type TracksPropsType = {
  tracks: ITrack[];
  isVisible: boolean;
  setIsVisible: (flag: boolean) => void;
  cardControls: TTrackToAdd;
  onValueChange: (value: any) => void;
  saveCard: (data: TTrackToAdd) => void;
};


class Tracks extends Component<TracksPropsType> {
  handleCreateNewTrack = () => {
    const { setIsVisible } = this.props;
    setIsVisible(true);
  };

  render() {
    const { tracks } = this.props;

    return (
      <div className="Container">
        <TableControls
          buttonText="Create new Track"
          iconTitle="Delete Track"
          handleOnClick={this.handleCreateNewTrack}
        />
        <TableComponent<ITrack>
          columns={columns}
          data={tracks}
        />
        <TracksCard {...this.props} />
      </div>
    )
  }
}

export default Tracks;
