import { FieldGroup,Text, DateTime, Button, Attachment,ColorPicker, CheckBox, Dropdown, IconButton, Label, MultipleChoice, Alert, RadioButton, TextArea, Table, createTableCell} from '@kintone/kintone-ui-component/esm/js';
//constructor FieldGroup
let fieldGroupContent = document.createElement('div');
fieldGroupContent.setAttribute("id", "component-container-fieldgroup");
let alertFieldGroup = new Alert({
    text: 'successAlert',
    type: 'success',
    isVisible: true
});

let attachmentFieldGroup = new Attachment({ files: [{ name: 'test_1', size: 12345 }] });

let normalButtonFieldGroup = new Button({
    text: 'Normal',
    type: 'normal'
});
let submitButtonFieldGroup = new Button({
    text: 'Submit',
    type: 'submit'
});

let checkboxFieldGroup = new CheckBox({
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
        },
    ],
    value: ['Orange', 'Banana']
});

let colorPickerFieldGroup = new ColorPicker({ color: '#FF0000' });
let dateTimeFieldGroup = new DateTime({ type: 'datetime', locale: 'en' });

const textDOM = new Text({ value: "12345" });
const fieldGroupDOM = new FieldGroup({
    content: textDOM.render(),
    name: 'Group',
    toggle: 'expand'
})

var dropdownFieldGroup = new Dropdown({
    items: [
        {
            label: 'Orange',
            value: 'Orange',
            isDisabled: true
        },
        {
            label: 'Banana',
            value: 'Banana',
            isDisabled: false
        }
    ],
    value: 'Banana'
});

var iconBtnFieldGroup = new IconButton({ type: 'insert' });
var labelFieldGroup = new Label({ text: 'label' });

var multipleChoiceFieldGroup = new MultipleChoice({
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
        },
    ],
    value: ['Orange', 'Banana']
});

var radioButtonFieldGroup = new RadioButton({
    name: "fruit",
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
        },
    ],
    value: 'Banana'
});

var initialData = [
    {
        text: { value: 'text field' },
        text1: { value: 'text field 1' },
        text2: { value: 'text field 2' },
        // initial data of radio buttons
        fruit: {
            name: 'fruit_0',
            items: [
                {
                    label: 'Orange',
                    value: 'Orange',
                    isDisabled: false
                },
                {
                    label: 'Banana',
                    value: 'Banana',
                    isDisabled: false
                },
                {
                    label: 'Lemon',
                    value: 'Lemon',
                    isDisabled: true
                },
            ],
            value: 'Banana'
        },
        // initial data of multiple choices
        colors: {
            items: [
                {
                    label: 'Red',
                    value: 'red',
                    isDisabled: false
                },
                {
                    label: 'Green',
                    value: 'green',
                    isDisabled: false
                },
                {
                    label: 'Blue',
                    value: 'blue',
                    isDisabled: true
                },
            ],
            value: ['red']
        },
        // initial data of checkbox
        vegetables: {
            items: [
                {
                    label: 'Potato',
                    value: 'potato',
                    isDisabled: false
                },
                {
                    label: 'Celery',
                    value: 'celery',
                    isDisabled: false
                },
                {
                    label: 'Carrot',
                    value: 'carrot',
                    isDisabled: true
                },
            ],
            value: ['potato']
        },
        // initial data of dropdown
        toys: {
            items: [
                {
                    label: 'Cars',
                    value: 'cars',
                    isDisabled: false
                },
            ],
        },
        label: {
            text: 'Name',
            textColor: '#e74c3c',
            backgroundColor: 'yellow',
            isRequired: true
        },
        iconBtn: {
            type: 'insert',
            color: 'blue',
            size: 'small'
        },
        alert: {
            text: 'Network error',
            type: 'error'
        }
    },
];

