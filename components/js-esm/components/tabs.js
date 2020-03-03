import {createTableCell,Tabs, Button, Alert, Attachment, ColorPicker, CheckBox, Dropdown, DateTime, IconButton, FieldGroup, Label, MultipleChoice, RadioButton, Table, Text, TextArea} from '@kintone/kintone-ui-component/esm/js';

//constructor Tabs
let componentContainer = document.createElement('div');
componentContainer.setAttribute("id", "component-container");
let alertDOM = new Alert({
    text: 'successAlert', 
    type: 'success',
    isVisible: true
});

let attachment = new Attachment({files: [{name: 'test_1', size: 12345}]});

let normalButton = new Button({
    text: 'Normal',
    type: 'normal'
});
let submitButton = new Button({
    text: 'Submit',
    type: 'submit'
});

let checkbox = new CheckBox ({
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

let colorPicker = new ColorPicker({color: '#FF0000'});
let dateTime = new DateTime({ type: 'datetime', locale: 'en'});

const textDOM = new Text({ value: "12345" });
const fieldGroup = new FieldGroup({
      content: textDOM.render(),
      name: 'Group',
      toggle: 'expand'
    })

var dropDown = new Dropdown({
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

var iconBtn = new IconButton({type: 'insert'});
var label = new Label({text: 'label'});

var multipleChoice = new MultipleChoice({
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

var radioButton = new RadioButton({
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
  
  var table = new Table({
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
        cell: function() { return createTableCell('label', 'label') }
      },
      {
        header: 'Icon Button',
        cell: function() { return createTableCell('icon', 'iconBtn', {onClick:function(event){
          alert('icon button clicked')
        }}) }
      },
      {
        header: 'Alert',
        cell: function() { return createTableCell('alert', 'alert') }
      },
    ]
  });

var text= new Text({value: '12345'});
var textArea = new TextArea({value: 'textarea'});

componentContainer.appendChild(alertDOM.render());
componentContainer.appendChild(attachment.render());
componentContainer.appendChild(normalButton.render());
componentContainer.appendChild(submitButton.render());
componentContainer.appendChild(checkbox.render());
componentContainer.appendChild(colorPicker.render());
componentContainer.appendChild(dateTime.render());
componentContainer.appendChild(dropDown.render());
componentContainer.appendChild(fieldGroup.render());
componentContainer.appendChild(iconBtn.render());
componentContainer.appendChild(label.render());
componentContainer.appendChild(multipleChoice.render());
componentContainer.appendChild(radioButton.render());
componentContainer.appendChild(table.render());
componentContainer.appendChild(text.render());
componentContainer.appendChild(textArea.render());

let constructorTabs = new Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: componentContainer  
        },
        {
            tabName: "Tab2",
            tabContent: "This is Tab2"
        },
        {
            tabName: "Tab3",
            tabContent: "<script>alert('123');</script>"
        },
    　  {
            tabName: "Tab4",
            isDisabled: true
        }
　  ],
    value:0
});
let constructorTabsEl = document.createElement('div');
constructorTabsEl.setAttribute("id", "constructor-tabs");
constructorTabsEl.appendChild(constructorTabs.render());


//add Item Tabs
var addItemTabs = new Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: 'This is Tab1'
        },
        {
            tabName: "Tab2",
            tabContent: "This is Tab2"
        }
    ]
});
var AlertDOM = new Alert({
    text: 'successAlert', 
    type: 'success',
    isVisible: true
});
let addItemTabsEl = document.createElement('div');
addItemTabsEl.setAttribute("id", "add-item-tabs");
let buttonAddItemTabs = document.createElement('button');
buttonAddItemTabs.innerHTML='Add Item Tabs';
buttonAddItemTabs.addEventListener('click',function(){
    var itemString = { tabName: "Tab3", tabContent: "This is Tab3", isDisabled: true };
    var itemDOM = { tabName: "Tab4", tabContent: AlertDOM.render()};
    addItemTabs.addItem(itemString);
    addItemTabs.addItem(itemDOM);
});
addItemTabsEl.appendChild(addItemTabs.render());
addItemTabsEl.appendChild(buttonAddItemTabs);

