# Electron screen recorder  
I got the inspiration from Jeff Delaney @ fireship.io. I created my own version due to the lack of support of newer Electron versions (and of course i wanted to learn more about js and cross-platform frameworks). This version will work with Electron(-forge) v9 and newer.  
  
![Status](https://img.shields.io/badge/Active-true-brightgreen) ![Status](https://img.shields.io/badge/Managed-true-brightgreen) ![Status](https://img.shields.io/badge/Indev-true-brightgreen)
  
## What you'll need:
  
- **NodeJS** (check with "node -v" )
- **npm** (check with "npm -v")
- **Bulma CSS** (See [Bulma documentation](https://bulma.io/documentation/overview/start/))  
*(Bulma is optional. You can use a different CSS framework or do it yourself)*
  
## Initialize your app:
  
- `npx create-electron-app app-name`
  
## What you need to do:
  
Change the webPreferences in your `index.js` to make your app run in electron v9 and newer:
  
#### For example:

      const mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: true,

  
## Get started
  
- Add a `render.js` to your project (this is where you put your "frontend" code)
- Add the `render.js` to the script tag of your index.html (put a "`defer`" variable into script-tag)
- To start your app run "`npm start`" in your terminal
- If you want to reload, simply type "`rs`" to relaunch your app
