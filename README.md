#Electron 折腾记之菜单menu
##创建一个Menu
首先需要require('electron').remote;
const Menu=remote.Menu;
const MenuItem=remote.MenuItem;
创建一个menu很简单：
var menu=new Menu();
##为menu添加元素
menu.append(new MenuItem({
    label:'MenuItem1',
    click:function(){
        console.log('item 1 clicked');
    }
}))
##menu的方法有
将menu设在窗口的顶部，方法必须，不然就不会显示你定义的menu
Menu.setApplicationMenu(menu)

##实例方法
**menu.popup([browserWindow, x, y, positioningItem])**
- browserWindow -可选，默认nulll
- x Number (可选) - 默认 -1.
- y Number (有x的话，必须) - Default is -1.
**positioningItem Number (可选) OS X **
菜单项的索引，以鼠标光标下在指定的坐标来定位。 Default is -1.
**menu.append(menuItem)**
- menuItem MenuItem
向菜单中追加menuItem
**menu.insert(pos, menuItem)**
pos integer
menuItem MenuItem
插入menuItem的pos位置