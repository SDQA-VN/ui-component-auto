// Constructor Table
// initial data of a table
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

var constructorTable = new kintoneUIComponent.Table({
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
      cell: function () { return kintoneUIComponent.createTableCell('label', 'label') }
    },
    {
      header: 'Icon Button',
      cell: function () {
        return kintoneUIComponent.createTableCell('icon', 'iconBtn', {
          onClick: function (event) {
            alert('icon button clicked')
          }
        })
      }
    },
    {
      header: 'Alert',
      cell: function () { return kintoneUIComponent.createTableCell('alert', 'alert') }
    },
  ]
});
let constructorTableEl = document.createElement('div');
constructorTableEl.setAttribute("id", "constructor-table");
constructorTableEl.appendChild(constructorTable.render());
let constructorTableCell = testgridTable.getCell(posConfigTable.Table.x, 1);
constructorTableCell.appendChild(constructorTableEl);

//Get Value Table
// initial data of a table
var initialData_GetValue = [
  {
    text: { value: 'text field' },
    // initial data of radio buttons
    fruit: {
      name: 'fruit_1',
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
      value: ['potato', 'celery']
    },
    // initial data of dropdown
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
      ],
      value: 'cars'
    },
  }
];

// default row data of a table, this data will be used to create new row
var defaultRowData_GetValue = {
  text: { value: 'text field' },
  text1: { value: 'text field 1' },
  text2: { value: 'text field 2' },
  // default data of radio buttons
  fruit: {
    name: 'fruit_1',
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

var getValueTable = new kintoneUIComponent.Table({
  // initial table data
  data: initialData_GetValue,
  // default row data on row add
  defaultRowData: defaultRowData_GetValue,
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
  ]
});
let getValueTableEl = document.createElement('div');
getValueTableEl.setAttribute("id", "get-value-table");
getValueTableEl.appendChild(getValueTable.render());

let buttonGetValueText = document.createElement('button');
buttonGetValueText.innerHTML = 'Get Value Text Table';
buttonGetValueText.addEventListener('click', function () {
  alert(initialData_GetValue[0].text.value);
})
let buttonGetValueRadio = document.createElement('button');
buttonGetValueRadio.innerHTML = 'Get Value Radio Table';
buttonGetValueRadio.addEventListener('click', function () {
  alert(initialData_GetValue[0].fruit.value);
})
let buttonGetValueMultipleChoice = document.createElement('button');
buttonGetValueMultipleChoice.innerHTML = 'Get Value Multiple Choice Table';
buttonGetValueMultipleChoice.addEventListener('click', function () {
  alert(initialData_GetValue[0].colors.value);
})
let buttonGetValueCheckbox = document.createElement('button');
buttonGetValueCheckbox.innerHTML = 'Get Value Checkbox Table';
buttonGetValueCheckbox.addEventListener('click', function () {
  alert(initialData_GetValue[0].vegetables.value);
})
let buttonGetValueDropdown = document.createElement('button');
buttonGetValueDropdown.innerHTML = 'Get Value Dropdown Table';
buttonGetValueDropdown.addEventListener('click', function () {
  alert(initialData_GetValue[0].toys.value);
})
let buttonGetValueAll = document.createElement('button');
buttonGetValueAll.innerHTML = 'Get All Value Table';
buttonGetValueAll.addEventListener('click', function () {
  alert(initialData_GetValue[0].text.value + ', ' + initialData_GetValue[0].fruit.value + ', [' + initialData_GetValue[0].colors.value + '], [' + initialData_GetValue[0].vegetables.value + '], ' + initialData_GetValue[0].toys.value);
  // Get Value of all Rows
  // var value = getValueTable.getValue();
  // value.forEach(function(rowData) {
  //   alert(JSON.stringify(rowData));
  // });
})
getValueTableEl.appendChild(buttonGetValueText);
getValueTableEl.appendChild(buttonGetValueRadio);
getValueTableEl.appendChild(buttonGetValueMultipleChoice);
getValueTableEl.appendChild(buttonGetValueCheckbox);
getValueTableEl.appendChild(buttonGetValueDropdown);
getValueTableEl.appendChild(buttonGetValueAll);
let getValueTableCell = testgridTable.getCell(posConfigTable.Table.x, 2);
getValueTableCell.appendChild(getValueTableEl);

//Set Value Table
// initial data of a table
var initialData_SetValue = [
  {
    text: { value: 'text field' },
    // initial data of radio buttons
    fruit: {
      name: 'fruit_2',
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
      value: ['green']
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
      value: ['celery']
    },
    // initial data of dropdown
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
      ],
      value: 'cars'
    },
  }
];

