import {DateTime} from '@kintone/kintone-ui-component/esm/js';


//constructor - datetime full option
let date = new Date("October 13, 2014 11:13:00");
let dateTime_full_option = new DateTime({
    value: date,
    type: 'datetime',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
    locale: 'en'
});
let dateTime_full_optionEl = dateTime_full_option.render();
dateTime_full_optionEl.id = "dateTime_full_optionEl";

//constructor - date full option
let date_full_option = new DateTime({
    value: date,
    type: 'date',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
    locale: 'en'
});
let date_full_optionEl = date_full_option.render();
date_full_optionEl.id = "date_full_optionEl";

//constructor-time full option
let time_full_option = new DateTime({
    value: date,
    type: 'time',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
    locale: 'en'
});
let time_full_optionEl = time_full_option.render();
time_full_optionEl.id = "time_full_optionEl";

//getValue() - Date component
let datetime_get_value_date_component =  new DateTime({
    value: date,
    type: 'date',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
});
let datetime_get_value_date_componentEl = datetime_get_value_date_component.render();
datetime_get_value_date_componentEl.id = "datetime_get_value_date_componentEl";

let datetime_get_value_date_component_button = document.createElement('button');
datetime_get_value_date_component_button.id = "datetime_get_value_date_component_button";
datetime_get_value_date_component_button.innerHTML = "Get Date component value";
datetime_get_value_date_component_button.addEventListener('click', function() {
    alert(datetime_get_value_date_component.getValue());
});

let datetime_get_value_date_component_div = document.createElement('div');
datetime_get_value_date_component_div.appendChild(datetime_get_value_date_componentEl);
datetime_get_value_date_component_div.appendChild(datetime_get_value_date_component_button);

//getValue() - Time component
let datetime_get_value_time_component = new DateTime({
    value: date,
    type: 'time',
    locale: 'en',
});
let datetime_get_value_time_componentEl = datetime_get_value_time_component.render();
datetime_get_value_time_componentEl.id = "datetime_get_value_time_componentEl";

let datetime_get_value_time_component_button = document.createElement('button');
datetime_get_value_time_component_button.id = "datetime_get_value_time_component_button";
datetime_get_value_time_component_button.innerHTML = "Get Time component value";
datetime_get_value_time_component_button.addEventListener('click', function() {
    alert(datetime_get_value_time_component.getValue());
});

let datetime_get_value_time_component_div = document.createElement('div');
datetime_get_value_time_component_div.appendChild(datetime_get_value_time_componentEl);
datetime_get_value_time_component_div.appendChild(datetime_get_value_time_component_button);

//getValue() - Datetime component
let datetime_get_value_datetime_component = new DateTime({
    value: date,
    type: 'datetime',
    locale: 'en',
});
let datetime_get_value_datetime_componentEl = datetime_get_value_datetime_component.render();
datetime_get_value_datetime_componentEl.id = "datetime_get_value_datetime_componentEl";

let datetime_get_value_datetime_component_button = document.createElement('button');
datetime_get_value_datetime_component_button.id = "datetime_get_value_datetime_component_button";
datetime_get_value_datetime_component_button.innerHTML = "Get Datetime component value";
datetime_get_value_datetime_component_button.addEventListener('click', function() {
    alert(datetime_get_value_datetime_component.getValue());
});

let datetime_get_value_datetime_component_div = document.createElement('div');
datetime_get_value_datetime_component_div.appendChild(datetime_get_value_datetime_componentEl);
datetime_get_value_datetime_component_div.appendChild(datetime_get_value_datetime_component_button);

//setValue() - contain existing Date value
let datetime_set_value_date_component = new DateTime({
    value: date,
    type: 'date',
    locale: 'en',
});
let datetime_set_value_date_componentEl = datetime_set_value_date_component.render();
datetime_set_value_date_componentEl.id = "datetime_set_value_date_componentEl";

