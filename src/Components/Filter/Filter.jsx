import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, removeContact } from 'redux/contacts/contactsOperations';

const Filter = () => {
  const {items, filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
console.log(filter);
// const items=dispatch(getContacts());
  let filterNameArr = items.filter(contact => {
    console.log(contact.name);
    return contact.name.toLowerCase().includes(filter.toLocaleLowerCase());
  });

  if (!filterNameArr) {
    filterNameArr = items;
  }
  return filterNameArr.map(el => {
    return (
      <li key={el.id} className="item">
        <p>
          {el.name}: {el.phone}
        </p>
        <button className="btn" onClick={() => dispatch(removeContact(el.id))}>
          Del
        </button>
      </li>
    );
  });
};
Filter.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  filter: PropTypes.string,
  contacts: PropTypes.array,
};
export default Filter;
