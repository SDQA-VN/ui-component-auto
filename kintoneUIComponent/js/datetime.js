// //kintone-ui-component Datetime
// //https://sharedoc.atlassian.net/wiki/spaces/SC/pages/380142583/kintone-ui-component+DateTime

// // //constructor - datetime full option
let date = new Date("October 13, 2014 11:13:00");
let constructorDatetime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'datetime',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
    locale: 'en'
});
let constructorDatetimeEl = document.createElement('div');
constructorDatetimeEl.id = "constructor-datetime";
constructorDatetimeEl.appendChild(constructorDatetime.render());
let constructorDatetimeCell = testgrid.getCell(posConfig.Datetime.x, 1);
constructorDatetimeCell.appendChild(constructorDatetimeEl);

//constructor - date full option
let constructorDate = new kintoneUIComponent.DateTime({
    value: date,
    type: 'date',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
    locale: 'en'
});
let constructorDateEl = document.createElement('div');
constructorDateEl.id = "constructor-date";
constructorDateEl.appendChild(constructorDate.render());
let constructorDateCell = testgrid.getCell(posConfig.Datetime.x, 2);
constructorDateCell.appendChild(constructorDateEl);


//constructor-time full option
let constructorTime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'time',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
    locale: 'en'
});
let constructorTimeEl = document.createElement('div');
constructorTimeEl.id = "constructor-time";
constructorTimeEl.appendChild(constructorTime.render());
let constructorTimeCell = testgrid.getCell(posConfig.Datetime.x, 3);
constructorTimeCell.appendChild(constructorTimeEl);

//getValue() - Date component
let getValueDate =  new kintoneUIComponent.DateTime({
    value: date,
    type: 'date',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
});
let getValueDateEl = document.createElement('div');
getValueDateEl.id = "get-value-date";
getValueDateEl.appendChild(getValueDate.render());

let getValueDateButton = document.createElement('button');
getValueDateButton.id = "get-value-date-button";
getValueDateButton.innerHTML = "Get Date component value";
getValueDateButton.addEventListener('click', function() {
    alert(getValueDate.getValue());
});

let getValueDateCell = testgrid.getCell(posConfig.Datetime.x, 4);
getValueDateCell.appendChild(getValueDateEl);
getValueDateCell.appendChild(getValueDateButton);

//getValue() - Time component
let getValueTime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'time',
    locale: 'en',
});
let getValueTimeEl = document.createElement('div');
getValueTimeEl.id = "get-value-time";
getValueTimeEl.appendChild(getValueTime.render());

let getValueTimeButton = document.createElement('button');
getValueTimeButton.id = "get-value-time-button";
getValueTimeButton.innerHTML = "Get Time component value";
getValueTimeButton.addEventListener('click', function() {
    alert(getValueTime.getValue());
});

let getValueTimeCell = testgrid.getCell(posConfig.Datetime.x, 5);
getValueTimeCell.appendChild(getValueTimeEl);
getValueTimeCell.appendChild(getValueTimeButton);

//getValue() - Datetime component
let getValueDatetime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'datetime',
    locale: 'en',
});

let getValueDatetimeEl = document.createElement('div');
getValueDatetimeEl.id = "get-value-datetime";
getValueDatetimeEl.appendChild(getValueDatetime.render());

let getValueDatetimeButton = document.createElement('button');
getValueDatetimeButton.id = "get-value-datetime-button";
getValueDatetimeButton.innerHTML = "Get Datetime component value";
getValueDatetimeButton.addEventListener('click', function() {
    alert(getValueDatetime.getValue());
});

let getValueDatetimeCell = testgrid.getCell(posConfig.Datetime.x, 6);
getValueDatetimeCell.appendChild(getValueDatetimeEl);
getValueDatetimeCell.appendChild(getValueDatetimeButton);

//setValue() - contain existing Date value
let setValueDate = new kintoneUIComponent.DateTime({
    value: date,
    type: 'date',
    locale: 'en',
});
let setValueDateEl = document.createElement('div');
setValueDateEl.id = "set-value-date";
setValueDateEl.appendChild(setValueDate.render());

let setValueDateButton = document.createElement('button');
setValueDateButton.id = "set-value-date-button";
setValueDateButton.innerHTML = "Set date component value button";
let newDate = new Date("Jun 28, 2019 17:30")
setValueDateButton.addEventListener('click', function() {
    setValueDate.setValue(newDate);
});

