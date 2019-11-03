import React, { Component } from 'react';

import TableControls from '../../components/TableControls';
import TableComponent from '../../components/Table';
import { columns } from '../../utils/tracks.utils';
import { ITrack } from '../../models/track';

import TracksCard from './TracksCard';
import './Tracks.scss';


export type TracksPropsType = {
  tracks: ITrack[];
  isVisible: boolean;
  setIsVisible: (flag: boolean) => void;
  handleCancel: () => void;
  cardControls: any;
  onValueChange: (value: any) => void;
};


class Tracks extends Component<TracksPropsType> {
  handleCreateNewTrack = () => {
    const { setIsVisible } = this.props;
    setIsVisible(true);
  };

  render() {
    const { tracks } = this.props;
    console.log('this.props', this.props);

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
