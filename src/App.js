import { nanoid } from "nanoid";
import { Component } from "react";
import "./App.scss";
import ContactList from "./Components/ContactList/ContactList.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import Form from "./Components/Form/Form.jsx";
import PropTypes from "prop-types";
import { Notify } from "notiflix";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

componentDidMount(){
  console.log(this.state.contacts);
  const contacts=JSON.parse(localStorage.getItem("contacts"))||this.state.contacts;
  console.log(contacts);
  this.setState({ contacts});
}

componentDidUpdate(prevProps, prevState){
  if (prevState.contacts !== this.state.contacts){
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
}

  formSubmitHandler = (contact) => {
    if (
      this.state.contacts
        .map((el) => el.name === contact.name)
        .filter((el) => el === true).length
    ) {
      Notify.info(`${contact.name} is already in contact`, {
        timeout: 3000,
      });
    } else {
      Notify.success(`${contact.name} is added`, { timeout: 3000 });
      return this.addContact(contact);
    }
  };

  addContact = (newContact) => {
    this.setState((prev) => ({
      contacts: [...prev.contacts, {id: nanoid(), ...newContact  }],
    }));
  };

  filterInput = (e) => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  removeContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }));
    Notify.success("Contact delete", { timeout: 3000 });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className="App">
        <header className="AppHeader">
          <h2>Phonebook</h2>
        </header>
        <main className="main">
          <Form onSubmit={this.formSubmitHandler} />
          <ContactList filter={filter} filterInput={this.filterInput} />
          <ul className="list">
            <Filter
              contacts={contacts}
              filter={filter}
              removeContact={this.removeContact}
            />
          </ul>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
};

export default App;
