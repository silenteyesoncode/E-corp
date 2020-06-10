  
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    // if same cart-item added
    
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    
    // if cart-items do not found in cart then we wanna return new array with our existing cart item 
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    // quantity property gets attached for the first time arround
  };