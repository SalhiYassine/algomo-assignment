import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSearchResults } from '../../redux/actions/marvelAction'
import styled from 'styled-components';


const Input = styled.input`
  background-color: white;
  color: black;
  padding: 10px;
  border: 0.2px solid 'blue';
  border-radius: 1.5px;
  display: inline-block;
  margin: 5px;
  width: 50%;
  height: 10px;
  max-width: 250px;
  min-width: 100px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #FFC107;
  color: black;
  border: 0;
  padding: 10px;
  margin: 5px;
  border-radius: 1.5px;
  font-weight: bold;
  font-size: 12px;
  cursor: pointer;
`;


const SearchBar = () => {
  
    const dispatch = useDispatch();
    const { loading, search_results } = useSelector((state) => state.searchResults);
    const [searchField, setSearchField] = useState('')
    
    useEffect(()=>{
        if(searchField.length > 1){
            dispatch(getSearchResults(searchField))
        }
    }, [searchField, dispatch])

    return (
        <div>
            <h2>Character Search Field</h2>
            <form>
                <Input list="heroes" type="text" id="searchBar" onChange={(e)=> setSearchField(e.target.value)}/>
                {(search_results && search_results.total && searchField.length > 1 && !loading) && 
                    <datalist id="heroes">
                        {search_results.results.map((hero)=> 
                            <option value={hero.name}/>
                            )}
                    </datalist>
                }
                <Button>SEARCH</Button>
            </form>
        </div>
    )
}

export default SearchBar