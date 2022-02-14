import PropTypes from 'prop-types';

const Filter = ({ contacts, filter, removeContact }) => {
  let filterNameArr = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  if (!filterNameArr) {
    filterNameArr = contacts;
  }
  return filterNameArr.map(el => {
    return (
      <li key={el.id} className="item">
        <p>
          {el.name}: {el.number}
        </p>
        <button className="btn" onClick={() => removeContact(el.id)}>
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
