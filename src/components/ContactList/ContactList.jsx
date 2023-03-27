import React from 'react';
import PropTypes from 'prop-types';
import { List, Button, Item, Text } from './ContactListStyled';

const ContactList = ({ contact, onDelete }) => {
  // console.log(contact);
  return (
    <List>
      {contact.map(({ id, name, number }) => (
        <Item key={id}>
          <Text>
            {name}: {number}
          </Text>
          <Button type="button" onClick={() => onDelete(id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contact: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
