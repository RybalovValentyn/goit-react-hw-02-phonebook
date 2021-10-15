import React, {Component} from "react";
import s from './Phonebook.module.css'
class Phonebook extends Component {

    state = {
        contacts: [],
        name: ''
      }


    handleCange = (event) => {
        const {name, value } = event.currentTarget    //через деструктиризацию
      this.setState({ [name]: value
           
      })        };

      
    handleSubmit = (event) =>{
            event.preventDefault();
            this.setState({ contacts:[this.state.name]})
            // this.setState({ contacts:[...this.state.contacts,this.state.name]  })
                    
            this.props.onSubmit(this.state)//передали данные в АРР
           
            this.resetForm(); // сброс формы
           };

    resetForm = () => {
        this.setState({name: ''}) //передали в стейт пустые данные
    };

render(){
    return(

        <form className={s.container} onSubmit={this.handleSubmit}>

        <label className={s.labelInpt} >name
<input className={s.input}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
  value={this.state.name}
  onChange={this.handleCange }
/></label>

<button className={s.submitBtn} type='submit' >Add contact</button>
</form>
    )
}
}

export default Phonebook