let datetime_set_value_date_component_button = document.createElement('button');
datetime_set_value_date_component_button.id = "datetime_set_value_date_component_button";
datetime_set_value_date_component_button.innerHTML = "Set date component value button";
let newDate = new Date("Jun 28, 2019 17:30")
datetime_set_value_date_component_button.addEventListener('click', function() {
    datetime_set_value_date_component.setValue(newDate);
});

let get_value_after_set_date_button = document.createElement('button');
get_value_after_set_date_button.id = "get_value_after_set_date_button";
get_value_after_set_date_button.innerHTML = "Get value after set date button"
get_value_after_set_date_button.addEventListener('click', function() {
    alert(datetime_set_value_date_component.getValue());
})

let datetime_set_value_date_component_div = document.createElement('div');
datetime_set_value_date_component_div.appendChild(datetime_set_value_date_componentEl);
datetime_set_value_date_component_div.appendChild(datetime_set_value_date_component_button);
datetime_set_value_date_component_div.appendChild(get_value_after_set_date_button);

//setValue() - contain existing Time value
let datetime_set_value_time_component = new DateTime({
    value: date,
    type: 'time',
    locale: 'en',
});
let datetime_set_value_time_componentEl = datetime_set_value_time_component.render();
datetime_set_value_time_componentEl.id = "datetime_set_value_time_componentEl";

let datetime_set_value_time_component_button = document.createElement('button');
datetime_set_value_time_component_button.id = "datetime_set_value_time_component_button";
datetime_set_value_time_component_button.innerHTML = "Set time component value button";
datetime_set_value_time_component_button.addEventListener('click', function() {
    datetime_set_value_time_component.setValue(newDate);
});

let get_value_after_set_time_button = document.createElement('button');
get_value_after_set_time_button.id = "get_value_after_set_time_button";
get_value_after_set_time_button.innerHTML = "Get value after set time button";
get_value_after_set_time_button.addEventListener('click', function() {
    alert(datetime_set_value_time_component.getValue());
})

let datetime_set_value_time_component_div = document.createElement('div');
datetime_set_value_time_component_div.appendChild(datetime_set_value_time_componentEl);
datetime_set_value_time_component_div.appendChild(datetime_set_value_time_component_button);
datetime_set_value_time_component_div.appendChild(get_value_after_set_time_button);

//setValue() - contain existing Datetime value
let datetime_set_value_datetime_component = new DateTime({
    value: date,
    type: 'datetime',
    locale: 'en',
});
let datetime_set_value_datetime_componentEl = datetime_set_value_datetime_component.render();
datetime_set_value_datetime_componentEl.id = "datetime_set_value_datetime_componentEl";

let datetime_set_value_datetime_component_button = document.createElement('button');
datetime_set_value_datetime_component_button.id = "datetime_set_value_datetime_component_button";
datetime_set_value_datetime_component_button.innerHTML = "Set datetime component value button";
datetime_set_value_datetime_component_button.addEventListener('click', function() {
    datetime_set_value_datetime_component.setValue(newDate);
});

let get_value_after_set_datetime_button = document.createElement('button');
get_value_after_set_datetime_button.id = "get_value_after_set_datetime_button";
get_value_after_set_datetime_button.innerHTML = "Get value after set datetime button";
get_value_after_set_datetime_button.addEventListener('click', function() {
    alert(datetime_set_value_datetime_component.getValue());
});

let datetime_set_value_datetime_component_div = document.createElement('div');
datetime_set_value_datetime_component_div.appendChild(datetime_set_value_datetime_componentEl);
datetime_set_value_datetime_component_div.appendChild(datetime_set_value_datetime_component_button);
datetime_set_value_datetime_component_div.appendChild(get_value_after_set_datetime_button);

//getLocale() - date component
let datetime_get_locale_date_component = new DateTime({
    value: date,
    type: 'date',
    locale: 'ja'
});
let datetime_get_locale_date_componentEl = datetime_get_locale_date_component.render();
datetime_get_locale_date_componentEl.id = "datetime_get_locale_date_componentEl";

