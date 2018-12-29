import React from "react";

const ContactGroup = () => {
  return (
    <div className="contact">
      <div className="contact__group">
        <h3 class="contact__heading">Phone</h3>
        <p class="contact__paragraph">(347) 555-1234</p>
      </div>
      <div className="contact__group">
        <h3 class="contact__heading">Location</h3>
        <p class="contact__paragraph">
          74 5th Avenue
          <br />
          at St. Marks Place
          <br />
          Brooklyn, NY 11217
        </p>
      </div>
      <div className="contact__group">
        <h3 class="contact__heading">Hours</h3>
        <p class="contact__paragraph">
          M-Th 5p–11p
          <br />
          F-Sa 12p–11p
          <br />
          Su 10a–11p
        </p>
      </div>
    </div>
  );
};

export default ContactGroup;
