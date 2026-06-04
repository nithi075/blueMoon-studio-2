import { useState } from "react";
import "./Overlay.css";

export default function Overlay({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    businessType: "",
    companyName: "",
    address: "",
    service: "",
    requirements: "",
    source: "",
    contactName: "",
    contactNumber: "",
    email: "",
    availability: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // API call / EmailJS / Google Sheet integration
    alert("Inquiry Submitted Successfully!");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="overlay-backdrop">
      <div className="overlay-modal">

        <button
          className="overlay-close"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="overlay-header">
          <span className="overlay-subtitle">
            LET'S DISCUSS YOUR PROJECT
          </span>

          <h2>Business Inquiry Form</h2>

          <p>
            Tell us about your business and requirements.
          </p>
        </div>

        <form
          className="overlay-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label>What type of business do you run? *</label>
            <input
              type="text"
              name="businessType"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Company Name *</label>
            <input
              type="text"
              name="companyName"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              Address of the Company (District & Pincode)
            </label>

            <textarea
              rows="3"
              name="address"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>What Service are you looking for? *</label>
            <input
              type="text"
              name="service"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              Briefly Describe your requirements *
            </label>

            <textarea
              rows="4"
              name="requirements"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>How do you hear about us? *</label>
            <input
              type="text"
              name="source"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contact Person Name *</label>
            <input
              type="text"
              name="contactName"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Contact Number *</label>
            <input
              type="tel"
              name="contactNumber"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Official Email ID *</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Availability to Meet *</label>
            <input
              type="text"
              name="availability"
              required
              placeholder="Eg: Weekdays after 5 PM"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Inquiry
          </button>

        </form>
      </div>
    </div>
  );
}
