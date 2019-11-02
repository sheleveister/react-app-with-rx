import React, { Component } from 'react';
import { Table } from 'antd';

import { Column } from '../../models/table';

import './Table.scss';

type TablePropsType<T> = {
  columns: Column[];
  data: T[]
}

class TableComponent<T> extends Component<TablePropsType<T>> {
  render() {
    const { columns, data } = this.props;

    return (
      <div className="TableContainer">
        <Table
          columns={columns}
          dataSource={data}
        />
      </div>
    )
  }
}

export default TableComponent;
