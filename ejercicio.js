
var app = new Vue({
	el:"#app",
	data: {
		message: 'hello world',
		showElements: false,
		showElementsTwo: false,
		elements: null,
		countries: [],				
		elementsTwoUrls: [],			
		phrasesArray:[{phrase:'Hola a todos :D', style:1}, {phrase:'Pagina unica en el mundo', style:2} ,{phrase:'Esto es muy divertido!!', style:3}],
		elementsThree: null,
		apikey: 'IWiSMyNuZqK4ik2jzl3YedusT:gBmcbRAewZPHHJgfm1G9heF8v1uteKSBXtvP8BrPR5zS8Kqy80', // api de twitter
	},

	methods: {

		api1() {
			this.showElementsTwo = false;
			this.showElements = true;
		},

		api2() {
			this.showElements = false;
			this.showElementsTwo = true;
		},

	},

	created() {
		var querystring = require('querystring');
		this.showPhrase = this.phrasesArray[Math.floor(Math.random() * 3)]; // toma valores entre 0 y 1(exclusivo), luego multiplica por 3 y luego toma la parte entera 
	},

	mounted() {

		axios.get("https://holidayapi.com/v1/countries?pretty&key=1afd450e-a844-4d3f-816a-42a22d11747f")
			.then(response => {
				
				for(i=0; i < 39; i++) {
					this.countries.push({
						name: response.data.countries[i].name,
						flag: response.data.countries[i].flag,
						code: response.data.countries[i].code,
					});
				}

			});

/*		axios({																// api de twitter funcionando
			method:'POST',
			url: "https://cors-anywhere.herokuapp.com/https://api.twitter.com/oauth2/token",
			headers: {
					'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
				    'Authorization':'Basic ' + btoa(this.apikey),
				},
			data: 'grant_type=client_credentials',
			}).then(response => {
				console.log(response);
			});
*/

/*		axios({
			method:'POST',
			url: "https://discord.com/api/oauth2/token",
			headers: {
					'Content-Type':'application/x-www-form-urlencoded',
				},
			data: {
				'grant_type':'authorization_code',
				'client_id':'708817846741893220',
    			'client_secret':'-gTAFSs3RuBBvPtSbHivPPovG5l25C68',
    			'scope':'identify',
    			'redirect_uri':'https://www.google.com',
			},
			}).then(response => {
				console.log(response);
			});
*/
/*			axios({
			method:'POST',
			url: "https://discord.com/api/oauth2/token",
			headers: {
					'Content-Type':'application/x-www-form-urlencoded',
				},
			data: 
				'grant_type=authorization_code'+
				'client_id:708817846741893220'+
    			'client_secret:-gTAFSs3RuBBvPtSbHivPPovG5l25C68'+
    			'scope:identify'+
    			'redirect_uri:https://www.google.com'
			
			}).then(response => {
				console.log(response);
			});
*/
			axios({
			method:'GET',
			url: "",
			}).then(response => {
				console.log(response.data);
			});




	}
})