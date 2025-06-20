const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-[7.5%]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-[#eeb753] mb-3">
            Hariom Restaurant
          </h2>
          <p>
            Serving delicious Indian cuisine with love and tradition. Dine-in,
            takeaway, or order online!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-[#eeb753]">
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-[#eeb753]">
                Menu
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#eeb753]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p>📍 123 Sector 34, Chandigarh, India</p>
          <p>📞 +91 99806 87109</p>
          <p>✉️ contact@hariomrestaurant.com</p>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-700 pt-4 text-sm">
        © {new Date().getFullYear()} Hariom Restaurant. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
