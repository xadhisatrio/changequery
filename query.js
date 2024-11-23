// Define the new data as a stringified JSON object
const newData = JSON.stringify({
  tgWebAppData: "user=%7B%22id%22%3A8063595578%2C%22first_name%22%3A%22Karenx%20%F0%9F%8D%85%20%F0%9F%8C%B1SEED%20%F0%9F%9B%92%20%F0%9F%90%A6%22%2C%22last_name%22%3A%22Kewt%22%2C%22username%22%3A%22karenkwet%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&chat_instance=5904040733521682199&chat_type=private&start_param=referralCode%3DQL0SQZ6Z&auth_date=1730528824&hash=26df4d6bfb5132c3d065ec403365fe525b6b96f190f5d823d9fdbc10cadd72f8",
  tgWebAppVersion: "7.10",
  tgWebAppPlatform: "android",
  tgWebAppThemeParams: "{\"accent_text_color\":\"#91c7f6\",\"bg_color\":\"#282e33\",\"bottom_bar_bg_color\":\"#282e33\",\"button_color\":\"#60a8e7\",\"button_text_color\":\"#ffffff\",\"destructive_text_color\":\"#f57474\",\"header_bg_color\":\"#282e33\",\"hint_color\":\"#82868a\",\"link_color\":\"#67bbf3\",\"secondary_bg_color\":\"#313b43\",\"section_bg_color\":\"#282e33\",\"section_header_text_color\":\"#67bbf3\",\"section_separator_color\":\"#242a2e\",\"subtitle_text_color\":\"#82868a\",\"text_color\":\"#f5f5f5\"}"
});

// Set the new value in sessionStorage
sessionStorage.setItem('__telegram__initParams', newData);

// Verify the change
console.log(sessionStorage.getItem('__telegram__initParams'));
