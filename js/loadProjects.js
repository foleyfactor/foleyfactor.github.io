var template = `<div class="project middle panel">
                        <div class="panel-heading project-header">
                            <h3 class="no-bottom">{title}</h3>
                        </div>
                        {award}
                        <div class="project-description">
                            <p class="small-text no-bottom">{description}</p>
                        </div>
                        <div class="built-with text-center">
                            <p class="small-text no-bottom"><b>Built with: </b>{technologies}</p> 
                        </div>
                        <div class="text-center">
                        	{link}
                        </div> 
                    </div>`

var version = 1.3;

function getCookie(cookie) {
	let allCookies = decodeURIComponent(document.cookie).split(";");
	for (let i = 0; i<allCookies.length; i++) {
		let curr = allCookies[i];
		while (curr.substring(0) === ' ') curr = curr.substring(1);
		if (curr.indexOf(cookie) === 0) return curr.substring(cookie.length+1);
	}
	return "";
}

function checkVersion() {
	if (getCookie("__fvsn") !== version.toString()) {
		let d = new Date();
		d.setTime(d.getTime() + (10*365*24*60*60*1000));
		document.cookie = "__fvsn=" + version + "; expires=" + d.toUTCString() + "; path=/;";
		console.log("not on current version... updating.");
		window.location.reload(true);
	}
}

$(document).ready(() => {
	console.log("setup");
	checkVersion();
	let count = 1;
	$root = $('#project-container');
	for (project of projects) {
		let result = template;
		if ((count - 2) % 3 !== 0) {
			result = result.replace("middle", "");
		}
		result = result.replace("{title}", project.title);
		if (project.award) {
			result = result.replace("{award}", `<div class="award">
               									   `+ project['award-text'] +`
         									   </div>`);
		} else {
			result = result.replace("{award}", "");
		}
		result = result.replace("{description}", project.description);
		result = result.replace("{technologies}", project.technologies.join(", "));
		if (project['medium-link']) result = result.replace("{link}", '<a target="new" href="' + project['medium-link'] + '" class="btn btn-default btn-lg github-button"> <i class="fa fa-medium fa-fw"></i><span class="network-name"> Read about it!</span></a>');
		else if (project['github-link']) result = result.replace("{link}", '<a target="new" href="' + project['github-link'] + '" class="btn btn-default btn-lg github-button"> <i class="fa fa-github fa-fw"></i><span class="network-name"> Check it out!</span></a>');
		console.log(result);
		$root.append(result);
		++count;
	}

	// $(window).on('scroll', scrolling);
	// $(window).on('load', scrolling);
});
