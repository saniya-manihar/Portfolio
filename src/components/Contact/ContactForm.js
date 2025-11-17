
import React, { useState } from "react";
import * as emailjs from "@emailjs/browser";

const SERVICE_ID  = "service_3gk0zdq";     // from your screenshot
const TEMPLATE_ID = "template_8atlmro";   // replace with real template id
const PUBLIC_KEY   = "405JfNOrxk-LvJCh6";   // replace with your emailjs public key
   

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, done: false, error: null });

  // initialize once (optional)
  emailjs.init(PUBLIC_KEY);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    // simple email regex
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(form.email)) return "Please enter a valid email.";
    if (!form.message.trim()) return "Please enter a message.";
    return null;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const vErr = validate();
    if (vErr) {
      setStatus({ loading: false, done: false, error: vErr });
      return;
    }

    setStatus({ loading: true, done: false, error: null });

    const templateParams = {
      user_name: form.name,
      user_email: form.email,
      message: form.message,
    };

    try {
      // pass PUBLIC_KEY as 4th param if you didn't call init
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
      setStatus({ loading: false, done: true, error: null });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus({ loading: false, done: false, error: "Failed to send. Check console." });
    }
  }

  if (status.done) {
    return (
      <div className="resume-section container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6">
            <h1 className="mb-3">Contact Form</h1>
            <div className="alert alert-success">Thanks — message sent! Check your Gmail (and spam).</div>
            <button className="btn btn-secondary" onClick={() => setStatus({ loading:false, done:false, error:null })}>
              Send another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="resume-section container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <h1 className="mb-3">Contact Form</h1>

          {status.error && <div className="alert alert-danger">{status.error}</div>}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <button type="submit" disabled={status.loading} className="btn btn-primary">
              {status.loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
