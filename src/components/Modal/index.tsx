import React, { Component } from 'react';
import { Modal } from 'antd';

type ModalDialogPropsType = any;


class ModalDialog extends Component<ModalDialogPropsType> {
  render() {
    const {
      children,
      visible,
      handleSubmit,
      handleCancel,
    } = this.props;

    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleSubmit}
          onCancel={handleCancel}
        >
          {children}
        </Modal>
      </div>
    )
  }
}

export default ModalDialog;