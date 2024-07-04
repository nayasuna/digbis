import React from 'react';

const ContactUsMenu = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="col-span-1 md:col-span-2 bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
            <h3 className="text-xl font-bold mb-4">Our Office</h3>
            {/* Google Maps */}
            <div className="mt-8 w-full h-60">
              <iframe
                title="AMIKOM Yogyakarta"
                className="w-full h-full rounded-lg"
                src="https://maps.google.com/maps?q=AMIKOM%20Yogyakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
          
          {/* Contact Form (optional) */}
          <div className="col-span-1 bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
            <form className="flex flex-col">
              <input type="text" placeholder="Name" className="mb-4 p-2 rounded-lg border-gray-300 border focus:outline-none" />
              <input type="email" placeholder="Email" className="mb-4 p-2 rounded-lg border-gray-300 border focus:outline-none" />
              <textarea rows="4" placeholder="Message" className="mb-4 p-2 rounded-lg border-gray-300 border focus:outline-none"></textarea>
              <button type="submit" className="bg-orange-400 rounded-md px-6 py-3 text-white hover:bg-orange-500 transition">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsMenu;
