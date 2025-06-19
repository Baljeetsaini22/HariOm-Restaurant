const Contact = () => {
  return (
    <section id="contact" className="bg-white text-black py-20 px-[7.5%]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">Contact Us</h2>
        <p className="text-lg mb-10">
          Have a question, feedback, or want to place an order? We’d love to
          hear from you!
        </p>

        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Contact Details */}
          <div className="text-left space-y-4 md:w-1/2">
            <p>
              <strong>📍 Address:</strong> 123 Sector 34, Chandigarh, India
            </p>
            <p>
              <strong>📞 Phone:</strong> +91 99806 87109
            </p>
            <p>
              <strong>✉️ Email:</strong> contact@hariomrestaurant.com
            </p>
            <p>
              <strong>🕒 Hours:</strong> 10:00 AM – 10:00 PM (Mon–Sun)
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 w-full md:w-1/2">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
