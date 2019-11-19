import Alert from './alert';
import Button from './button';
import CheckBox from './checkbox';
import DateTime from './datetime';
import Dialog from './dialog';
import Dropdown from './dropdown';
import IconButton from './icon-button';
import Label from './label';
import MultipleChoice from './multiplechoice';
import NotifyPopup from './notify-popup';
import RadioButton from './radio-button';
import Spinner from './spinner';
import Text from './text';
import TextArea from './textarea';
import Table from './table';
import ColorPicker from './colorpicker';
import FieldGroup from './fieldgroup';
import Tabs from './tabs';

let posConfig = {
    Normal_Button: { x: 0, y: 0 },
    Submit_Button: { x: 1, y: 0 },
    Notify: { x: 2, y: 0 },
    Multiple_Choice: { x: 3, y: 0 },
    Icon_Button: { x: 4, y: 0 },
    Label: { x: 5, y: 0 },
    Alert: { x: 6, y: 0 },
    Text: { x: 7, y: 0 },
    Check_Box: { x: 8, y: 0 },
    Dropdown: { x: 9, y: 0 },
    Radio: { x: 10, y: 0 },
    Spinner: { x: 11, y: 0 },
    Dialog: { x: 12, y: 0 },
    Colorpicker: { x: 13, y: 0 },
    Datetime: { x: 14, y: 0 },
    Textarea: { x: 15, y: 0 },
    FieldGroup: {x: 16, y: 0 }
}

let posConfigTable = {
    Table: { x: 0, y: 0 },
}

let posConfigTab = {
    Tabs: { x: 0, y: 0 },
}

function createLabelEl(text) {
    const labelEl = document.createElement('div')
    labelEl.style.color = '#cc3300';
    labelEl.style.fontWeight = 'bold';
    labelEl.textContent = text.replace('_', ' ');

    return labelEl;
}

let testgrid = new window.SDTestGrid({
    rowCount: Object.keys(posConfig).length,
    columnCount: 30,
    classNames: 'bordered_table',
})
let testgridEl = testgrid.render()

let testgridTable = new window.SDTestGrid({
    rowCount: 1,
    columnCount: 30,
    classNames: 'bordered_table',
})
let testgridTableEl = testgridTable.render();

let testgridTab = new window.SDTestGrid({
    rowCount: 1,
    columnCount: 30,
    classNames: 'bordered_table',
})
let testgridTabEl = testgridTab.render();

function renderTitleField(testgrid, posConfig) {
    Object.keys(posConfig).forEach(function (key) {
        let labelCell = testgrid.getCell(posConfig[key].x, posConfig[key].y);
        labelCell.style.backgroundColor = "#c6ecc6";
        labelCell.appendChild(createLabelEl(key));

    });
}

renderTitleField(testgrid, posConfig);
renderTitleField(testgridTable, posConfigTable);
renderTitleField(testgridTab, posConfigTab)

let headerSpace = document.getElementsByTagName("BODY")[0]
headerSpace.append(testgridEl);
headerSpace.append(testgridTableEl);
headerSpace.append(testgridTabEl);

//render component
//Alert
let successAlertCell = testgrid.getCell(posConfig.Alert.x, 1);
successAlertCell.appendChild(Alert.successAlert.render());

let errorAlertCell = testgrid.getCell(posConfig.Alert.x, 2);
errorAlertCell.appendChild(Alert.errorAlert.render());

let noOptionAlertCell = testgrid.getCell(posConfig.Alert.x, 3);
noOptionAlertCell.appendChild(Alert.noOptionAlertDiv);

let fullOptionAlertCell = testgrid.getCell(posConfig.Alert.x, 4);
fullOptionAlertCell.appendChild(Alert.fullOptionAlertDiv);

let onlyTextAlertCell = testgrid.getCell(posConfig.Alert.x, 5);
onlyTextAlertCell.appendChild(Alert.onlyTextAlertDiv);

let onlyTypeErrorAlertCell = testgrid.getCell(posConfig.Alert.x, 6);
onlyTypeErrorAlertCell.appendChild(Alert.onlyTypeErrorAlertDiv);

let onlyTypeSuccessAlertCell = testgrid.getCell(posConfig.Alert.x, 7);
onlyTypeSuccessAlertCell.appendChild(Alert.onlyTypeSuccessAlertDiv);

let onlyDisabledTrueAlertCell = testgrid.getCell(posConfig.Alert.x, 8);
onlyDisabledTrueAlertCell.appendChild(Alert.onlyDisabledTrueAlertDiv);

let onlyDisabledFalseAlertCell = testgrid.getCell(posConfig.Alert.x, 9);
onlyDisabledFalseAlertCell.appendChild(Alert.onlyDisabledFalseAlertDiv);

let onlyVisibleTrueAlertCell = testgrid.getCell(posConfig.Alert.x, 10);
onlyVisibleTrueAlertCell.appendChild(Alert.onlyVisibleTrueAlertDiv);

let onlyVisibleFalseAlertCell = testgrid.getCell(posConfig.Alert.x, 11);
onlyVisibleFalseAlertCell.appendChild(Alert.onlyVisibleFalseAlertDiv);

let setTextAlertCell = testgrid.getCell(posConfig.Alert.x, 12);
setTextAlertCell.appendChild(Alert.setTextAlertDiv);

let setTextXSSAlertCell = testgrid.getCell(posConfig.Alert.x, 13);
setTextXSSAlertCell.appendChild(Alert.setTextXSSAlertDiv);

let setTextInvisibleAlertCell = testgrid.getCell(posConfig.Alert.x, 14);
setTextInvisibleAlertCell.appendChild(Alert.setTextInvisibleAlertDiv);

let setTextNoParamAlertCell = testgrid.getCell(posConfig.Alert.x, 15);
setTextNoParamAlertCell.appendChild(Alert.setTextNoParamAlertDiv);

