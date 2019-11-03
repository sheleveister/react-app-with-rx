import React, { ChangeEvent, Component } from 'react';
import { Input } from 'antd';

import ModalDialog from '../../components/Modal';

type TracksCardPropsType = {
  onValueChange: (value: any) => void;
  cardControls: any;
  isVisible: boolean;
  setIsVisible: (flag: boolean) => void;
};


class TracksCard extends Component<TracksCardPropsType> {

  handleChange = (flag: string, e: ChangeEvent<HTMLInputElement>) => {
    const { onValueChange, cardControls } = this.props;
    const newCardControls = {
      ...cardControls,
      [flag]: e.target.value,
    }

    onValueChange(newCardControls);
  };

  render() {
    const {
      isVisible,
      setIsVisible,
      cardControls: {
        name,
        author,
        duration,
        year,
      },
    } = this.props;

    return (
      <ModalDialog
        visible={isVisible}
        handleSubmit={() => {}}
        handleCancel={() => setIsVisible(false)}
      >
        <Input
          className="Input"
          placeholder="Name"
          value={name}
          onChange={(e) => this.handleChange('name', e)}
        />
        <Input
          className="Input"
          placeholder="Author"
          value={author}
          onChange={(e) => this.handleChange('author', e)}
        />
        <Input
          className="Input"
          placeholder="Duration"
          value={duration}
          onChange={(e) => this.handleChange('duration', e)}
        />
        <Input
          className="Input"
          placeholder="Year"
          value={year}
          onChange={(e) => this.handleChange('year', e)}
        />
      </ModalDialog>
    )
  }
}

export default TracksCard;
