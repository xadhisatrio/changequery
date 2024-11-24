// Retrieve the current data from sessionStorage 
let currentData = JSON.parse(sessionStorage.getItem('__telegram__initParams'));

// If the data exists, modify the tgWebAppData
if (currentData) {
  currentData.tgWebAppData = "%TGWEBAPPDATA%";  
}

// Verify the change
console.log(currentData);  // Logs the updated data
