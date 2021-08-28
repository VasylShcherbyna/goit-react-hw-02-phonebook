import React from "react";
import PropTypes from "prop-types";

class phonebook extends React.Component {
  state = {
    contacts: [],
    name: "",
    number: "",
    };
    
    handleInputChange = event => {
        this.setState({ name: event.curentTarget.value })
    };

  render() {
    const { login } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <button type="submit">Sign up as {login}</button>
        <h2>Contacts</h2>
      </form>
    );
  }
}

export default phonebook;
