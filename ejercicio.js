var app = new Vue({
	el:"#app",
	data: {
		message: 'hello world',
		showElements: false,
		showElementsTwo: false,
		elements: null,
		elementsTwo: null,
		phrasesArray:[{phrase:'Hola a todos :D', style:1}, {phrase:'Pagina unica en el mundo', style:2} ,{phrase:'Esto es muy divertido!!', style:3}],
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

	}
})