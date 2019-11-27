import React from "react"

class PizzaForm extends React.Component{
  
 
    
    render(){
      console.log(this.props.editTopping)
      return(
          <div className="form-row" >
            <div className="col-5">
                <input type="text" name="topping" placeholder="Pizza Topping" onChange={e => this.props.handleChange("topping", e.target.value)}value={
                    //Pizza Topping Should Go Here
                    this.props.topping
                  } />
            </div>
            <div className="col">
              <select value={this.props.size} onChange={e => this.props.handleChange("size", e.target.value)}>
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
              </select>
            </div>
            <div className="col">
              <div className="form-check">
                <input className="form-check-input" type="radio" value="Vegetarian" checked={this.props.isVeg} onClick={e => this.props.handleChange("isVeg", true)}/>
                <label className="form-check-label">
                  Vegetarian
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.props.isVeg} onClick={e => this.props.handleChange("isVeg", false)}/>
                <label className="form-check-label">
                  Not Vegetarian
                </label>
              </div>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-success" onClick={e => this.props.handleSubmit()}>Submit</button>
            </div>
          </div>

      )
    }
}

export default PizzaForm
