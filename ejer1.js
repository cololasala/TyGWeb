var app = new Vue({
	el:'#app',
	data: {
		message:'Hello Vue!!',
		counter:0,
		inputData: '',
		currencies: null,
	},

	methods: {
		increment() {
			this.counter++;
		},

		getPrice(currency) {
			return currency.rate_float.toFixed(2);
		}
	},

	mounted() {
		axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
				.then(response => this.currencies = response.data.bpi);
	}

});