import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ContactSection() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const project = form.project.value;
    const message = form.message.value;

    const whatsappMessage = `
🚀 New Project Inquiry

👤 Name: ${name}
📧 Email: ${email}
📁 Project Type: ${project}

💬 Message:
${message}
    `;

    // உங்கள் WhatsApp Number
    const phoneNumber = "9186800682";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    form.reset();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-text">CONTACT</div>
      <div className="contact-bg-glow" />

      <motion.div
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* LEFT: Info */}
        <motion.div className="contact-left" variants={itemVariants}>
          <span className="section-tag">START A PROJECT</span>

          <h2 className="panel-title">
            Let’s Build <br />
            Something <span>Remembered.</span>
          </h2>

          <p className="panel-description">
            From cinematic reels to social-first campaigns, we partner with
            modern brands to create content engineered for attention.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <span>EMAIL</span>
              <p>hello@yourstudio.com</p>
            </div>

            <div className="info-item">
              <span>LOCATION</span>
              <p>Chennai, India</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.div
          className="contact-form-wrapper"
          variants={itemVariants}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-input-row">
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>

            <div className="input-group">
              <label>Project Type</label>
              <select name="project" required>
                <option value="">Select Project</option>
                <option>Social Media Campaign</option>
                <option>Commercial Production</option>
                <option>Brand Identity</option>
              </select>
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your vision..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              START A PROJECT ↗
            </button>

            <p className="response-text">
              Usually responds within 24 hours
            </p>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}