let setTypeAlertCell = testgrid.getCell(posConfig.Alert.x, 16);
setTypeAlertCell.appendChild(Alert.setTypeAlertDiv);

let setTypeInvisibleAlertCell = testgrid.getCell(posConfig.Alert.x, 17);
setTypeInvisibleAlertCell.appendChild(Alert.setTypeInvisibleAlertDiv);

let showAlertCell = testgrid.getCell(posConfig.Alert.x, 18);
showAlertCell.appendChild(Alert.showAlertDiv);

let hideAlertCell = testgrid.getCell(posConfig.Alert.x, 19);
hideAlertCell.appendChild(Alert.hideAlertDiv);

let disableAlertCell = testgrid.getCell(posConfig.Alert.x, 20);
disableAlertCell.appendChild(Alert.disableAlertDiv);

let enableAlertCell = testgrid.getCell(posConfig.Alert.x, 21);
enableAlertCell.appendChild(Alert.enableAlertDiv);

let callFunctionCell = testgrid.getCell(posConfig.Alert.x,22);
callFunctionCell.appendChild(Alert.onCallbackFunctionAlert.render());

let callbackTriggerCell = testgrid.getCell(posConfig.Alert.x,23);
callbackTriggerCell.appendChild(Alert.onCallbackTriggerAlert.render());

//Normal Button
let normalButton_constructor_cell = testgrid.getCell(posConfig.Normal_Button.x, 1);
normalButton_constructor_cell.appendChild(Button.normalButton_constructorEl);

let normalButton_NoneText_cell = testgrid.getCell(posConfig.Normal_Button.x, 2);
normalButton_NoneText_cell.appendChild(Button.normalButton_NoneTextEl);

let normalButton_NoneParameter_cell = testgrid.getCell(posConfig.Normal_Button.x, 3);
normalButton_NoneParameter_cell.appendChild(Button.normalButton_NoneParameterEl);

let normalButton_setType_cell = testgrid.getCell(posConfig.Normal_Button.x, 4);
normalButton_setType_cell.appendChild(Button.normalButton_setType.render());

let normalButton_showInvisible_cell = testgrid.getCell(posConfig.Normal_Button.x, 5);
normalButton_showInvisible_cell.appendChild(Button.normalButton_showInvisible.render());

let normalButton_hideVisible_cell = testgrid.getCell(posConfig.Normal_Button.x, 6);
normalButton_hideVisible_cell.appendChild(Button.normalButton_hideVisible.render());

let normalButton_disable_cell = testgrid.getCell(posConfig.Normal_Button.x, 7);
normalButton_disable_cell.appendChild(Button.normalButton_disable.render());

let normalButton_enable_cell = testgrid.getCell(posConfig.Normal_Button.x, 8);
normalButton_enable_cell.appendChild(Button.normalButton_enable.render());

let buttonNormal_cell = testgrid.getCell(posConfig.Normal_Button.x, 9);
buttonNormal_cell.appendChild(Button.normalButtonEl);

let normalButton_onTrigger_cell = testgrid.getCell(posConfig.Normal_Button.x, 10);
normalButton_onTrigger_cell.appendChild(Button.normalButton_onTrigger.render());

//Submit Button
let submitButton_constructor_cell = testgrid.getCell(posConfig.Submit_Button.x, 1);
submitButton_constructor_cell.appendChild(Button.submitButton_constructorEl);

let submitButton_fullValue_constructor_cell = testgrid.getCell(posConfig.Submit_Button.x, 2);
submitButton_fullValue_constructor_cell.appendChild(Button.submitButton_fullValue_constructorEl);

let submitButton_NoneText_cell = testgrid.getCell(posConfig.Submit_Button.x, 3);
submitButton_NoneText_cell.appendChild(Button.submitButton_NoneTextEl);

let submitButton_NoneParameter_cell = testgrid.getCell(posConfig.Submit_Button.x, 4);
submitButton_NoneParameter_cell.appendChild(Button.submitButton_NoneParameterEl);

let submitButton_setType_cell = testgrid.getCell(posConfig.Submit_Button.x, 5);
submitButton_setType_cell.appendChild(Button.submitButton_setType.render());

let submitButton_showInvisible_cell = testgrid.getCell(posConfig.Submit_Button.x, 6);
submitButton_showInvisible_cell.appendChild(Button.submitButton_showInvisible.render());

let submitButton_hideVisible_cell = testgrid.getCell(posConfig.Submit_Button.x, 7);
submitButton_hideVisible_cell.appendChild(Button.submitButton_hideVisible.render());

let submitButton_disable_cell = testgrid.getCell(posConfig.Submit_Button.x, 8);
submitButton_disable_cell.appendChild(Button.submitButton_disable.render());

let submitButton_enable_cell = testgrid.getCell(posConfig.Submit_Button.x, 9);
submitButton_enable_cell.appendChild(Button.submitButton_enable.render());

let buttonSubmit_cell = testgrid.getCell(posConfig.Submit_Button.x, 10);
buttonSubmit_cell.appendChild(Button.submitButtonEl);

let submitButton_onTrigger_cell = testgrid.getCell(posConfig.Submit_Button.x, 11);
submitButton_onTrigger_cell.appendChild(Button.submitButton_onTrigger.render());

//CheckBox
let checkUIcheckbox_cell = testgrid.getCell(posConfig.Check_Box.x, 1);
checkUIcheckbox_cell.appendChild(CheckBox.checkUIcheckbox_El);

let cons_without_value_CWV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 2);
cons_without_value_CWV_chkbox_cell.appendChild(CheckBox.cons_without_value_CWV_chkbox_El);

let cons_full_option_CFO_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 3);
cons_full_option_CFO_chkbox_cell.appendChild(CheckBox.cons_full_option_CFO_chkbox_El);

let cons_with_only_value_CWOV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 4);
cons_with_only_value_CWOV_chkbox_cell.appendChild(CheckBox.cons_with_only_value_CWOV_chkbox_El);

