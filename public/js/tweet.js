$(document).ready(function () {
	$("#btnTweet").click(function (e) {
		const selectedText = $("#comment").val();

		if (selectedText.length > 140) {
			alert("Tweet should be less than 140 character!");
		} else {
			const tweet =
				"http://twitter.com/home?status=" + encodeURIComponent(selectedText);
			window.open(tweet, "_blank");
		}
	});
});
