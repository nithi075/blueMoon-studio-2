import React, { useState, useEffect, useCallback, memo } from "react";
import "./Overlay.css";

const CommonFields = memo(({ formData, handleChange }) => (
  <>
    <div className="form-group">
      <label>What type of business do you run? *</label>

      <select
        name="businessType"
        required
        value={formData.businessType}
        onChange={handleChange}
      >
        <option value="">Select Business Type</option>
        <option value="Jewellery Shop">Jewellery Shop</option>
        <option value="Clothing / Fashion Brand">Clothing / Fashion Brand</option>
        <option value="Personal Brand">Personal Branding</option>
        <option value="Beauty Salon / Spa">Beauty Salon / Spa</option>
        <option value="Bridal Makeup Artist">Bridal Makeup Artist</option>
        <option value="Photography Studio">Photography Studio</option>
        <option value="Restaurant / Cafe">Restaurant / Cafe</option>
        <option value="Hotel / Resort">Hotel / Resort</option>
        <option value="Hospital / Clinic">Hospital / Clinic</option>
        <option value="Educational Institution">Educational Institution</option>
        <option value="Real Estate">Real Estate</option>
        <option value="Gym / Fitness Center">Gym / Fitness Center</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <div className="form-group">
      <label>Company Name *</label>
      <input
        type="text"
        name="companyName"
        required
        value={formData.companyName}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
      <label>Your Name *</label>
      <input
        type="text"
        name="contactName"
        required
        value={formData.contactName}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
      <label>Contact Number *</label>
      <input
        type="tel"
        name="contactNumber"
        required
        value={formData.contactNumber}
        onChange={handleChange}
      />
    </div>

    <div className="form-group">
      <label>Briefly Describe your requirements (Optional)</label>
      <textarea
        rows="3"
        name="requirements"
        value={formData.requirements}
        onChange={handleChange}
      />
    </div>
  </>
));

export default function Overlay({ isOpen, onClose, type }) {
  const initialState = {
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
    appointmentDate: "",
  };

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (isOpen) {
      setFormData(initialState);
    }
  }, [isOpen, type]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

const handleSubmit = (e) => {
  e.preventDefault();

  const message = `
*${type === "project" ? "NEW PROJECT INQUIRY" : "NEW APPOINTMENT"}*

📌 Business Type:
${formData.businessType}

🏢 Company Name:
${formData.companyName}

👤 Contact Name:
${formData.contactName}

📞 Contact Number:
${formData.contactNumber}

${
  type === "project"
    ? `🎥 Service Required:
${formData.service}

📢 Source:
${formData.source}`
    : `📅 Preferred Date & Time:
${formData.appointmentDate}`
}

📝 Requirements:
${formData.requirements || "No requirements provided"}
`;

  const phone = "918680068246";

  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");

  console.log(formData);

  setFormData(initialState);

  onClose();
};

  if (!isOpen) return null;

  return (
    <div className="overlay-backdrop">
      <div className="overlay-modal">
        <button className="overlay-close" onClick={onClose}>
          ✕
        </button>

        <div className="overlay-header">
          <span className="overlay-subtitle">
            {type === "project"
              ? "LET'S DISCUSS YOUR PROJECT"
              : "LET'S BOOK A TIME"}
          </span>

          <h2>
            {type === "project"
              ? "Business Inquiry Form"
              : "Schedule Appointment"}
          </h2>
        </div>

        <form className="overlay-form" onSubmit={handleSubmit}>
          <CommonFields
            formData={formData}
            handleChange={handleChange}
          />

          {type === "project" && (
            <>
              <div className="form-group">
                <label>What Service are you looking for? *</label>

                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>
                  <option value="Saree Commercial">Reel Commercials</option>
                  <option value="Corporate Film">Corporate Film</option>
                  <option value="Music Video">Music Video</option>
                  <option value="Event Coverage">Event Coverage</option>
                  <option value="Social Media Content">
                    Social Media Content
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>How did you hear about us? *</label>

                <select
                  name="source"
                  required
                  value={formData.source}
                  onChange={handleChange}
                >
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

          {type === "appointment" && (
            <div className="form-group">
              <label>Preferred Date & Time *</label>

              <input
                type="datetime-local"
                name="appointmentDate"
                required
                value={formData.appointmentDate}
                onChange={handleChange}
              />
            </div>
          )}

          <button type="submit" className="submit-btn">
            {type === "project"
              ? "Submit Inquiry"
              : "Confirm Appointment"}
          </button>
        </form>
      </div>
    </div>
  );
}