let add_item_full_value_AIFV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 5);
add_item_full_value_AIFV_chkbox_cell.appendChild(CheckBox.add_item_full_value_AIFV_chkbox_div);

let add_item_invi_AII_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 6);
add_item_invi_AII_chkbox_cell.appendChild(CheckBox.add_item_invi_AII_chkbox_div);

let add_item_only_value_AIOV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 7);
add_item_only_value_AIOV_chkbox_cell.appendChild(CheckBox.add_item_only_value_AIOV_chkbox_div);

let add_item_without_value_AIWVM_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 8);
add_item_without_value_AIWVM_chkbox_cell.appendChild(CheckBox.add_item_without_value_AIWVM_chkbox_div);

let get_item_GI_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 9);
get_item_GI_chkbox_cell.appendChild(CheckBox.get_item_GI_chkbox_div);

let get_items_GIs_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 10);
get_items_GIs_chkbox_cell.appendChild(CheckBox.get_items_GIs_chkbox_div);

let get_value_GV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 11);
get_value_GV_chkbox_cell.appendChild(CheckBox.get_value_GV_chkbox_div);

let set_value_SV_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 12);
set_value_SV_chkbox_cell.appendChild(CheckBox.set_value_SV_chkbox_El);

let set_disable_item_SDI_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 13);
set_disable_item_SDI_chkbox_cell.appendChild(CheckBox.set_disable_item_SDI_chkbox_El);

let set_enable_item_SEI_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 14);
set_enable_item_SEI_chkbox_cell.appendChild(CheckBox.set_enable_item_SEI_chkbox_El);

let show_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 15);
show_chkbox_cell.appendChild(CheckBox.show_El);

let hide_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 16);
hide_chkbox_cell.appendChild(CheckBox.hide_El);

let disable_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 17);
disable_chkbox_cell.appendChild(CheckBox.disable_El);

let enable_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 18);
enable_chkbox_cell.appendChild(CheckBox.enable_El);

let on_function_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 19);
on_function_chkbox_cell.appendChild(CheckBox.on_function_El);

let on_trigger_chkbox_cell = testgrid.getCell(posConfig.Check_Box.x, 20);
on_trigger_chkbox_cell.appendChild(CheckBox.on_trigger_El);

//Datetime
let dateTime_full_option_cell = testgrid.getCell(posConfig.Datetime.x, 1);
dateTime_full_option_cell.appendChild(DateTime.dateTime_full_optionEl);

let date_full_option_cell = testgrid.getCell(posConfig.Datetime.x, 2);
date_full_option_cell.appendChild(DateTime.date_full_optionEl);

let time_full_option_cell = testgrid.getCell(posConfig.Datetime.x, 3);
time_full_option_cell.appendChild(DateTime.time_full_optionEl);

let datetime_get_value_date_component_cell = testgrid.getCell(posConfig.Datetime.x, 4);
datetime_get_value_date_component_cell.appendChild(DateTime.datetime_get_value_date_component_div);

let datetime_get_value_time_component_cell = testgrid.getCell(posConfig.Datetime.x, 5);
datetime_get_value_time_component_cell.appendChild(DateTime.datetime_get_value_time_component_div);

let datetime_get_value_datetime_component_cell = testgrid.getCell(posConfig.Datetime.x, 6);
datetime_get_value_datetime_component_cell.appendChild(DateTime.datetime_get_value_datetime_component_div);

let datetime_set_value_date_component_cell = testgrid.getCell(posConfig.Datetime.x, 7);
datetime_set_value_date_component_cell.appendChild(DateTime.datetime_set_value_date_component_div);

let datetime_set_value_time_component_cell = testgrid.getCell(posConfig.Datetime.x, 8);
datetime_set_value_time_component_cell.appendChild(DateTime.datetime_set_value_time_component_div);

let datetime_set_value_datetime_component_cell = testgrid.getCell(posConfig.Datetime.x, 9);
datetime_set_value_datetime_component_cell.appendChild(DateTime.datetime_set_value_datetime_component_div);

let datetime_get_locale_date_component_cell = testgrid.getCell(posConfig.Datetime.x, 10);
datetime_get_locale_date_component_cell.appendChild(DateTime.datetime_get_locale_date_component_div);

let datetime_get_locale_time_component_cell = testgrid.getCell(posConfig.Datetime.x, 11);
datetime_get_locale_time_component_cell.appendChild(DateTime.datetime_get_locale_time_component_div);

let datetime_get_locale_datetime_component_cell = testgrid.getCell(posConfig.Datetime.x, 12);
datetime_get_locale_datetime_component_cell.appendChild(DateTime.datetime_get_locale_datetime_component_div);

let datetime_set_locale_date_component_existing_locale_cell = testgrid.getCell(posConfig.Datetime.x, 13);
datetime_set_locale_date_component_existing_locale_cell.appendChild(DateTime.datetime_set_locale_date_component_existing_locale_div);

let datetime_set_locale_time_component_existing_locale_cell = testgrid.getCell(posConfig.Datetime.x, 14);
datetime_set_locale_time_component_existing_locale_cell.appendChild(DateTime.datetime_set_locale_time_component_existing_locale_div);

let datetime_set_locale_datetime_component_existing_locale_cell = testgrid.getCell(posConfig.Datetime.x, 15);
datetime_set_locale_datetime_component_existing_locale_cell.appendChild(DateTime.datetime_set_locale_datetime_component_existing_locale_div);

let show_invisible_datetime_cell = testgrid.getCell(posConfig.Datetime.x, 16);
show_invisible_datetime_cell.appendChild(DateTime.show_invisible_datetime_div);

let hide_visible_datetime_cell = testgrid.getCell(posConfig.Datetime.x, 17);
hide_visible_datetime_cell.appendChild(DateTime.hide_visible_datetime_div);

