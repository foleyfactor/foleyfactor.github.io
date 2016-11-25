var xmasPlaylist = 'PLrUXPUxsJYMNKPU-j3Y-3cnDlNuiB_WaG';
var moviePlaylist = 'PLrUXPUxsJYMNdBiaQW-ljs4L4IvRS9HWy';
var guiltyPlaylist = 'PLrUXPUxsJYMOhuVpX6zWWEwx6Zogp4UDW';
var classicalPlaylist = 'PLrUXPUxsJYMN8UAt2L_CDtBne39Wf4uC7';
var happyBirthdayPlaylist = 'PLrUXPUxsJYMNAG1VGIte2uoPo2lel2znh';

var APIKey = 'AIzaSyCgZbGru9U_roOkYGqdI6Tl1GmXA69NfkM';

//Plays the music based on the time of year, according to the chart below:
//November 12 - January 1: xmas music;
//January 2 - March 15: movie songs;
//March 16 - July 31: classical music;
//August 1 - November 11: guilty pleasure music

var d = new Date();
var month = d.getMonth() + 1;
var day = d.getDate();

$(document).ready(function() {
	switch(month) {
		case 1:
		if (day > 1) {
			playlistId = moviePlaylist;
		} else {
			playlistId = xmasPlaylist;
		}
		break;

		case 2:
		playlistId = moviePlaylist;
		break;

		case 3:
		playlistId = classicalPlaylist;
		break;

		case 4:
		case 5:
		case 6:
		playlistId = classicalPlaylist;
		break;

		case 7:
		if (day == 19) {
			playlistId = happyBirthdayPlaylist;
			alert('HAPPY BIRTHDAY SNATTY!!');
		} else {
			playlistId = classicalPlaylist;
		}
		break;

		case 8:
		case 9:
		case 10:
		playlistId = guiltyPlaylist;
		break;

		case 11:
		if (day < 11) {
			playlistId = guiltyPlaylist;
		} else {
			playlistId = xmasPlaylist;
		}
		break;

		case 12:
		playlistId = xmasPlaylist;
		break;
	}

	var query = new XMLHttpRequest();
	query.open('GET', 'https://www.googleapis.com/youtube/v3/playlistItems?part=id&maxResults=0&playlistId=' + playlistId + '&key=' + APIKey, false);
	query.send();

	var numSongs = JSON.parse(query.response)['pageInfo']['totalResults'];
	var startIndex = Math.floor((Math.random() * numSongs) + 0);

	var link = '<iframe src="' + 'https://youtube.com/embed?listType=playlist&list=' + playlistId + '&autoplay=1&loop=1&index='+startIndex + '" width="300" height="150" id="playerl"></iframe>';

	$('#songs').append(link);
	console.log(startIndex);
	console.log(numSongs);
});