import React, { useEffect, useState } from "react";

const SearchBox = (props) => {
  const [searchData, setSearchData] = useState("");

  const onChangeSearchHandler = (e) => {

    setSearchData(e.target.value);
    props.onData(searchData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="from component"
        onChange={onChangeSearchHandler}
        textval="aaaa"
      />
    </div>
  );
};

export default SearchBox;
