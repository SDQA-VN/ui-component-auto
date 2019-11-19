import { DateTime } from '@kintone/kintone-ui-component';
import React from 'react';
import ReactDOM from 'react-dom';
class DateTimeComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <DateTime
                value={this.state.date}
                type='datetime'
                locale='en'
            />
        );
    }
}
kintone.events.on('app.record.index.show', function(event) {
    ReactDOM.render(
        <DateTimeComponent />,
        kintone.app.getHeaderSpaceElement()
    );
});