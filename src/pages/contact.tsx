import React, { useState } from 'react';

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_DEPLOYED_SCRIPT_ID/exec";

const Contact = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });
      setStatus('Thank you. Your message has been sent.');
      form.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-6">We’d love to hear from you. Fill the form and our team will get back.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Full Name</label>
              <input name="name" required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input type="email" name="email" required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Phone</label>
                <input name="phone" required className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Department</label>
                <select name="department" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>General Medicine</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                  <option>Neurology</option>
                  <option>ENT</option>
                  <option>Obstetrics & Gynecology</option>
                  <option>Paediatrics</option>
                  <option>Radiology</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Message</label>
              <textarea name="message" rows={4} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="text-sm text-green-700 mt-2">{status}</p>}
          </form>
        </div>
        <div className="bg-white p-2 rounded-2xl shadow overflow-hidden">
          <iframe
            title="Hospital Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.948483950989!2d74.986!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAlva%27s%20Health%20Centre!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;


