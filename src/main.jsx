// import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import { CartProvider } from './cart/context';
import { AuthProvider } from './auth/context';

import App from './App.jsx';
import './index.css';
import { UiProvider } from './common/index.js';
import { ProductProvider } from './products/context/index.js';
import { OrderProvider } from './orders/context/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UiProvider>
          <ProductProvider>
            <OrderProvider>
              <CartProvider>
                <>
                  <App />
                  <Toaster toastOptions={{
                    style: {
                      border: '2px solid hsl(0,0%,20%)'
                    }
                  }}/>
                </>
              </CartProvider>
            </OrderProvider>
          </ProductProvider>
        </UiProvider>
      </AuthProvider>
    </BrowserRouter>
  // </React.StrictMode>,
)
