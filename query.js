// Retrieve the current data from sessionStorage 
let currentData = JSON.parse(sessionStorage.getItem('__telegram__initParams'));

// If the data exists, modify the tgWebAppData
if (currentData) {
  currentData.tgWebAppData = "%TGWEBAPPDATA%";  
  
  // Store the updated data back in sessionStorage
  sessionStorage.setItem('__telegram__initParams', JSON.stringify(currentData));
}

// Verify the change
console.log(sessionStorage.getItem('__telegram__initParams')); // Logs the updated value in sessionStorage
