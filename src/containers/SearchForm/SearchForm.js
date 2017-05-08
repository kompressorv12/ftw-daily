import React from 'react';
import { Field, reduxForm, propTypes as formPropTypes } from 'redux-form';
import { FormattedMessage, intlShape, injectIntl } from 'react-intl';
import { LocationAutocompleteInput, Button } from '../../components';

import css from './SearchForm.css';

const SearchForm = props => {
  const { className, intl, handleSubmit, submitting } = props;
  const addClassName = className ? { className } : {};

  const submitDisabled = submitting;

  return (
    <form {...addClassName} onSubmit={handleSubmit}>
      <Field
        className={css.locationInput}
        name="location"
        label="Location"
        placeholder={intl.formatMessage({ id: 'SearchForm.placeholder' })}
        format={null}
        component={LocationAutocompleteInput}
      />
      <Button className={css.locationButton} type="submit" disabled={submitDisabled}>
        <FormattedMessage id="SearchForm.search" />
        <div className={css.searchIcon}>
          <svg width="18" height="18" viewBox="189 165 18 18" xmlns="http://www.w3.org/2000/svg">
            <g
              fill="none"
              fillRule="evenodd"
              transform="matrix(-1 0 0 1 206 166)"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#FFF"
              strokeWidth="1.5"
            >
              <path d="M11.733 11.733l3.727 3.727" /><circle cx="6.4" cy="6.4" r="6.4" />
            </g>
          </svg>
        </div>
      </Button>
    </form>
  );
};

SearchForm.propTypes = {
  ...formPropTypes,

  // from injectIntl
  intl: intlShape.isRequired,
};

const formName = 'SearchForm';

export default reduxForm({ form: formName })(injectIntl(SearchForm));