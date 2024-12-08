import React, { useState } from 'react';
import './Accordion.css';
import PaymentDetails from '../PaymentDetails/PaymentDetails';
import NavbarModified from '../NavbarModified/NavbarModified';

const sections = [
  { name: 'Login', fields: ['Username', 'Password'] },
  { name: 'Delivery Address', fields: ['Street', 'City', 'ZIP Code'] },
  { name: 'Order Summary', fields: ['Item', 'Quantity'] },
  { name: 'Payment Options', fields: ['Card Number', 'Expiry Date', 'CVV'] },
];

const Accordion = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState({
    price: 100,
    quantity: 2,
    deliveryCharges: 10,
  });

  const handleFormSubmit = (e, sectionIndex) => {
    e.preventDefault();
    setCompletedSections([...completedSections, sectionIndex]);
    setActiveSection(sectionIndex + 1);
  };

  return (
    <>
    <NavbarModified NavbarHeading="Checkout"/>
    <div className="accordion-container">
      {/* <NavbarModified NavbarHeading="Checkout"/> */}
      <div className="accordion">
        {sections.map((section, index) => (
          <div key={index} className={`section ${activeSection === index ? 'active' : ''}`}>
            <div className="section-header" onClick={() => setActiveSection(index)}>
              <div className="section-number">{index + 1}</div>
              {section.name}
              {completedSections.includes(index) && <span className="tick-mark">✔</span>}
            </div>
            {activeSection === index && (
              <form className="section-form" onSubmit={(e) => handleFormSubmit(e, index)}>
                {section.fields.map((field, fieldIndex) => (
                  <div key={fieldIndex} className="form-group">
                    <label>{field}</label>
                    <input type="text" required />
                  </div>
                ))}
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
        ))}
      </div>
      <PaymentDetails paymentDetails={paymentDetails} />
    </div>
    </>
  );
};

export default Accordion;