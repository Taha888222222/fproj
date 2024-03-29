import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../JS/Actions/order'
import OrderCard from '../../Components/OrderCard/OrderCard'
import "./Order.css";

const Order = () => {
    const dispatch =  useDispatch()
    const listOrders= useSelector((state) => state.orderReducer.listOrder)

    useEffect(() => {
        dispatch(getOrders())
      }, [dispatch])

  return (
    <div>
        <h1 className='Produit'>ORDERS</h1>
        <div className='listMessages'>
        {listOrders.map((el)=> <OrderCard newOrders={el} key={el.id}/>)}
        </div>
    </div>
  )
}

export default Order