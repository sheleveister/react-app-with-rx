import React, { ChangeEvent, Component } from 'react';
import { Button, Input } from 'antd';

import ModalDialog from '../../components/Modal';

import { TracksPropsType } from './index';

type TracksCardPropsType = TracksPropsType & {};


class TracksCard extends Component<TracksCardPropsType> {

  isFormValid = () => {
    const { cardControls } = this.props;
    return !Object.values(cardControls).every(value => !!value);
  };

  handleChange = (flag: string, e: ChangeEvent<HTMLInputElement>) => {
    const { onValueChange, cardControls } = this.props;
    const newCardControls = {
      ...cardControls,
      [flag]: e.target.value,
    };

    onValueChange(newCardControls);
  };

  handleSaveCard = () => {
    const { cardControls, saveCard } = this.props;
    saveCard(cardControls);
  };

  handleCloseCard = () => {
    const { setIsVisible } = this.props;
    setIsVisible(false);
  };

  render() {
    const {
      isVisible,
      // setIsVisible,
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
        // handleSubmit={() => {}}
        handleCancel={this.handleCloseCard}
        footer={[
          <Button
            key="back"
            onClick={this.handleCloseCard}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            disabled={this.isFormValid()}
            onClick={this.handleSaveCard}
          >
            Submit
          </Button>,
        ]}
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
