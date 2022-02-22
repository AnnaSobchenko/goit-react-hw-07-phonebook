import './App.scss';
import ContactList from './Components/ContactList/ContactList.jsx';
import Filter from './Components/Filter/Filter.jsx';
import Form from './Components/Form/Form.jsx';
import PropTypes from 'prop-types';

const App = () => {
 
  return (
    <div className="App">
      <header className="AppHeader">
        <h2>Phonebook</h2>
      </header>
      <main className="main">
        <Form  />
        <ContactList  />
        <ul className="list">
          <Filter />
        </ul>
      </main>
    </div>
  );
};

App.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
};

export default App;
