import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const { cartitem, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

  const navigate = useNavigate()

  return (
    <div>
      <div className='cart-items' >
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartitem[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>${item.price * cartitem[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='cart-bottom' >
        <div className='cart-total' >
          <h2>Cart Totals</h2>
          <div className='card-total-details'>
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='card-total-details'>
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>
          <hr />
          <div className='card-total-details'>
            <b>Total</b>
            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
          </div>
          <button onClick={() => navigate('/Order')}
          >Proceed to checkout</button>
        </div>

      </div>
      <div className='cart-promocode' >
        <div>
          <p>If you have a promo code enter it here</p>
          <div className='card-promocode-input' >
            <input type='text' placeholder='PromoCode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart

