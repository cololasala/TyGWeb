var app = new Vue({
	el:"#app",
	data: {
		message: 'hello world',
		showElements: false,
		showElementsTwo: false,
		elements: null,
		elementsTwo: [],				// aca guardo las descripciones
		elementsTwoUrls: [],			// aca guardo las urls de las fotos
		phrasesArray:[{phrase:'Hola a todos :D', style:1}, {phrase:'Pagina unica en el mundo', style:2} ,{phrase:'Esto es muy divertido!!', style:3}],
		elementsThree: null,
	},

	methods: {

		api1() {
			this.showElementsTwo = false;
			this.showElements = true;
		},

		api2() {
			this.showElements = false;
			this.showElementsTwo = true;
		}

	},

	created() {
		this.showPhrase = this.phrasesArray[Math.floor(Math.random() * 3)]; // toma valores entre 0 y 1, luego multiplica por 3 y luego toma la parte entera 
	},

	mounted() {
		axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
			.then(response => this.elements = response.data.bpi);

		axios.get("https://opencollective.com/sustainoss/events.json?limit=10&offset=0") // Page is called Open Collective Docs. Open Collective is an online funding platform for open and transparent communities. 
			.then(response => {
								console.log(response.data);
								this.elementsThree = response.data
							});
		axios.get("https://api.unsplash.com/users/randomsky/photos/?client_id=-qqFujEaGsaptFY6f3YY3bHiEFvLJ3PtWfSUi39NH6Q") // This page is called unsplash, it's used to upload photos, is very similiar to instagram.
			.then(response => { 
								for(var i = 4; i >= 0; i--) {								// aca solo quiero 5 imagenes y sus descripciones
									this.elementsTwo.push(response.data[i].description);  
									this.elementsTwoUrls.push(response.data[i].urls.raw);
								}
							});
	}
})