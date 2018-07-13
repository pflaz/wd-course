App = React.createClass({
	render: function() {

		var styles = {
			margin: '0 auto',
			textAlign: 'center',
			width: '90%'
		};

		return (
			<div style={styles}>
				<h1>Wyszukiwarka GIFów</h1>
				<p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
				<Search
					onSearch={this.handleSearch}
				/>
				<Gif 
					loading={this.state.loading}
					url={this.state.gif.url}
					sourceUrl={this.state.gif.sourceUrl}
				/>
			</div>
		);
	}, 

	getInitialState: function() {
		return {
			loading: false,
			searchingText: '',
			gif: {}
		};
	},

	handleSearch: function(searchingText) {
		this.setState({
			loading: true
		});
		this.getGif(searchingText)
		.then(response => this.setState({
				loading: false,
				gif: response,
				searchingText: searchingText
			}))
		.catch(error => console.error('Error: ', error));
	},

	// getGif: function(searchingText, callback) {
	// 	var GIPHY_API_URL = 'https://api.giphy.com';
	// 	var GIPHY_PUB_KEY = 'BjBvux92uOOayuN1CcXB7PZtJ8cNUPrN';
	// 	var url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.open('GET', url);
	// 	xhr.onload = function() {
	// 		if (xhr.status === 200) {
	// 			var data = JSON.parse(xhr.responseText).data;
	// 			var gif = {
	// 				url: data.fixed_width_downsampled_url,
	// 				sourceUrl: data.url
	// 			};
	// 			callback(gif);
	// 		}
	// 	};
	// 	xhr.send();
	// }	

	getGif: function(searchingText) {
		return new Promise(
			function(resolve, reject) {
				const GIPHY_API_URL = 'https://api.giphy.com';
				const GIPHY_PUB_KEY = 'BjBvux92uOOayuN1CcXB7PZtJ8cNUPrN';
				const url = GIPHY_API_URL + '/v1/gifs/random?api_key=' + GIPHY_PUB_KEY + '&tag=' + searchingText;
				const xhr = new XMLHttpRequest();
				xhr.open('GET', url);
				xhr.onload = function() {
					if (this.status === 200) {
						const data = JSON.parse(this.responseText).data;
						const gif = {
							url: data.fixed_width_downsampled_url,
							sourceUrl: data.url
						};
						resolve(gif);
					} else {
						reject(new Error(this.statusText));
					}
				};
				xhr.onerror = function() {
					reject(new Error(this.statusText));
				};
				xhr.send();
			});
	}

});