import { useContext, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { ProductsLayout } from '../products/layout';
import { AuthLayout } from '../auth/layout';
import { LoginPage, RegisterPage } from '../auth/pages';
import { NotFoundPage } from '../common';
import { CategoryPage, HomePage, ProductDetailsPage } from '../products/pages';
import { CartContext, CartPage } from '../cart';
import { OrderHistoryPage } from '../orders/pages';

//TODO falta la ruta de order/:id

const Router = () => {

  const { setCart } = useContext(CartContext)


  useEffect(()=>{
    if(!localStorage.getItem('cart')) return;
    const items = localStorage.getItem('cart');
    setCart(JSON.parse(items))
  },[])

  return (
    <Routes>

      <Route path={"/"} element={<ProductsLayout />} >
        <Route path={"/"} element={ <HomePage /> }/>
        <Route path={"category/:key"} element={ <CategoryPage /> }/>
        <Route path={"item/:slug"} element={ <ProductDetailsPage /> }/>
        <Route path={"/cart"} element={ <CartPage /> }/>
        <Route path={"order-history"} element={ <OrderHistoryPage /> }/>
        <Route path={"*"} element={ <NotFoundPage /> }/>
      </Route>

      <Route path={"/auth"} element={ <AuthLayout />} >
        <Route  path={"login"} element={ <LoginPage /> }/>
        <Route path={"register"} element={ <RegisterPage /> }/>
        <Route path={""} element={ <Navigate to={"login"}/> }/>
        <Route path={"*"}  element={  <NotFoundPage /> } />
      </Route>

    </Routes>
  )
}

export default Router