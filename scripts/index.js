Vue.component('movie', {
	template: '#single-movie',
	props: ['selectedMovie']
});

var vm = new Vue({
	el: '#root',
	data: {
		title: 'Hello World!',
		selectedMovie: {}
	},
	mounted: function() {
		this.searchMovie('indiana');
	},
	methods: {
		searchMovie: function(movie) {
			fetch('http://www.omdbapi.com/?t=' + movie)
			.then(function(response) {
				return response.json();
			}).then(json => {
				console.log(json);
				this.selectedMovie = json;
			});

		}
	}
});