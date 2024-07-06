import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const phoneNumber = '081224418965'; // Ganti dengan nomor WhatsApp Anda
  const emailAddress = 'transactease09@gmail.com'; // Ganti dengan alamat email Anda
  
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-12" style={{ background: '#3C2A1F' }}>
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 md:ml-8 mb-8 md:mb-0">
          <h2 className="font-bold text-xl">ABOUT US</h2>
          <p className="text-gray-300 mt-4">
            TransactEase adalah sebuah platform atau layanan yang dimaksudkan untuk memudahkan proses transaksi keuangan atau bisnis dari satu negara ke negara lain dengan cepat, mudah, dan tanpa batasan geografis yang signifikan.
          </p>
          <div className="flex mt-4">
            <a href="#" className="mr-4"><FontAwesomeIcon icon={faFacebook} className="text-gray-300 hover:text-white" /></a>
            <a href="#" className="mr-4"><FontAwesomeIcon icon={faInstagram} className="text-gray-300 hover:text-white" /></a>
            <a href="#" className="mr-4"><FontAwesomeIcon icon={faTwitter} className="text-gray-300 hover:text-white" /></a>
            <a href={`https://wa.me/${phoneNumber}`} className="mr-4"><FontAwesomeIcon icon={faWhatsapp} className="text-gray-300 hover:text-white" /></a>
          </div>
        </div>
        
        <div className="w-full md:w-1/4 md:pl-10 mb-8 md:mb-0">
          <h2 className="font-bold text-xl">COMPANY</h2>
          <ul className="list-none mt-4">
            <li><a href="#home" className="text-white hover:underline">Home</a></li>
            <li><a href="#about" className="text-white hover:underline">About Us</a></li>
            <li><a href="#blog" className="text-white hover:underline">Blog</a></li>
            <li><a href="#features" className="text-white hover:underline">Features</a></li>
            <li><a href={`mailto:${emailAddress}`} className="text-white hover:underline">{emailAddress}</a></li>
          </ul>
        </div>
        
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h2 className="font-bold text-xl">Our Information</h2>
          <ul className="list-none mt-4">
            <li className="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt mr-2" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>
              <a className="text-gray-300 hover:text-white" href="https://maps.app.goo.gl/eZs5iJXUG1i2ui3F6" target="_blank" rel="noopener noreferrer"> Universitas Amikom Yogyakarta</a>
            </li>
            
            <li className="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope mr-2" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
              <a className="text-gray-300 hover:text-white" href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </li>
            
            <li className="mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone mr-2" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
              </svg>
              <a className="text-gray-300 hover:text-white" href={`https://wa.me/${phoneNumber}`}>{phoneNumber}</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-300">&copy; {new Date().getFullYear()} TransactEase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;