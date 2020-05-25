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

			})



	}
})