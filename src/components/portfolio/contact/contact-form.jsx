import React from "react";

export default function ContactForm() {
  async function handleContact(formData) {
    "use server";
    const FORMSPREE_URL = process.env.FORMSPREE_URL;
    const details = Object.fromEntries(formData);
    await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
  }

  return (
    <div>
      <form id="contact" action={handleContact}>
        <div className="messages"></div>

        <div className="controls row">
          <div className="col-lg-6">
            <div className="form-group mb-30 ">
              <input
                className="text-accent-foreground border-slate-500"
                id="form_name"
                type="text"
                name="name"
                placeholder="Name"
                required="required"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group mb-30">
              <input
                id="form_email"
                type="email"
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group mb-30">
              <input
                id="form_subject"
                type="text"
                name="subject"
                placeholder="Subject"
              />
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <textarea
                id="form_message"
                name="message"
                placeholder="Message"
                rows="4"
                required="required"
              ></textarea>
            </div>
            <div className="mt-30">
              <button type="submit ">
                <span className="text text-accent-foreground">
                  Send A Message
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
