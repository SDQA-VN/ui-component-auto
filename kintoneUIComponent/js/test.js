// setHeader() - with components
let dialogComponentsDiv = document.createElement('div');
let dialog_normal_button = new kintoneUIComponent.Button({
    text: 'Normal Button',
    type: 'normal',
    isDisabled: false,
    isVisible: true
});
let dialog_submit_button = new kintoneUIComponent.Button({
    text: 'Submit Button',
    type: 'submit',
    isDisabled: false,
    isVisible: true
});
let dialog_text_box = new kintoneUIComponent.Text({
    value: 'Text Box',
    isDisabled: false,
    isVisible: true
});
let dialog_labelUI = new kintoneUIComponent.Label({
    text: 'Label',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});
let dialog_alert = new kintoneUIComponent.Alert({
    text: 'Alert',
    type: 'error',
    isDisabled: false,
    isVisible: true
});
let dialog_dropdown = new kintoneUIComponent.Dropdown({
    items: [
        {
            label: 'check UI Default Item',
            value: 'check UI Default Item',
            isDisabled: true
        },
        {
            label: 'check UI Item 2',
            value: 'check UI Item 2',
            isDisabled: false
        },
        {
            label: 'check UI Item 3',
            value: 'check UI Item 3',
            isDisabled: false
        },
        {
            label: 'check UI Item 4',
            value: 'check UI Item 4',
            isDisabled: false
        },
        {
            label: 'check UI Item 5',
            value: 'check UI Item 5',
            isDisabled: false
        },
        {
            label: 'check UI Item 6',
            value: 'check UI Item 6',
            isDisabled: false
        },
        {
            label: 'check UI Item 7',
            value: 'check UI Item 7',
            isDisabled: false
        },
        {
            label: 'check UI Item 8',
            value: 'check UI Item 8',
            isDisabled: false
        },
        {
            label: 'check UI Item 9',
            value: 'check UI Item 9',
            isDisabled: false
        },
        {
            label: 'check UI Item 10',
            value: 'check UI Item 10',
            isDisabled: false
        },
        {
            label: 'check UI Item 11',
            value: 'check UI Item 11',
            isDisabled: false
        },
    ],
    value: 'check UI Item 2'
});
let dialog_radio_button = new kintoneUIComponent.RadioButton({
    name: "UI_radioBtn",
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: false
        },
        {
            label: 'Lemon',
            value: 'Lemon',
            isDisabled: true
        },
    ],
    value: 'Lemon',
    isDisabled: false,
    isVisible: true
});
let dialog_multiple_choice = new kintoneUIComponent.MultipleChoice({
    items: [
        {
            label: 'CFO_Default_MulChoice_Item',
            value: 'CFO_Default_MulChoice_Item',
            isDisabled: true
        },
        {
            label: 'CFO_MulChoice_Item_2',
            value: 'CFO_MulChoice_Item_2',
            isDisabled: false
        }
    ],
    value: ['CFO_Default_MulChoice_Item'],
    isDisabled: false,
    isVisible: true
});
let dialog_check_box = new kintoneUIComponent.CheckBox({
    items: [
        {
            label: 'checkUIcheckbox Default Item',
            value: 'checkUIcheckbox Default Item',
            isDisabled: false
        },
        {
            label: 'checkUIcheckbox Item 2',
            value: 'checkUIcheckbox Item 2',
            isDisabled: false
        }
    ],
    value: ['checkUIcheckbox Default Item'],
    isDisabled: false,
    isVisible: true
});
let dialog_icon_button = new kintoneUIComponent.IconButton({
    type: 'insert',
    color: 'blue',
    size: 'small',
    isDisabled: false,
    isVisible: true
});
dialog_normal_buttonEl = dialog_normal_button.render();
dialog_submit_buttonEl = dialog_submit_button.render();
dialog_text_boxEl = dialog_text_box.render();
dialog_labelUIEl = dialog_labelUI.render();
dialog_alertEl = dialog_alert.render();
dialog_dropdownEl = dialog_dropdown.render();
dialog_radio_buttonEl = dialog_radio_button.render();
dialog_multiple_choiceEl = dialog_multiple_choice.render();
dialog_check_boxEl = dialog_check_box.render();
dialog_icon_buttonEl = dialog_icon_button.render();
dialogComponentsDiv.append(
    dialog_normal_buttonEl,
    dialog_submit_buttonEl,
    dialog_text_boxEl,
    dialog_labelUIEl,
    dialog_alertEl,
    dialog_dropdownEl,
    dialog_radio_buttonEl,
    dialog_multiple_choiceEl,
    dialog_check_boxEl,
    dialog_icon_buttonEl,
);

var myDialog = new kintoneUIComponent.Dialog({
    header: dialog_dropdown.render(),
    content: "This is content",
    footer: dialogComponentsDiv,
    isVisible: true,
    showCloseButton: true
});

var body = document.getElementsByTagName("BODY")[0];
body.appendChild(myDialog.render());