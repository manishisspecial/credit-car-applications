import React, { useState } from "react";

const CreditCardForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cardType: "Visa",
  });

  const [message, setMessage] = useState("");

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Application submitted successfully!");
        setFormData({ name: "", email: "", phone: "", cardType: "Visa" }); // Reset form
      } else {
        setMessage("Failed to submit the application.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error submitting the application. Try again later.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Credit Card Application</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Credit Card Type</label>
          <select
            name="cardType"
            value={formData.cardType}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="Visa">Visa</option>
            <option value="MasterCard">MasterCard</option>
            <option value="Amex">American Express</option>
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md w-full"
          >
            Submit Application
          </button>
        </div>
      </form>
      {message && (
        <p className="text-center mt-4 text-green-500 font-semibold">{message}</p>
      )}
    </div>
  );
};

export default CreditCardForm;
