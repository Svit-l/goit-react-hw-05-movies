// import { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './SearchbarStyled';

const { SearchbarWrap, Form, FormButton, ButtonLabel, FormInput } = styles;

function Searchbar({ propsSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query');
  // const [qwery, setQwery] = useState('');

  // const handleInputChange = e => {
  //   // console.log(e.currentTarget.value);
  //   const { value } = e.currentTarget;
  //   setQwery(value.toLowerCase());
  // };

  // useEffect(() => {
  //   if (query) {
  //     console.log('Make request');
  //   }
  // }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.currentTarget.elements.query.value });
    propsSubmit(searchParams);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (qwery.trim() === '') {
  //     toast.warn('Enter keyword!', {
  //       theme: 'colored',
  //     });
  //     return;
  //   }
  //   propsSubmit(qwery);
  //   setQwery('');
  // };

  return (
    <SearchbarWrap>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          // value={qwery}
          // onChange={handleInputChange}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <FormButton type="submit">
          <ButtonLabel>Search</ButtonLabel>
        </FormButton>
      </Form>
    </SearchbarWrap>
  );
}

// Searchbar.propTypes = {
//   propsSubmit: PropTypes.func.isRequired,
// };

export default Searchbar;