// default row data of a table, this data will be used to create new row
var defaultRowData = {
    text: { value: 'text field' },
    text1: { value: 'text field 1' },
    text2: { value: 'text field 2' },
    // default data of radio buttons
    fruit: {
        name: 'fruit_0',
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
            },
        ],
        value: 'Banana'
    },
    // default data of multiple choices
    colors: {
        items: [
            {
                label: 'Red',
                value: 'red',
                isDisabled: false
            },
            {
                label: 'Green',
                value: 'green',
                isDisabled: true
            },
            {
                label: 'Blue',
                value: 'blue',
                isDisabled: true
            },
        ],
        value: ['red']
    },
    // default data of checkbox
    vegetables: {
        items: [
            {
                label: 'Potato',
                value: 'potato',
                isDisabled: false
            },
            {
                label: 'Celery',
                value: 'celery',
                isDisabled: true
            },
            {
                label: 'Carrot',
                value: 'carrot',
                isDisabled: true
            },
        ],
        value: ['potato', 'celery']
    },
    // default data of dropdown
    toys: {
        items: [
            {
                label: 'Cars',
                value: 'cars',
                isDisabled: false
            },
            {
                label: 'Robots',
                value: 'robots',
                isDisabled: false
            },
            {
                label: 'Animals',
                value: 'animals',
                isDisabled: true
            },
        ],
        value: 'cars'
    },
    label: {
        text: 'Name',
        textColor: '#e74c3c',
        backgroundColor: 'yellow',
        isRequired: true
    },
    iconBtn: {
        type: 'insert',
        color: 'blue',
        size: 'small'
    },
    alert: {
        text: 'Network error',
        type: 'error'
    }
};

// return this data to override default row data onRowAdd
var overriddenRowData = {
    text: { value: 'overwritten field value' },
    text1: { value: 'overwritten field1 value' },
    text2: { value: 'overwritten field2 value' },
    // overriden data of radio buttons
    fruit: {
        name: 'fruit',
        items: [
            {
                label: 'Orange',
                value: 'Orange',
                isDisabled: true
            },
            {
                label: 'Banana',
                value: 'Banana',
                isDisabled: false
            },
            {
                label: 'Lemon',
                value: 'Lemon',
                isDisabled: false
            },
        ],
        value: 'Banana'
    },
    // overriden data of multiple choices
    colors: {
        items: [
            {
                label: 'Red',
                value: 'red',
                isDisabled: false
            },
            {
                label: 'Green',
                value: 'green',
                isDisabled: true
            },
            {
                label: 'Blue',
                value: 'blue',
                isDisabled: true
            },
        ],
        value: ['red']
    },
    // overriden data of checkbox
    vegetables: {
        items: [
            {
                label: 'Potato',
                value: 'potato',
                isDisabled: false
            },
            {
                label: 'Celery',
                value: 'celery',
                isDisabled: true
            },
            {
                label: 'Carrot',
                value: 'carrot',
                isDisabled: false
            },
        ],
        value: ['potato', 'celery']
    },
    // overriden data of dropdown
    toys: {
        items: [
            {
                label: 'Cars',
                value: 'cars',
                isDisabled: false
            },
            {
                label: 'Robots',
                value: 'robots',
                isDisabled: false
            },
            {
                label: 'Animals',
                value: 'animals',
                isDisabled: true
            },
        ],
        value: 'cars'
    },
    label: {
        text: 'Name',
        textColor: '#e74c3c',
        backgroundColor: 'yellow',
        isRequired: true
    },
    iconBtn: {
        type: 'insert',
        color: 'blue',
        size: 'small'
    },
    alert: {
        text: 'Network error',
        type: 'error'
    }
};

var tableFieldGroup = new Table({
    // initial table data
    data: initialData,
    // default row data on row add
    defaultRowData: defaultRowData,
    onRowAdd: function (e) {
        console.log('table.onAdd', e);
        // if onRowAdd does not return anything, defaultRowData will be used to create new table row
        // if below row data is returned, it will override defaultRowData to be used to create new table row
        return JSON.parse(JSON.stringify(overriddenRowData));
    },
    columns: [
        {
            header: 'Text',
            cell: function () { return createTableCell('text', 'text') }
        },
        {
            header: 'Radio',
            cell: function () { return createTableCell('radio', 'fruit') }
        },
        {
            header: 'Multichoice',
            cell: function () { return createTableCell('multichoice', 'colors') }
        },
        {
            header: 'Checkbox',
            cell: function () { return createTableCell('checkbox', 'vegetables') }
        },
        {
            header: 'Dropdown',
            cell: function () { return createTableCell('dropdown', 'toys') }
        },
        {
            header: 'Label',
            cell: function () { return createTableCell('label', 'label') }
        },
        {
            header: 'Icon Button',
            cell: function () {
                return createTableCell('icon', 'iconBtn', {
                    onClick: function (event) {
                        alert('icon button clicked')
                    }
                })
            }
        },
        {
            header: 'Alert',
            cell: function () { return createTableCell('alert', 'alert') }
        },
    ]
});

