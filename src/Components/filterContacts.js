import React from "react";
import PropTypes from "prop-types";

export default function FilterContacts({ value, onChangeFilter }) {
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
      />
    </div>
  );
}

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onchangeFilter: PropTypes.func,
};