let getValueAfterSetDateButton = document.createElement('button');
getValueAfterSetDateButton.id = "get-value-after-set-date-button";
getValueAfterSetDateButton.innerHTML = "Get value after set date button"
getValueAfterSetDateButton.addEventListener('click', function() {
    alert(setValueDate.getValue());
})

let setValueDateCell = testgrid.getCell(posConfig.Datetime.x, 7);
setValueDateCell.appendChild(setValueDateEl);
setValueDateCell.appendChild(setValueDateButton);
setValueDateCell.appendChild(getValueAfterSetDateButton);

//setValue() - contain existing Time value
let setValueTime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'time',
    locale: 'en',
});
let setValueTimeEl = document.createElement('div');
setValueTimeEl.id = "set-value-time";
setValueTimeEl.appendChild(setValueTime.render());

let setValueTimeButton = document.createElement('button');
setValueTimeButton.id = "set-value-time-button";
setValueTimeButton.innerHTML = "Set time component value button";
setValueTimeButton.addEventListener('click', function() {
    setValueTime.setValue(newDate);
});

let getValueAfterSetTimeButton = document.createElement('button');
getValueAfterSetTimeButton.id = "get-value-after-set-time-button";
getValueAfterSetTimeButton.innerHTML = "Get value after set time button";
getValueAfterSetTimeButton.addEventListener('click', function() {
    alert(setValueTime.getValue());
})

let setValueTimeCell = testgrid.getCell(posConfig.Datetime.x, 8);
setValueTimeCell.appendChild(setValueTimeEl);
setValueTimeCell.appendChild(setValueTimeButton);
setValueTimeCell.appendChild(getValueAfterSetTimeButton);

//setValue() - contain existing Datetime value
let setValueDatetime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'datetime',
    locale: 'en',
});
let setValueDatetimeEl = document.createElement('div');
setValueDatetimeEl.id = "set-value-datetime";
setValueDatetimeEl.appendChild(setValueDatetime.render());
let setValueDatetimeButton = document.createElement('button');
setValueDatetimeButton.id = "set-value-datetime-button";
setValueDatetimeButton.innerHTML = "Set datetime component value button";
setValueDatetimeButton.addEventListener('click', function() {
    setValueDatetime.setValue(newDate);
});

let getValueAfterSetDatetimeButton = document.createElement('button');
getValueAfterSetDatetimeButton.id = "get_value_after_set_datetime_button";
getValueAfterSetDatetimeButton.innerHTML = "Get value after set datetime button";
getValueAfterSetDatetimeButton.addEventListener('click', function() {
    alert(setValueDatetime.getValue());
});

let setValueDatetimeCell = testgrid.getCell(posConfig.Datetime.x, 9);
setValueDatetimeCell.appendChild(setValueDatetimeEl);
setValueDatetimeCell.appendChild(setValueDatetimeButton);
setValueDatetimeCell.appendChild(getValueAfterSetDatetimeButton);

//getLocale() - date component
let getLocaleDate = new kintoneUIComponent.DateTime({
    value: date,
    type: 'date',
    locale: 'ja'
});
let getLocaleDateEl = document.createElement('div');
getLocaleDateEl.id = "get-locale-date";
getLocaleDateEl.appendChild(getLocaleDate.render());
let getLocaleDateButton = document.createElement('button');
getLocaleDateButton.id = "get-locale-date-button";
getLocaleDateButton.innerHTML = "Get locale of date component";
getLocaleDateButton.addEventListener('click', function() {
    alert(getLocaleDate.getLocale());
});

let getLocaleDateCell = testgrid.getCell(posConfig.Datetime.x, 10);
getLocaleDateCell.appendChild(getLocaleDateEl);
getLocaleDateCell.appendChild(getLocaleDateButton);

//getLocale() - time component
let getLocaleTime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'time',
    locale: 'en'
});
let getLocaleTimeEl = document.createElement('div');
getLocaleTimeEl.id = "get-locale-time";
getLocaleTimeEl.appendChild(getLocaleTime.render());
let getLocaleTimeButton = document.createElement('button');
getLocaleTimeButton.id = "get-locale-time-button";
getLocaleTimeButton.innerHTML = "Get locale of time component";
getLocaleTimeButton.addEventListener('click', function() {
    alert(getLocaleTime.getLocale());
});

