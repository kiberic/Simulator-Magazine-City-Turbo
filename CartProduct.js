// import React, { useState } from "react";
// import CartItems from "./CartProductItems";

// function CartProduct() {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     // если товар уже есть — увеличиваем количество
//     const existing = cart.find((item) => item.id === product.id);
//     if (existing) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, count: (item.count || 1) + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, count: 1 }]);
//     }
//   };

//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   return (
//     <div className="cartContainer">
//       <h2>Корзина</h2>
//       {cart.length === 0 ? (
//         <p>Твоя корзина пустая</p>
//       ) : (
//         cart.map((item) => (
//           <CartItems
//             key={item.id}
//             item={item}
//             onRemove={() => removeFromCart(item.id)}
//           />
//         ))
//       )}
//     </div>
//   );
// }

// export default CartProduct;
