import React from 'react';
import ReactDOM from 'react-dom';

import Button from './button';
import Label from './label';
import IconButton from './iconbutton';
import Multiplechoice from './multiplechoice';
import NotifyPopup from './notifypopup';
import Text from './text';
import Alert from './alert';
import Checkbox from './checkbox';
import Spinner from './spinner';
import Dropdown from './dropdown';
import RadioButton from './radiobutton';
import Table from './table';
import Dialog from './dialog';
import Datetime from './datetime';
import Textarea from './textarea';
import Tabs from './tabs';
import FieldGroup from './fieldgroup';
import Attachment  from './attachment';
import ColorPicker from './colorpicker';

let layout = document.getElementsByClassName("app-index-contents-gaia")[0]
kintone.events.on("app.record.index.show", function (ev) {
    const listComponents = [
        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Normal Button </div>, x: 0, y: 0 },
        { component: <Button.NormalButton />, x: 0, y: 1 },
        { component: <Button.NormalButtonSetTextMethod />, x: 0, y: 2 },
        { component: <Button.NormalButtonSetTypeMethod />, x: 0, y: 3 },
        { component: <Button.SubmitButtonSetTypeMethod />, x: 0, y: 4 },
        { component: <Button.NormalButtonShowMethod />, x: 0, y: 5 },
        { component: <Button.NormalButtonHideMethod />, x: 0, y: 6 },
        { component: <Button.NormalButtonDisableMethod />, x: 0, y: 7 },
        { component: <Button.NormalButtonEnableMethod />, x: 0, y: 8 },
        { component: <Button.NormalButtonOnCallMethod />, x: 0, y: 9 },
        { component: <Button.NormalButtonOnTriggerMethod />, x: 0, y: 10 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Submit Button </div>, x: 1, y: 0 },
        { component: <Button.SubmitButton />, x: 1, y: 1 },
        { component: <Button.SubmitButtonSetTypeSubmitMethod />, x: 1, y: 2 },
        { component: <Button.SubmitButtonSetTypeNormalMethod />, x: 1, y: 3 },
        { component: <Button.SubmitButtonSetTextMethod />, x: 1, y: 4 },
        { component: <Button.SubmitButtonShowMethod />, x: 1, y: 5 },
        { component: <Button.SubmitButtonHideMethod />, x: 1, y: 6 },
        { component: <Button.SubmitButtonDisableMethod />, x: 1, y: 7 },
        { component: <Button.SubmitButtonEnableMethod />, x: 1, y: 8 },
        { component: <Button.SubmitButtonOnCallMethod />, x: 1, y: 9 },
        { component: <Button.SubmitButtonOnTriggerMethod />, x: 1, y: 10 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Notify Popup </div>, x: 2, y: 0 },
        { component: <NotifyPopup.NotifySuccessRenderMethod />, x: 2, y: 1 },
        { component: <NotifyPopup.NotifyErrorRenderMethod />, x: 2, y: 2 },
        { component: <NotifyPopup.NotifyWithoutOptionMethod />, x: 2, y: 3 },
        { component: <NotifyPopup.NotifySetTextMethod />, x: 2, y: 4 },
        { component: <NotifyPopup.NotifySetTextBlankMethod />, x: 2, y: 5 },
        { component: <NotifyPopup.NotifySetTypeMethod />, x: 2, y: 6 },
        { component: <NotifyPopup.NotifyHideMethod />, x: 2, y: 7 },
        { component: <NotifyPopup.NotifyDisableMethod />, x: 2, y: 8 },
        { component: <NotifyPopup.NotifyEnableMethod />, x: 2, y: 9 },
        { component: <NotifyPopup.EnableNotifyEnableMethod />, x: 2, y: 10 },
        { component: <NotifyPopup.NotifyOnCallMethod />, x: 2, y: 11 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Multiple choice </div>, x: 3, y: 0 },
        { component: <Multiplechoice.MultipleRenderMethod />, x: 3, y: 1 },
        { component: <Multiplechoice.MultipleWithoutOptionMethod />, x: 3, y: 2 },
        { component: <Multiplechoice.MultipleOnlyValueMethod />, x: 3, y: 3 },
        { component: <Multiplechoice.MultipleAddMethod />, x: 3, y: 4 },
        { component: <Multiplechoice.MultipleAddWithoutValueMethod />, x: 3, y: 5 },
        { component: <Multiplechoice.InvisibleMultipleAddMethod />, x: 3, y: 6 },
        { component: <Multiplechoice.MultipleRemoveMethod />, x: 3, y: 7 },
        { component: <Multiplechoice.InvisibleMultipleRemoveMethod />, x: 3, y: 8 },
        { component: <Multiplechoice.MutipleGetItemsMethod />, x: 3, y: 9 },
        { component: <Multiplechoice.MutipleGetIndexMethod />, x: 3, y: 10 },
        { component: <Multiplechoice.MutipleSetValueMethod />, x: 3, y: 11 },
        { component: <Multiplechoice.MutipleGetInvisibleIndexMethod />, x: 3, y: 12 },
        { component: <Multiplechoice.MutipleGetValueMethod />, x: 3, y: 13 },
        { component: <Multiplechoice.MutipleDisableItemsMethod />, x: 3, y: 14 },
        { component: <Multiplechoice.MutipleEnableItemsMethod />, x: 3, y: 15 },
        { component: <Multiplechoice.MutipleShowMethod />, x: 3, y: 16 },
        { component: <Multiplechoice.MutipleHideMethod />, x: 3, y: 17 },
        { component: <Multiplechoice.MutipleEnableMethod />, x: 3, y: 18 },
        { component: <Multiplechoice.MutipleDisableMethod />, x: 3, y: 19 },
        { component: <Multiplechoice.MutipleOnCallMethod />, x: 3, y: 20 },
        { component: <Multiplechoice.InsvisibleMutipleEnableItemsMethod />, x: 3, y: 21 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Icon Button </div>, x: 4, y: 0 },
        { component: <IconButton.IconButtonRenderMethod />, x: 4, y: 1 },
        { component: <IconButton.IconButtonOnlyTypeMethod />, x: 4, y: 2 },
        { component: <IconButton.IconButtonOnlyColorMethod />, x: 4, y: 3 },
        { component: <IconButton.IconButtonOnlyDisableMethod />, x: 4, y: 4 },
        { component: <IconButton.IconButtonSetTypeMethod />, x: 4, y: 5 },
        { component: <IconButton.InvisibleIconSetTypeMethod />, x: 4, y: 6 },
        { component: <IconButton.IconButtonSetSizeMethod />, x: 4, y: 7 },
        { component: <IconButton.IconButtonSetShapeMethod />, x: 4, y: 8 },
        { component: <IconButton.IconButtonSetColorMethod />, x: 4, y: 9 },
        { component: <IconButton.IconButtonShowMethod />, x: 4, y: 10 },
        { component: <IconButton.IconButtonHideMethod />, x: 4, y: 11 },
        { component: <IconButton.IconButtonDisableMethod />, x: 4, y: 12 },
        { component: <IconButton.IconButtonEnableMethod />, x: 4, y: 13 },
        { component: <IconButton.IconButtonOnCallMethod />, x: 4, y: 14 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Label </div>, x: 5, y: 0 },
        { component: <Label.LabelRender />, x: 5, y: 1 },
        { component: <Label.LabelNoOption />, x: 5, y: 2 },
        { component: <Label.LabelOnlyText />, x: 5, y: 3 },
        { component: <Label.LabelOnlyRequired />, x: 5, y: 4 },
        { component: <Label.LabelOnlyDisabled />, x: 5, y: 5 },
        { component: <Label.LabelOnlyVisible />, x: 5, y: 6 },
        { component: <Label.LabelSetTextMethod />, x: 5, y: 7 },
        { component: <Label.LabelSetTextXSSMethod />, x: 5, y: 8 },
        { component: <Label.LabelInvisibleSetTextMethod />, x: 5, y: 9 },
        { component: <Label.LabelSetTextBlankMethod />, x: 5, y: 10 },
        { component: <Label.LabelSetRequireMethod />, x: 5, y: 11 },
        { component: <Label.LabelInvisibleSetRequireMethod />, x: 5, y: 12 },
        { component: <Label.LabelShowMethod />, x: 5, y: 13 },
        { component: <Label.LabelHideMethod />, x: 5, y: 14 },
        { component: <Label.LabelDisableMethod />, x: 5, y: 15 },
        { component: <Label.LabelEnableMethod />, x: 5, y: 16 },
        { component: <Label.LabelOnCallMethod />, x: 5, y: 17 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Alert </div>, x: 6, y: 0 },
        { component: <Alert.ErrorAlert/>, x: 6, y: 1 },
        { component: <Alert.SuccessAlert />, x: 6, y: 2 },
        { component: <Alert.NoOptionAlert />, x: 6, y: 3 },
        { component: <Alert.FullOptionAlert />, x: 6, y: 4 },
        { component: <Alert.OnlyTextAlert />, x: 6, y: 5 },
        { component: <Alert.OnlyTypeAlert />, x: 6, y: 6 },
        // { component: <Alert.AlertOnlyDisable />, x: 6, y: 6 },
        { component: <Alert.OnlyVisibleAlert />, x: 6, y: 7 },
        { component: <Alert.SetTextAlert />, x: 6, y: 8 },
        { component: <Alert.SetTextXSSAlert />, x: 6, y: 9 },
        { component: <Alert.SetTextInvisibleAlert />, x: 6, y: 10 },
        { component: <Alert.SetTypeAlert />, x: 6, y: 11 },
        { component: <Alert.SetTypeInvisibleAlert />, x: 6, y: 12 },
        { component: <Alert.HideAlert />, x: 6, y: 13 },
        { component: <Alert.ShowAlert />, x: 6, y: 14 },
        // { component: <Alert.AlertDisableMethod />, x: 6, y: 15 },
        // { component: <Alert.AlertEnableMethod />, x: 6, y: 16 },
        { component: <Alert.OnCallBackFunctionAlert />, x: 6, y: 15 },
        { component: <Alert.OnCallBackTriggerAlert />, x: 6, y: 16 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Text </div>, x: 7, y: 0 },
        { component: <Text.ConstructorText />, x: 7, y: 1 },
        { component: <Text.SetValueText />, x: 7, y: 2 },
        { component: <Text.GetValueText />, x: 7, y: 3 },
        { component: <Text.DisableText />, x: 7, y: 4 },
        { component: <Text.EnableText />, x: 7, y: 5 },
        { component: <Text.ShowText />, x: 7, y: 6 },
        { component: <Text.HideText />, x: 7, y: 7 },
        { component: <Text.OnCallBackFunctionText />, x: 7, y: 8 },
        { component: <Text.OnCallBackTriggerText />, x: 7, y: 9 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Checkbox </div>, x: 8, y: 0 },
        { component: <Checkbox.CheckboxRenderMethod />, x: 8, y: 1 },
        { component: <Checkbox.CheckboxWithoutOptionMethod />, x: 8, y: 2 },
        { component: <Checkbox.CheckboxOnlyOptionValueMethod />, x: 8, y: 3 },
        { component: <Checkbox.CheckboxAddItemsMethod />, x: 8, y: 4 },
        { component: <Checkbox.CheckboxRemoveItemsMethod />, x: 8, y: 5 },
        { component: <Checkbox.CheckboxGetItemsMethod />, x: 8, y: 6 },
        { component: <Checkbox.CheckboxGetItemsIndexMethod />, x: 8, y: 7 },
        { component: <Checkbox.CheckboxGetValueMethod />, x: 8, y: 8 },
        { component: <Checkbox.CheckboxSetVisibleValueMethod />, x: 8, y: 9 },
        { component: <Checkbox.CheckboxSetInVisibleValueMethod />, x: 8, y: 10 },
        { component: <Checkbox.CheckboxDisableItemsMethod />, x: 8, y: 11 },
        { component: <Checkbox.InvisibleCheckboxDisableItemsMethod />, x: 8, y: 12 },
        { component: <Checkbox.CheckboxEnableItemsMethod />, x: 8, y: 13 },
        { component: <Checkbox.CheckboxShowMethod />, x: 8, y: 14 },
        { component: <Checkbox.CheckboxHideMethod />, x: 8, y: 15 },
        { component: <Checkbox.InvisibleCheckboxHideMethod />, x: 8, y: 16 },
        { component: <Checkbox.CheckboxDisableMethod />, x: 8, y: 17 },
        { component: <Checkbox.CheckboxEnableMethod />, x: 8, y: 18 },
        { component: <Checkbox.CheckboxOncallMethod />, x: 8, y: 19 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Dropdown </div>, x: 9, y: 0 },
        { component: <Dropdown.DropdownRender />, x: 9, y: 1 },
        { component: <Dropdown.DropdownEmptyRender />, x: 9, y: 2 },
        { component: <Dropdown.DropdownWithoutOptionMethod />, x: 9, y: 3 },
        { component: <Dropdown.DropdownDefaultSelectedRender />, x: 9, y: 4 },
        { component: <Dropdown.DropdownAddValueMethod />, x: 9, y: 5 },
        { component: <Dropdown.InvisibleDropdownAddValueMethod />, x: 9, y: 6 },
        { component: <Dropdown.DropdownAddValueInExistListMethod />, x: 9, y: 7 },
        { component: <Dropdown.RemoveItemMethod />, x: 9, y: 8 },
        { component: <Dropdown.RemoveEmptyItemMethod />, x: 9, y: 9 },
        { component: <Dropdown.GetItemMethod />, x: 9, y: 10 },
        { component: <Dropdown.GetItemInvisibleDropdownMethod />, x: 9, y: 11 },
        { component: <Dropdown.GetValueMethod />, x: 9, y: 12 },
        { component: <Dropdown.GetValueInvisibleDropdownMethod />, x: 9, y: 13 },
        { component: <Dropdown.SetValueMethod />, x: 9, y: 14 },
        { component: <Dropdown.SetValueEmptyListMethod />, x: 9, y: 15 },
        { component: <Dropdown.DisableItemEnableMethod />, x: 9, y: 16 },
        { component: <Dropdown.DisableItemDisableMethod />, x: 9, y: 17 },
        { component: <Dropdown.EnableItemDisableMethod />, x: 9, y: 18 },
        { component: <Dropdown.EnableItemEnableMethod />, x: 9, y: 19 },
        { component: <Dropdown.ShowItemMethod />, x: 9, y: 20 },
        { component: <Dropdown.HideItemMethod />, x: 9, y: 21 },
        { component: <Dropdown.DisableItemMethod />, x: 9, y: 22 },
        { component: <Dropdown.EnableItemMethod />, x: 9, y: 23 },
        { component: <Dropdown.DropdownOnCallMethod />, x: 9, y: 24 },
        { component: <Dropdown.DropdownHoverItem />, x: 9, y: 25 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Radio Button </div>, x: 10, y: 0 },
        { component: <RadioButton.RadioRender />, x: 10, y: 1 },
        { component: <RadioButton.RadioAddMethod />, x: 10, y: 2 },
        { component: <RadioButton.RadioRemoveMethod />, x: 10, y: 3 },
        { component: <RadioButton.RadioGetMethod />, x: 10, y: 4 },
        { component: <RadioButton.RadioGetValueMethod />, x: 10, y: 5 },
        { component: <RadioButton.InvisibleRadioGetValueMethod />, x: 10, y: 6 },
        { component: <RadioButton.RadioSetValueMethod />, x: 10, y: 7 },
        { component: <RadioButton.RadioDisableItemsEnableMethod />, x: 10, y: 8 },
        { component: <RadioButton.RadioDisableItemsDisableMethod />, x: 10, y: 9 },
        { component: <RadioButton.InvisibleRadioDisableItemsMethod />, x: 10, y: 10 },
        { component: <RadioButton.RadioEnableItemsDisableMethod />, x: 10, y: 11 },
        { component: <RadioButton.RadioEnableItemsEnableMethod />, x: 10, y: 12 },
        { component: <RadioButton.RadioShowMethod />, x: 10, y: 13 },
        { component: <RadioButton.RadioHideMethod />, x: 10, y: 14 },
        { component: <RadioButton.RadioDisableMethod />, x: 10, y: 15 },
        { component: <RadioButton.RadioEnableMethod />, x: 10, y: 16 },
        { component: <RadioButton.RadioOnCallMethod />, x: 10, y: 17 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Spinner </div>, x: 11, y: 0 },
        { component: <Spinner.ConstructorSpinner />, x: 11, y: 1 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Dialog </div>, x: 12, y: 0 },
        { component: <Dialog.DialogFUllOption />, x: 12, y: 1 },
        { component: <Dialog.DialogSetHeaderExistingHeaderMethod />, x: 12, y: 2 },
        { component: <Dialog.DialogSetHeaderWithComponents />, x: 12, y: 3 },
        { component: <Dialog.DialogGetHeaderString />, x: 12, y: 4 },
        { component: <Dialog.DialogGetHeaderReactElements />, x: 12, y: 5 },
        { component: <Dialog.DialogSetContentExistingContentMethod />, x: 12, y: 6 },
        { component: <Dialog.DialogSetContentWithComponents />, x: 12, y: 7 },
        { component: <Dialog.DialogGetContentString />, x: 12, y: 8 },
        { component: <Dialog.DialogGetContentReactElements />, x: 12, y: 9 },
        { component: <Dialog.DialogSetFooterExistingFooterMethod />, x: 12, y: 10 },
        { component: <Dialog.DialogSetFooterWithComponents />, x: 12, y: 11 },
        { component: <Dialog.DialogGetFooterString />, x: 12, y: 12 },
        { component: <Dialog.DialogGetFooterReactElements />, x: 12, y: 13 },
        { component: <Dialog.DialogShowInvisibleDialog />, x: 12, y: 14 },
        { component: <Dialog.DialogHidevisibleDialog />, x: 12, y: 15 },
        { component: <Dialog.DialogShowCloseButton />, x: 12, y: 16 },
        { component: <Dialog.DialogHideCloseButton />, x: 12, y: 17 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Textarea </div>, x: 13, y: 0 },
        { component: <Textarea.ConstructorTextArea/>, x: 13, y: 1 },
        { component: <Textarea.GetValueTextArea/>, x: 13, y: 2 },
        { component: <Textarea.SetValueTextArea/>, x: 13, y: 3 },
        { component: <Textarea.OnCallBackFunctionTextArea/>, x: 13, y: 4 },
        { component: <Textarea.OnCallBackTriggerTextArea/>, x: 13, y: 5 },
        { component: <Textarea.ShowTextArea/>, x: 13, y: 6 },
        { component: <Textarea.HideTextArea/>, x: 13, y: 7 },
        { component: <Textarea.DisableTextArea/>, x: 13, y: 8 },
        { component: <Textarea.EnableTextArea/>, x: 13, y: 9 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Datetime </div>, x: 14, y: 0 },
        { component: <Datetime.ConstructorDatetime />, x: 14, y: 1 },
        { component: <Datetime.ConstructorDate />, x: 14, y: 2 },
        { component: <Datetime.ConstructorTime />, x: 14, y: 3 },
        { component: <Datetime.GetValueDate />, x: 14, y: 4 },
        { component: <Datetime.GetValueTime />, x: 14, y: 5 },
        { component: <Datetime.GetValueDatetime />, x: 14, y: 6 },
        { component: <Datetime.SetValueDate />, x: 14, y: 7 },
        { component: <Datetime.SetValueTime />, x: 14, y: 8 },
        { component: <Datetime.SetValueDatetime />, x: 14, y: 9 },
        { component: <Datetime.GetLocaleDate />, x: 14, y: 10 },
        { component: <Datetime.GetLocaleTime />, x: 14, y: 11 },
        { component: <Datetime.GetLocaleDatetime />, x: 14, y: 12 },
        { component: <Datetime.SetLocaleDate />, x: 14, y: 13 },
        { component: <Datetime.SetLocaleTime />, x: 14, y: 14 },
        { component: <Datetime.SetLocaleDatetime />, x: 14, y: 15 },
        { component: <Datetime.ShowInvisibleDatetime />, x: 14, y: 16 },
        { component: <Datetime.HideVisibleDatetime />, x: 14, y: 17 },
        { component: <Datetime.DisableEnabledDatetime />, x: 14, y: 18 },
        { component: <Datetime.EnableDisabledDatetime />, x: 14, y: 19 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Attachment </div>, x: 15, y: 0 },
        { component: <Attachment.ConstructorAttachment/>, x: 15, y: 1 },
        { component: <Attachment.SetFilesAttachment/>, x: 15, y: 2 },
        { component: <Attachment.GetFilesAttachment/>, x: 15, y: 3 },
        // { component: <Attachment.SetDropZoneTextAttachment/>, x: 15, y: 4 },
        { component: <Attachment.SetBrowseButtonTextAttachment/>, x: 15, y: 4 },
        { component: <Attachment.SetFileLimitTextAttachment/>, x: 15, y: 5 },
        { component: <Attachment.SetErrorMessageAttachment/>, x: 15, y: 6 },
        { component: <Attachment.OnCallbackAttachment/>, x: 15, y: 7 },
        { component: <Attachment.ShowHideAttachment/>, x: 15, y: 8 },

        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> ColorPicker </div>, x: 16, y: 0 },
        { component: <ColorPicker.ConstructorColorPicker/>, x: 16, y: 1 },
        { component: <ColorPicker.SetColorColorPicker/>, x: 16, y: 2 },
        { component: <ColorPicker.GetColorColorPicker/>, x: 16, y: 3 },
        { component: <ColorPicker.OnCallbackColorPicker/>, x: 16, y: 4 },
        { component: <ColorPicker.ShowColorPicker/>, x: 16, y: 5 },
        { component: <ColorPicker.HideColorPicker/>, x: 16, y: 6 },
        { component: <ColorPicker.DisableColorPicker/>, x: 16, y: 7 },
        { component: <ColorPicker.EnableColorPicker/>, x: 16, y: 8 },
      
    ];

    
    const listComponentsTable = [
        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Table </div>, x: 0, y: 0 },
        { component: <Table.TableRenderMethod />, x: 0, y: 1 },
        { component: <Table.TableWorkingMethod />, x: 0, y: 2 },
        { component: <Table.TableGetValueMethod />, x: 0, y: 3 },
        { component: <Table.TableSetValueMethod />, x: 0, y: 4 },
        { component: <Table.TableHideMethod />, x: 0, y: 5 },
        { component: <Table.TableShowMethod />, x: 0, y: 6 },
        { component: <Table.TableOnCallCellChangeMethod />, x: 0, y: 7 },
    ];

    const listComponentTabs = [
        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> Tabs </div>, x: 0, y: 0 },
        { component: <Tabs.ConstructorTabs />, x: 0, y: 1 },
        { component: <Tabs.AddItemTabs />, x: 0, y: 2 },
        { component: <Tabs.RemoveItemTabs />, x: 0, y: 3 },
        { component: <Tabs.GetItemTabs />, x: 0, y: 4 },
        { component: <Tabs.GetValueTabs />, x: 0, y: 5 },
        { component: <Tabs.SetValueTabs />, x: 0, y: 6 },
        { component: <Tabs.DisableItemTabs />, x: 0, y: 7 },
        { component: <Tabs.EnableItemTabs />, x: 0, y: 8 },
    ];

    const listComponentFieldGroup = [
        { component: <div style={{ color: 'red', fontWeight: 'bold' }}> FieldGroup </div>, x: 0, y: 0 },
        { component: <FieldGroup.ConstructorFieldGroup />, x: 0, y: 1 },
        { component: <FieldGroup.SetContentFieldGroup />, x: 0, y: 2 },
        { component: <FieldGroup.GetContentFieldGroup />, x: 0, y: 3 },
        { component: <FieldGroup.SetNameFieldGroup />, x: 0, y: 4 },
        { component: <FieldGroup.GetNameFieldGroup />, x: 0, y: 5 },
        { component: <FieldGroup.SetToggleFieldGroup />, x: 0, y: 6 },
        { component: <FieldGroup.GetToggleFieldGroup />, x: 0, y: 7 },
      
    ];

    var kintoneSpaceElement = layout

    //initialize test grid
    var testgrid = new window.SDTestGrid({
        rowCount: 17,
        columnCount: 26,
        classNames: 'bordered_table',
    });

    var testgridTable = new window.SDTestGrid({
        rowCount: 1,
        columnCount: 9,
        classNames: 'bordered_table_1',
    });

    
    var testgridTabs = new window.SDTestGrid({
        rowCount: 1,
        columnCount: 9,
        classNames: 'bordered_table_2',
    });

    var testgridFieldGroup = new window.SDTestGrid({
        rowCount: 1,
        columnCount: 9,
        classNames: 'bordered_table_3',
    });

    function handleCell(table) {
        for (let i = 0; i < table.rowCount; i++) {
            for (let j = 0; j < table.columnCount; j++) {
                let cell = table.getCell(i, j);
                if (j === 0) {
                    cell.style.backgroundColor = "#c6ecc6";
                } else {
                    cell.style.backgroundColor = "#ffffff";
                }
            }
        }
    }
    //render and append to kintone space element
    kintoneSpaceElement.append(testgrid.render());
    kintoneSpaceElement.append(testgridTable.render());
    kintoneSpaceElement.append(testgridTabs.render());
    kintoneSpaceElement.append(testgridFieldGroup.render());

    function render(list, tableGrid) {
        list.forEach((item, key) => {
            handleCell(tableGrid)
            ReactDOM.render(item.component, tableGrid.getCell(item.x, item.y));
        });
    }
    render(listComponents, testgrid);
    render(listComponentsTable, testgridTable);
    render(listComponentTabs, testgridTabs);
    render(listComponentFieldGroup, testgridFieldGroup);
});