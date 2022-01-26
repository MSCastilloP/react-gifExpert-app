import React, {useState } from 'react';
import PropTypes  from 'prop-types';
import GifExpertApp from '../GifExpertApp';
;


export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange =(e) => {
        setInputValue (e.target.value) ;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit Hecho');
        setCategories(cats => [inputValue]);
    }
  return (<div>
        <form onSubmit={ handleSubmit }>

      
            <input
                type="text"
                value ={inputValue}
                onChange={ handleInputChange}
            />
        </form>
        </div>);
};
AddCategory.protoTypes = {
    setCategories : PropTypes.func.isRequired

}
