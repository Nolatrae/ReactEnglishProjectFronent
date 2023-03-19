import React from "react";
import styles from './SearchStyles.scss';
import { useSelector, useDispatch } from 'react-redux'
import { getSearch, clearSearch } from '../../redux/slices/search'

export const Search = () => {

  // const [searchValue, setSearchValue] = React.useState('')
  // console.log(searchValue)

  const searchValue = useSelector((state) => state.search.value)
  const dispatch = useDispatch()

  return  (
    <input
    value = {searchValue}
    onChange={(event) => dispatch(getSearch(event.target.value))}
    className="root"
    placeholder="Find something about cards..."
    />
  )
}

export default Search