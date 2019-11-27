import React from "react"

const Pizza = (props) => {
  let handleClick = (e) => {
    // console.log("get props!")
    props.getPizza(props.pizza.id, props.pizza.topping, props.pizza.size, props.pizza.vegetarian)
  }
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      <td>{props.pizza.vegetarian}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
