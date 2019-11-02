import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import './TableControls.scss';

type TableControlsPropsType = {
  buttonText: string;
  iconTitle: string;
}


class TableControls extends Component<TableControlsPropsType> {
  render() {
    const { buttonText, iconTitle } = this.props;

    return (
      <div className="TableControls">
        <Button className="Button"
          type="primary">
          { buttonText }
        </Button>
        <Icon title={iconTitle}
          className="CustomIcon"
          type="delete"
        />
      </div>
    )
  }
}

export default TableControls;
