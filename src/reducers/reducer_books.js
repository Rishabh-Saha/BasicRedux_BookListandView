//Reducer is just a function that will return a piece of our application state.
//They are responsible for changing that piece of application state based on a action

export default function() {
	return [
		{ title: 'Javascript: The good parts', pages: 490},
		{ title: 'Harry Potter', pages: 3000},
		{ title: 'The Dark Tower', pages: 680},
		{ title: 'Eloquent Ruby', pages: 671}
	]
}