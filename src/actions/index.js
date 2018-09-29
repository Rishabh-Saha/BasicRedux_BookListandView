//An action creator is just a function that returns an action
//An action is an object that flows through all of our different reducers
//Reducer can then use that action to produce a different value for it's particular piece of state

export function selectBook(book){
	//selectBook is an action creator, it needs to return an action
	//an object with type property
	
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}