var textFieldGroup = new Text({ value: '12345' });
var textAreaFieldGroup = new TextArea({ value: 'textarea' });

fieldGroupContent.appendChild(alertFieldGroup.render());
fieldGroupContent.appendChild(attachmentFieldGroup.render());
fieldGroupContent.appendChild(normalButtonFieldGroup.render());
fieldGroupContent.appendChild(submitButtonFieldGroup.render());
fieldGroupContent.appendChild(checkboxFieldGroup.render());
fieldGroupContent.appendChild(colorPickerFieldGroup.render());
fieldGroupContent.appendChild(dateTimeFieldGroup.render());
fieldGroupContent.appendChild(dropdownFieldGroup.render());
fieldGroupContent.appendChild(fieldGroupDOM.render());
fieldGroupContent.appendChild(iconBtnFieldGroup.render());
fieldGroupContent.appendChild(labelFieldGroup.render());
fieldGroupContent.appendChild(multipleChoiceFieldGroup.render());
fieldGroupContent.appendChild(radioButtonFieldGroup.render());
fieldGroupContent.appendChild(tableFieldGroup.render());
fieldGroupContent.appendChild(textFieldGroup.render());
fieldGroupContent.appendChild(textAreaFieldGroup.render());

let constructorFieldGroup = new FieldGroup({
    content: fieldGroupContent,
    name: 'Group',
    toggle: 'collapse'
});
let constructorFieldGroupEl = document.createElement('div');
constructorFieldGroupEl.setAttribute("id", "constructor-fieldgroup");
constructorFieldGroupEl.appendChild(constructorFieldGroup.render());

// setContent()
let labelBtn_setContent = new Label({ text:'Name'});

let setContentFieldGroup = new FieldGroup({
    content: labelBtn_setContent.render(),
    name: 'Group',
    toggle: 'expand'
})
let setContentFieldGroupEl = document.createElement('div');
setContentFieldGroupEl.setAttribute("id", "set-content-fieldgroup");
setContentFieldGroupEl.appendChild(setContentFieldGroup.render());
let buttonSetContentFieldGroup = document.createElement('button');
buttonSetContentFieldGroup.innerHTML = 'Set Content FieldGroup';
buttonSetContentFieldGroup.addEventListener('click', function () {
    let text_setContent = new Text({ value: "12345" });
    setContentFieldGroup.setContent(text_setContent.render());
});
setContentFieldGroupEl.appendChild(buttonSetContentFieldGroup);

// getContent()
let radioBtn_getContent = new Label({text: 'Name'});

let getContentFieldGroup = new FieldGroup({
    content: radioBtn_getContent.render(),
    name: 'Group',
    toggle: 'expand'
})
let getContentFieldGroupEl = document.createElement('div');
getContentFieldGroupEl.setAttribute("id", "get-content-fieldgroup");
getContentFieldGroupEl.appendChild(getContentFieldGroup.render());
let buttonGetContentFieldGroup = document.createElement('button');
buttonGetContentFieldGroup.innerHTML = 'Get Content FieldGroup';
buttonGetContentFieldGroup.addEventListener('click', function () {
    let res = getContentFieldGroup.getContent();
    let getContentCheckFieldGroupEl = document.createElement('div');
    getContentCheckFieldGroupEl.setAttribute("id", "get-content-check-fieldgroup");
    getContentFieldGroupEl.appendChild(res);
});
getContentFieldGroupEl.appendChild(buttonGetContentFieldGroup);

