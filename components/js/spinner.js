//kintone-ui-component Spinner
//https://sharedoc.atlassian.net/wiki/spaces/SC/pages/82772500/kintone-ui-component+Spinner

let constructorSpinner = new kintoneUIComponent.Spinner({isVisible:false});
let constructorSpinnerEl = constructorSpinner.render();
constructorSpinnerEl.id = 'constructor-spinner';
let showConstructorSpinnerButton = document.createElement('button');
showConstructorSpinnerButton.innerHTML='Show Spinner';
showConstructorSpinnerButton.addEventListener('click',function(){
    constructorSpinner.show();
})
let hideConstructorSpinnerButton = document.createElement('button');
hideConstructorSpinnerButton.setAttribute('style','position:relative; z-index:10000;')
hideConstructorSpinnerButton.innerHTML='Hide Spinner';
hideConstructorSpinnerButton.addEventListener('click',function(){
    constructorSpinner.hide();
})
let constructorSpinnerCell = testgrid.getCell(posConfig.Spinner.x, 1);
constructorSpinnerCell.appendChild(constructorSpinnerEl);
constructorSpinnerCell.appendChild(showConstructorSpinnerButton);
constructorSpinnerCell.appendChild(hideConstructorSpinnerButton);