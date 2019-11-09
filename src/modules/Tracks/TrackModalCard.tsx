import React, { Component } from 'react';
import { Button, Input, InputNumber } from 'antd';

import ModalDialog from '../../components/Modal';
import { ITrack } from '../../models/track';
import { InputType, KeyOf, RawItem, TModelToInput, ValueOf } from '../../models/common';

export interface TrackModalCardPropsType {
  mapModelToInput: TModelToInput<RawItem<ITrack>>;
  cardControls: RawItem<ITrack>;
  isOpened: boolean;
  toggleModal: (flag: boolean) => void;
  onValueChange: (data: RawItem<ITrack>) => void;
  onSave: (data: RawItem<ITrack>) => void;
  isPending: boolean;
};

class ModalCard extends Component<TrackModalCardPropsType> {

  isFormValid = () => {
    const { cardControls } = this.props;
    return !Object.values(cardControls).every(value => !!value);
  };

  handleChange = (key: KeyOf<RawItem<ITrack>>, value: ValueOf<RawItem<ITrack>>) => {
    const { onValueChange, cardControls } = this.props;
    const newCardControls = {
      ...cardControls,
      [key]: value,
    };

    onValueChange(newCardControls);
  };

  handleSaveCard = () => {
    const { cardControls, onSave } = this.props;
    onSave(cardControls);
  };

  handleCloseCard = () => {
    const { toggleModal } = this.props;
    toggleModal(false);
  };

  renderMappedInputs = () => {
    const {cardControls, mapModelToInput} = this.props;

    return Object.entries(cardControls).map(([key, value]) => {
      const modelKey = key as keyof RawItem<ITrack>;
      const inputSettings = mapModelToInput[modelKey];
      switch (inputSettings.type) {
        case (InputType.number): {
          return (
            <InputNumber
              key={key}
              className="Input"
              placeholder={inputSettings.placeholder}
              value={value as number | undefined}
              onChange={(value) => {
                this.handleChange(modelKey, value);
              }}
            />
          )
        }
        default: {
          return (
            <Input
              key={key}
              className="Input"
              placeholder={inputSettings.placeholder}
              value={value as string | undefined}
              onChange={(e) => this.handleChange(modelKey, e.target.value)}
            />
          )
        }
      } 
    });
  }

  render() {
    const {
      isOpened,
      isPending,
    } = this.props;

    return (
      <ModalDialog
        visible={isOpened}
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
            disabled={this.isFormValid() || isPending}
            onClick={this.handleSaveCard}
          >
            Submit
          </Button>,
        ]}
      >{this.renderMappedInputs()
      }
      </ModalDialog>
    )
  }
}

export default ModalCard;
