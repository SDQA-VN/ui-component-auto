import {Dialog, Button, Text, Label, Alert, Dropdown, RadioButton, MultipleChoice, CheckBox, IconButton, Table, createTableCell} from '@kintone/kintone-ui-component/esm/js';

// Constructor - dialog with full options
let dialog_full_option = new Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
let dialog_full_optionEl = dialog_full_option.render();
dialog_full_optionEl.id = "dialog_full_optionEl";

let dialog_full_option_button = document.createElement('button');
dialog_full_option_button.setAttribute("id", "dialog_full_option_button");
dialog_full_option_button.innerHTML = "Show dialog full option"
dialog_full_option_button.addEventListener('click', function () {
    dialog_full_option.show();
});

let dialog_full_option_div = document.createElement('div');
dialog_full_option_div.appendChild(dialog_full_optionEl);
dialog_full_option_div.appendChild(dialog_full_option_button);

// setHeader() - contains existing header
let dialog_setHeader_existing_header = new Dialog({
    header: "Dialog exisitng header",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
})
let dialog_setHeader_existing_headerEl = dialog_setHeader_existing_header.render();
dialog_setHeader_existing_headerEl.id = "dialog_setHeader_existing_headerEl";

let dialog_setHeader_existing_header_button = document.createElement('button');
dialog_setHeader_existing_header_button.setAttribute("id", "dialog_setHeader_existing_header_button")
dialog_setHeader_existing_header_button.innerHTML = "set header for dialog which contains existing header";
dialog_setHeader_existing_header_button.addEventListener('click', function() {
    dialog_setHeader_existing_header.setHeader("Set header for dialog with existing header");
    dialog_setHeader_existing_header.show();
});

let dialog_setHeader_existing_header_div = document.createElement('div');
dialog_setHeader_existing_header_div.appendChild(dialog_setHeader_existing_headerEl);
dialog_setHeader_existing_header_div.appendChild(dialog_setHeader_existing_header_button);

