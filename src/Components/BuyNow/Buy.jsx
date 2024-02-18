import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";

const Buy = () => {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
    paymentMethod: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Email validation
    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    // Address validation (can be expanded)
    if (!formData.address) {
      errors.address = "Address is required";
      isValid = false;
    }

    // City validation (can be expanded)
    if (!formData.city) {
      errors.city = "City is required";
      isValid = false;
    }

    // ZIP validation (can be expanded)
    if (!formData.zip) {
      errors.zip = "ZIP code is required";
      isValid = false;
    }

    // Country validation (can be expanded)
    if (!formData.country) {
      errors.country = "Country is required";
      isValid = false;
    }

    // Payment method validation
    if (!formData.paymentMethod) {
      errors.paymentMethod = "Payment method is required";
      isValid = false;
    }

    // Credit card number validation (if payment method is credit card)
    if (formData.paymentMethod === "creditCard") {
      if (!formData.cardNumber) {
        errors.cardNumber = "Card number is required";
        isValid = false;
      }
      // Add more credit card validation rules if needed
    }

    // Expiration date validation (if payment method is credit card)
    if (formData.paymentMethod === "creditCard") {
      if (!formData.expirationDate) {
        errors.expirationDate = "Expiration date is required";
        isValid = false;
      }
      // Add more expiration date validation rules if needed
    }

    // CVV validation (if payment method is credit card)
    if (formData.paymentMethod === "creditCard") {
      if (!formData.cvv) {
        errors.cvv = "CVV is required";
        isValid = false;
      }
      // Add more CVV validation rules if needed
    }

    // Phone number validation
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = "Phone number is invalid";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitSuccess(true);
    } else {
      console.log("Form has errors, please fix them");
    }
  };

  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
           <div className="col-8">
            <h1 className="text-success">CheckOut Form</h1>
            {submitSuccess && (
              <Alert
                variant="filled"
                severity="success"
                action={
                  <Button
                    color="inherit"
                    size="small"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    UNDO
                  </Button>
                }
              >
                CONGRATULATIONS!🥳🎉 Your order placed successfully!
                Continue your Shopping......
              </Alert>
            )}
            <form onSubmit={handleSubmit} className="container mt-5">
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-secondary">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label text-secondary">
                  Address:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                {errors.address && (
                  <span className="text-danger">{errors.address}</span>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label text-secondary">
                  City:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                {errors.city && (
                  <span className="text-danger">{errors.city}</span>
                )}
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="zip" className="form-label text-secondary">
                    ZIP Code:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    required
                  />
                  {errors.zip && (
                    <span className="text-danger">{errors.zip}</span>
                  )}
                </div>
                <div className="col-md-6 mb-3">
                  <label
                    htmlFor="country"
                    className="form-label text-secondary"
                  >
                    Country:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                  {errors.country && (
                    <span className="text-danger">{errors.country}</span>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label
                  htmlFor="paymentMethod"
                  className="form-label text-secondary"
                >
                  Payment Method:
                </label>
                <select
                  className="form-select"
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
                {errors.paymentMethod && (
                  <span className="text-danger">{errors.paymentMethod}</span>
                )}
              </div>
              {formData.paymentMethod === "creditCard" && (
                <div>
                  <h2>Credit Card Details</h2>
                  <div className="mb-3">
                    <label
                      htmlFor="cardNumber"
                      className="form-label text-secondary"
                    >
                      Card Number:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      required
                    />
                    {errors.cardNumber && (
                      <span className="text-danger">{errors.cardNumber}</span>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="expirationDate"
                        className="form-label text-secondary"
                      >
                        Expiration Date:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="expirationDate"
                        name="expirationDate"
                        value={formData.expirationDate}
                        onChange={handleChange}
                        required
                      />
                      {errors.expirationDate && (
                        <span className="text-danger">
                          {errors.expirationDate}
                        </span>
                      )}
                    </div>
                    <div className="col-md-6 mb-3">
                      <label
                        htmlFor="cvv"
                        className="form-label text-secondary"
                      >
                        CVV:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        required
                      />
                      {errors.cvv && (
                        <span className="text-danger">{errors.cvv}</span>
                      )}
                    </div>
                  </div>
                </div>
              )}
              <div className="mb-3">
                <label
                  htmlFor="phoneNumber"
                  className="form-label text-secondary"
                >
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
                {errors.phoneNumber && (
                  <span className="text-danger">{errors.phoneNumber}</span>
                )}
              </div>

              <button type="submit" className="btn btn-primary mb-5 w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buy;