let disable_enabled_datetime_cell = testgrid.getCell(posConfig.Datetime.x, 18);
disable_enabled_datetime_cell.appendChild(DateTime.disable_enabled_datetime_div);

let enable_disabled_datetime_cell = testgrid.getCell(posConfig.Datetime.x, 19);
enable_disabled_datetime_cell.appendChild(DateTime.enable_disabled_datetime_div);

//Dialog
let dialog_full_option_cell = testgrid.getCell(posConfig.Dialog.x, 1);
dialog_full_option_cell.appendChild(Dialog.dialog_full_option_div);

let dialog_setHeader_existing_header_cell = testgrid.getCell(posConfig.Dialog.x, 2);
dialog_setHeader_existing_header_cell.appendChild(Dialog.dialog_setHeader_existing_header_div);

let dialog_setHeader_with_components_cell = testgrid.getCell(posConfig.Dialog.x, 3);
dialog_setHeader_with_components_cell.appendChild(Dialog.dialog_setHeader_with_components_div);

let dialog_get_header_string_cell = testgrid.getCell(posConfig.Dialog.x, 4);
dialog_get_header_string_cell.appendChild(Dialog.dialog_get_header_string_cell_div);

let dialog_get_header_dom_cell = testgrid.getCell(posConfig.Dialog.x, 5);
dialog_get_header_dom_cell.appendChild(Dialog.dialog_get_header_dom_div);

let dialog_setContent_existing_content_cell = testgrid.getCell(posConfig.Dialog.x, 6);
dialog_setContent_existing_content_cell.appendChild(Dialog.dialog_setContent_existing_content_div);

let dialog_setContent_with_components_cell = testgrid.getCell(posConfig.Dialog.x, 7);
dialog_setContent_with_components_cell.appendChild(Dialog.dialog_setContent_with_components_div);

let dialog_get_content_string_cell = testgrid.getCell(posConfig.Dialog.x, 8);
dialog_get_content_string_cell.appendChild(Dialog.dialog_get_content_string_div);

let dialog_get_content_dom_cell = testgrid.getCell(posConfig.Dialog.x, 9);
dialog_get_content_dom_cell.appendChild(Dialog.dialog_get_content_dom_div);

let dialog_setFooter_existing_footer_cell = testgrid.getCell(posConfig.Dialog.x, 10);
dialog_setFooter_existing_footer_cell.appendChild(Dialog.dialog_setFooter_existing_footer_div);

let dialog_setFooter_with_components_cell = testgrid.getCell(posConfig.Dialog.x, 11);
dialog_setFooter_with_components_cell.appendChild(Dialog.dialog_setFooter_with_components_div);

let dialog_get_footer_string_cell = testgrid.getCell(posConfig.Dialog.x, 12);
dialog_get_footer_string_cell.appendChild(Dialog.dialog_get_footer_string_div);

let dialog_get_footer_dom_cell = testgrid.getCell(posConfig.Dialog.x, 13);
dialog_get_footer_dom_cell.appendChild(Dialog.dialog_get_footer_dom_div);

let dialog_invisible_cell = testgrid.getCell(posConfig.Dialog.x, 14);
dialog_invisible_cell.appendChild(Dialog.dialog_invisible_div);

let dialog_visible_cell = testgrid.getCell(posConfig.Dialog.x, 15);
dialog_visible_cell.appendChild(Dialog.dialog_visible_div);

let dialog_show_closeButton_cell = testgrid.getCell(posConfig.Dialog.x, 16);
dialog_show_closeButton_cell.appendChild(Dialog.dialog_show_closeButton_div);

let dialog_hide_closeButton_cell = testgrid.getCell(posConfig.Dialog.x, 17);
dialog_hide_closeButton_cell.appendChild(Dialog.dialog_hide_closeButton_div);

//Dropdown 
let check_UI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 1)
check_UI_dropdown_cell.appendChild(Dropdown.check_UI_dropdown_div);

let check_UI_not_have_item_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 2);
check_UI_not_have_item_dropdown_cell.appendChild(Dropdown.check_UI_not_have_item_dropdown_div);

let check_hover_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 3);
check_hover_dropdown_cell.appendChild(Dropdown.check_hover_dropdown_El);

let operation_not_displayed_content_ONDC_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 4);
operation_not_displayed_content_ONDC_dropdown_cell.appendChild(Dropdown.operation_not_displayed_content_ONDC_dropdownEl);

let operation_no_selected_displayed_blank_ONSDB_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 5);
operation_no_selected_displayed_blank_ONSDB_dropdown_cell.appendChild(Dropdown.operation_no_selected_displayed_blank_ONSDB_dropdown_El);

let operation_default_selected_displayed_ODSD_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 6);
operation_default_selected_displayed_ODSD_dropdown_cell.appendChild(Dropdown.operation_default_selected_displayed_ODSD_dropdown_El);

let operation_content_area_displayed_OCAD_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 7);
operation_content_area_displayed_OCAD_dropdown_cell.appendChild(Dropdown.operation_content_area_displayed_OCAD_dropdown_El);

let operation_check_displayed_items_OCDI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 8);
operation_check_displayed_items_OCDI_dropdown_cell.appendChild(Dropdown.operation_check_displayed_items_OCDI_dropdown_div);

let operation_choose_any_item_OCAI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 9);
operation_choose_any_item_OCAI_dropdown_cell.appendChild(Dropdown.operation_choose_any_item_OCAI_dropdown_El);

let cons_without_value_CWV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 10);
cons_without_value_CWV_dropdown_cell.appendChild(Dropdown.cons_without_value_CWV_dropdown_El);

let cons_full_option_CFO_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 11);
cons_full_option_CFO_dropdown_cell.appendChild(Dropdown.cons_full_option_CFO_dropdown_El);

let cons_with_only_value_CWOV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 12);
cons_with_only_value_CWOV_dropdown_cell.appendChild(Dropdown.cons_with_only_value_CWOV_dropdown_El);

