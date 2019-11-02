import React, { Component } from 'react';

import TableControls from '../../components/TableControls';
import TableComponent from '../../components/Table';
import { columns } from '../../utils/tracks.utils';
import { ITableTrack, ITrack } from '../../models/track';
import { getTableDataWithKey } from '../../utils/common.utils';

import { TracksPropsType } from "./Tracks.types";
import './Tracks.scss';


class Tracks extends Component<TracksPropsType> {
  render() {
    const { tracks } = this.props;
    const data = getTableDataWithKey<ITrack>(tracks);

    return (
      <div className="Container">
        <TableControls
          buttonText="Create new User"
          iconTitle="Delete User"
        />
        <TableComponent<ITableTrack>
          columns={columns}
          data={data}
        />
      </div>
    )
  }
}

export default Tracks;
