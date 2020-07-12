import React from 'react';  
import Category from '../../app/views/category';
const CategoryPage = ()=>{
    return(
        <Category /> 
    )
}
CategoryPage.getInitialProps = async (props, res)=>{
    const { isServer } = props.ctx
    return { isServer }
}
export default CategoryPage