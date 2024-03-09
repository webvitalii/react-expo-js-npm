import { useState } from "react";

const SearchBoxBtn = ({ handleClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onBtnClick = () => {
    handleClick(searchTerm);
  };

  return (
    <section className="search-box">
      <input
        type="search"
        className="fx-input"
        value={searchTerm}
        onChange={onSearchTermChange}
      />
      <button className="fx-btn" onClick={onBtnClick}>
        Submit
      </button>
    </section>
  );
};

export default SearchBoxBtn;
