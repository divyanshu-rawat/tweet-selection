 

 $(document).ready(function () {
	 $('#btnTweet').click(function (e) {
	 
	 var textToTweet = $('#comment').val();
	 
	 if (textToTweet.length > 140) {
	 
	 alert('Tweet should be less than 140 Chars');
	 
	 }
	 else {
	 
			 var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(textToTweet);
			 
			 window.open(twtLink,'_blank');
	 
	 }

	 });
 });
 