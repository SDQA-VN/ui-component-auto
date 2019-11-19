import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, RadioButton, Dropdown, Button, IconButton, Text, CheckBox, MultipleChoice, Label, Alert, NotifyPopup, Spinner } from '@kintone/kintone-ui-component';

export default class Plugin extends React.Component {
    render() {
        return (
            <IconButton type='insert' size='small' color='blue' />
        );
    }
}

let layout = document.getElementsByClassName("app-index-contents-gaia")[0]
kintone.events.on("app.record.index.show", function (ev) {
    var kintoneSpaceElement = layout
    //initialize test grid
    var testgrid = new window.SDTestGrid({
        rowCount: 1,
        columnCount: 1,
        classNames: 'bordered_table',
    });
    //render and append to kintone space element
    kintoneSpaceElement.append(testgrid.render());

    // Column 0
    ReactDOM.render(<Plugin />, testgrid.getCell(0, 0));
});