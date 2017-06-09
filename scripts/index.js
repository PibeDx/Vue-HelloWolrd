Vue.component('movie', {
	template: '#single-movie'
});

var vm = new Vue({
	el: '#root',
	data: {
		title: 'Hello World!'
	}
});