// setHeader() - with components
let dialogComponentsDiv = document.createElement('div');
let dialog_normal_button = new Button({
    text: 'Normal Button',
    type: 'normal',
    isDisabled: false,
    isVisible: true
});
let dialog_submit_button = new Button({
    text: 'Submit Button',
    type: 'submit',
    isDisabled: false,
    isVisible: true
});
let dialog_text_box = new Text({
    value: 'Text Box',
    isDisabled: false,
    isVisible: true
});
let dialog_labelUI = new Label({
    text: 'Label',
    isRequired: false,
    isDisabled: false,
    isVisible: true
});
let dialog_alert = new Alert({
    text: 'Alert', 
    type: 'error',
    isDisabled: false,
    isVisible: true
});
let dialog_dropdown = new Dropdown({
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
    ],
    value: 'check UI Item 2'
});
let dialog_radio_button = new RadioButton({
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
let dialog_multiple_choice = new MultipleChoice({
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
let dialog_check_box = new CheckBox({
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
let dialog_icon_button = new IconButton({
    type: 'insert',
    color:'blue', 
    size: 'small',
    isDisabled: false,
    isVisible: true
});
let dialog_table = new Table({
    // inital table data
    data: [
        {text: { value: 'this is a text field' }}
    ],
    // default row data on row add
    defaultRowData: {text: { value: 'default text field value' }},
    columns: [
        {
        header: 'Text',
        cell: function() { return createTableCell('text', 'text') }
        },
    ]
});
let dialog_normal_buttonEl = dialog_normal_button.render();
let dialog_submit_buttonEl = dialog_submit_button.render();
let dialog_text_boxEl = dialog_text_box.render();
let dialog_labelUIEl = dialog_labelUI.render();
let dialog_alertEl = dialog_alert.render();
let dialog_dropdownEl = dialog_dropdown.render();
let dialog_radio_buttonEl = dialog_radio_button.render();
let dialog_multiple_choiceEl = dialog_multiple_choice.render();
let dialog_check_boxEl = dialog_check_box.render();
let dialog_icon_buttonEl = dialog_icon_button.render();
let dialog_tableEl = dialog_table.render();

dialog_normal_buttonEl.id = "dialog_set_header_normal_button";
dialog_submit_buttonEl.id = "dialog_set_header_submit_button";
dialog_text_boxEl.id = "dialog_set_header_text_box";
dialog_labelUIEl.id = "dialog_set_header_label";
dialog_alertEl.id = "dialog_set_header_alert";
dialog_dropdownEl.id = "dialog_set_header_dropdown";
dialog_radio_buttonEl.id = "dialog_set_header_radio_button";
dialog_multiple_choiceEl.id = "dialog_set_header_multiple_choice";
dialog_check_boxEl.id = "dialog_set_header_check_box";
dialog_icon_buttonEl.id = "dialog_set_header_icon_button";
dialog_tableEl.id = "dialog_set_header_table";
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
    dialog_tableEl
);

let dialog_setHeader_with_components = new Dialog({
    header: "Dialog set Header with components",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
let dialog_setHeader_with_componentsEl = dialog_setHeader_with_components.render();
dialog_setHeader_with_componentsEl.id = "dialog_setHeader_with_componentsEl";

let dialog_setHeader_with_components_button = document.createElement('button');
dialog_setHeader_with_components_button.setAttribute("id", "dialog_setHeader_with_components_button");
dialog_setHeader_with_components_button.innerText = "Set header for dialog with components";
dialog_setHeader_with_components_button.addEventListener('click', function () {
    dialog_setHeader_with_components.setHeader(dialogComponentsDiv);
    dialog_setHeader_with_components.show();
});

let dialog_setHeader_with_components_div = document.createElement('div');
dialog_setHeader_with_components_div.appendChild(dialog_setHeader_with_componentsEl);
dialog_setHeader_with_components_div.appendChild(dialog_setHeader_with_components_button);

// getHeader() - string
let dialog_get_header_string = new Dialog({
    header: "Value of header dialog with string",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
let dialog_get_header_stringEl = dialog_get_header_string.render();
dialog_get_header_stringEl.id = "dialog_get_header_stringEl";

let dialog_get_header_string_button = document.createElement('button');
dialog_get_header_string_button.id = "dialog_get_header_string_button";
dialog_get_header_string_button.innerHTML = "Get dialog Header with string";
let dialog_show_get_header_string_label = document.createElement('div');
dialog_show_get_header_string_label.id = "dialog_show_get_header_string_label";

function getHeaderString() {
    let header_string = dialog_get_header_string.getHeader();
    dialog_show_get_header_string_label.innerHTML = '';
    dialog_show_get_header_string_label.appendChild(document.createTextNode(header_string));
};

dialog_get_header_string_button.addEventListener('click', function () {
    getHeaderString();
});

let dialog_get_header_string_cell_div = document.createElement('div');
dialog_get_header_string_cell_div.appendChild(dialog_get_header_stringEl);
dialog_get_header_string_cell_div.appendChild(dialog_show_get_header_string_label);
dialog_get_header_string_cell_div.appendChild(dialog_get_header_string_button);

// getHeader() - DOM/react elements
let dialog_get_header_dom = new Dialog({
    header: dialogComponentsDiv,
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
let dialog_get_header_dom_button = document.createElement('button');
dialog_get_header_dom_button.id = "dialog_get_header_dom_button";
dialog_get_header_dom_button.innerHTML = "Get dialog header with DOM";
let dialog_get_header_dom_div = document.createElement('div');

function getHeaderDom() {
    let header_dom = dialog_get_header_dom.getHeader();
    dialog_get_header_dom_div.appendChild(header_dom);
};

dialog_get_header_dom_button.addEventListener('click', function () {
    getHeaderDom();

});

dialog_get_header_dom_div.appendChild(dialog_get_header_dom_button);

// setContent() - contains existing content
let dialog_setContent_existing_content = new Dialog({
    header: "Dialog header",
    content: "This is existing content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
let dialog_setContent_existing_contentEl = dialog_setContent_existing_content.render();
dialog_setContent_existing_contentEl.id = "dialog_setContent_existing_contentEl";

let dialog_setContent_existing_content_button = document.createElement('button');
dialog_setContent_existing_content_button.setAttribute("id", "dialog_setContent_existing_content_button");
dialog_setContent_existing_content_button.innerHTML = "set content for dialog which contains existing content";
dialog_setContent_existing_content_button.addEventListener('click', function() {
    dialog_setContent_existing_content.setContent("Set content for dialog with existing content");
    dialog_setContent_existing_content.show();
});

let dialog_setContent_existing_content_div = document.createElement('div');
dialog_setContent_existing_content_div.appendChild(dialog_setContent_existing_contentEl);
dialog_setContent_existing_content_div.appendChild(dialog_setContent_existing_content_button);

// setContent() - with components
let dialog_setContent_with_components = new Dialog({
    header: "Dialog set Content with components",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
let dialog_setContent_with_componentsEl = dialog_setContent_with_components.render();
dialog_setContent_with_componentsEl.id = "dialog_setContent_with_componentsEl";

let dialog_setContent_with_components_button = document.createElement('button');
dialog_setContent_with_components_button.setAttribute("id", "dialog_setContent_with_components_button");
dialog_setContent_with_components_button.innerText = "Set content for dialog with components";
dialog_setContent_with_components_button.addEventListener('click', function () {
    dialog_setContent_with_components.setContent(dialogComponentsDiv);
    dialog_setContent_with_components.show();
});

let dialog_setContent_with_components_div = document.createElement('div');
dialog_setContent_with_components_div.appendChild(dialog_setContent_with_componentsEl);
dialog_setContent_with_components_div.appendChild(dialog_setContent_with_components_button);

// getContent() - string
let dialog_get_content_string = new Dialog({
    header: "Dialog header",
    content: "Value of content on dialog with string",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
let dialog_get_content_stringEl = dialog_get_content_string.render();
dialog_get_content_stringEl.id = "dialog_get_content_stringEl";

let dialog_get_content_string_button = document.createElement('button');
dialog_get_content_string_button.id = "dialog_get_content_string_button";
dialog_get_content_string_button.innerHTML = "Get dialog content with string";
let dialog_show_get_content_string_label = document.createElement('div');
dialog_show_get_content_string_label.id = "dialog_show_get_content_string_label";

function getContentString() {
    let content_string = dialog_get_content_string.getContent();
    dialog_show_get_content_string_label.innerHTML = '';
    dialog_show_get_content_string_label.appendChild(document.createTextNode(content_string));
};

dialog_get_content_string_button.addEventListener('click', function () {
    getContentString();
});

let dialog_get_content_string_div = document.createElement('div');
dialog_get_content_string_div.appendChild(dialog_get_content_stringEl);
dialog_get_content_string_div.appendChild(dialog_show_get_content_string_label);
dialog_get_content_string_div.appendChild(dialog_get_content_string_button);

// getContent() - DOM / React elements
let dialog_get_content_dom = new Dialog({
    header: "Dialog header",
    content: dialogComponentsDiv,
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});

let dialog_get_content_dom_button = document.createElement('button');
dialog_get_content_dom_button.id = "dialog_get_content_dom_button";
dialog_get_content_dom_button.innerHTML = "Get dialog content with DOM";
let dialog_get_content_dom_div = document.createElement('div');

function getContentDom() {
    let content_dom = dialog_get_content_dom.getContent();
    dialog_get_content_dom_div.appendChild(content_dom);
};

dialog_get_content_dom_button.addEventListener('click', function () {
    getContentDom();
});

dialog_get_content_dom_div.appendChild(dialog_get_content_dom_button);

// setFooter() - contains existing content
let dialog_setFooter_existing_footer = new Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Exisiting Footer",
    isVisible: false,
    showCloseButton: true
})
let dialog_setFooter_existing_footerEl = dialog_setFooter_existing_footer.render();
dialog_setFooter_existing_footerEl.id = "dialog_setFooter_existing_footerEl";

let dialog_setFooter_existing_footer_button = document.createElement('button');
dialog_setFooter_existing_footer_button.setAttribute("id", "dialog_setFooter_existing_footer_button");
dialog_setFooter_existing_footer_button.innerHTML = "Set footer for dialog which contains existing footer";
dialog_setFooter_existing_footer_button.addEventListener('click', function() {
    dialog_setFooter_existing_footer.setFooter("Set footer for dialog with existing footer");
    dialog_setFooter_existing_footer.show();
});

let dialog_setFooter_existing_footer_div = document.createElement('div');
dialog_setFooter_existing_footer_div.appendChild(dialog_setFooter_existing_footerEl);
dialog_setFooter_existing_footer_div.appendChild(dialog_setFooter_existing_footer_button);

// setFooter() - with components
let dialog_setFooter_with_components = new Dialog({
    header: "Dialog set Footer with components",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
let dialog_setFooter_with_componentsEl = dialog_setFooter_with_components.render();
dialog_setFooter_with_componentsEl.id = "dialog_setFooter_with_componentsEl";

let dialog_setFooter_with_components_button = document.createElement('button');
dialog_setFooter_with_components_button.setAttribute("id", "dialog_setFooter_with_components_button");
dialog_setFooter_with_components_button.innerText = "Set footer for dialog with components";
dialog_setFooter_with_components_button.addEventListener('click', function () {
    dialog_setFooter_with_components.setFooter(dialogComponentsDiv);
    dialog_setFooter_with_components.show();
});

let dialog_setFooter_with_components_div = document.createElement('div');
dialog_setFooter_with_components_div.appendChild(dialog_setFooter_with_componentsEl);
dialog_setFooter_with_components_div.appendChild(dialog_setFooter_with_components_button);

// getFooter() - string
let dialog_get_footer_string = new Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: "Value of footer on dialog with string",
    isVisible: false,
    showCloseButton: true
});
let dialog_get_footer_stringEl = dialog_get_footer_string.render();
dialog_get_footer_stringEl.id = "dialog_get_footer_stringEl";

let dialog_get_footer_string_button = document.createElement('button');
dialog_get_footer_string_button.id = "dialog_get_footer_string_button";
dialog_get_footer_string_button.innerHTML = "Get dialog footer with string";
let dialog_show_get_footer_string_label = document.createElement('div');
dialog_show_get_footer_string_label.id = "dialog_show_get_footer_string_label";

function getFooterString() {
    let footer_string = dialog_get_footer_string.getFooter();
    dialog_show_get_footer_string_label.innerHTML = '';
    dialog_show_get_footer_string_label.appendChild(document.createTextNode(footer_string));
};

dialog_get_footer_string_button.addEventListener('click', function () {
    getFooterString();
});

let dialog_get_footer_string_div = document.createElement('div');
dialog_get_footer_string_div.appendChild(dialog_get_footer_stringEl);
dialog_get_footer_string_div.appendChild(dialog_show_get_footer_string_label);
dialog_get_footer_string_div.appendChild(dialog_get_footer_string_button);

// getFooter() - DOM / React elements
let dialog_get_footer_dom = new Dialog({
    header: "Dialog header",
    content: "This is content",
    footer: dialogComponentsDiv,
    isVisible: false,
    showCloseButton: true
});
let dialog_get_footer_dom_button = document.createElement('button');
dialog_get_footer_dom_button.id = "dialog_get_footer_dom_button";
dialog_get_footer_dom_button.innerHTML = "Get dialog footer with DOM";
let dialog_get_footer_dom_div = document.createElement('div');

function getFooterDom() {
    let footer_dom = dialog_get_footer_dom.getFooter();
    dialog_get_footer_dom_div.appendChild(footer_dom);
};

dialog_get_footer_dom_button.addEventListener('click', function () {
    getFooterDom();
});
dialog_get_footer_dom_div.appendChild(dialog_get_footer_dom_button);

// show() - invisible dialog
let dialog_invisible = new Dialog({
    header: "Show invisible Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
let dialog_invisibleEl = dialog_invisible.render();
dialog_invisibleEl.id = "dialog_invisibleEl";
let show_dialog_invisible_button = document.createElement('button');
show_dialog_invisible_button.setAttribute("id", "show_dialog_invisible_button");
show_dialog_invisible_button.innerHTML = "Show invisible dialog";
show_dialog_invisible_button.addEventListener('click', function () {
    dialog_invisible.show();
});
let dialog_invisible_div = document.createElement('div');
dialog_invisible_div.appendChild(dialog_invisibleEl);
dialog_invisible_div.appendChild(show_dialog_invisible_button);

// hide() - visible dialog
let dialog_visible = new Dialog({
    header: "Visible Dialog header",
    content: "This is content",
    footer: "Footer",
    isVisible: true,
    showCloseButton: true
});
let dialog_visibleEl = dialog_visible.render();
dialog_visibleEl.id = "dialog_visibleEl";
let dialog_visible_div = document.createElement('div');

let render_dialog_visible_button = document.createElement('button');
render_dialog_visible_button.setAttribute("id", "render_dialog_visible_button");
render_dialog_visible_button.innerHTML = "Render visible dialog";
render_dialog_visible_button.addEventListener('click', function () {
    dialog_visible_div.appendChild(dialog_visibleEl);
});

let hide_dialog_visible_button = document.createElement('button');
hide_dialog_visible_button.setAttribute("id", "hide_dialog_visible_button");
hide_dialog_visible_button.innerHTML = "Hide visible dialog";
hide_dialog_visible_button.style.zIndex = 10000;
hide_dialog_visible_button.style.position = 'relative';
hide_dialog_visible_button.addEventListener('click', function () {
    dialog_visible.hide();
});
dialog_visible_div.appendChild(render_dialog_visible_button);
dialog_visible_div.appendChild(hide_dialog_visible_button);

// showCloseButton - show closeButton
let dialog_show_closeButton = new Dialog({
    header: "Show dialog close button",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: true
});
let dialog_show_closeButtonEl = dialog_show_closeButton.render();
dialog_show_closeButtonEl.id = "dialog_show_closeButtonEl";
let dialog_show_closeButton_button = document.createElement('button');
dialog_show_closeButton_button.id = "dialog_show_closeButton_button";
dialog_show_closeButton_button.innerHTML = "Show dialog which contains Close button";
dialog_show_closeButton_button.addEventListener('click', function () {
    dialog_show_closeButton.show();
});

let dialog_show_closeButton_div = document.createElement('div');
dialog_show_closeButton_div.appendChild(dialog_show_closeButtonEl);
dialog_show_closeButton_div.appendChild(dialog_show_closeButton_button);

// showCloseButton - hide visible closeButton
let dialog_hide_closeButton = new Dialog({
    header: "Hide dialog close button",
    content: "This is content",
    footer: "Footer",
    isVisible: false,
    showCloseButton: false
});
let dialog_hide_closeButtonEl = dialog_hide_closeButton.render();
dialog_hide_closeButtonEl.id = "dialog_hide_closeButtonEl";
let dialog_hide_closeButton_button = document.createElement('button');
dialog_hide_closeButton_button.id = "dialog_hide_closeButton_button";
dialog_hide_closeButton_button.innerHTML = "Show dialog which not contains Close button";
dialog_hide_closeButton_button.addEventListener('click', function () {
    dialog_hide_closeButton.show();
});
let close_dialog_wihtout_closeButton_button = document.createElement('button');
close_dialog_wihtout_closeButton_button.id = "close_dialog_without_closeButton_button";
close_dialog_wihtout_closeButton_button.innerHTML = "Close dialog";
close_dialog_wihtout_closeButton_button.style.zIndex = 10000;
close_dialog_wihtout_closeButton_button.style.position = 'relative';
close_dialog_wihtout_closeButton_button.addEventListener('click', function () {
    dialog_hide_closeButton.hide();
});
let dialog_hide_closeButton_div = document.createElement('div');
dialog_hide_closeButton_div.appendChild(dialog_hide_closeButtonEl);
dialog_hide_closeButton_div.appendChild(dialog_hide_closeButton_button);
dialog_hide_closeButton_div.appendChild(close_dialog_wihtout_closeButton_button);

export default {
    dialog_full_option_div,
    dialog_setHeader_existing_header_div,
    dialog_setHeader_with_components_div,
    dialog_get_header_string_cell_div,
    dialog_get_header_dom_div,
    dialog_setContent_existing_content_div,
    dialog_setContent_with_components_div,
    dialog_get_content_string_div,
    dialog_get_content_dom_div,
    dialog_setFooter_existing_footer_div,
    dialog_setFooter_with_components_div,
    dialog_get_footer_string_div,
    dialog_get_footer_dom_div,
    dialog_invisible_div,
    dialog_visible_div,
    dialog_show_closeButton_div,
    dialog_hide_closeButton_div
}