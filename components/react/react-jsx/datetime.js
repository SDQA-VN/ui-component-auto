import React, { Component } from 'react';
import { DateTime } from '@kintone/kintone-ui-component';

let date = new Date("October 13, 2014 11:13:00");
let newDate = new Date("Jun 28, 2019 17:30")

//Datetime
class ConstructorDatetime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'datetime'
        }
    }
    render() {
        return (
            <div id="constructor-datetime" >
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dateFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale='en'
                    onChange={(value) => {this.setState({value: value})}}
                />
            </div>
        );
    }
}
class ConstructorDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: new Date("October 13, 2014 11:13:00"),
            type: 'date'
        }
    }
    render() {
        return (
            <div id='constructor-date'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dateFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale='en'
                    onChange={(value) => {this.setState({value: value})}}
                />
            </div>
        );
    }
}
class ConstructorTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'time'
        }
    }
    render() {
        return (
            <div id="constructor-time">
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dateFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale='en'
                    onChange={(value) => {this.setState({value: value})}}
                />
            </div>
        );
    }
}
class GetValueDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'date'
        }
    }
    render() {
        return (
            <div id='get-value-date'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dateFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale='en'
                    onChange={(value) => {this.setState({value: value})}}
                />
                <button id='get-value-date-button' onClick={this.handleButtonClick}>Get Date component value</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert(this.state.value)
    }
}
class GetValueTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'time'
        }
    }
    render() {
        return (
            <div id='get-value-time'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dateFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale='en'
                    onChange={(value) => {this.setState({value: value})}}
                />
                <button id='get-value-time-button' onClick={this.handleButtonClick}>Get Time component value</button>
            </div>);
    }
    handleButtonClick = (event) => {
        alert(this.state.value)
    }
}
class GetValueDatetime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'datetime'
        }
    }
    render() {
        return (
            <div id='get-value-datetime'>
                <DateTime
                    value={this.state.value}
                    type={this.state.type}
                    dateFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale='en'
                    onChange={(value) => {this.setState({value: value})}}
                />
                <button id='get-value-datetime-button' onClick={this.handleButtonClick}>Get Datetime component value</button>
            </div>
        );
    }
    handleButtonClick = (event) => {
        alert(this.state.value)
    }
}
class SetValueDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'date'
        }
    }
    render() {
        return (
            <div id='set-value-date'>
                <DateTime
                    value={this.state.value}
                    type={this.state.type}
                    dateFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisibled={false}
                    locale='en'
                    onChange={(value) => {this.setState({value: value})}}
                />
                <button id="set-value-date-button" onClick={this.handleSetValueButtonClick}>Set date component value button</button>
                <button id="get-value-after-set-date-button" onClick={this.handleGetValueButtonClick}>Get value after set date button</button>
            </div>
        );
    }
    handleSetValueButtonClick = (event) => {
        this.setState(prevState => ({
            value: newDate
        }))
    }
    handleGetValueButtonClick = (event) => {
        alert(this.state.value)
    }
}
class SetValueTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'time'
        }
    }
    render() {
        return (
            <div id='set-value-time'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dateFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisibled={false}
                    locale='en'
                />
                <button id="set-value-time-button" onClick={this.handleSetValueButtonClick}>Set time component value button</button>
                <button id="get-value-after-set-time-button" onClick={this.handleGetValueButtonClick}>Get value after set time button</button>
            </div>
        );
    }
    handleSetValueButtonClick = (event) => {
        this.setState(prevState => ({
            value: newDate
        }))
    }
    handleGetValueButtonClick = (event) => {
        alert(this.state.value)
    }
}
class SetValueDatetime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'datetime'
        }
    }
    render() {
        return (
            <div id='set-value-datetime'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dateFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisibled={false}
                    locale='en'
                />
                <button id='set-value-datetime-button' onClick={this.handleSetValueButtonClick}>Set datetime component value button</button>
                <button id="get-value-after-set-datetime-button" onClick={this.handleGetValueButtonClick}>Get value after set datetime button</button>
            </div>
        );
    }
    handleSetValueButtonClick = (event) => {
        this.setState(prevState => ({
            value: newDate
        }))
    }
    handleGetValueButtonClick = (event) => {
        alert(this.state.value)
    }
}
class GetLocaleDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'date',
            locale: 'ja'
        }
    }
    render() {
        return (
            <div id='get-locale-date'>
                <DateTime
                    value={this.state.value}
                    type={this.state.type}
                    dataFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale={this.state.locale}
                />
                <button id='get-locale-date-button' onClick={this.handleButtonClick}>Get locale of date component</button>
            </div>
        )
    }
    handleButtonClick = (event) => {
        alert(this.state.locale)
    }
}
class GetLocaleTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'time',
            locale: 'en'
        }
    }
    render() {
        return (
            <div id='get-locale-time'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dataFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale={this.state.locale}
                />
                <button id='get-locale-time-button' onClick={this.handleButtonClick}>Get locale of time component</button>
            </div>
        )
    }
    handleButtonClick = (event) => {
        alert(this.state.locale)
    }
}
class GetLocaleDatetime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'datetime',
            locale: 'zh'
        }
    }
    render() {
        return (
            <div id='get-locale-datetime'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dataFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale={this.state.locale}
                />
                <button id='get-locale-datetime-button' onClick={this.handleButtonClick}>Get locale of datetime component</button>
            </div>
        )
    }
    handleButtonClick = (event) => {
        alert(this.state.locale)
    }
}
class SetLocaleDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'Date',
            locale: 'en'
        }
    }
    render() {
        return (
            <div id='set-locale-date'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dataFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale={this.state.locale}
                />
                <button id='set-locale-date-button' onClick={this.handleSetLocaleButtonClick}>Set local of date component which existing locale</button>
                <button id="get-locale-date-after-set-locale-button" onClick={this.handleGetLocaleButtonClick}>Get local of date component after set locale</button>
            </div>
        )
    }
    handleSetLocaleButtonClick = (event) => {
        this.setState(prevState => ({
            locale: 'ja'
        }))
    }
    handleGetLocaleButtonClick = (event) => {
        alert(this.state.locale)
    }
}
class SetLocaleTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'time',
            locale: 'ja'
        }
    }
    render() {
        return (
            <div id='set-localte-time'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dataFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale={this.state.locale}
                />
                <button id='set-locale-time-button' onClick={this.handleSetLocaleButtonClick}>Set local of time component which existing locale</button>
                <button id="get-locale-time-after-set-locale-button" onClick={this.handleGetLocaleButtonClick}>Get local of time component after set locale</button>
            </div>
        )
    }
    handleSetLocaleButtonClick = (event) => {
        this.setState(prevState => ({
            locale: 'en'
        }))
    }
    handleGetLocaleButtonClick = (event) => {
        alert(this.state.locale)
    }
}
class SetLocaleDatetime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'datetime',
            locale: 'en'
        }
    }
    render() {
        return (
            <div id='set-locale-datetime'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dataFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={false}
                    locale={this.state.locale}
                />
                <button id="set-locale-datetime-button" onClick={this.handleSetLocaleButtonClick}>Set local of datetime component which existing locale</button>
                <button id="get-locale-datetime-after-set-locale-button" onClick={this.handleGetLocaleButtonClick}>Get local of datetime component after set locale</button>
            </div>
        )
    }
    handleSetLocaleButtonClick = (event) => {
        this.setState(prevState => ({
            locale: 'zh'
        }))
    }
    handleGetLocaleButtonClick = (event) => {
        alert(this.state.locale)
    }
}
class ShowInvisibleDatetime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'datetime',
            visible: false
        }
    }
    render() {
        return (
            <div id='show-invisible-datetime'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dataFormat='MM/dd/YYYY'
                    isVisible={this.state.visible}
                    isDisabled={false}
                />
                <button id="show-invisible-datetime-button" onClick={this.handleButtonClick}>Show invisible datetime</button>
            </div>
        )
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            visible: true
        }))
    }
}
class HideVisibleDatetime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'datetime',
            visible: true
        }
    }
    render() {
        return (
            <div id='hide-visible-datetime'>
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dataFormat='MM/dd/YYYY'
                    isVisible={this.state.visible}
                    isDisabled={false}
                />
                <button id="hide-visible-datetime-button" onClick={this.handleButtonClick}>Hide visible datetime</button>
            </div>
        )
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            visible: false
        }))
    }
}
class DisableEnabledDatetime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'datetime',
            disable: false
        }
    }
    render() {
        return (
            <div id="disable-enabled-datetime">
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dataFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={this.state.disable}
                    onChange={(value) => {this.setState({value: value})}}
                />
                <button id="disable-enabled-datetime-button" onClick={this.handleButtonClick}>Disable enabled datetime</button>
            </div>
        )
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            disable: true
        }))
    }
}
class EnableDisabledDatetime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: date,
            type: 'datetime',
            disable: true
        }
    }
    render() {
        return (
            <div id="enable-disabled-datetime">
                <DateTime 
                    value={this.state.value}
                    type={this.state.type}
                    dataFormat='MM/dd/YYYY'
                    isVisible={true}
                    isDisabled={this.state.disable}
                    onChange={(value) => {this.setState({value: value})}}
                />
                <button id="enable-disabled-datetime-button" onClick={this.handleButtonClick}>Enable disabled datetime</button>
            </div>
        )
    }
    handleButtonClick = (event) => {
        this.setState(prevState => ({
            disable: false
        }))
    }
}

export default {
    ConstructorDate,
    ConstructorTime,
    ConstructorDatetime,
    GetValueDate,
    GetValueTime,
    GetValueDatetime,
    SetValueDate,
    SetValueTime,
    SetValueDatetime,
    GetLocaleDate,
    GetLocaleTime,
    GetLocaleDatetime,
    SetLocaleDate,
    SetLocaleTime,
    SetLocaleDatetime,
    ShowInvisibleDatetime,
    HideVisibleDatetime,
    DisableEnabledDatetime,
    EnableDisabledDatetime
}