import { CheckBox } from '@kintone/kintone-ui-component';
import React from 'react';
import Reactdom from 'react-dom'

export default class Plugin extends React.Component {
  constructor(opts) {
    super(opts);
    this.state = {
      items: [
        {
          label: 'Orange',
          value: 'Orange',
          isDisabled: false
        },
        {
          label: 'Banana',
          value: 'Banana',
          isDisabled: true
        },
        {
          label: 'Lemon',
          value: 'Lemon',
          isDisabled: true
        }
      ],
      value: ['Orange', 'Banana']
    };
  }

  render() {
    return (
      <div>
        <CheckBox
          items={this.state.items}
          value={this.state.value}
          onChange={value => {
            this.setState({ value });
          }}
        />
        <button onClick={this.handleClick}>Set Items</button>
      </div>
    );
  }

  handleClick = () => {
    const newItems = [
      {
        label: 'Apple',
        value: 'Apple',
        isDisabled: true
      },
      {
        label: 'Apple',
        value: 'Apple',
        isDisabled: false
      }
    ];
    this.setState({ items: newItems, value: ['Apple'] });
  };
}

var kintoneSpaceElement = kintone.app.getHeaderSpaceElement();
    Reactdom.render(<Plugin />, kintoneSpaceElement);