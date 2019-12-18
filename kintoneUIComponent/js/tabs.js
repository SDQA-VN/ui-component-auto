//constructor Tabs
let componentContainer = document.createElement('div');
componentContainer.setAttribute("id", "component-container");
let Alert = new kintoneUIComponent.Alert({
    text: 'successAlert', 
    type: 'success',
    isVisible: true
});

let Attachment = new kintoneUIComponent.Attachment({files: [{name: 'test_1', size: 12345}]});

let NormalButton = new kintoneUIComponent.Button({
    text: 'Normal',
    type: 'normal'
});
let SubmitButton = new kintoneUIComponent.Button({
    text: 'Submit',
    type: 'submit'
});

let Checkbox = new kintoneUIComponent.CheckBox ({
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

let ColorPicker = new kintoneUIComponent.ColorPicker({color: '#FF0000'});
let DateTime = new kintoneUIComponent.DateTime({ type: 'datetime', locale: 'en'});

const text = new kintoneUIComponent.Text({ value: "12345" });
const FieldGroup = new kintoneUIComponent.FieldGroup({
      content: text.render(),
      name: 'Group',
      toggle: 'expand'
    })

var Dropdown = new kintoneUIComponent.Dropdown({
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

var IconBtn = new kintoneUIComponent.IconButton({type: 'insert'});
var Label = new kintoneUIComponent.Label({text: 'label'});

var MultipleChoice = new kintoneUIComponent.MultipleChoice({
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

var RadioButton = new kintoneUIComponent.RadioButton({
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
  
  var Table = new kintoneUIComponent.Table({
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
        cell: function () { return kintoneUIComponent.createTableCell('text', 'text') }
      },
      {
        header: 'Radio',
        cell: function () { return kintoneUIComponent.createTableCell('radio', 'fruit') }
      },
      {
        header: 'Multichoice',
        cell: function () { return kintoneUIComponent.createTableCell('multichoice', 'colors') }
      },
      {
        header: 'Checkbox',
        cell: function () { return kintoneUIComponent.createTableCell('checkbox', 'vegetables') }
      },
      {
        header: 'Dropdown',
        cell: function () { return kintoneUIComponent.createTableCell('dropdown', 'toys') }
      },
      {
        header: 'Label',
        cell: function() { return kintoneUIComponent.createTableCell('label', 'label') }
      },
      {
        header: 'Icon Button',
        cell: function() { return kintoneUIComponent.createTableCell('icon', 'iconBtn', {onClick:function(event){
          alert('icon button clicked')
        }}) }
      },
      {
        header: 'Alert',
        cell: function() { return kintoneUIComponent.createTableCell('alert', 'alert') }
      },
    ]
  });

var Text= new kintoneUIComponent.Text({value: '12345'});
var TextArea = new kintoneUIComponent.TextArea({value: 'textarea'});

componentContainer.appendChild(Alert.render());
componentContainer.appendChild(Attachment.render());
componentContainer.appendChild(NormalButton.render());
componentContainer.appendChild(SubmitButton.render());
componentContainer.appendChild(Checkbox.render());
componentContainer.appendChild(ColorPicker.render());
componentContainer.appendChild(DateTime.render());
componentContainer.appendChild(Dropdown.render());
componentContainer.appendChild(FieldGroup.render());
componentContainer.appendChild(IconBtn.render());
componentContainer.appendChild(Label.render());
componentContainer.appendChild(MultipleChoice.render());
componentContainer.appendChild(RadioButton.render());
componentContainer.appendChild(Table.render());
componentContainer.appendChild(Text.render());
componentContainer.appendChild(TextArea.render());

let constructorTabs = new kintoneUIComponent.Tabs({
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
let constructorTabs_cell = testgridTab.getCell(posConfigTab.Tab.x, 1);
constructorTabs_cell.appendChild(constructorTabsEl);

//add Item Tabs
var addItemTabs = new kintoneUIComponent.Tabs({
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
var AlertDOM = new kintoneUIComponent.Alert({
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
let addItemTabsCell = testgridTab.getCell(posConfigTab.Tab.x, 2);
addItemTabsCell.appendChild(addItemTabsEl);

//remove Item Tabs
var removeItemTabs = new kintoneUIComponent.Tabs({
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
let removeItemTabsCell = testgridTab.getCell(posConfigTab.Tab.x, 3);
removeItemTabsCell.appendChild(removeItemTabsEl);

//get Items Tab
var getItemsTab = new kintoneUIComponent.Tabs({
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
let getItemsTabEl = document.createElement('div');
getItemsTabEl.setAttribute("id", "get-item-tabs");
let buttonGetItemsTab = document.createElement('button');
buttonGetItemsTab.innerHTML='Get Item Tabs';
buttonGetItemsTab.addEventListener('click',function(){
  alert(JSON.stringify(getItemsTab.getItems()));
});
getItemsTabEl.appendChild(getItemsTab.render());
getItemsTabEl.appendChild(buttonGetItemsTab);
let getItemsTabCell = testgridTab.getCell(posConfigTab.Tab.x, 4);
getItemsTabCell.appendChild(getItemsTabEl);

//get Value Tab
var getValueTab = new kintoneUIComponent.Tabs({
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
let getValueTabEl = document.createElement('div');
getValueTabEl.setAttribute("id", "get-value-tabs");
let buttonGetValueTab = document.createElement('button');
buttonGetValueTab.innerHTML='Get Value Tabs';
buttonGetValueTab.addEventListener('click',function(){
  alert(JSON.stringify(getValueTab.getValue()));
});
getValueTabEl.appendChild(getValueTab.render());
getValueTabEl.appendChild(buttonGetValueTab);
let getValueTabCell = testgridTab.getCell(posConfigTab.Tab.x, 5);
getValueTabCell.appendChild(getValueTabEl);

//set Value Tab
var setValueTab = new kintoneUIComponent.Tabs({
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
let setValueTabEl = document.createElement('div');
setValueTabEl.setAttribute("id", "set-value-tabs");
let buttonSetValueTab = document.createElement('button');
buttonSetValueTab.innerHTML='Set Value Tabs';
buttonSetValueTab.addEventListener('click',function(){
  setValueTab.setValue(1);
});
setValueTabEl.appendChild(setValueTab.render());
setValueTabEl.appendChild(buttonSetValueTab);
let setValueTabCell = testgridTab.getCell(posConfigTab.Tab.x, 6);
setValueTabCell.appendChild(setValueTabEl);

//disable Tab
var disableTab = new kintoneUIComponent.Tabs({
    items: [
        {
            tabName: "Tab1",
            tabContent: 'isDisabled is false',
            isDisabled: true
        },
        {
            tabName: "Tab2",
            tabContent: "isDisabled is true",
            isDisabled: false
        }
    ]
});
let disableTabEl = document.createElement('div');
disableTabEl.setAttribute("id", "disable-tabs");
let buttonDisableTab = document.createElement('button');
buttonDisableTab.innerHTML='Disable Tabs';
buttonDisableTab.addEventListener('click',function(){
  disableTab.disableItem('Tab2');
});
disableTabEl.appendChild(disableTab.render());
disableTabEl.appendChild(buttonDisableTab);
let disableTabCell = testgridTab.getCell(posConfigTab.Tab.x, 7);
disableTabCell.appendChild(disableTabEl);

//enable Tab
var enableTab = new kintoneUIComponent.Tabs({
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
    ],
    value:0
});
let enableTabEl = document.createElement('div');
enableTabEl.setAttribute("id", "enable-tabs");
let buttonEnableTab = document.createElement('button');
buttonEnableTab.innerHTML='Enable Tabs';
buttonEnableTab.addEventListener('click',function(){
  enableTab.enableItem('Tab1');
  enableTab.enableItem('Tab2');
});
enableTabEl.appendChild(enableTab.render());
enableTabEl.appendChild(buttonEnableTab);
let enableTabCell = testgridTab.getCell(posConfigTab.Tab.x, 8);
enableTabCell.appendChild(enableTabEl);




