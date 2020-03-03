(function(){
    (function (arr) {
      arr.forEach(function (item) {
        if (item.hasOwnProperty('append')) {
          return;
        }
        Object.defineProperty(item, 'append', {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function append() {
            var argArr = Array.prototype.slice.call(arguments),
              docFrag = document.createDocumentFragment();
            
            argArr.forEach(function (argItem) {
              var isNode = argItem instanceof Node;
              docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
            });
            
            this.appendChild(docFrag);
          }
        });
      });
    })([Element.prototype, Document.prototype, DocumentFragment.prototype]);
    var TestGrid = function(options) {
        this.rowCount = options.rowCount
        this.columnCount = options.columnCount
        this.id = options.id
        this.classNames = options.classNames
        this.rows = []
        this.table = {}
      };
      TestGrid.prototype.render = function() {
        var table = document.createElement('table');
        if(this.id !== undefined) {
          table.id = this.id;
        }
        if(this.classNames !== undefined) {
          table.className = this.classNames;
        }
        // append to rows
        for (var rowIndex = 0; rowIndex < this.rowCount; rowIndex++) {
          var row = document.createElement('tr');
          for (var columnIndex = 0; columnIndex < this.columnCount; columnIndex++) {
            var cell = document.createElement('td');
            row.append(cell);
          }
          this.rows.push(row);
          table.append(row);
        }
        // set table
        this.table = table;
        return table;
      };
      TestGrid.prototype.getRow = function(rowIndex) {
        return this.rows[rowIndex];
      };
      TestGrid.prototype.getCell = function(rowIndex, columnIndex) {
        return this.rows[rowIndex].cells[columnIndex];
      };
      TestGrid.prototype.addDescription = function(rowIndex, columnIndex, description) {
        var cell = this.rows[rowIndex].cells[columnIndex];
        var descriptionSpan = document.createElement('span');
        descriptionSpan.style.display = 'block';
        descriptionSpan.textContent = description;
        cell.insertBefore(descriptionSpan, cell.firstChild);
      };
      TestGrid.prototype.getCellXpath = function(rowIndex, columnIndex) {
        let rowNum = rowIndex + 1
        let colNum = columnIndex + 1
        return "//table[@class='" + this.classNames + "']//tr["+ rowNum + "]//td["+ colNum + "]"
      };
    window.SDTestGrid = TestGrid;
})();
