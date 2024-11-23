let currentData = JSON.parse(sessionStorage.getItem('__telegram__initParams'));

if (currentData) {
  currentData.tgWebAppData = "%TGWEBAPPDATA%";  
  
  sessionStorage.setItem('__telegram__initParams', JSON.stringify(currentData));
}

console.log(sessionStorage.getItem('__telegram__initParams'));
