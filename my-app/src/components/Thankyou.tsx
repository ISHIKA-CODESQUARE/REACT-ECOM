import React from "react";

type ThankYouProps = {
  name: string;
  orderId: number;
};

const ThankYouPage: React.FC<ThankYouProps> = ({ name, orderId }) => {
  return (
    <div className="container text-center mt-5">
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order  has been placed successfully and will be shipped soon.</p>
      <p>Thank you for choosing our store!</p>
      <button className="btn btn-success mb-5">Continue Shopping</button>
    </div>
  );
};

export default ThankYouPage;
