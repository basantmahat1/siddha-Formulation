import React, { useState } from 'react'; // 1. Import useState


/**
 * A responsive Contact Us form component styled with Tailwind CSS.
 * It now includes state management to capture form data and logs it to the console on submit.
 */
const Contact = () => {
  
  // 2. Initialize State for all form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    help: '',
    address: '',
    phone: '',
    country: '',
  });

  // 3. Handler for updating state when inputs change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value, // Update the specific field using its 'name' attribute
    }));
  };

  // 4. Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the entire form data object to the console
    console.log('Form Data Captured:', formData); 
    
    // Optional: Reset form fields after submission
    // setFormData({
    //   name: '', email: '', help: '', address: '', phone: '', country: '',
    // });
    
    // Placeholder for actual submission logic (e.g., sending data to an API)
    alert('Form submitted! Check your browser console for the data.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white shadow-xl rounded-lg overflow-hidden">
        
        {/* Header Section */}
        <header className="px-6 py-6 border-b border-gray-200">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">
            Contact Us
          </p>
          <h1 className="text-3xl font-bold text-gray-800 mt-1">
            Reach Out Anytime, Anywhere
          </h1>
        </header>

        {/* Content Grid (Image and Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Image Section */}
          <div className="p-6">
            <div className="h-full w-full rounded-lg overflow-hidden">
              <img 
                src="src/assets/img/herbal-medicine2020.jpg"
                alt="A collection of Ayurvedic ingredients, including powders, herbs, and a dark paste in a bowl." 
                className="w-full h-full object-cover"
                style={{ minHeight: '300px' }} 
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* NOTE: Each input now has a 'name', a 'value', and an 'onChange' handler. */}
              
              {/* Name */}
              <div>
                <label htmlFor="name" className="sr-only">Name</label> 
                <input
                  type="text"
                  id="name"
                  name="name" // <--- CRITICAL: Matches state key
                  required
                  placeholder="Name"
                  value={formData.name} // <--- CRITICAL: Controlled input
                  onChange={handleChange} // <--- CRITICAL: Updates state on change
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-800 placeholder-gray-500 transition duration-150 ease-in-out"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">Email</label> 
                <input
                  type="email"
                  id="email"
                  name="email" // <--- CRITICAL
                  required
                  placeholder="Email"
                  value={formData.email} // <--- CRITICAL
                  onChange={handleChange} // <--- CRITICAL
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-800 placeholder-gray-500 transition duration-150 ease-in-out"
                />
              </div>
              
              {/* How can we help? (Textarea) */}
              <div>
                <label htmlFor="help" className="sr-only">How can we help?</label> 
                <textarea
                  id="help"
                  name="help" // <--- CRITICAL
                  rows="1"
                  placeholder="How can we help?"
                  value={formData.help} // <--- CRITICAL
                  onChange={handleChange} // <--- CRITICAL
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-800 placeholder-gray-500 resize-none transition duration-150 ease-in-out"
                ></textarea>
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="sr-only">Address</label> 
                <input
                  type="text"
                  id="address"
                  name="address" // <--- CRITICAL
                  placeholder="Address"
                  value={formData.address} // <--- CRITICAL
                  onChange={handleChange} // <--- CRITICAL
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-800 placeholder-gray-500 transition duration-150 ease-in-out"
                />
              </div>
              
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="sr-only">Phone</label> 
                <input
                  type="tel"
                  id="phone"
                  name="phone" // <--- CRITICAL
                  placeholder="Phone"
                  value={formData.phone} // <--- CRITICAL
                  onChange={handleChange} // <--- CRITICAL
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-800 placeholder-gray-500 transition duration-150 ease-in-out"
                />
              </div>

              {/* Country */}
              <div>
                <label htmlFor="country" className="sr-only">Country</label> 
                <input
                  type="text"
                  id="country"
                  name="country" // <--- CRITICAL
                  placeholder="Country"
                  value={formData.country} // <--- CRITICAL
                  onChange={handleChange} // <--- CRITICAL
                  className="w-full px-0 py-3 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-800 placeholder-gray-500 transition duration-150 ease-in-out"
                />
              </div>
              
              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-auto px-6 py-2.5 bg-green-500 text-white font-semibold rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-200 ease-in-out"
                >
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
      
      {/* Scroll Up Button */}
      <a href="#top" className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300" aria-label="Scroll to top">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </a>
    </div>
  );
};

export default Contact;