import React, {Fragment} from 'react'

// Make reference to this when building e-commerce app.

// Assume the note component is the item card component.

// The note prop is a single array item in the list of other objects to be mapped
// note.content is a key in the note object. Other keys map be distributed all round the component e.g: item.price, item.name
// The button will be the add to cart button for which onCLick, it fires a function: toggleImportance but in the case of the ecommerce app will be 'addToCart' function

// the addToCart function will will hold an instance of a new object: 
// cartItem = {
//   id: item.id,
//   price: item.price
// }

// Within this component , there will be a useState([])
// The addToCart Function will then concat the cartItem object to useState([])
// There should be a context api that will make the useState([] a global state which is accessible in the cartPage)
// Ofcourse in the cartpage, you will style how the cart item component will look making points to consume the cartItem object

// You will then map the state array that was made global and acessible by the cartpage and return its contents inside the cartItem 

// The cartItem component should hold an increase item or decrease button which when increased, adds the original price of the item to itself in the total section

const Note = ({ note, toggleImportance }) => {

  const label = note.important ? "make not important" : "make important"

  return (
    <Fragment>
      <li>{note.content}</li>
      {/*  */}
      <button onClick={toggleImportance}>{label}</button>
    </Fragment>
  )
}

export default Note