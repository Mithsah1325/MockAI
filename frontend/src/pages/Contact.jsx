import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  // State variables to store form data and status message
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  const [status, setStatus] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setStatus('Sending...'); // Update status to show sending message

    try {
      // Send POST request to backend API with form data
      await axios.post('/api/contact', { firstName, lastName, email, inquiry });
      setStatus('Your inquiry has been submitted!'); // Update status on successful submission
      // Clear form fields after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setInquiry('');
    } catch (error) {
      setStatus('Failed to send inquiry.'); // Update status on error
      console.error('Error submitting inquiry:', error); // Log error for debugging
    }
  };

  return (
    <div className="contact-us flex flex-col justify-center md:flex-row m-20">
      <div className="contact-info w-full md:w-1/2 px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-8">
          Need to get in touch with us? Either fill out the form with your inquiry or find the department email you'd like to contact below.
        </p>
        {/* Placeholder for department email list */}
      </div>
      <div className="contact-form w-full md:w-1/3 px-4 py-8 border border-gray-300 bg-gray-800 rounded-md shadow-md m-3">
        {/* Form for user to submit inquiry */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div className="form-group">
            <label htmlFor="firstName" className="block text-sm font-medium text-white">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="block text-sm font-medium text-white">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inquiry" className="block text-sm font-medium text-white">
              What can we help you with?
            </label>
            <textarea
              id="inquiry"
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-blue-700 hover:bg-blue-400 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
          >
            Submit
          </button>
        </form>
        {/* Display status message after form submission */}
        {status && <p className="mt-4 text-white">{status}</p>}
      </div>
    </div>
  );
}

export default Contact;
