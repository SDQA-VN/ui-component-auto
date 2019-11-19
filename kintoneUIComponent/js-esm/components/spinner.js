import {Spinner} from '@kintone/kintone-ui-component/esm/js';

let spinner = new Spinner();
let spinner_El = spinner.render();
spinner_El.id = 'spinner_ID';

export default {
    spinner_El
}