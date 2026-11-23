const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
function createWindow(){
 const win=new BrowserWindow({width:1440,height:900,minWidth:900,minHeight:650,autoHideMenuBar:true,webPreferences:{preload:path.join(__dirname,'preload.js'),contextIsolation:true,nodeIntegration:false}});
 win.loadFile('index.html');
}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow()})});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
ipcMain.on('close-app',()=>app.quit());