import React, { Component } from 'react'
import { connect } from 'react-redux';

class MoviesShow extends Component {
  render(){
    return(
      <div>Movies Show</div>
    )
  }
}

// class MoviesShow extends Component {
//   render(){
//     const movie = this.props.movie; // This just makes our JSX a little more readable
//     return (
//       <div className='col-md-8'>
//         { movie.title }
//       </div>
//     )
//   }
// }

function mapStateToProps(state, ownProps){
   const movie = state.movies.find(movie => movie.id === ownProps.routeParams.id);

   if (movie) {
     return { movie: movie }
   } else {
     return { movie: {} }
   }
}

export default connect(mapStateToProps)(MoviesShow);
