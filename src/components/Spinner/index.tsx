import React from 'react';
import { Spin } from 'antd';
import './Spinner.scss';

const Spinner: React.FC = () => {
  return (
    <div className="SpinnerContainer">
      <Spin size="large" />
    </div>
  );
};

export default Spinner;
