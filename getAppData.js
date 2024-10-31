+ console.log(process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences'))
