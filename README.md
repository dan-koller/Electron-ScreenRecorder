# Electron screen recorder

I took the inspiration from Jeff Delaney @ fireship.io. I created my own version due to the lack of support for newer Electron versions (and of course i wanted to learn more about js and cross-platform frameworks). This version will work with Electron(-forge) v9 and newer.

![Status](https://img.shields.io/badge/Active-true-brightgreen) ![Status](https://img.shields.io/badge/Indev-true-brightgreen) ![Status](https://img.shields.io/badge/Build-complete-yellow)

## What you'll need:

- **NodeJS** (check with "node -v" )
- **npm** (check with "npm -v")
- **@electron/require** (install with `npm install --save @electron/remote`)
- **Bulma CSS** (See [Bulma documentation](https://bulma.io/documentation/overview/start/))  
  _(Bulma is optional. You can use a different CSS framework or do it yourself)_

## Initialize your app:

- `npx create-electron-app app-name`

## What you need to do upfront:

Change the webPreferences in your `index.js` to make your app run in Electron v9 and newer:

#### For example:

      const mainWindow = new BrowserWindow({
        width: 1000,
        height: 800,
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: true,

Especially `enableRemoteModule: true` is required in Electron v9 in order to work properly with Node as you can see [here](https://github.com/electron/electron/issues/21408).

## Get started:

- Add a `render.js` to your project (this is where you put your "frontend" code)
- Import `require` module with `require('@electron/remote/main').initialize()` to your main process (`index.js`)
- Add `const { BrowserWindow } = require('@electron/remote')` to the render process to use `require` dependencies  
  _(See [Electron/require Documentation](https://github.com/electron/remote) for further information)_

- Add the `render.js` to the script tag of your index.html (put a "`defer`" variable into script-tag)
- To start your app run "`npm start`" in your terminal
- If you want to reload, simply type "`rs`" to relaunch your app