//remove Item Tabs
var removeItemTabs = new Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: 'This is Tab1'
        },
        {
            tabName: "Tab2",
            tabContent: "This is Tab2"
        },
        {
            tabName: "Tab3",
            tabContent: "This is Tab3"
        }
    ]
});
let removeItemTabsEl = document.createElement('div');
removeItemTabsEl.setAttribute("id", "remove-item-tabs");
let buttonRemoveItemTabs = document.createElement('button');
buttonRemoveItemTabs.innerHTML='Remove Item Tabs';
buttonRemoveItemTabs.addEventListener('click',function(){
    removeItemTabs.removeItem(2);
});
removeItemTabsEl.appendChild(removeItemTabs.render());
removeItemTabsEl.appendChild(buttonRemoveItemTabs);

//get Items Tab
var getItemTabs = new Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: 'This is Tab1',
            isDisabled: true
        },
        {
            tabName: "Tab2",
            tabContent: "This is Tab2",
            isDisabled: false
        }
    ]
});
let getItemTabsEl = document.createElement('div');
getItemTabsEl.setAttribute("id", "get-item-tabs");
let buttonGetItemTabs = document.createElement('button');
buttonGetItemTabs.innerHTML='Get Item Tabs';
buttonGetItemTabs.addEventListener('click',function(){
  alert(JSON.stringify(getItemTabs.getItems()));
});
getItemTabsEl.appendChild(getItemTabs.render());
getItemTabsEl.appendChild(buttonGetItemTabs);

//get Value Tab
var getValueTabs = new Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: 'This is Tab1'
        },
        {
            tabName: "Tab2",
            tabContent: "This is Tab2"
        }
    ],
    value: 0
});
let getValueTabsEl = document.createElement('div');
getValueTabsEl.setAttribute("id", "get-value-tabs");
let buttonGetValueTabs = document.createElement('button');
buttonGetValueTabs.innerHTML='Get Value Tabs';
buttonGetValueTabs.addEventListener('click',function(){
  alert(JSON.stringify(getValueTabs.getValue()));
});
getValueTabsEl.appendChild(getValueTabs.render());
getValueTabsEl.appendChild(buttonGetValueTabs);

//set Value Tab
var setValueTabs = new Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: 'This is Tab1'
        },
        {
            tabName: "Tab2",
            tabContent: "This is Tab2"
        }
    ],
    value: 0
});
let setValueTabsEl = document.createElement('div');
setValueTabsEl.setAttribute("id", "set-value-tabs");
let buttonSetValueTabs = document.createElement('button');
buttonSetValueTabs.innerHTML='Set Value Tabs';
buttonSetValueTabs.addEventListener('click',function(){
  setValueTabs.setValue(1);
});
setValueTabsEl.appendChild(setValueTabs.render());
setValueTabsEl.appendChild(buttonSetValueTabs);

//disable Tab
var disableItemTabs = new Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: 'isDisabled is false',
            isDisabled: false
        },
        {
            tabName: "Tab2",
            tabContent: "isDisabled is true",
            isDisabled: true
        }
    ]
});
let disableItemTabsEl = document.createElement('div');
disableItemTabsEl.setAttribute("id", "disable-tabs");
let buttonDisableTabs = document.createElement('button');
buttonDisableTabs.innerHTML='Disable Tabs';
buttonDisableTabs.addEventListener('click',function(){
  disableItemTabs.disableItem('Tab1');
  disableItemTabs.disableItem('Tab2');
});
disableItemTabsEl.appendChild(disableItemTabs.render());
disableItemTabsEl.appendChild(buttonDisableTabs);

//enable Tab
var enableItemTabs = new Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: 'isDisabled is true',
            isDisabled: true
        },
        {
            tabName: "Tab2",
            tabContent: "isDisabled is false",
            isDisabled: false
        }
    ]
});
let enableItemTabsEl = document.createElement('div');
enableItemTabsEl.setAttribute("id", "enable-tabs");
let buttonEnableTabs = document.createElement('button');
buttonEnableTabs.innerHTML='Enable Tabs';
buttonEnableTabs.addEventListener('click',function(){
  enableItemTabs.enableItem('Tab1');
  enableItemTabs.enableItem('Tab2');
});
enableItemTabsEl.appendChild(enableItemTabs.render());
enableItemTabsEl.appendChild(buttonEnableTabs);


export default {
    constructorTabsEl,
    addItemTabsEl,
    removeItemTabsEl,
    getItemTabsEl,
    getValueTabsEl,
    setValueTabsEl,
    disableItemTabsEl,
    enableItemTabsEl
}