let datetime_get_locale_date_component_button = document.createElement('button');
datetime_get_locale_date_component_button.id = "datetime_get_locale_date_component_button";
datetime_get_locale_date_component_button.innerHTML = "Get locale of date component";
datetime_get_locale_date_component_button.addEventListener('click', function() {
    alert(datetime_get_locale_date_component.getLocale());
});

let datetime_get_locale_date_component_div = document.createElement('div');
datetime_get_locale_date_component_div.appendChild(datetime_get_locale_date_componentEl);
datetime_get_locale_date_component_div.appendChild(datetime_get_locale_date_component_button);

//getLocale() - time component
let datetime_get_locale_time_component = new DateTime({
    value: date,
    type: 'time',
    locale: 'en'
});
let datetime_get_locale_time_componentEl = datetime_get_locale_time_component.render();
datetime_get_locale_time_componentEl.id = "datetime_get_locale_time_componentEl";

let datetime_get_locale_time_component_button = document.createElement('button');
datetime_get_locale_time_component_button.id = "datetime_get_locale_time_component_button";
datetime_get_locale_time_component_button.innerHTML = "Get locale of time component";
datetime_get_locale_time_component_button.addEventListener('click', function() {
    alert(datetime_get_locale_time_component.getLocale());
});

let datetime_get_locale_time_component_div = document.createElement('div');
datetime_get_locale_time_component_div.appendChild(datetime_get_locale_time_componentEl);
datetime_get_locale_time_component_div.appendChild(datetime_get_locale_time_component_button);

//getLocale() - datetime component
let datetime_get_locale_datetime_component = new DateTime({
    value: date,
    type: 'datetime',
    locale: 'zh'
});
let datetime_get_locale_datetime_componentEl = datetime_get_locale_datetime_component.render();
datetime_get_locale_datetime_componentEl.id = "datetime_get_locale_datetime_componentEl";

let datetime_get_locale_datetime_component_button = document.createElement('button');
datetime_get_locale_datetime_component_button.id = "datetime_get_locale_datetime_component_button";
datetime_get_locale_datetime_component_button.innerHTML = "Get locale of datetime component";
datetime_get_locale_datetime_component_button.addEventListener('click', function() {
    alert(datetime_get_locale_datetime_component.getLocale());
});

let datetime_get_locale_datetime_component_div = document.createElement('div');
datetime_get_locale_datetime_component_div.appendChild(datetime_get_locale_datetime_componentEl);
datetime_get_locale_datetime_component_div.appendChild(datetime_get_locale_datetime_component_button);

//setLocale() - date component contains exsting locale
let datetime_set_locale_date_component_existing_locale = new DateTime({
    value: date,
    type: 'date',
    locale: 'en'
});
let datetime_set_locale_date_component_existing_localeEl = datetime_set_locale_date_component_existing_locale.render();
datetime_set_locale_date_component_existing_localeEl.id = "datetime_set_locale_date_component_existing_localeEl";

let datetime_set_locale_date_component_existing_locale_button = document.createElement('button');
datetime_set_locale_date_component_existing_locale_button.id = "datetime_set_locale_date_component_existing_locale_button";
datetime_set_locale_date_component_existing_locale_button.innerHTML = "Set local of date component which existing locale";
datetime_set_locale_date_component_existing_locale_button.addEventListener('click', function() {
    datetime_set_locale_date_component_existing_locale.setLocale('ja');
});

let datetime_get_locale_date_component_after_set_locale_button = document.createElement('button');
datetime_get_locale_date_component_after_set_locale_button.id = "datetime_get_locale_date_component_after_set_locale_button";
datetime_get_locale_date_component_after_set_locale_button.innerHTML = "Get local of date component after set locale";
datetime_get_locale_date_component_after_set_locale_button.addEventListener('click', function() {
    alert(datetime_set_locale_date_component_existing_locale.getLocale());
});

