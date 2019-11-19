module.exports = {
    XPATH_DATETIME_FULL_OPTION: '//div[@id="dateTime_full_optionEl"]',
    XPATH_DATETIME_FULL_OPTION_DATE: '//div[@id="dateTime_full_optionEl"]//input[@class="kuc-input-text text-input"]',
    XPATH_DATETIME_FULL_OPTION_TIME: '//div[@id="dateTime_full_optionEl"]//input[@class="kuc-input-text text-input time"]',
    XPATH_DATETIME_FULL_OPTION_SELECT_DATE: '//div[@id="dateTime_full_optionEl"]//span[@class="day"][contains(text(), "15")]',
    XPATH_DATETIME_FULL_OPTION_SELECT_TIME: '//div[@id="dateTime_full_optionEl"]//span[@class="kuc-time-list-item"][contains(text(), "00:00")]',

    XPATH_DATE_FULL_OPTION: '//div[@id="date_full_optionEl"]',
    XPATH_DATE_FULL_OPTION_DATE: '//div[@id="date_full_optionEl"]//input[@class="kuc-input-text text-input"]',
    XPATH_DATE_FULL_OPTION_TIME: '//div[@id="date_full_optionEl"]//input[@class="kuc-input-text text-input time"]',

    XPATH_TIME_FULL_OPTION: '//div[@id="time_full_optionEl"]',
    XPATH_TIME_FULL_OPTION_DATE: '//div[@id="time_full_optionEl"]//input[@class="kuc-input-text text-input"]',
    XPATH_TIME_FULL_OPTION_TIME: '//div[@id="time_full_optionEl"]//input[@class="kuc-input-text text-input time"]',

    XPATH_GET_VALUE_DATE_COMPONENT_BUTTON: '//button[@id="datetime_get_value_date_component_button"]',
    XPATH_GET_VALUE_TIME_COMPONENT_BUTTON: '//button[@id="datetime_get_value_time_component_button"]',
    XPATH_GET_VALUE_DATETIME_COMPONENT_BUTTON: '//button[@id="datetime_get_value_datetime_component_button"]',

    XPATH_SET_VALUE_DATE_COMPONENT_BUTTON: '//button[@id="datetime_set_value_date_component_button"]',
    XPATH_SET_VALUE_DATE: '//div[@id="datetime_set_value_date_componentEl"]//input[@class="kuc-input-text text-input"]',
    XPATH_GET_VALUE_AFTER_SET_DATE_BUTTON: '//button[@id="get_value_after_set_date_button"]',

    XPATH_SET_VALUE_TIME_COMPONENT_BUTTON: '//button[@id="datetime_set_value_time_component_button"]',
    XPATH_SET_VALUE_TIME: '//div[@id="datetime_set_value_time_componentEl"]//input[@class="kuc-input-text text-input time"]',
    XPATH_GET_VALUE_AFTER_SET_TIME_BUTTON: '//button[@id="get_value_after_set_time_button"]',
    
    XPATH_SET_VALUE_DATETIME_COMPONENT_BUTTON: '//button[@id="datetime_set_value_datetime_component_button"]',
    XPATH_SET_VALUE_DATETIME_DATE: '//div[@id="datetime_set_value_datetime_componentEl"]//input[@class="kuc-input-text text-input"]',
    XPATH_SET_VALUE_DATETIME_TIME: '//div[@id="datetime_set_value_datetime_componentEl"]//input[@class="kuc-input-text text-input time"]',
    XPATH_GET_VALUE_AFTER_SET_DATETIME_BUTTON: '//button[@id="get_value_after_set_datetime_button"]',

    XPATH_GET_LOCALE_DATE_COMPONENT_BUTTON: '//button[@id="datetime_get_locale_date_component_button"]',
    XPATH_GET_LOCALE_TIME_COMPONENT_BUTTON: '//button[@id="datetime_get_locale_time_component_button"]',
    XPATH_GET_LOCALE_DATETIME_COMPONENT_BUTTON: '//button[@id="datetime_get_locale_datetime_component_button"]',

    XPATH_SET_LOCALE_DATE_COMPONENT_EXISTING_LOCALE_BUTTON: '//button[@id="datetime_set_locale_date_component_existing_locale_button"]',
    XPATH_GET_LOCALE_DATE_COMPONENT_AFTER_SET_LOCALE_BUTTON: '//button[@id="datetime_get_locale_date_component_after_set_locale_button"]',
    XPATH_SET_LOCALE_TIME_COMPONENT_EXISTING_LOCALE_BUTTON: '//button[@id="datetime_set_locale_time_component_existing_locale_button"]',
    XPATH_GET_LOCALE_TIME_COMPONENT_AFTER_SET_LOCALE_BUTTON: '//button[@id="datetime_get_locale_time_component_after_set_locale_button"]',
    XPATH_SET_LOCALE_DATETIME_COMPONENT_EXISTING_LOCALE_BUTTON: '//button[@id="datetime_set_locale_datetime_component_existing_locale_button"]',
    XPATH_GET_LOCALE_DATETIME_COMPONENT_AFTER_SET_LOCALE_BUTTON: '//button[@id="datetime_get_locale_datetime_component_after_set_locale_button"]',

    XPATH_SHOW_INVISIBLE_DATETIME_BUTTON: '//button[@id="show_invisible_datetime_button"]',
    XPATH_INVISIBLE_DATETIME: '//div[@id="invisible_datetimeEl"]',
    XPATH_HIDE_VISIBLE_DATETIME_BUTTON: '//button[@id="hide_visible_datetime_button"]',
    XPATH_VISIBLE_DATETIME: '//div[@id="visible_datetimeEl"]',

    XPATH_DISABLE_ENABLED_DATETIME_BUTTON: '//button[@id="disable_enabled_datetime_button"]',
    XPATH_ENABLED_DATETIME_DATE: '//div[@id="enabled_datetimeEl"]//input[@class="kuc-input-text text-input"]',
    XPATH_ENABLED_DATETIME_TIME: '//div[@id="enabled_datetimeEl"]//input[@class="kuc-input-text text-input time"]',
    XPATH_ENABLE_DISABLED_DATETIME_BUTTON: '//button[@id="enable_disabled_datetime_button"]',
    XPATH_DISABLED_DATETIME_DATE: '//div[@id="disabled_datetimeEl"]//input[@class="kuc-input-text text-input"]',
    XPATH_DISABLED_DATETIME_TIME: '//div[@id="disabled_datetimeEl"]//input[@class="kuc-input-text text-input time"]',
}