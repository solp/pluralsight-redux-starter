import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {bindActionCreators} from 'redux';

import {connect} from 'react-redux';
import * as productActions from '../../../actions/products/productActions';

 class ProductForm extends React.Component{ 

  constructor(props, context){
    super(props, context);

    this.state = {
      product: { name : ""}
    };

    this.onNameChange = this.onNameChange.bind(this);//needs to be inside constructor to improve performance and it's used to enlarge the scope of this
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event){
    const product = this.state.product;
    product.name = event.target.value;
    this.setState({product : product});
  }

  onClickSave(){
    //this.props.createProduct(this.state.product); se usa con la funcion
    this.props.actions.createProduct(this.state.product);
  }

  productRow(product, index){
    return <div key={index}>{product.name}</div>;
  }

  render(){
    return(
      <div>
        <h1>Productos</h1>
        {this.props.products.map(this.productRow)}
        <h2>Nuevo Producto</h2>
          <input 
            type="text"
            onChange={this.onNameChange}
            value={this.state.product.name}
          /><br />
          <input
            type="submit"
            value="Save"
            onClick={this.onClickSave}
          />
      </div> 
    );
  }
}

ProductForm.propTypes = {
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
  //createProduct: propTypes.func.isRequired
};


function mapStateToProps(state, ownProps){
  return{ products: state.products  
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions : bindActionCreators(productActions,dispatch) //bit looks for all the actions imported or i can send as parameter one specific action
    //createProduct : product => dispatch(productActions.createProduct(product)) con un arrow function determina cual accion llamar y q parameter pasarle
  };

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductForm); //connect is a high order component so it wrapps the oder, it returns a function that send as parameter productForm
//if we don't add the second parameter to connect funtion that is mapDispatchToProps connect will suppose that you can access on your component to actions with this function--> this.props.dispatch to the actions that you have imported