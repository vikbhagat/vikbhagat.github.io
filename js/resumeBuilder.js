var bio = {
	"name":"Vikas Bhagat",
	"role":"Web Developer",
	"contacts": {
				"mobile": "832-876-7890",
				"email": "vikbhagat@gmail.com",
				"github": "vikbhagat",
				"twitter": "vikbhagt",
				"location": "Dallas , TX"
				},
	"welcomeMessage": "HELLO WORLD",
	"skills" : ["HTML","CSS","Java Script"],
	"bioPic": "images/fry.jpg"

	};
var education = {
	"schools":[
			{  "name": "UTD",
			"location": "Dallas ,TX",
			"degree": "BS",
			"majors": "Biology"
		},
		{   "name": "ASU",
			"location": "Tempe, AZ",
			"degree": "BS",
			"majors": "Software Enginnering"
		}

		]
	};
var work = { 
	"jobs": [
	{"employer": "Tobacco Hut",
     "title": "Buissness Mangaer" ,
     "location": "Mckinney , TX",
     "dates": "2009-2016",
     "description": "Buissness" 
		}

		]
	};
var projects = {
	"projects" : [
	{"title": "FRONT END WEB DESING" ,
      "dates": "AUGUST 2015",
      "description": "Front End Deign HTML/CSS from Mock up",
      "images": ["images/frontend.png","images/mockup.png"]
 	 }
 
	]
	};
bio.display = function (){
					var formatedRole = HTMLheaderRole.replace("%data%",bio.role);
					$("#header").prepend(formatedRole);
					var formatedName= HTMLheaderName.replace("%data%",bio.name);
					$("#header").prepend(formatedName);
					var formatedMobile =HTMLmobile.replace("%data%",bio.contacts.mobile);
					$("#topContacts").append(formatedMobile);
					$("#footerContacts").append(formatedMobile);
					var formatedEmail =HTMLemail.replace("%data%",bio.contacts.email);
					$("#topContacts").append(formatedEmail);
					$("#footerContacts").append(formatedEmail);
					var formatedGit =HTMLgithub.replace("%data%",bio.contacts.github);
					$("#topContacts").append(formatedGit);
					var formatedImgage =HTMLbioPic.replace("%data%",bio.bioPic);
					$("#header").append(formatedImgage);
					var formatedLocation =HTMLlocation.replace("%data%",bio.contacts.location);
					$("#topContacts").append(formatedLocation);
					var formatedWelcome =HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
					$("#header").append(formatedWelcome);
					$("#header").append(HTMLskillsStart);
					for (skill in bio.skills){
						var formatedSkill= HTMLskills.replace("%data%",bio.skills[skill]);
						$("#header").append(formatedSkill);
						}
					}
work.display= function (){
	for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formttedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formatedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formatedEmployerTitle = formttedEmployer+formatedTitle;
		$(".work-entry:last").append(formatedEmployerTitle);
		var formatedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		$(".work-entry:last").append(formatedLocation);
		var formatedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formatedDates);
		var formatedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formatedDescription);
		}
	}
projects.display = function() {
	for(var project in projects.projects){
	$("#projects").append(HTMLprojectStart);
	var formatedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
	$(".project-entry:last").append(formatedTitle);
	var formatedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	$(".project-entry:last").append(formatedDates);
	var formatedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
	$(".project-entry:last").append(formatedDescription);
	if(projects.projects[project].images.length > 0){
		for(var image in projects.projects[project].images){
			var formatedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formatedImage);
		}
	}
	}
	}
education.display= function(){
	for(var ed in education.schools){
	$("#education").append(HTMLschoolStart);
	var formatedName = HTMLschoolName.replace("%data%",education.schools[ed].name);
	$(".education-entry:last").append(formatedName);
	var formatedLocation = HTMLschoolLocation.replace("%data%",education.schools[ed].location);
	$(".education-entry:last").append(formatedLocation);
	var formatedDegree = HTMLschoolDegree.replace("%data%",education.schools[ed].degree);
	$(".education-entry:last").append(formatedDegree);
	var formatedMajor = HTMLschoolMajor.replace("%data%",education.schools[ed].majors);
	$(".education-entry:last").append(formatedMajor);
		}
	}
function locatoinizer(work_obj){
	var locationArray = [];
	for(var job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
	}

bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);







