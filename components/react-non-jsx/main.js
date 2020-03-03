let layout = document.getElementsByClassName("app-index-contents-gaia")[0]
kintone.events.on("app.record.index.show", function (ev) {
    const listComponents = [
        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Attachment"), x: 0, y: 0 },
        { component: React.createElement(ConstructorAttachment), x: 0, y: 1 },
        { component: React.createElement(SetFilesAttachment), x: 0, y: 2 },
        { component: React.createElement(GetFilesAttachment), x: 0, y: 3 },
        { component: React.createElement(SetBrowseButtonTextAttachment), x: 0, y: 4 },
        { component: React.createElement(SetFileLimitTextAttachment), x: 0, y: 5 },
        { component: React.createElement(SetErrorMessageAttachment), x: 0, y: 6 },
        { component: React.createElement(OnCallbackAttachment), x: 0, y: 7 },
        { component: React.createElement(ShowHideAttachment), x: 0, y: 8 },


        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Normal Button"), x: 1, y: 0 },
        { component: React.createElement(NormalButton), x: 1, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Submit Button"), x: 2, y: 0 },
        { component: React.createElement(SubmitButton), x: 2, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Notify Popup"), x: 3, y: 0 },
        { component: React.createElement(NotifySuccessRenderMethod), x: 3, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Multiple choice"), x: 4, y: 0 },
        { component: React.createElement(MultipleRenderMethod), x: 4, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Icon Button"), x: 5, y: 0 },
        { component: React.createElement(IconButtonRenderMethod), x: 5, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Label"), x: 6, y: 0 },
        { component: React.createElement(LabelRender), x: 6, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Alert"), x: 7, y: 0 },
        { component: React.createElement(AlertErrorMethod), x: 7, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Text"), x: 8, y: 0 },
        { component: React.createElement(TextRender), x: 8, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Checkbox"), x: 9, y: 0 },
        { component: React.createElement(CheckboxRenderMethod), x: 9, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Dropdown"), x: 10, y: 0 },
        { component: React.createElement(DropdownRender), x: 10, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Radio Button"), x: 11, y: 0 },
        { component: React.createElement(RadioRender), x: 11, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Spinner"), x: 12, y: 0 },
        { component: React.createElement(SpinnerRender), x: 12, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Dialog"), x: 13, y: 0 },
        { component: React.createElement(DialogFUllOption), x: 13, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Textarea"), x: 14, y: 0 },
        { component: React.createElement(ConstructorTextArea), x: 14, y: 1 },

        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Datetime"), x: 15, y: 0 },
        { component: React.createElement(DateTimeFullOption), x: 15, y: 1 },

    ];
    const listComponentsTable = [
        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Table"), x: 0, y: 0 },
        { component: React.createElement(TableRenderMethod), x: 0, y: 1 },
    ];
    const listComponentsTabs = [
        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "Tabs"), x: 0, y: 0 },
        { component: React.createElement(ConstructorTabs), x: 0, y: 1 },
        { component: React.createElement(AddItemTabs), x: 0, y: 2 },
        { component: React.createElement(RemoveItemTabs), x: 0, y: 3 },
        { component: React.createElement(GetItemTabs), x: 0, y: 4 },
        { component: React.createElement(GetValueTabs), x: 0, y: 5 },
        { component: React.createElement(SetValueTabs), x: 0, y: 6 },
        { component: React.createElement(DisableItemTabs), x: 0, y: 7 },
        { component: React.createElement(EnableItemTabs), x: 0, y: 8 }
    ];
    const listComponentsFieldGroup = [
        { component: React.createElement("div", {style: {color: 'red', fontWeight: 'bold'}}, "FieldGroup"), x: 0, y: 0 },
        { component: React.createElement(ConstructorFieldGroup), x: 0, y: 1 },
        { component: React.createElement(SetContentFieldGroup), x: 0, y: 2 },
        { component: React.createElement(GetContentFieldGroup), x: 0, y: 3 },
        { component: React.createElement(SetNameFieldGroup), x: 0, y: 4 },
        { component: React.createElement(GetNameFieldGroup), x: 0, y: 5 },
        { component: React.createElement(SetToggleFieldGroup), x: 0, y: 6 },
        { component: React.createElement(GetToggleFieldGroup), x: 0, y: 7 },
    ];
    var kintoneSpaceElement = layout

    //initialize test grid
    var testgrid = new window.SDTestGrid({
        rowCount: 16,
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
    render(listComponentsTabs, testgridTabs);
    render(listComponentsFieldGroup, testgridFieldGroup);
});