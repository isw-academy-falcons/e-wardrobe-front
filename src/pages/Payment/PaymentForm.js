// PaymentForm.js
import React, { useState } from "react";
import "./PaymentForm.css"; // Import the CSS file for styles
import interswitchLogo from "./interswitchLogo.svg";

const PaymentForm = () => {
  const [step, setStep] = useState(1);
  const [billingAddress, setBillingAddress] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    cardType: "mastercard",
  });
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleBillingAddressSubmit = (e) => {
    e.preventDefault();
    setStep(2); // Proceed to step 2 (card details)
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing (in a real application, you would send this data to a server)
    setTimeout(() => {
      setIsPaymentSuccessful(true);
    }, 2000);
  };

  return (
    <div className="payment-form-body">
    <div className="payment-form payment-container">
      {isPaymentSuccessful ? (
        <div className="payment-successful">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
        </div>
      ) : (
        <div className="payment-form-personal-details">
          {step === 1 ? (
            <form onSubmit={handleBillingAddressSubmit}>
              <div ><h2 className="payment-gateway-header">Payment Gateway</h2></div>
              <div>
                <label>Full Name</label>
                <input
                  type="text"
                  value={billingAddress.fullName}
                  onChange={(e) =>
                    setBillingAddress({
                      ...billingAddress,
                      fullName: e.target.value,
                    })
                  }
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div>
                <label>Address</label>
                <input
                  type="text"
                  value={billingAddress.address}
                  onChange={(e) =>
                    setBillingAddress({
                      ...billingAddress,
                      address: e.target.value,
                    })
                  }
                  placeholder="Enter address"
                  required
                />
              </div>
              <div>
                <label>City</label>
                <input
                  type="text"
                  value={billingAddress.city}
                  onChange={(e) =>
                    setBillingAddress({
                      ...billingAddress,
                      city: e.target.value,
                    })
                  }
                  placeholder="Enter city"
                  required
                />
              </div>
              <div>
                <label>Zip Code</label>
                <input
                  type="text"
                  value={billingAddress.zipCode}
                  onChange={(e) =>
                    setBillingAddress({
                      ...billingAddress,
                      zipCode: e.target.value,
                    })
                  }
                  placeholder="Enter zip code"
                  required
                />
              </div>
              <button type="submit">Next</button>
            </form>
          ) : (
            <form onSubmit={handlePaymentSubmit}>
            <div >
  <label>Card Type</label>
  <div className="card-type">
    <label>
      <input
        type="radio"
        name="cardType"
        value="mastercard"
        checked={cardDetails.cardType === "mastercard"}
        onChange={(e) =>
          setCardDetails({
            ...cardDetails,
            cardType: e.target.value,
          })
        }
      />
      MasterCard
    </label>
    <label>
      <input
        type="radio"
        name="cardType"
        value="visa"
        checked={cardDetails.cardType === "visa"}
        onChange={(e) =>
          setCardDetails({
            ...cardDetails,
            cardType: e.target.value,
          })
        }
      />
      Visa
    </label>
  </div>
</div>
<div>
  <label>Card Number</label>
  <input
    type="text"
    value={cardDetails.cardNumber}
    onChange={(e) =>
      setCardDetails({
        ...cardDetails,
        cardNumber: e.target.value,
      })
    }
    placeholder="Enter card number"
    required
  />
</div>
<div>
  <label>Card Holder</label>
  <input
    type="text"
    value={cardDetails.cardHolder}
    onChange={(e) =>
      setCardDetails({
        ...cardDetails,
        cardHolder: e.target.value,
      })
    }
    placeholder="Enter card holder name"
    required
  />
</div>
<div>
  <label>CVV</label>
  <input
    type="text"
    value={cardDetails.cvv}
    onChange={(e) =>
      setCardDetails({
        ...cardDetails,
        cvv: e.target.value,
      })
    }
    placeholder="Enter CVV"
    required
  />
</div>
<div>
  <label>Expiry Date</label>
  <input
    type="text"
    value={cardDetails.expiryDate}
    onChange={(e) =>
      setCardDetails({
        ...cardDetails,
        expiryDate: e.target.value,
      })
    }
    placeholder="MM/YYYY"
    required
  />
</div>


              <button type="submit">Pay Now</button>
            </form>
          )}
            <div className="interswitchLogo-container"> 
          <p>Powered by </p> <img className="interswitchLogo" src={interswitchLogo} alt="interswitchLogo" /> 
          </div> 
        </div>
      )}
    </div>
    </div>
  );
};

export default PaymentForm;
