// Retrieve the current data from sessionStorage
let currentData = JSON.parse(sessionStorage.getItem('__telegram__initParams'));

// If the data exists, modify the tgWebAppData
if (currentData) {
  currentData.tgWebAppData = "user=%7B%22id%22%3A7810080103%2C%22first_name%22%3A%22Able%20%F0%9F%8D%85%20%F0%9F%8C%B1SEED%20%F0%9F%9B%92%20%F0%9F%90%A6%22%2C%22last_name%22%3A%22Musts%22%2C%22username%22%3A%22able_Exegete%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=4651287339971239053&chat_type=private&start_param=referralCode%3DQL0SQZ6Z&auth_date=1730529206&hash=1bffed8eb41728813e418a8ff2275dca5722d0622bf6a0f12d2cfaa775999291";
  
  // Store the updated data back in sessionStorage
  sessionStorage.setItem('__telegram__initParams', JSON.stringify(currentData));
}

// Verify the change
console.log(sessionStorage.getItem('__telegram__initParams'));
