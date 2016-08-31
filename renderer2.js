const remote = require('electron').remote;

const Menu = remote.Menu;
const MenuItem = remote.MenuItem;

var menu = new Menu();
console.log('run renderer2.js');
menu.append(new MenuItem({
    label: 'Preferences',
    accelerator: 'CmdOrCtrl+R',
    click: function() {
        console.log('item 1 clicked');
    }
}))
menu.append(new MenuItem({ type: 'separator' }));
menu.append(new MenuItem({ label: 'Help', type: 'checkbox', checked: true }));
window.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    //popup()
    memu.popup(remote.getCurrentWindow());
}, false)


//如果没有这句话就没法加载menu
Menu.setApplicationMenu(menu);