let datetime_set_locale_date_component_existing_locale_div = document.createElement('div');
datetime_set_locale_date_component_existing_locale_div.appendChild(datetime_set_locale_date_component_existing_localeEl);
datetime_set_locale_date_component_existing_locale_div.appendChild(datetime_set_locale_date_component_existing_locale_button);
datetime_set_locale_date_component_existing_locale_div.appendChild(datetime_get_locale_date_component_after_set_locale_button);

//setLocale() - time component contains exsting locale
let datetime_set_locale_time_component_existing_locale = new DateTime({
    value: date,
    type: 'time',
    locale: 'ja'
});
let datetime_set_locale_time_component_existing_localeEl = datetime_set_locale_time_component_existing_locale.render();
datetime_set_locale_time_component_existing_localeEl.id = "datetime_set_locale_time_component_existing_localeEl";

let datetime_set_locale_time_component_existing_locale_button = document.createElement('button');
datetime_set_locale_time_component_existing_locale_button.id = "datetime_set_locale_time_component_existing_locale_button";
datetime_set_locale_time_component_existing_locale_button.innerHTML = "Set local of time component which existing locale";
datetime_set_locale_time_component_existing_locale_button.addEventListener('click', function() {
    datetime_set_locale_time_component_existing_locale.setLocale('en');
});

let datetime_get_locale_time_component_after_set_locale_button = document.createElement('button');
datetime_get_locale_time_component_after_set_locale_button.id = "datetime_get_locale_time_component_after_set_locale_button";
datetime_get_locale_time_component_after_set_locale_button.innerHTML = "Get local of time component after set locale";
datetime_get_locale_time_component_after_set_locale_button.addEventListener('click', function() {
    alert(datetime_set_locale_time_component_existing_locale.getLocale());
});

let datetime_set_locale_time_component_existing_locale_div = document.createElement('div');
datetime_set_locale_time_component_existing_locale_div.appendChild(datetime_set_locale_time_component_existing_localeEl);
datetime_set_locale_time_component_existing_locale_div.appendChild(datetime_set_locale_time_component_existing_locale_button);
datetime_set_locale_time_component_existing_locale_div.appendChild(datetime_get_locale_time_component_after_set_locale_button);

//setLocale() - datetime component contains exsting locale
let datetime_set_locale_datetime_component_existing_locale = new DateTime({
    value: date,
    type: 'datetime',
    locale: 'en'
});
let datetime_set_locale_datetime_component_existing_localeEl = datetime_set_locale_datetime_component_existing_locale.render();
datetime_set_locale_datetime_component_existing_localeEl.id = "datetime_set_locale_datetime_component_existing_localeEl";

let datetime_set_locale_datetime_component_existing_locale_button = document.createElement('button');
datetime_set_locale_datetime_component_existing_locale_button.id = "datetime_set_locale_datetime_component_existing_locale_button";
datetime_set_locale_datetime_component_existing_locale_button.innerHTML = "Set local of datetime component which existing locale";
datetime_set_locale_datetime_component_existing_locale_button.addEventListener('click', function() {
    datetime_set_locale_datetime_component_existing_locale.setLocale('zh');
});

let datetime_get_locale_datetime_component_after_set_locale_button = document.createElement('button');
datetime_get_locale_datetime_component_after_set_locale_button.id = "datetime_get_locale_datetime_component_after_set_locale_button";
datetime_get_locale_datetime_component_after_set_locale_button.innerHTML = "Get local of datetime component after set locale";
datetime_get_locale_datetime_component_after_set_locale_button.addEventListener('click', function() {
    alert(datetime_set_locale_datetime_component_existing_locale.getLocale());
});

let datetime_set_locale_datetime_component_existing_locale_div = document.createElement('div');
datetime_set_locale_datetime_component_existing_locale_div.appendChild(datetime_set_locale_datetime_component_existing_localeEl);
datetime_set_locale_datetime_component_existing_locale_div.appendChild(datetime_set_locale_datetime_component_existing_locale_button);
datetime_set_locale_datetime_component_existing_locale_div.appendChild(datetime_get_locale_datetime_component_after_set_locale_button);

