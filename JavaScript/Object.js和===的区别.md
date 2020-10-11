Object.is()修复了===下的一些问题
在===下，NaN !== NaN   +0 === -0
在Object.js中 NaN === NaN    +0 !== -0