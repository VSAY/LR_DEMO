function openAlacraDialog(alacraURL) {
	/*
	 * This is a custom JS function: This is called when user click "Buy" link
	 * on Article cards. This will alert the user, if user click OK then user
	 * will redirected to Alacra(alacraURL) store
	 */
	if (confirm("You are being redirected to a site where you can browse and buy S&P Rating's research reports. Single report purchases are fulfilled by Alacra. Your credit card statement will list Alacra as the sales agent.")) {
		window.open(alacraURL, "_blank");
	}
}