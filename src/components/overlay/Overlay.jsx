import React, { useState, useEffect } from "react";
import "./Overlay.css";

export default function Overlay({ isOpen, onClose, type }) {
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
    appointmentDate: ""
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        businessType: "", companyName: "", address: "", service: "",
        requirements: "", source: "", contactName: "", contactNumber: "",
        email: "", availability: "", appointmentDate: ""
      });
    }
  }, [isOpen, type]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(`${type === 'project' ? "Project Inquiry" : "Appointment"} Submitted!`);
    onClose();
  };

  if (!isOpen) return null;

  // Common Fields for both forms
  const CommonFields = () => (
    <>
      <div className="form-group">
        <label>What type of business do you run? *</label>
        <input type="text" name="businessType" required onChange={handleChange} value={formData.businessType} />
      </div>
      <div className="form-group">
        <label>Company Name *</label>
        <input type="text" name="companyName" required onChange={handleChange} value={formData.companyName} />
      </div>
      <div className="form-group">
        <label>Your Name *</label>
        <input type="text" name="contactName" required onChange={handleChange} value={formData.contactName} />
      </div>
      <div className="form-group">
        <label>Contact Number *</label>
        <input type="tel" name="contactNumber" required onChange={handleChange} value={formData.contactNumber} />
      </div>
      <div className="form-group">
        <label>Briefly Describe your requirements (Optional)</label>
        <textarea rows="3" name="requirements" onChange={handleChange} value={formData.requirements} />
      </div>
    </>
  );

  return (
    <div className="overlay-backdrop">
      <div className="overlay-modal">
        <button className="overlay-close" onClick={onClose}>✕</button>

        <div className="overlay-header">
          <span className="overlay-subtitle">{type === 'project' ? "LET'S DISCUSS YOUR PROJECT" : "LET'S BOOK A TIME"}</span>
          <h2>{type === 'project' ? "Business Inquiry Form" : "Schedule Appointment"}</h2>
        </div>

        <form className="overlay-form" onSubmit={handleSubmit}>
          
          <CommonFields />

          {type === 'project' && (
            <>
              <div className="form-group">
                <label>What Service are you looking for? *</label>
                <select name="service" required onChange={handleChange} value={formData.service}>
                  <option value="">Select a Service</option>
                  <option value="Saree Commercial">Saree Commercial</option>
                  <option value="Corporate Film">Corporate Film</option>
                  <option value="Music Video">Music Video</option>
                  <option value="Event Coverage">Event Coverage</option>
                  <option value="Social Media Content">Social Media Content</option>
                </select>
              </div>
              <div className="form-group">
                <label>How did you hear about us? *</label>
                <select name="source" required onChange={handleChange} value={formData.source}>
                  <option value="">Choose an option</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Google">Google</option>
                  <option value="Referral">Referral / Friends</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </>
          )}

          {type === 'appointment' && (
            <div className="form-group">
              <label>Preferred Date & Time *</label>
              <input type="datetime-local" name="appointmentDate" required onChange={handleChange} value={formData.appointmentDate} />
            </div>
          )}

          <button type="submit" className="submit-btn">
            {type === 'project' ? "Submit Inquiry" : "Confirm Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
}
