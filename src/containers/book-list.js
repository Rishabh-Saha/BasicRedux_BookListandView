//A container is a react component that has a direct connection to the state managed by redux.
//React-Redux is the library the forms a bridge between Redux(data contained in the application) and React(View contained in the application)
//So in a container we inject data into a component, and this is where we bridge the two.
//Containers are smart components.

import React, { Component } from 'react';
import { connect } from 'react-redux'; //This is the glue between react and redux
import { bindActionCreators } from 'redux';

import { selectBook } from './../actions/index';


class BookList extends Component {
	renderList(){
		return this.props.books.map(book => {
			return (
				<li 
					onClick={() => this.props.selectBook(book)}
					key={book.title} 
					className="list-group-item">{book.title}
				</li>
			)
		})
	}


	render (){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

//This is how we link react and redux:

function mapStateToProps (state){ //It take application state as an arguement
	//whatever is returned will show up as props inside the BookList (Component)
	
	return {
		books: state.books
	}
}


//The keys of the object below (eg: selectBook) are available as props to the component(BookList)
function mapDispatchToProps (dispatch){
	//whenever selectBook is called the result should be passed to all reducers
	return bindActionCreators({selectBook:selectBook},dispatch); //dispatch passes it to all reducers
}




//Promote BookList from a component to a container- it needs to know about this new Dispatch method - selectBook.
//Make it available as a prop
export default connect(mapStateToProps,mapDispatchToProps)(BookList); 
//So connect function is actually the one that says, 
//take mapStateToProps(function) and take a component(BookList) and return a container.
//And that is what we want to export from this file.