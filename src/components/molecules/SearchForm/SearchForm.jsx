import React from "react";
import InputText from "../../atoms/InputText/InputText";
import Button from "../../atoms/Button/Button";

function SearchForm(props) {
  return (
    <form onChange={props.onChangeSearch} onSubmit={props.onSubmitSearch}>
      <InputText placeholder="Search item" id="item" />
      <Button type="submit" text="Search" />
    </form>
  );
}

export default SearchForm;