let add_item_full_value_AIFV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 13);
add_item_full_value_AIFV_dropdown_cell.appendChild(Dropdown.add_item_full_value_AIFV_dropdown_div);

let add_item_invi_AII_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 14);
add_item_invi_AII_dropdown_cell.appendChild(Dropdown.add_item_invi_AII_dropdown_div);

let add_item_only_value_AIOV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 15);
add_item_only_value_AIOV_dropdown_cell.appendChild(Dropdown.add_item_only_value_AIOV_dropdown_div);

let verify_added_item_VAI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 16);
verify_added_item_VAI_dropdown_cell.appendChild(Dropdown.verify_added_item_VAI_dropdown_div);

let remove_item_RI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 17);
remove_item_RI_dropdown_cell.appendChild(Dropdown.remove_item_RI_dropdown_El);

let get_items_GIs_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 18);
get_items_GIs_dropdown_cell.appendChild(Dropdown.get_items_GIs_dropdown_div);

let get_value_GV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 19);
get_value_GV_dropdown_cell.appendChild(Dropdown.get_value_GV_dropdown_div);

let set_value_SV_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 20);
set_value_SV_dropdown_cell.appendChild(Dropdown.set_value_SV_dropdown_El);

let set_disable_item_SDI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 21);
set_disable_item_SDI_dropdown_cell.appendChild(Dropdown.set_disable_item_SDI_dropdown_div);

let set_enable_item_SEI_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 22);
set_enable_item_SEI_dropdown_cell.appendChild(Dropdown.set_enable_item_SEI_dropdown_div);

let show_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 23);
show_dropdown_cell.appendChild(Dropdown.show_dropdown_El);

let hide_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 24);
hide_dropdown_cell.appendChild(Dropdown.hide_dropdown_El);

let disable_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 25);
disable_dropdown_cell.appendChild(Dropdown.disable_dropdown_El);

let enable_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 26);
enable_dropdown_cell.appendChild(Dropdown.enable_dropdown_El);

let on_function_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 27);
on_function_dropdown_cell.appendChild(Dropdown.on_function_dropdown_El);

let on_trigger_dropdown_cell = testgrid.getCell(posConfig.Dropdown.x, 28);
on_trigger_dropdown_cell.appendChild(Dropdown.on_trigger_dropdown_El);

//Icon Button
let cons_full_value_cell = testgrid.getCell(posConfig.Icon_Button.x, 1);
cons_full_value_cell.appendChild(IconButton.cons_full_value_El);

let cons_type_insert_cell = testgrid.getCell(posConfig.Icon_Button.x, 2);
cons_type_insert_cell.appendChild(IconButton.cons_type_insert_El);

let cons_color_green_cell = testgrid.getCell(posConfig.Icon_Button.x, 3);
cons_color_green_cell.appendChild(IconButton.cons_color_green_El);

let cons_disabled_cell = testgrid.getCell(posConfig.Icon_Button.x, 4);
cons_disabled_cell.appendChild(IconButton.cons_disabled_El);

let setTypeForIB_cell = testgrid.getCell(posConfig.Icon_Button.x, 5);
setTypeForIB_cell.appendChild(IconButton.setTypeForIB_div);

let on_trigger_cell = testgrid.getCell(posConfig.Icon_Button.x, 6);
on_trigger_cell.appendChild(IconButton.on_trigger_IB_El);

//Label
let UILabelCell = testgrid.getCell(posConfig.Label.x, 1);
UILabelCell.appendChild(Label.UILabel.render());

let noOptionLabelCell = testgrid.getCell(posConfig.Label.x, 2);
noOptionLabelCell.appendChild(Label.noOptionLabelDiv);

let fullOptionLabelCell = testgrid.getCell(posConfig.Label.x, 3);
fullOptionLabelCell.appendChild(Label.fullOptionLabelDiv);

let onlyTextLabelCell = testgrid.getCell(posConfig.Label.x, 4);
onlyTextLabelCell.appendChild(Label.onlyTextLabel.render());

let onlyRequiredTrueLabelCell = testgrid.getCell(posConfig.Label.x, 5);
onlyRequiredTrueLabelCell.appendChild(Label.onlyRequiredTrueLabelDiv);

let onlyRequiredFalseLabelCell = testgrid.getCell(posConfig.Label.x, 6);
onlyRequiredFalseLabelCell.appendChild(Label.onlyRequiredFalseLabelDiv);

let onlyDisabledTrueLabelCell = testgrid.getCell(posConfig.Label.x, 7);
onlyDisabledTrueLabelCell.appendChild(Label.onlyDisabledLabelDiv);

let onlyDisabledFalseLabelCell = testgrid.getCell(posConfig.Label.x, 8);
onlyDisabledFalseLabelCell.appendChild(Label.onlyDisabledFalseLabelDiv);

let onlyVisibleTrueLabelCell = testgrid.getCell(posConfig.Label.x, 9);
onlyVisibleTrueLabelCell.appendChild(Label.onlyVisibleTrueLabelDiv);

let onlyVisibleFalseLabelCell = testgrid.getCell(posConfig.Label.x, 10);
onlyVisibleFalseLabelCell.appendChild(Label.onlyVisibleFalseLabelDiv);

let setTextLabelCell = testgrid.getCell(posConfig.Label.x, 11);
setTextLabelCell.appendChild(Label.setTextLabelDiv);

let setTextXSSLabelCell = testgrid.getCell(posConfig.Label.x, 12);
setTextXSSLabelCell.appendChild(Label.setTextXSSLabelDiv);

let setTextInvisibleLabelCell = testgrid.getCell(posConfig.Label.x, 13);
setTextInvisibleLabelCell.appendChild(Label.setTextInvisibleLabelDiv);

let setTextBlankLabelCell = testgrid.getCell(posConfig.Label.x, 14);
setTextBlankLabelCell.appendChild(Label.setTextBlankLabelDiv);

