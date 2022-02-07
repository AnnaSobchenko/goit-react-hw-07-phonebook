
import PropTypes from "prop-types";
import { Component } from "react";

class ContactList extends Component {
  state = {};
  render() {
    const { filter,filterInput} = this.props;
    return <><h2>Contacts</h2>
    <p className="find">Find contacts by name</p>
    <input
      className="filter"
      type="text"
      name="filter"
      value={filter}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      placeholder="&#x1f50d; Search..."
      onChange={filterInput}
    /></>
  }
}
ContactList.propTypes = {
 filter: PropTypes.string,  
};

export default ContactList;
