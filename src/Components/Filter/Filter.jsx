import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterInput } from 'redux/contacts/contactsActions';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);
  return (
    <>
      <h2>Contacts</h2>
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
        onChange={e => dispatch(filterInput(e))}
      />
    </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
};
export default Filter;
