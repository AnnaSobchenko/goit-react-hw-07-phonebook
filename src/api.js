import axios from 'axios';

const baseUrl = 'https://6215d4a0c9c6ebd3ce32d95e.mockapi.io/contacts/';

export const postContactsApi = ({ contact }) => {
  return axios
    .post(baseUrl, contact)
    .then(res => {
      console.log(contact);
      return { ...res.data, contact };
    })
    .catch(err => {
      throw err;
    });
};

export const getContactsApi = () => {
  return axios
    .get(baseUrl)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};

export const removeContactApi = ({ id }) => {
  return axios
    .delete(baseUrl + '/' + id)
    .then(res => res.data)
    .catch(err => {
      throw err;
    });
};
