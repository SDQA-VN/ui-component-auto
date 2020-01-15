const execSync = require("child_process").execSync;
const core = require("@actions/core");
const path = require('path');
const fs = require('fs'); 

const sourePath = path.join(__dirname, 'kintone-ui-component');
const branch = core.getInput('branch')
if (fs.existsSync(sourePath)) {
    execSync(`rm -rf ./kintone-ui-component`);
}
execSync(`git clone https://github.com/kintone/kintone-ui-component.git#${branch}`);
execSync(`cd ./kintone-ui-component && npm install`);
execSync(`cd ./kintone-ui-component && npm run build`);
execSync(`cd ./kintone-ui-component && npm pack`);
const package = require('./kintone-ui-component/package.json')
core.setOutput('files', path.join(__dirname, 'kintone-ui-component',`'kintone-kintone-ui-component-${package.version}.tgz`, ))



