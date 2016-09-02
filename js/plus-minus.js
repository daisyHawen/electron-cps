/*
 *专门用于添加元素，删除元素的函数
 *依赖jquery
 *输入参数
 *html:要插入元素的的html内容
 *fatherObj:要插入元素的父元素的名字，如果是class就用'.name'，如果是id就用'#name'
 *Obj:要插入元素的class类名,用'.className'
 *maxSize:允许插入的最大个数
 */

var plusMinus = (function() {
	var html = "",
		fatherObj = "",
		objClassName = "",
		Counter = 1,
		maxSize = 4;
	var plusItems = function() {
			var father_ul = $(fatherObj);
			if (Counter > maxSize) {
				alert("只允许添加" + maxSize + "个条件");
			} else {
				father_ul.append(html);
				Counter = Counter + 1;
			}
		},
		minusItems = function() {
			/*首先找到fatherObj的最后一个元素*/
			console.log(objClassName);
			var limit_li = $(objClassName);
			var last_limit_li = limit_li.last();
			if (Counter > 1) {
				last_limit_li.remove();
				Counter = Counter - 1;
			} else {
				console.log('只剩一个了，不要再删了！');
			}
		},
		init = function(ufatherObj, uobjClassName, uhtml, umaxSize) {
			console.log('init');
			fatherObj = ufatherObj;
			objClassName = uobjClassName;
			console.log(objClassName);
			html = uhtml;
			maxSize = umaxSize;
		};
	return {
		plusItems: function() {
			return plusItems();
		},
		minusItems: function() {
			return minusItems();
		},
		init: function(ufatherObj, uobjClassName, uhtml, umaxSize) {
			return init(ufatherObj, uobjClassName, uhtml, umaxSize);
		}
	}

});
var newplusMinus = plusMinus();
var html = "<li class='list-group-item'> <div class='input-group'> <div class='input-group-btn'> <button type='button' class='btn btn-default dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>纬度范围 <span class='caret'></span></button> <ul class='dropdown-menu'> <li><a href='#'>Action</a></li> <li><a href='#'>Another action</a></li> <li><a href='#'>Something else here</a></li> </ul> </div> <!-- /btn-group --> <input type='text' class='form-control' style='width:95%' aria-label='...'> <div class='plus-minus'> <a onclick = 'addItem()'><span class='glyphicon glyphicon-plus'></span> </a> <a onclick='minusItem()'><span class='glyphicon glyphicon-minus'></span> </a> </div> </div> </li> ";
var html2 = $('.list-group-item').last().html();
console.log(html2);
console.log(html);
var limit_ul = '.list-group';
var limit_li = '.list-group-item';
/*初始化参数*/
newplusMinus.init(limit_ul, limit_li, html, 5);
/*为按钮绑定事件函数*/
function addItem() {
	newplusMinus.plusItems();
}

function minusItem() {
	console.log('minus');
	newplusMinus.minusItems();
}