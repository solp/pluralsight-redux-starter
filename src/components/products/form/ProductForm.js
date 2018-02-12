import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ProductForm extends React.Component{

  constructor(props, context){
    super(props, context);

    this.state = {
      product: { name : ""}
    };

    this.onNameChange = this.onNameChange.bind(this);//needs to be inside constructor to improve performance
    this.onClickSave = this.onClickSave.bind(this);
  }

  onNameChange(event){
    const product = this.state.product;
    product.name = event.target.value;
    this.setState({product : product});
  }

  onClickSave(){
    alert(`Saving ${this.state.product.name}`);
  }

  render(){
    return(
      <form>
          <h1>New</h1>
          <TextField
            name="name"
            hintText="Nombre"
            onChange={this.onNameChange}
            value={this.state.product.name}
            floatingLabelField={true}
            floatingLabelText="Nombre"
          /><br />
          <RaisedButton label="Enviar"  onClick={this.onClickSave} primary />
      </form>
    );
  }

}

