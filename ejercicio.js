var app = new Vue({
	el:"#app",
	data: {
		message: 'hello world',
		elements: null,
	},

	methods: {
		api1() {
			alert('hello!');
		}

	},
	mounted() {
		axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
			.then(response => this.elements = response.data.bpi)
	}
})