// default row data of a table, this data will be used to create new row
var defaultRowData_SetValue = {
  text: { value: 'text field' },
  // default data of radio buttons
  fruit: {
    name: 'fruit_2',
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
  }
};

var setValueTable = new kintoneUIComponent.Table({
  // initial table data
  data: initialData_SetValue,
  // default row data on row add
  defaultRowData: defaultRowData_SetValue,
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
  ]
});
let setValueTableEl = document.createElement('div');
setValueTableEl.setAttribute("id", "set-value-table");
setValueTableEl.appendChild(setValueTable.render());
let buttonSetValueAll = document.createElement('button');
buttonSetValueAll.innerHTML = 'Set All Value Table';
buttonSetValueAll.addEventListener('click', function () {
  setValueTable.setValue([
    {
      text: { value: 'first row' },
      fruit: {
        value: 'Orange', name: 'fruit_2',
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
          }]
      },
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
        value: 'robots'
      }
    },

    // Get Value of all Rows
    // var value = getValueTable.getValue();
    // value.forEach(function(rowData) {
    //   alert(JSON.stringify(rowData));
    // });
  ])
})

setValueTableEl.appendChild(buttonSetValueAll);
let setValueTableCell = testgridTable.getCell(posConfigTable.Table.x, 3);
setValueTableCell.appendChild(setValueTableEl);

