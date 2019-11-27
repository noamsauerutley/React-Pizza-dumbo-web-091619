import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  
  state = {
    pizzas: [],
    currentPizzaId: 0,
    topping: "default",
    size: "",
    isVeg: false
  }

  async componentDidMount(){
    let rawPizzas = await fetch('http://localhost:3000/pizzas')
    let parsedPizzas = await rawPizzas.json()
    // use State to store this data in an accessible format
    this.setState({
      pizzas: parsedPizzas
    })
  }

  getPizza = (currentPizzaId, editTopping, editSize, editVeg) =>{
    this.setState({
      currentPizzaId: currentPizzaId,
      topping: editTopping,
      size: editSize,
      isVeg: editVeg
    })
  }

  handleChange = (stateKey, stateValue) => {
    this.setState({ [stateKey]: stateValue });
  }

   handleSubmit = async (e) => {
    
    const input = {
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.isVeg
    }
    let rawUpdatedZza = await fetch(`http://localhost:3000/pizzas/${this.state.currentPizzaId}`, {
   method: 'PATCH',  
   body: JSON.stringify(input),  
   headers:{
     'Content-Type': 'application/json'
    }
     })
     let updatedZza = await rawUpdatedZza.json()
     this.updatePizzaList(updatedZza)
  }

  updatePizzaList = (newPizza) => {
    let updatedPizzaList = this.state.pizzas.map(pizza =>{
      if (pizza.id === newPizza.id){
       return newPizza
      } else{
        return pizza
      }
    })
    this.setState({
      pizzas: updatedPizzaList
    })
  }


  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm currentPizzaId={this.state.currentPizzaId} topping={this.state.topping} size={this.state.size} isVeg={this.state.isVeg} getPizza={this.getPizza} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzas={this.state.pizzas} getPizza={this.getPizza}/>
      </Fragment>
    );
  }
}

export default App;