let getLocaleTimeCell = testgrid.getCell(posConfig.Datetime.x, 11);
getLocaleTimeCell.appendChild(getLocaleTimeEl);
getLocaleTimeCell.appendChild(getLocaleTimeButton);

//getLocale() - datetime component
let getLocaleDatetime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'datetime',
    locale: 'zh'
});
let getLocaleDatetimeEl = document.createElement('div');
getLocaleDatetimeEl.id = "get-locale-datetime";
getLocaleDatetimeEl.appendChild(getLocaleDatetime.render());
let getLocaleDatetimeButton = document.createElement('button');
getLocaleDatetimeButton.id = "get-locale-datetime-button";
getLocaleDatetimeButton.innerHTML = "Get locale of datetime component";
getLocaleDatetimeButton.addEventListener('click', function() {
    alert(getLocaleDatetime.getLocale());
});

let getLocaleDatetimeCell = testgrid.getCell(posConfig.Datetime.x, 12);
getLocaleDatetimeCell.appendChild(getLocaleDatetimeEl);
getLocaleDatetimeCell.appendChild(getLocaleDatetimeButton);

//setLocale() - date component contains exsting locale
let setLocaleDate = new kintoneUIComponent.DateTime({
    value: date,
    type: 'date',
    locale: 'en'
});
let setLocaleDateEl = document.createElement('div');
setLocaleDateEl.id = "set-locale-date";
setLocaleDateEl.appendChild(setLocaleDate.render());
let setLocaleDateButton = document.createElement('button');
setLocaleDateButton.id = "set-locale-date-button";
setLocaleDateButton.innerHTML = "Set local of date component which existing locale";
setLocaleDateButton.addEventListener('click', function() {
    setLocaleDate.setLocale('ja');
});

let getLocaleAfterSetDateButton = document.createElement('button');
getLocaleAfterSetDateButton.id = "get-locale-date-after-set-locale-button";
getLocaleAfterSetDateButton.innerHTML = "Get local of date component after set locale";
getLocaleAfterSetDateButton.addEventListener('click', function() {
    alert(setLocaleDate.getLocale());
});

let setLocaleDateCell = testgrid.getCell(posConfig.Datetime.x, 13);
setLocaleDateCell.appendChild(setLocaleDateEl);
setLocaleDateCell.appendChild(setLocaleDateButton);
setLocaleDateCell.appendChild(getLocaleAfterSetDateButton);

//setLocale() - time component contains exsting locale
let setLocaleTime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'time',
    locale: 'ja'
});
let setLocaleTimeEl = document.createElement('div');
setLocaleTimeEl.id = "set-locale-time";
setLocaleTimeEl.appendChild(setLocaleTime.render());
let setLocaleTimeButton = document.createElement('button');
setLocaleTimeButton.id = "set-locale-time-button";
setLocaleTimeButton.innerHTML = "Set local of time component which existing locale";
setLocaleTimeButton.addEventListener('click', function() {
    setLocaleTime.setLocale('en');
});

let getLocaleAfterSetTimeButton = document.createElement('button');
getLocaleAfterSetTimeButton.id = "get-locale-time-after-set-locale-button";
getLocaleAfterSetTimeButton.innerHTML = "Get local of time component after set locale";
getLocaleAfterSetTimeButton.addEventListener('click', function() {
    alert(setLocaleTime.getLocale());
});

let setLocaleTimeCell = testgrid.getCell(posConfig.Datetime.x, 14);
setLocaleTimeCell.appendChild(setLocaleTimeEl);
setLocaleTimeCell.appendChild(setLocaleTimeButton);
setLocaleTimeCell.appendChild(getLocaleAfterSetTimeButton);

//setLocale() - datetime component contains exsting locale
let setLocaleDatetime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'datetime',
    locale: 'en'
});
let setLocaleDatetimeEl = document.createElement('div');
setLocaleDatetimeEl.id = "set-locale-datetime";
setLocaleDatetimeEl.appendChild(setLocaleDatetime.render());
let setLocaleDatetimeButton = document.createElement('button');
setLocaleDatetimeButton.id = "set-locale-datetime-button";
setLocaleDatetimeButton.innerHTML = "Set local of datetime component which existing locale";
setLocaleDatetimeButton.addEventListener('click', function() {
    setLocaleDatetime.setLocale('zh');
});

