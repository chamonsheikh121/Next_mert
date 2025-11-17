
import React from 'react';
import ShippingDetails from './ShippingDetails';
import CheckoutOrderSummary from './CheckoutOrderSummary';

const ManageCheckout = () => {
    return (
        <div  className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ShippingDetails/>
            <CheckoutOrderSummary/>
        </div>
    );
};

export default ManageCheckout;

//duplicate 
import React from 'react';
import ShippingDetails from './ShippingDetails';
import CheckoutOrderSummary from './CheckoutOrderSummary';

const ManageCheckout = () => {
    return (
        <div  className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <ShippingDetails/>
            <CheckoutOrderSummary/>
        </div>
    );
};

export default ManageCheckout;
