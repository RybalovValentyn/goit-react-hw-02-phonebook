import { Component } from "react";
import Section from './Components/Section'
import Phonebook from "./Components/Phonebook";
import Contacts from "./Components/Contacts";
import Filter from "./Components/Filter";

class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }


  formSubmitHandler = data => {
   console.log(data.contacts.name);

  !this.filteredContacts(data)?  this.setState(prevState => ({
    contacts:[...prevState.contacts,{ name:data.name, number:data.number}]}) ): alert(`${data.name} is already in contacts`)
  }

  filteredContacts = (data) => {
    
    return this.state.contacts.find(contact => contact.name === data.name) 
   
  }
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };


  
  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = name => {
    console.log(name);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };


render(){

  const visibleContact = this.getVisibleContact();

  return (
    <>
<Section title='Phonebook'>
<Phonebook   onSubmit={this.formSubmitHandler}/>
</Section>

<Section title='Contacts'>
<Filter onChange={this.changeFilter} />

  <Contacts onDeleteContact={this.deleteContact} contact={visibleContact} contacts={this.state.contacts}/>
  
  
</Section>

    </>
  );
}
}

export default App;
