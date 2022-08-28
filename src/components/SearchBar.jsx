/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import search_icon from '../assets/img/search_icon.svg';
function SearchBar({onSearchChange, value}){
  const handleChange = (e) => {
    onSearchChange(e.target.value)
  }
  return(
    <div className="container" css={style.container}>
      <img src={search_icon} alt="" />
      <input type="text" name="" id="" placeholder="Search Posts" value={value} onChange={handleChange}/>
    </div>
  )
}
const style = {
  container: css`
    width: 72.5rem;
    display: flex;
    padding: 0 3.6rem;

    input{
      width: 100%;
      border: 0;
      outline: 0;
      padding: 2.4rem;
      font-family: Inter;
      font-size: 1.6rem;
    }
    box-shadow: 2px 2px 10px #E6E6E6;
    
  `
}

export default SearchBar;