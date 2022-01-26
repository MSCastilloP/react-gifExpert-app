import React,{useState} from 'react';
import Proptypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {
    const [categories, setCategories]= useState(['Naruto','Batman','Superman']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories = {setCategories}/>
            <hr />
       
            <ol>
                {   

                    categories.map( category => (
                        <GifGrid 
                        key={ category }
                        category={ category}/>
                    ))
                }
            </ol>
        </>
        
    )
};
export default GifExpertApp;