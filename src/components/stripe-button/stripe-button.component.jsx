import React from 'react'
import StripCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStrip = price * 100
  const publishableKey = 'pk_test_LrBWx8A9X4zdA5pf77S8mEkH'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }
  return (
    <StripCheckout 
      label='Pay Now'
      name='Crown Clothing, INc.'
      billAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
