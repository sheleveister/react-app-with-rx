import React, { Component } from 'react';
import { Table } from 'antd';

import { Column } from '../../models/table';
import { THasId } from '../../models/common';
import { getTableDataWithKey } from '../../utils/common.utils';

import './Table.scss';

type TablePropsType<T> = {
  columns: Column[];
  data: T[]
}

class TableComponent<T extends THasId> extends Component<TablePropsType<T>> {
  render() {
    const { columns, data } = this.props;
    const mappedData = getTableDataWithKey<T>(data);
    return (
      <div className="TableContainer">
        <Table
          columns={columns}
          dataSource={mappedData}
        />
      </div>
    )
  }
}

export default TableComponent;