let setTextNoParamLabelCell = testgrid.getCell(posConfig.Label.x, 15);
setTextNoParamLabelCell.appendChild(Label.setTextNoParamLabelDiv);

let setRequiredFalseLabelCell = testgrid.getCell(posConfig.Label.x, 16);
setRequiredFalseLabelCell.appendChild(Label.setRequiredFalseLabelDiv);

let setRequiredTrueLabelCell = testgrid.getCell(posConfig.Label.x, 17);
setRequiredTrueLabelCell.appendChild(Label.setRequiredTrueLabelDiv);

let setRequiredInvisibleLabelCell = testgrid.getCell(posConfig.Label.x, 18);
setRequiredInvisibleLabelCell.appendChild(Label.setRequiredInvisibleLabelDiv);

let setRequiredNoParamLabelCell = testgrid.getCell(posConfig.Label.x, 19);
setRequiredNoParamLabelCell.appendChild(Label.setRequiredNoParamLabelDiv);

let showLabelCell = testgrid.getCell(posConfig.Label.x, 20);
showLabelCell.appendChild(Label.showLabelDiv);

let hideLabelCell = testgrid.getCell(posConfig.Label.x, 21);
hideLabelCell.appendChild(Label.hideLabelDiv);

let disableLabelCell = testgrid.getCell(posConfig.Label.x, 22);
disableLabelCell.appendChild(Label.disableLabelDiv);

let enableLabelCell = testgrid.getCell(posConfig.Label.x, 23);
enableLabelCell.appendChild(Label.enableLabelDiv);

let callFunctionCell_Label = testgrid.getCell(posConfig.Label.x,24);
callFunctionCell_Label.appendChild(Label.onCallbackFunctionLabel.render());

let callbackTriggerCell_Label = testgrid.getCell(posConfig.Label.x,25);
callbackTriggerCell_Label.appendChild(Label.onCallbackTriggerLabel.render());

//MultipleChoice
let cons_without_value_CWV_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 1);
cons_without_value_CWV_mulChoice_cell.appendChild(MultipleChoice.cons_without_value_CWV_mulChoice_El);

let cons_full_option_CFO_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 2);
cons_full_option_CFO_mulChoice_cell.appendChild(MultipleChoice.cons_full_option_CFO_mulChoice_El);

let cons_with_only_value_CWOV_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 3);
cons_with_only_value_CWOV_mulChoice_cell.appendChild(MultipleChoice.cons_with_only_value_CWOV_mulChoice_El);

let add_item_full_value_AIFV_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 4);
add_item_full_value_AIFV_mulChoice_cell.appendChild(MultipleChoice.add_item_full_value_AIFV_mulChoice_div);

let add_item_invi_AII_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 5);
add_item_invi_AII_mulChoice_cell.appendChild(MultipleChoice.add_item_invi_AII_mulChoice_div);

let add_item_only_value_AIOV_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 6);
add_item_only_value_AIOV_mulChoice_cell.appendChild(MultipleChoice.add_item_only_value_AIOV_mulChoice_div);

let add_item_without_value_AIWVM_mulChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 7);
add_item_without_value_AIWVM_mulChoice_cell.appendChild(MultipleChoice.add_item_without_value_AIWVM_mulChoice_div);

let remove_item_RI_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 8);
remove_item_RI_multipleChoice_cell.appendChild(MultipleChoice.remove_item_RI_multipleChoice_div);

let get_item_GI_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 9);
get_item_GI_multipleChoice_cell.appendChild(MultipleChoice.get_item_GI_multipleChoice_div);

let get_items_GIs_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 10);
get_items_GIs_multipleChoice_cell.appendChild(MultipleChoice.get_items_GIs_multipleChoice_div);

let get_value_GV_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 11);
get_value_GV_multipleChoice_cell.appendChild(MultipleChoice.get_value_GV_multipleChoice_div);

let set_value_SV_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 12);
set_value_SV_multipleChoice_cell.appendChild(MultipleChoice.set_value_SV_multipleChoice_El);

let set_disable_item_SDI_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 13);
set_disable_item_SDI_multipleChoice_cell.appendChild(MultipleChoice.set_disable_item_SDI_multipleChoice_El);

let set_enable_item_SEI_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 14);
set_enable_item_SEI_multipleChoice_cell.appendChild(MultipleChoice.set_enable_item_SEI_multipleChoice_El);

let show_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 16);
show_multipleChoice_cell.appendChild(MultipleChoice.show_MulChoice_El);

let hide_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 17);
hide_multipleChoice_cell.appendChild(MultipleChoice.hide_MulChoice_El);

let disable_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 18);
disable_multipleChoice_cell.appendChild(MultipleChoice.disable_MulChoice_El);

let enable_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 19);
enable_multipleChoice_cell.appendChild(MultipleChoice.enable_MulChoice_El);

let on_function_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 20);
on_function_multipleChoice_cell.appendChild(MultipleChoice.on_function_MulChoice_El);

let on_trigger_multipleChoice_cell = testgrid.getCell(posConfig.Multiple_Choice.x, 21);
on_trigger_multipleChoice_cell.appendChild(MultipleChoice.on_trigger_MulChoice_El);

// //Notify popup
// let cons_notify_full_value_cell = testgrid.getCell(posConfig.Notify.x, 1)
// cons_notify_full_value_cell.appendChild(NotifyPopup.cons_notify_full_value_El);

// let getStateBtn_cell = testgrid.getCell(posConfig.Notify.x, 2)
// getStateBtn_cell.appendChild(NotifyPopup.getStateBtn.render());

//Radio Button
let radioBtnUI_cell = testgrid.getCell(posConfig.Radio.x, 1);
radioBtnUI_cell.appendChild(RadioButton.radioBtnUI.render());

let radioBtnConstructor_cell = testgrid.getCell(posConfig.Radio.x, 2);
radioBtnConstructor_cell.appendChild(RadioButton.radioBtnConstructorEl);

