import { InputHTMLAttributes } from 'react';

import './SearchInput.scss';
import { BsSearch } from 'react-icons/bs';

function SearchInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="searchInput__inputWrapper">
      <BsSearch className="searchInput__searchIcon" />
      <input
        placeholder="Search input.."
        className="searchInput__searchElement"
        {...props}
      />
    </div>
  );
}
export default SearchInput;