//show invisible and visible Table
var showInvisibleTable = new kintoneUIComponent.Table({
  isVisible: false,
  // inital table data
  data: [
    { text: { value: 'this is a text field' } }
  ],
  // default row data on row add
  defaultRowData: { text: { value: 'default text field value' } },
  columns: [
    {
      header: 'Text',
      cell: function () { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ]
});
var showVisibleTable = new kintoneUIComponent.Table({
  isVisible: true,
  // inital table data
  data: [
    { text: { value: 'this is a text field' } }
  ],
  // default row data on row add
  defaultRowData: { text: { value: 'default text field value' } },
  columns: [
    {
      header: 'Text',
      cell: function () { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ]
});
let showInvisibleTableEl = document.createElement('div');
showInvisibleTableEl.setAttribute("id", "show-invisible-table");
showInvisibleTableEl.appendChild(showInvisibleTable.render());
let showVisibleTableEl = document.createElement('div');
showVisibleTableEl.setAttribute("id", "show-visible-table");
showVisibleTableEl.appendChild(showVisibleTable.render());

let buttonShowTable = document.createElement('button');
buttonShowTable.innerHTML = 'Show Table';
buttonShowTable.addEventListener('click', function () {
  showInvisibleTable.show();
  showVisibleTable.show();
})
showVisibleTableEl.appendChild(buttonShowTable);
let showTableCell = testgridTable.getCell(posConfigTable.Table.x, 4);
showTableCell.appendChild(showInvisibleTableEl);
showTableCell.appendChild(showVisibleTableEl);

//hide invisible and visible Table
var hideVisibleTable = new kintoneUIComponent.Table({
  isVisible: true,
  // inital table data
  data: [
    { text: { value: 'this is a text field' } }
  ],
  // default row data on row add
  defaultRowData: { text: { value: 'default text field value' } },
  columns: [
    {
      header: 'Text',
      cell: function () { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ]
});
var hideInvisibleTable = new kintoneUIComponent.Table({
  isVisible: false,
  // inital table data
  data: [
    { text: { value: 'this is a text field' } }
  ],
  // default row data on row add
  defaultRowData: { text: { value: 'default text field value' } },
  columns: [
    {
      header: 'Text',
      cell: function () { return kintoneUIComponent.createTableCell('text', 'text') }
    },
  ]
});
let hideVisibleTableEl = document.createElement('div');
hideVisibleTableEl.setAttribute("id", "hide-visible-table");
hideVisibleTableEl.appendChild(hideVisibleTable.render());
let hideInvisibleTableEl = document.createElement('div');
hideInvisibleTableEl.setAttribute("id", "hide-invisible-table");
hideInvisibleTableEl.appendChild(hideInvisibleTable.render());

let buttonHideTable = document.createElement('button');
buttonHideTable.innerHTML = 'Hide Table';
buttonHideTable.addEventListener('click', function () {
  hideVisibleTable.hide();
  hideInvisibleTable.hide();
})
hideInvisibleTableEl.appendChild(buttonHideTable);
let hideTableCell = testgridTable.getCell(posConfigTable.Table.x, 5);
hideTableCell.appendChild(hideVisibleTableEl);
hideTableCell.appendChild(hideInvisibleTableEl);

//on RowAdd, on RowRemove, on CellChange callback
// initial data of a table
var initialData = [
  {
    text: { value: 'text field' },
    // initial data of radio buttons
    fruit: {
      name: 'fruit_3',
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
      value: ['potato', 'celery']
    },
    // initial data of dropdown
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
      ],
      value: 'cars'
    },
  }
];

// default row data of a table, this data will be used to create new row
var defaultRowData = {
  text: { value: 'text field' },
  // default data of radio buttons
  fruit: {
    name: 'fruit_3',
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
  }
};

var rowCallBackTable = new kintoneUIComponent.Table({
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
  ]
});
let rowCallBackTableEl = document.createElement('div');
rowCallBackTableEl.setAttribute("id", "callback-table");
rowCallBackTableEl.appendChild(rowCallBackTable.render());
let rowCallBackTableCell = testgridTable.getCell(posConfigTable.Table.x, 6);
rowCallBackTableCell.appendChild(rowCallBackTableEl);

let buttonSetValueTextTable = document.createElement('button');
buttonSetValueTextTable.innerHTML = 'Set Value Text Table';
buttonSetValueTextTable.addEventListener('click', function () {
  rowCallBackTable.updateRowData(0, { text: { value: 'Set Value Text Success' } });
})
let buttonSetValueRadioTable = document.createElement('button');
buttonSetValueRadioTable.innerHTML = 'Set Value Radio Table';
buttonSetValueRadioTable.addEventListener('click', function () {
  rowCallBackTable.updateRowData(0, { fruit: { value: 'Orange' } });
})
let buttonSetValueMultipleChoiceTable = document.createElement('button');
buttonSetValueMultipleChoiceTable.innerHTML = 'Set Value Multiple Choice Table';
buttonSetValueMultipleChoiceTable.addEventListener('click', function () {
  rowCallBackTable.updateRowData(0, { colors: { value: ['green'] } });
})
let buttonSetValueCheckboxTable = document.createElement('button');
buttonSetValueCheckboxTable.innerHTML = 'Set Value Checkbox Table';
buttonSetValueCheckboxTable.addEventListener('click', function () {
  rowCallBackTable.updateRowData(0, { vegetables: { value: ['potato'] } });
})
let buttonSetValueDropdownTable = document.createElement('button');
buttonSetValueDropdownTable.innerHTML = 'Set Value Dropdown Table';
buttonSetValueDropdownTable.addEventListener('click', function () {
  rowCallBackTable.updateRowData(0, { toys: { value: 'robots' } });
})

rowCallBackTableEl.appendChild(buttonSetValueTextTable);
rowCallBackTableEl.appendChild(buttonSetValueRadioTable);
rowCallBackTableEl.appendChild(buttonSetValueMultipleChoiceTable);
rowCallBackTableEl.appendChild(buttonSetValueCheckboxTable);
rowCallBackTableEl.appendChild(buttonSetValueDropdownTable);
rowCallBackTable.on('rowAdd', function (event) {
  alert('rowAdd is callback');
});
rowCallBackTable.on('rowRemove', function (event) {
  alert('rowRemove is callback');
});
rowCallBackTable.on('cellChange', function (event) {
  alert('cellChange is callback');
});
