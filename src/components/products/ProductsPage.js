import React,{PropTypes} from 'react';
import ProductForm from './form/ProductForm';

export default class ProductsPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Products</h1>
                <ProductForm />                
            </div>
        );
    }
}
