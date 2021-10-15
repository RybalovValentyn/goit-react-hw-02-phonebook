import { Component } from "react";
import Section from './Components/Section'
import Phonebook from "./Components/Phonebook";


class App extends Component {

  state = {
    contacts: [],
    name: ''
  }


  formSubmitHandler = data => {

  // this.setState(this.state.contacts =[data.name])
  this.setState(prevState => ({
    contacts:[ ...prevState.contacts,data.name]
}) ) 
console.log(this.state);
  }
render(){
  return (
    <>
<Section title='Phonebook'>
<Phonebook   onSubmit={this.formSubmitHandler}/>
</Section>
    </>
  );
}
}

export default App;
