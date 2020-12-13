import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "antd";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { InputProps } from "antd/lib/input";

const SearchInput = (props: InputProps) => {
  return (
    <Input
      {...props}
      className="search-input"
      allowClear
      prefix={<FontAwesomeIcon icon={faSearch} color="#adadad" />}
      style={{ width: 300 }}
      data-testid="search-input"
    />
  );
};

export default SearchInput;