let radioBtnFullConstructor_cell = testgrid.getCell(posConfig.Radio.x, 3);
radioBtnFullConstructor_cell.appendChild(RadioButton.radioBtnFullConstructorEl);

let radioBtnOnlyIsDisabled_cell = testgrid.getCell(posConfig.Radio.x, 4);
radioBtnOnlyIsDisabled_cell.appendChild(RadioButton.radioBtnOnlyIsDisabledEl);

let radioBtnBothLabelIsDisabled_cell = testgrid.getCell(posConfig.Radio.x, 5);
radioBtnBothLabelIsDisabled_cell.appendChild(RadioButton.radioBtnBothLabelIsDisabledEl);

let radioBtnAddItems_cell = testgrid.getCell(posConfig.Radio.x, 6);
radioBtnAddItems_cell.appendChild(RadioButton.radioBtnAddItems.render());

let radioBtnAddItemsGetLast_cell = testgrid.getCell(posConfig.Radio.x, 7);
radioBtnAddItemsGetLast_cell.appendChild(RadioButton.radioBtnAddItemsGetLast.render());

let radioBtnRemoveItems_cell = testgrid.getCell(posConfig.Radio.x, 8);
radioBtnRemoveItems_cell.appendChild(RadioButton.radioBtnRemoveItems.render());

let radioBtnGetItems_cell = testgrid.getCell(posConfig.Radio.x, 9);
radioBtnGetItems_cell.appendChild(RadioButton.radioBtnGetItemsDiv);

let radioBtnGetValue_cell = testgrid.getCell(posConfig.Radio.x, 10);
radioBtnGetValue_cell.appendChild(RadioButton.radioBtnGetValueDiv);

let radioBtnSetValue_cell = testgrid.getCell(posConfig.Radio.x, 11);
radioBtnSetValue_cell.appendChild(RadioButton.radioBtnSetValueDiv);

let radioBtnDisable_cell = testgrid.getCell(posConfig.Radio.x, 12);
radioBtnDisable_cell.appendChild(RadioButton.radioBtnDisable.render());

let radioBtnDisableInvisible_cell = testgrid.getCell(posConfig.Radio.x, 13);
radioBtnDisableInvisible_cell.appendChild(RadioButton.radioBtnDisableInvisibleDiv);

let radioBtnEnable_cell = testgrid.getCell(posConfig.Radio.x, 14);
radioBtnEnable_cell.appendChild(RadioButton.radioBtnEnable.render());

let radioBtnShow_cell = testgrid.getCell(posConfig.Radio.x, 15);
radioBtnShow_cell.appendChild(RadioButton.radioBtnShow.render());

let radioBtnHide_cell = testgrid.getCell(posConfig.Radio.x, 16);
radioBtnHide_cell.appendChild(RadioButton.radioBtnHide.render());

let disabled_radioBtn_cell = testgrid.getCell(posConfig.Radio.x, 17);
disabled_radioBtn_cell.appendChild(RadioButton.disabled_radioBtn.render());

let enabled_radioBtn_cell = testgrid.getCell(posConfig.Radio.x, 18);
enabled_radioBtn_cell.appendChild(RadioButton.enabled_radioBtn.render());

let radioBtnOnFunc_cell = testgrid.getCell(posConfig.Radio.x, 19);
radioBtnOnFunc_cell.appendChild(RadioButton.radioBtnOnFunc.render());

let radioBtnOnTrigger_cell = testgrid.getCell(posConfig.Radio.x, 20);
radioBtnOnTrigger_cell.appendChild(RadioButton.radioBtnOnTrigger.render());

//Spinner
let spinner_cell = testgrid.getCell(posConfig.Spinner.x, 1);
spinner_cell.appendChild(Spinner.spinner_El);

//Text
let constructorText_cell = testgrid.getCell(posConfig.Text.x, 1);
constructorText_cell.appendChild(Text.constructorTextEl);

let setValueText_cell = testgrid.getCell(posConfig.Text.x, 2);
setValueText_cell.appendChild(Text.setValueTextEl);

let getValueTextCell = testgrid.getCell(posConfig.Text.x, 3);
getValueTextCell.appendChild(Text.getValueTextEl);

let showText_cell = testgrid.getCell(posConfig.Text.x, 4);
showText_cell.appendChild(Text.showTextDiv);

let hideText_cell = testgrid.getCell(posConfig.Text.x, 5);
hideText_cell.appendChild(Text.hideTextDiv);

let disableText_cell = testgrid.getCell(posConfig.Text.x, 6);
disableText_cell.appendChild(Text.disableTextDiv);

let enableText_cell = testgrid.getCell(posConfig.Text.x, 7);
enableText_cell.appendChild(Text.enableTextDiv);

let onChangeFunctionText_cell = testgrid.getCell(posConfig.Text.x, 8);
onChangeFunctionText_cell.appendChild(Text.onChangeFunctionTextEl);

let onChangeTriggerText_cell = testgrid.getCell(posConfig.Text.x, 9);
onChangeTriggerText_cell.appendChild(Text.onChangeTriggerTextEl);

let onClickFunctionText_cell  = testgrid.getCell(posConfig.Text.x, 10);
onClickFunctionText_cell.appendChild(Text.onClickFunctionTextEl);

let onClickTriggerText_cell = testgrid.getCell(posConfig.Text.x, 11);
onClickTriggerText_cell.appendChild(Text.onClickTriggerTextEl);

//Textarea
let constructorTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 1);
constructorTextAreaCell.appendChild(TextArea.constructorTextAreaEl);

let getValueTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 2);
getValueTextAreaCell.appendChild(TextArea.getValueTextAreaEl);

let setValueTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 3);
setValueTextAreaCell.appendChild(TextArea.setValueTextAreaEl);

let callFunctionCellTextArea = testgrid.getCell(posConfig.Textarea.x,4);
callFunctionCellTextArea.appendChild(TextArea.onCallbackFunctionTextAreaEl);

