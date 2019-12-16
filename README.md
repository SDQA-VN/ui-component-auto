# kintone-ui-component Auto
Applying Automation in kintoneUIComponent testing

### Clone source to local machine
```
$ mkdir Tesing-Automation-Project
$ cd Tesing-Automation-Project
$ git clone https://github.com/SDQA-VN/ui-component-auto.git 
$ cd ui-component-auto
$ npm install
```
### Run Test 
1. At config.json 
- Edit testing domain and app test suitably
- Config folder test
```
"folderTest": "xxx" (js or react) , default value is 'react'
```
2. Run preparation 
```
$ npm run preparation
```
3. Run test 
```
$ npm run test
```