let getLocaleAfterSetDatetimeButton = document.createElement('button');
getLocaleAfterSetDatetimeButton.id = "get-locale-datetime-after-set-locale-button";
getLocaleAfterSetDatetimeButton.innerHTML = "Get local of datetime component after set locale";
getLocaleAfterSetDatetimeButton.addEventListener('click', function() {
    alert(setLocaleDatetime.getLocale());
});

let setLocaleDatetimeCell = testgrid.getCell(posConfig.Datetime.x, 15);
setLocaleDatetimeCell.appendChild(setLocaleDatetimeEl);
setLocaleDatetimeCell.appendChild(setLocaleDatetimeButton);
setLocaleDatetimeCell.appendChild(getLocaleAfterSetDatetimeButton);

//show() - invisible datetime
let showInvisibleDatetime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'datetime',
    dateFormat: 'MM/dd/YYYY',
    isVisible: false,
    isDisabled: false,
    locale: 'en'
});
let showInvisibleDatetimeEl = document.createElement('div');
showInvisibleDatetimeEl.id = "show-invisible-datetime";
showInvisibleDatetimeEl.appendChild(showInvisibleDatetime.render());
let showInvisibleDatetimeButton = document.createElement('button');
showInvisibleDatetimeButton.id = "show-invisible-datetime-button";
showInvisibleDatetimeButton.innerHTML = "Show invisible datetime";
showInvisibleDatetimeButton.addEventListener('click', function() {
    showInvisibleDatetime.show();
});

let showInvisibleDatetimeCell = testgrid.getCell(posConfig.Datetime.x, 16);
showInvisibleDatetimeCell.appendChild(showInvisibleDatetimeEl);
showInvisibleDatetimeCell.appendChild(showInvisibleDatetimeButton);

//hide() - visible datetime
let hideVisibleDatetime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'datetime',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
    locale: 'en'
});
let hideVisibleDatetimeEl = document.createElement('div');
hideVisibleDatetimeEl.id = "hide-visible-datetime";
hideVisibleDatetimeEl.appendChild(hideVisibleDatetime.render());
let hideVisibleDatetimeButton = document.createElement('button');
hideVisibleDatetimeButton.id = "hide-visible-datetime-button";
hideVisibleDatetimeButton.innerHTML = "Hide visible datetime";
hideVisibleDatetimeButton.addEventListener('click', function() {
    hideVisibleDatetime.hide();
});

let hideVisibleDatetimeCell = testgrid.getCell(posConfig.Datetime.x, 17);
hideVisibleDatetimeCell.appendChild(hideVisibleDatetimeEl);
hideVisibleDatetimeCell.appendChild(hideVisibleDatetimeButton);

//disable() - enabled datetime
let disableEnabledDatetime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'datetime',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
    locale: 'en'
});
let disableEnabledDatetimeEl = document.createElement('div');
disableEnabledDatetimeEl.id = "disable-enabled-datetime";
disableEnabledDatetimeEl.appendChild(disableEnabledDatetime.render());
let disableEnabledDatetimeButton = document.createElement('button');
disableEnabledDatetimeButton.id = "disable-enabled-datetime-button";
disableEnabledDatetimeButton.innerHTML = "Disable enabled datetime";
disableEnabledDatetimeButton.addEventListener('click', function() {
    disableEnabledDatetime.disable();
});

let disableEnabledDatetimeCell = testgrid.getCell(posConfig.Datetime.x, 18);
disableEnabledDatetimeCell.appendChild(disableEnabledDatetimeEl);
disableEnabledDatetimeCell.appendChild(disableEnabledDatetimeButton);

//enable() - disabled datetime
let enableDisabledDatetime = new kintoneUIComponent.DateTime({
    value: date,
    type: 'datetime',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: true,
    locale: 'en'
});
let enableDisabledDatetimeEl = document.createElement('div');
enableDisabledDatetimeEl.id = "enable-disabled-datetime";
enableDisabledDatetimeEl.appendChild(enableDisabledDatetime.render());
let enableDisabledDatetimeButton = document.createElement('button');
enableDisabledDatetimeButton.id = "enable-disabled-datetime-button";
enableDisabledDatetimeButton.innerHTML = "Enable disabled datetime";
enableDisabledDatetimeButton.addEventListener('click', function() {
    enableDisabledDatetime.enable();
});

let enableDisabledCell = testgrid.getCell(posConfig.Datetime.x, 19);
enableDisabledCell.appendChild(enableDisabledDatetimeEl);
enableDisabledCell.appendChild(enableDisabledDatetimeButton);