//show() - invisible datetime
let invisible_datetime = new DateTime({
    value: date,
    type: 'datetime',
    dateFormat: 'MM/dd/YYYY',
    isVisible: false,
    isDisabled: false,
    locale: 'en'
});
let invisible_datetimeEl = invisible_datetime.render();
invisible_datetimeEl.id = "invisible_datetimeEl";

let show_invisible_datetime_button = document.createElement('button');
show_invisible_datetime_button.id = "show_invisible_datetime_button";
show_invisible_datetime_button.innerHTML = "Show invisible datetime";
show_invisible_datetime_button.addEventListener('click', function() {
    invisible_datetime.show();
});

let show_invisible_datetime_div = document.createElement('div');
show_invisible_datetime_div.appendChild(invisible_datetimeEl);
show_invisible_datetime_div.appendChild(show_invisible_datetime_button);

//hide() - visible datetime
let visible_dateime = new DateTime({
    value: date,
    type: 'datetime',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
    locale: 'en'
});
let visible_datetimeEl = visible_dateime.render();
visible_datetimeEl.id = "visible_datetimeEl";

let hide_visible_datetime_button = document.createElement('button');
hide_visible_datetime_button.id = "hide_visible_datetime_button";
hide_visible_datetime_button.innerHTML = "Hide visible datetime";
hide_visible_datetime_button.addEventListener('click', function() {
    visible_dateime.hide();
});

let hide_visible_datetime_div = document.createElement('div');
hide_visible_datetime_div.appendChild(visible_datetimeEl);
hide_visible_datetime_div.appendChild(hide_visible_datetime_button);

//disable() - enabled datetime
let enabled_datetime = new DateTime({
    value: date,
    type: 'datetime',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: false,
    locale: 'en'
});
let enabled_datetimeEl = enabled_datetime.render();
enabled_datetimeEl.id = "enabled_datetimeEl";

let disable_enabled_datetime_button = document.createElement('button');
disable_enabled_datetime_button.id = "disable_enabled_datetime_button";
disable_enabled_datetime_button.innerHTML = "Disable enabled datetime";
disable_enabled_datetime_button.addEventListener('click', function() {
    enabled_datetime.disable();
});

let disable_enabled_datetime_div = document.createElement('div');
disable_enabled_datetime_div.appendChild(enabled_datetimeEl);
disable_enabled_datetime_div.appendChild(disable_enabled_datetime_button);

//enable() - disabled datetime
let disabled_datetime = new DateTime({
    value: date,
    type: 'datetime',
    dateFormat: 'MM/dd/YYYY',
    isVisible: true,
    isDisabled: true,
    locale: 'en'
});
let disabled_datetimeEl = disabled_datetime.render();
disabled_datetimeEl.id = "disabled_datetimeEl";

let enable_disabled_datetime_button = document.createElement('button');
enable_disabled_datetime_button.id = "enable_disabled_datetime_button";
enable_disabled_datetime_button.innerHTML = "Enable disabled datetime";
enable_disabled_datetime_button.addEventListener('click', function() {
    disabled_datetime.enable();
});

let enable_disabled_datetime_div = document.createElement('div');
enable_disabled_datetime_div.appendChild(disabled_datetimeEl);
enable_disabled_datetime_div.appendChild(enable_disabled_datetime_button);

export default {
    dateTime_full_optionEl,
    date_full_optionEl,
    time_full_optionEl,
    datetime_get_value_date_component_div,
    datetime_get_value_time_component_div,
    datetime_get_value_datetime_component_div,
    datetime_set_value_date_component_div,
    datetime_set_value_time_component_div,
    datetime_set_value_datetime_component_div,
    datetime_get_locale_date_component_div,
    datetime_get_locale_time_component_div,
    datetime_get_locale_datetime_component_div,
    datetime_set_locale_date_component_existing_locale_div,
    datetime_set_locale_time_component_existing_locale_div,
    datetime_set_locale_datetime_component_existing_locale_div,
    show_invisible_datetime_div,
    hide_visible_datetime_div,
    disable_enabled_datetime_div,
    enable_disabled_datetime_div
}