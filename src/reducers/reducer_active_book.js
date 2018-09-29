//State arguement is not the application state , only the states this reducer is responsible for


// state = null, is a piece of ES6 syntax which saya when the arguement state comes in and 
// if it is undefined set it to null. (This will happen initially)
export default function (state = null, action) { 
	switch(action.type){
		case 'BOOK_SELECTED':
			return action.payload;
	}
	return state;
}