import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import styles from './SearchbarStyled';

const { Searchbar, Form, FormButton, ButtonLabel, FormInput } = styles;

function Search({ propsSubmit }) {
  const [searchString, setSearchString] = useState('');

  const handleInputChange = e => {
    // console.log(e.currentTarget.value);
    const { value } = e.currentTarget;
    setSearchString(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchString.trim() === '') {
      toast.warn('Enter keyword!', {
        theme: 'colored',
      });
      return;
    }
    propsSubmit(searchString);
    setSearchString('');
  };

  return (
    <Searchbar>
      <Form onSubmit={handleSubmit}>
        <FormButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </FormButton>

        <FormInput
          value={searchString}
          onChange={handleInputChange}
          name="word"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Searchbar>
  );
}

// Searchbar.propTypes = {
//   propsSubmit: PropTypes.func.isRequired,
// };

export default Search;
