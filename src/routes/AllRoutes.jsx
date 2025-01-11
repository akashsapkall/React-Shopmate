import { Routes, Route } from 'react-router-dom'

import { Cart,ProductDetails,ProductList,ProductSearch,PageNotFound } from '../pages';

export const AllRoutes =()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<ProductList />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<ProductSearch />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}