import React, { Component } from 'react';
import { Button, Icon } from 'antd';

import './TableControls.scss';

type TableControlsPropsType = {
  buttonText: string;
  iconTitle: string;
  handleOnClick: () => void;
}


class TableControls extends Component<TableControlsPropsType> {
  render() {
    const { buttonText, iconTitle, handleOnClick } = this.props;

    return (
      <div className="TableControls">
        <Button className="Button"
          type="primary"
          onClick={handleOnClick}
        >
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
