import React from 'react';

import { Button, TextInput } from 'phonegap-topcoat-react';

import './index.css';

// TODO This might be refactored to just accept children
const ConnectPane = (props) => (
  <div className="connect-pane">
    <Button
      full
      clickHandler={ () => props.handleButtonClick('scan') }
    >
      <img src="img/ic_fullscreen_black_24px.svg" alt="scan icon" />
      <span> Scan a QR Code</span>
    </Button>
    <div className="or-spacer">
      - or -
    </div>
    <label htmlFor="connectURL">Enter server address
      <TextInput name="connectURL" full />
    </label>
    <Button
      full
      cta
      clickHandler={ () => props.handleButtonClick('connect') }
    >
      Connect
    </Button>
  </div>
);

ConnectPane.propTypes = {
  handleButtonClick: React.PropTypes.func.isRequired,
};

export default ConnectPane;