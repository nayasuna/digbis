import React from 'react';
import Logo from "../../public/logo1.png"
import Logo2 from "../../public/logo2.png"

function App() {
  return (
    <div className="bg-gray-300 text-white font-sans">
      <header className="bg-brown-700 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-16 mr-4" />
          </div>
          <nav className="flex space-x-6">
            <a href="#" className="hover:text-yellow-400">Home</a>
            <a href="#" className="hover:text-yellow-400">About Us</a>
            <a href="#" className="hover:text-yellow-400">Blog</a>
            <a href="#" className="hover:text-yellow-400">Feature</a>
            <a href="#" className="hover:text-yellow-400">Contact</a>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-brown-900 font-bold py-2 px-4 rounded-full">
              Download Now
            </button>
          </nav>
        </div>
      </header>

      <section className="bg-gray-300 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Solusi Canggih Fintech untuk Transaksi Internasional Tanpa Ribet</h2>
          <p className="text-lg mb-8">Dengan TreansactEase hidup kamu akan menjadi lebih mudah</p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-brown-900 font-bold py-2 px-4 rounded-full">
            Download Now!
          </button>
        </div>
      </section>

      <section className="bg-brown-700 py-12">
        <div className="container mx-auto flex justify-center items-center space-x-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">4 Years</h3>
            <p>In Business</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">100+</h3>
            <p>Products</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">30+</h3>
            <p>Branch</p>
          </div>
        </div>
      </section>

      <section className="bg-brown-800 py-16">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-bold mb-4">CASHBACK 20% • SPECIAL PROMO NEW ACCOUNT • CASHBACK 20%</h2>
          <p className="text-lg mb-8">CASHBACK 20%</p>
        </div>
      </section>
      <section className="bg-white py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Logo */}
        <div className="mb-8 lg:mr-8 lg:mb-0">
          <img src={Logo2} alt="Logo" className="h-40 lg:h-48" />
        </div>

        {/* Content */}
        <div className="lg:flex-1">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-black mb-8">
            TransactEase is a platform or service developed to facilitate financial or business transaction processes from one country to another quickly, easily, and without significant geographical limitations.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-brown-900 font-bold py-2 px-4 rounded-full mb-4">
            Read More
          </button>
          <div className="flex space-x-4 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v.79a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L12 21.21a1 1 0 01-.684-.949V7a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L12 21.21a1 1 0 01-.684-.949V7a2 2 0 012-2h3.28a1 1 0 00.948-.684L15.21 3.21a1 1 0 01.684-.949H19a2 2 0 012 2v.79a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
            </svg>
            <p className="text-lg">123 456 789</p>
          </div>
        </div>
      </div>
    </section>

      <section className="bg-brown-900 py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">What Our User Said</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brown-400 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="user1.jpg" alt="User" className="h-12 w-12 rounded-full mr-4" />
                <h3 className="text-xl font-bold">Andreas Antonsen</h3>
                <p className="text-sm">CEO Google</p>
              </div>
              <p className="text-lg">
                “Transactease merupakan aplikasi yang sangat membantu pengguna dalam melakukan transaksi internasional.”
              </p>
            </div>
            <div className="bg-brown-400 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="user2.jpg" alt="User" className="h-12 w-12 rounded-full mr-4" />
                <h3 className="text-xl font-bold">James Willy</h3>
                <p className="text-sm">CEO Facebook</p>
              </div>
              <p className="text-lg">
                “Pembuatan akun Transactease sangat bagus dan menarik, karena pengguna mendapatkan cash back berupa poin atau saldo.”
              </p>
            </div>
            <div className="bg-brown-400 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <img src="user3.jpg" alt="User" className="h-12 w-12 rounded-full mr-4" />
                <h3 className="text-xl font-bold">Alice Queen</h3>
                <p className="text-sm">CEO Youtube</p>
              </div>
              <p className="text-lg">
                “TransactEase menyedi fitur tambahan yang b laporan keuangan, dll.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brown-700 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Our Feature</h2>
          <h2 className="text-5xl font-bold mb-8">Providing International Transaction</h2>
          <p className="text-lg mb-8">
            Transaksi Internasional adalah fitur utama dari aplikasi Transactease. Transfer uang antar negara untuk pembayaran barang, jasa, atau investasi. Ini dapat dilakukan melalui aplikasi Transactease dengan berbagai metode pembayaran internasional, seperti transfer bank, kartu kredit, qris, dll. Pada Transactease terdapat fitur "Transaksi Internasional Berkelanjutan", Transactease akan secara otomatis menyesuaikan nilai tukar mata uang secara real-time saat melakukan transaksi. Ini akan mengurangi biaya konversi dan risiko fluktuasi nilai tukar yang tidak terduga.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-brown-900 font-bold py-2 px-4 rounded-full mb-4">
            Download Now
          </button>
          <div className="flex space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v.79a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L12 21.21a1 1 0 01-.684-.949V7a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L12 21.21a1 1 0 01-.684-.949V7a2 2 0 012-2h3.28a1 1 0 00.948-.684L15.21 3.21a1 1 0 01.684-.949H19a2 2 0 012 2v.79a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
            </svg>
            <p className="text-lg">123 456 789</p>
          </div>
        </div>
      </section>

      <section className="bg-brown-900 py-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-lg">
              <h3 className="text-2xl font-bold mb-4">ABOUT US</h3>
              <p>
                TransactEase adalah sebuah platform atau layanan yang dikembangkan untuk memudahkan proses transaksi keuangan atau bisnis dari satu negara ke negara lain dengan cepat, mudah, dan tanpa batasan geografis yang signifikan
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-2.9 3.3 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 01-2.9-3.3 8.38 8.38 0 01-3.8-.9h.5a8.47 8.47 0 017.9 7.9l5 5c1.5 1.5 3.5 1.5 5 0l5-5a8.47 8.47 0 017.9-7.9h.5" />
                  </svg>
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13.059m0-13.063h-3.749c.725-2.122 1.976-3.749 3.749-3.749h3.749V6.253z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-yellow-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V6z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="text-lg">
              <h3 className="text-2xl font-bold mb-4">HELP</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-400">Customer Support</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-400">How It Works</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-400">Terms & Condition</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-400">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="text-lg">
              <h3 className="text-2xl font-bold mb-4">COMPANY</h3>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-400">Home</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-400">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-400">Services</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:text-yellow-400">Projects</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-brown-800 py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">CONTACT US</h3>
          <div className="flex justify-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 21.91.827 12.285a2 2 0 01-2.586-2.586L1 5.828a2 2 0 012.586-2.586L13.414 5.732 17.657 10.975a2 2 0 012.586 2.586z" />
            </svg>
            <p className="text-lg">Universitas Amikom Yogyakarta</p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v.79a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L12 21.21a1 1 0 01-.684-.949V7a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-3.28a1 1 0 01-.948-.684L12 21.21a1 1 0 01-.684-.949V7a2 2 0 012-2h3.28a1 1 0 00.948-.684L15.21 3.21a1 1 0 01.684-.949H19a2 2 0 012 2v.79a1 1 0 01.948.684l1.498 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" />
            </svg>
            <p className="text-lg">123 456 789</p>
          </div>
          <div className="flex justify-center space-x-4 mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-lg">transactease09@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
