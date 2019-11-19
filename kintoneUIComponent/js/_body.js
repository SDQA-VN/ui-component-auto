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
    Textarea: { x: 14, y: 0 },
    Attachment: {x: 15, y:0},
    Datetime: { x: 16, y: 0 }
}

let posConfigTable = {
    Table: { x: 0, y: 0 },
}

let posConfigTab = {
    Tab: { x: 0, y: 0 },
}

let posConfigFieldGroup = {
    FieldGroup: { x: 0, y: 0 },
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

let testgridFieldGroup = new window.SDTestGrid({
    rowCount: 1,
    columnCount: 30,
    classNames: 'bordered_table',
})
let testgridFieldGroupEl = testgridFieldGroup.render();

function renderTitleField(testgrid, posConfig) {
    Object.keys(posConfig).forEach(function (key) {
        let labelCell = testgrid.getCell(posConfig[key].x, posConfig[key].y);
        labelCell.style.backgroundColor = "#c6ecc6";
        labelCell.appendChild(createLabelEl(key));

    });
}

renderTitleField(testgrid, posConfig);
renderTitleField(testgridTable, posConfigTable);
renderTitleField(testgridTab, posConfigTab);
renderTitleField(testgridFieldGroup, posConfigFieldGroup);


// let testgridTable = new window.SDTestGrid({
//     rowCount: 1,
//     columnCount: 30,
//     classNames: 'bordered_table',
// })
// let testgridTableEl = testgridTable.render();
// let labelTableCell = testgridTable.getCell(0, 0);
// labelTableCell.textContent = "Table";
// labelTableCell.style.color = '#cc3300';
// labelTableCell.style.fontWeight = 'bold';
// labelTableCell.style.backgroundColor  = "#c6ecc6";

let headerSpace = document.getElementsByTagName("BODY")[0]
headerSpace.append(testgridEl);
headerSpace.append(testgridTableEl);
headerSpace.append(testgridTabEl);
headerSpace.append(testgridFieldGroupEl);