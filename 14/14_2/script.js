var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Film o czarodzieju',
		img: '1.png'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawanny',
		img: '2.png'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id}, 
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.img, width:200})
	);
});


var element = 
	React.createElement('div', {}, 
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);


ReactDOM.render(element, document.getElementById('app'));