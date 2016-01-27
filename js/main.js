
 var theZodiac = [
	{
		usersign: "leo",
		userdescription: "Strengths: Creative, passionate, generous, warm-hearted, cheerful, humorous",

	},
	{
		usersign: "aries",
		userdescription:"Strengths: Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",	
	},
	{ 
		usersign: "taurus",
		userdescription: "Strengths: Reliable, patient, practical, devoted, responsible, stable",
	},
	{
		usersign: "pices",
		userdescription: "Strengths: Compassionate, artistic, intuitive, gentle, wise, musical",

	},
	{
		usersign: "gemeni",
		userdescription:"Strengths: Gentle, affectionate, curious, adaptable, ability to learn quickly and exchange ideas",	
	},
	{ 
		usersign: "cancer",
		userdescription: "Strengths: Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
	},
	{
		usersign: "sagittarius",
		userdescription: "Strengths: Generous, idealistic, a great sense of humor",

	},
	{
		usersign: "capricorn",
		userdescription:"Strengths: Responsible, disciplined, self-control, make good managers",	
	},
	{ 
		usersign: "aquarius",
		userdescription: "Strengths: Determined, efficient, practical thinker, optimistic for the future",
	},
	{
		usersign: "virgo",
		userdescription: "Strengths: Loyal, analytical, kind, hardworking, practical",

	},
	{
		usersign: "libra",
		userdescription:"Strengths: Cooperative,diplomatic, gracious, fair-minded, social",	
	},
	{ 
		usersign: "scorpio",
		userdescription: "Strengths: Resourceful, brave, passionate, stubborn, a true friend",
	}
]

function getInfo() {
	var usersign = document.getElementById("usersign").value.toLowerCase();

for (var i = 0; i < theZodiac.length; i++) {
	if (usersign === theZodiac[i].usersign) {
			document.getElementById("yoursign").innerHTML = theZodiac[i].usersign;
			document.getElementById("yourscope").innerHTML = theZodiac[i].userdescription;
		    return;	
		}
		else {
			document.getElementById("yoursign").innerHTML = "That - my friend - is not a horoscope sign!";
		
				  }
		}

   }
 


