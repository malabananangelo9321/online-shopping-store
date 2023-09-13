import React from "react";
import { InputSearchProps } from "../../utils/PropsUtils";

const InputSearch = (props: InputSearchProps) => {
  return (
    <div className="input-search-container">
      <div className="input-padding ">
        <input
          onChange={props.onChangeSearch}
          className="input-search"
          placeholder={props.placeholder}
          value={props.search}
        />
      </div>
    </div>
  );
};

export default InputSearch;
