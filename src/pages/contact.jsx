import React, { useState } from "react";
import {
  MapPin,
  Clock,
  Mail,
  Phone,
} from "lucide-react";
import ScrollUpButton from "../common/ScrollUpButton";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    help: "",
    address: "",
    phone: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Captured:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto space-y-10">

     

        {/* ================= CONTACT FORM ================= */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <header className="px-6 py-4">
            <p className="text-sm uppercase tracking-wider text-gray-700 font-medium">
              Contact Us
            </p>
            <h1 className="text-3xl font-bold text-green-800 mt-1">
              Reach Out Anytime
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="p-8 flex justify-center items-center">
              <img
                src="/assets/img/herbal-medicine2020.png"
                alt="Ayurvedic ingredients"
                className="w-full h-full object-cover rounded-lg max-h-[400px]"
              />
            </div>

            {/* Form */}
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                {["name", "email", "address", "phone", "country"].map(
                  (field) => (
                    <input
                      key={field}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                          ? "tel"
                          : "text"
                      }
                      name={field}
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      value={formData[field]}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-800 text-sm"
                    />
                  )
                )}

                <textarea
                  name="help"
                  rows="3"
                  placeholder="How can we help?"
                  value={formData.help}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-b border-gray-300 focus:border-green-600 focus:outline-none text-gray-800 text-sm resize-none"
                />

                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-md font-bold bg-green-700
                  hover:bg-green-800 text-white transition-all hover:shadow-lg
                  transform hover:scale-105 text-lg tracking-wider"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
{/* ================= LOCATION + OFFICE HOURS ================= */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

  {/* Location Card */}
  <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h2 className="text-2xl font-serif font-semibold text-green-900 flex items-center gap-3 mb-4">
      <MapPin className="w-6 h-6 text-green-800" />
      Siddha Formulation Location
    </h2>

    <p className="text-gray-700 mb-4">
      All of our offices are open Sunday through Friday
      (except on major holidays).
    </p>

    {/* <p className="text-gray-700 mb-4">
      Want to grow with us? Visit our{" "}
      <a
        className="text-green-700 font-semibold underline hover:text-green-900"
      >
        Careers page
      </a>.
    </p> */}

    <div className="space-y-3 text-gray-800">
      <p className="flex items-center gap-2">
        <Mail className="w-5 h-5 text-green-700" />
        <span className="font-semibold">Email:</span>
        <a
          href="mailto:siddha.formulation@gmail.com"
          className="text-green-700 hover:text-green-900 "
        >
          siddha.formulation@gmail.com
        </a>
      </p>

      <p className="flex items-start gap-2">
        <Phone className="w-5 h-5 text-green-700 mt-1" />
        <span>
          <span className="font-semibold">Phone:</span>
          <br />
          External Relation / Marketing:{" "}
          <a
            href="tel:+9779857030665"
            className="text-green-700 hover:text-green-900  ml-1"
          >
            9857030665
          </a>
          <br />
          Admin:{" "}
          <a
            href="tel:+9779851214257"
            className="text-green-700 hover:text-green-900  ml-1"
          >
            9851214257
          </a>
        </span>
      </p>
    </div>
  </div>

  {/* Office Hours Card */}
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <h2 className="text-xl font-serif font-semibold text-green-900 flex items-center gap-3 mb-6">
      <Clock className="w-6 h-6 text-green-800" />
      Office Hours
    </h2>

    <div className="space-y-6 text-gray-800">
      <div>
        <h3 className="font-semibold text-lg mb-1">Main Office</h3>
        <p className="text-sm flex items-center gap-2">
          <MapPin className="w-4 h-4 text-green-700" />
          Tilottama-15, Rupandehi, Nepal
        </p>
        <p className="text-sm flex items-center gap-2">
          <Clock className="w-4 h-4 text-green-700" />
          10:00 AM – 6:00 PM
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-1">Factory Office</h3>
        <p className="text-sm flex items-center gap-2">
          <MapPin className="w-4 h-4 text-green-700" />
          Tilottama-15, Rupandehi, Nepal
        </p>
        <p className="text-sm flex items-center gap-2">
          <Clock className="w-4 h-4 text-green-700" />
          10:00 AM – 6:00 PM
        </p>
      </div>
    </div>
  </div>
</div>

      </div>

      <ScrollUpButton />
    </div>
  );
};

export default Contact;