let callbackTriggerCellTextArea = testgrid.getCell(posConfig.Textarea.x,5);
callbackTriggerCellTextArea.appendChild(TextArea.onCallbackTriggerTextArea.render());

let showTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 6);
showTextAreaCell.appendChild(TextArea.showTextAreaDiv);

let hideTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 7);
hideTextAreaCell.appendChild(TextArea.hideTextAreaDiv);

let disableTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 8);
disableTextAreaCell.appendChild(TextArea.disableTextAreaDiv);

let enableTextAreaCell = testgrid.getCell(posConfig.Textarea.x, 9);
enableTextAreaCell.appendChild(TextArea.enableTextAreaDiv);

//Table
let constructorTableCell = testgridTable.getCell(posConfigTable.Table.x, 1);
constructorTableCell.appendChild(Table.constructorTableEl);

let getValueTableCell = testgridTable.getCell(posConfigTable.Table.x, 2);
getValueTableCell.appendChild(Table.getValueTableEl);

let setValueTableCell = testgridTable.getCell(posConfigTable.Table.x, 3);
setValueTableCell.appendChild(Table.setValueTableEl);

let showTableCell = testgridTable.getCell(posConfigTable.Table.x, 4);
showTableCell.appendChild(Table.showTableDiv);

let hideTableCell = testgridTable.getCell(posConfigTable.Table.x, 5);
hideTableCell.appendChild(Table.hideTableDiv);

let rowCallBackTableCell = testgridTable.getCell(posConfigTable.Table.x, 6);
rowCallBackTableCell.appendChild(Table.rowCallBackTableEl);

//ColorPicker
let colorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 1);
colorPickerCell.appendChild(ColorPicker.canvas);
const locatorSatur = document.getElementById('full-option-colorpicker').getElementsByTagName("canvas")[0];
ColorPicker.getHexValue(locatorSatur, ColorPicker.textFields);
const locatorHue = document.getElementById('full-option-colorpicker').getElementsByTagName("canvas")[1];
ColorPicker.getHexValue(locatorHue, ColorPicker.textFields);

let getColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 2);
getColorPickerCell.appendChild(ColorPicker.getColor_ColorPickerEl);

let setColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 3);
setColorPickerCell.appendChild(ColorPicker.setColor_ColorPickerEl);

let showColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 4);
showColorPickerCell.appendChild(ColorPicker.showColorPickerDiv);

let hideColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 5);
hideColorPickerCell.appendChild(ColorPicker.hideColorPickerDiv);

let disableColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 6);
disableColorPickerCell.appendChild(ColorPicker.disableColorPickerDiv);

let enableColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 7);
enableColorPickerCell.appendChild(ColorPicker.enableColorPickerDiv);

let callbackColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 8);
callbackColorPickerCell.appendChild(ColorPicker.onCallbackFunctionEl);

let callbackTriggerColorPickerCell = testgrid.getCell(posConfig.Colorpicker.x, 9);
callbackTriggerColorPickerCell.appendChild(ColorPicker.onCallbackTriggerEl);

// // Field group
let constructorFieldGroupCell =  testgrid.getCell(posConfig.FieldGroup.x, 1)
constructorFieldGroupCell.appendChild(FieldGroup.constructorFieldGroupEl);
let setContentFieldGroupCell =  testgrid.getCell(posConfig.FieldGroup.x, 2)
setContentFieldGroupCell.appendChild(FieldGroup.setContentFieldGroupEl);
let getContentFieldGroupCell =  testgrid.getCell(posConfig.FieldGroup.x, 3)
getContentFieldGroupCell.appendChild(FieldGroup.getContentFieldGroupEl);
let setNameFieldGroupCell =  testgrid.getCell(posConfig.FieldGroup.x, 4)
setNameFieldGroupCell.appendChild(FieldGroup.setNameFieldGroupEl);
let getNameFieldGroupCell =  testgrid.getCell(posConfig.FieldGroup.x, 5)
getNameFieldGroupCell.appendChild(FieldGroup.getNameFieldGroupEl);
let setToggleFieldGroupCell =  testgrid.getCell(posConfig.FieldGroup.x, 6)
setToggleFieldGroupCell.appendChild(FieldGroup.setToggleFieldGroupEl);
let getToggleFieldGroupCell =  testgrid.getCell(posConfig.FieldGroup.x, 7)
getToggleFieldGroupCell.appendChild(FieldGroup.getToggleFieldGroupEl);


// Tab
let constructorTabsCell = testgridTab.getCell(posConfigTab.Tabs.x, 1);
constructorTabsCell.appendChild(Tabs.constructorTabsEl);
let addItemTabsCell = testgridTab.getCell(posConfigTab.Tabs.x, 2);
addItemTabsCell.appendChild(Tabs.addItemTabsEl);
let removeItemTabsCell = testgridTab.getCell(posConfigTab.Tabs.x, 3);
removeItemTabsCell.appendChild(Tabs.removeItemTabsEl);
let getItemTabsCell = testgridTab.getCell(posConfigTab.Tabs.x, 4);
getItemTabsCell.appendChild(Tabs.getItemTabsEl);
let getValueTabsCell = testgridTab.getCell(posConfigTab.Tabs.x, 5);
getValueTabsCell.appendChild(Tabs.getValueTabsEl);
let setValueTabsCell = testgridTab.getCell(posConfigTab.Tabs.x, 6);
setValueTabsCell.appendChild(Tabs.setValueTabsEl);
let disableItemTabsCell = testgridTab.getCell(posConfigTab.Tabs.x, 7);
disableItemTabsCell.appendChild(Tabs.disableItemTabsEl);
let enableItemTabsCell = testgridTab.getCell(posConfigTab.Tabs.x, 8);
enableItemTabsCell.appendChild(Tabs.enableItemTabsEl);

























































