import React, { Component } from 'react';
import axios from 'axios';
import {Loading} from './loading';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading:false,
      vast:"waitfor a while"
    };
    this.handle = this.handle.bind(this);
  }


  getuser(){
    // axios('https://api.randomuser.me/?nat=US&results=5').then(response => console.log(response));
    axios('https://api.randomuser.me/?nat=US&results=5').then(response => this.setState({
      users : [...this.state.users, ...response.data.results],
      loading:true,
      

    }) )
  }

  handle(e){
  e.preventDefault();
    this.getuser();
    console.clear();
    console.log("MOre user loaded")
    console.log(this.state.loading) 
    console.log(`Array[${this.state.users.length}]`)
    console.log(this.state.users)
  // console.log(`The Amount of users are [${this.state.user.length}]`)
   
  }
  
  componentWillMount(){
   this.getuser();
  };
  render() {
    const {loading, users} = this.state
    // var {name,cell,gender,dob,email}=this.state.users
    return (
      <div className="App">
       <input type ="button" id ="loaduser" value ={`The number of users showing right now are   ${users.length}`} onClickCapture={alert(users.length)} style={{color :"black",backgroundColor:"red"} }></input>
      <form onSubmit={this.handle}> 
     <input type="submit" id="submit" style={{color :"Red", backgroundImage :"Yellow"}} value="load user" />
    
       </form>
       <hr />
       {loading ? users.map(user => 
       <div key={user.id.value} style ={{background:"violet"}}>

       <h3 style ={{color:"Purple"}}>Name:- {user.name.first +' '+user.name.last}</h3>
       <p style ={{color :"Orange"}} >Cell-no:- {user.cell}</p>
       <p style ={{color :"black"}} >Gender:- {user.gender}</p>
       <p style ={{color :"green"}} >Age : {user.dob.age }</p>
       <hr />
       <p style ={{color :"brown"}} >Dob : {user.dob.date}</p>

       <p style ={{color :"blue"}} >Email : {user.email}</p>      
       <hr/>
       </div>): <Loading message={this.state.vast} />
      
      
      }
  
      </div>
      
    );
  }
}

export default App;