// setName()
let radioBtn_setName = new RadioButton({
    items: [{ label: 'Orange', value: 'orange' }, { label: 'Banana', value: 'banana' }],
    value: 'orange',
    name: 'Fruit2'
});

let setNameFieldGroup = new FieldGroup({
    content: radioBtn_setName.render(),
    name: 'Group',
    toggle: 'expand'
})
let setNameFieldGroupEl = document.createElement('div');
setNameFieldGroupEl.setAttribute("id", "set-name-fieldgroup");
setNameFieldGroupEl.appendChild(setNameFieldGroup.render());
let buttonSetNameFieldGroup = document.createElement('button');
buttonSetNameFieldGroup.innerHTML = 'Set Name FieldGroup';
buttonSetNameFieldGroup.addEventListener('click', function () {
    setNameFieldGroup.setName('Set Name Success');
});
setNameFieldGroupEl.appendChild(buttonSetNameFieldGroup);

// getName()
let radioBtn_getName = new RadioButton({
    items: [{ label: 'Orange', value: 'orange' }, { label: 'Banana', value: 'banana' }],
    value: 'orange',
    name: 'Fruit3'
});

let getNameFieldGroup = new FieldGroup({
    content: radioBtn_getName.render(),
    name: 'Group',
    toggle: 'expand'
})
let getNameFieldGroupEl = document.createElement('div');
getNameFieldGroupEl.setAttribute("id", "get-name-fieldgroup");
getNameFieldGroupEl.appendChild(getNameFieldGroup.render());
let buttonGetNameFieldGroup = document.createElement('button');
buttonGetNameFieldGroup.innerHTML = 'Get Name FieldGroup';
buttonGetNameFieldGroup.addEventListener('click', function () {
    alert(getNameFieldGroup.getName());
});
getNameFieldGroupEl.appendChild(buttonGetNameFieldGroup);

//setToggle()
let radioBtn_setToggle = new RadioButton({
    items: [{ label: 'Orange', value: 'orange' }, { label: 'Banana', value: 'banana' }],
    value: 'orange',
    name: 'Fruit4'
});

let setToggleFieldGroup = new FieldGroup({
    content: radioBtn_setToggle.render(),
    name: 'Group',
    toggle: 'expand'
})
let setToggleFieldGroupEl = document.createElement('div');
setToggleFieldGroupEl.setAttribute("id", "set-toggle-fieldgroup");
setToggleFieldGroupEl.appendChild(setToggleFieldGroup.render());
let buttonSetToggleFieldGroup = document.createElement('button');
buttonSetToggleFieldGroup.innerHTML = 'Set Toggle FieldGroup';
buttonSetToggleFieldGroup.addEventListener('click', function () {
    setToggleFieldGroup.setToggle('collpase');
});
setToggleFieldGroupEl.appendChild(buttonSetToggleFieldGroup);

//getToggle()
let radioBtn_getToggle = new RadioButton({
    items: [{ label: 'Orange', value: 'orange' }, { label: 'Banana', value: 'banana' }],
    value: 'orange',
    name: 'Fruit5'
});

let getToggleFieldGroup = new FieldGroup({
    content: radioBtn_getToggle.render(),
    name: 'Group',
    toggle: 'expand'
})
let getToggleFieldGroupEl = document.createElement('div');
getToggleFieldGroupEl.setAttribute("id", "get-toggle-fieldgroup");
getToggleFieldGroupEl.appendChild(getToggleFieldGroup.render());
let buttonGetToggleFieldGroup = document.createElement('button');
buttonGetToggleFieldGroup.innerHTML = 'Get Toggle FieldGroup';
buttonGetToggleFieldGroup.addEventListener('click', function () {
    alert(getToggleFieldGroup.getToggle());
});
getToggleFieldGroupEl.appendChild(buttonGetToggleFieldGroup);

export default {
    constructorFieldGroupEl,
    setContentFieldGroupEl,
    getContentFieldGroupEl,
    setNameFieldGroupEl,
    getNameFieldGroupEl,
    setToggleFieldGroupEl,
    getToggleFieldGroupEl
}



