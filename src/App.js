import React, {Component}from 'react';
import CardList from './cardlist';
import {connect} from 'react-redux';
import {members} from './members';
import SearchBox from './searchbox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
 import {setSearchField} from './Actions';

// defining state parameters
 const mapStateToProps = (state) =>{
  return{
    searchField: state.searchField
  }
 }
 const mapDispatchToProps =(dispatch) =>{
  return {
    onSearchChange: (event)=> dispatch(setSearchField(event.target.value))
     }
 }

class App extends Component {
  constructor(){
    // in order to be able to use this as a keyword, you have to first invoke super
     super()
     this.state  = {
           members: members
           
        }
    }
  
     
  render(){
    // this filters the elements displayed according to the input in the searchbox
    const {members} = this.state;
    const {searchField, onSearchChange}= this.props;
    const filteredMembers = members.filter(members =>{
          return members.name.toLowerCase().includes(searchField.toLowerCase());
       })
    return (
      // this is the code for each card displayed
      <div className = 'tc'>
         <h1>Members</h1>
         <SearchBox searchChange= {onSearchChange} />
         <Scroll>
           <ErrorBoundry>
            <CardList  members={filteredMembers}/>
            </ErrorBoundry>
          </Scroll>
       </div>
      );
}
  }
 
export default connect(mapStateToProps, mapDispatchToProps)(App);