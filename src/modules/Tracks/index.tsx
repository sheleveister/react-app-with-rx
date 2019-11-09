import React, { Component } from 'react';

import TableControls from '../../components/TableControls';
import TableComponent from '../../components/Table';
import { columns, mapTrackToInput } from '../../utils/tracks.utils';
import { ITrack } from '../../models/track';
import { TrackModalContainer } from '../../containers/TrackModalContainer';

import './Tracks.scss';


export type TracksPropsType = {
  tracks: ITrack[];
  openModal: () => void;
};

class Tracks extends Component<TracksPropsType> {
  render() {
    const { tracks } = this.props;

    return (
      <div className="Container">
        <TableControls
          buttonText="Create new Track"
          iconTitle="Delete Track"
          handleOnClick={this.props.openModal}
        />
        <TableComponent<ITrack>
          columns={columns}
          data={tracks}
        />
        <TrackModalContainer
          mapModelToInput={mapTrackToInput}
        />
      </div>
    )
  }
}

export default Tracks;
