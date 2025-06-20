const TestimonialCard = ({ name, review, rating }) => {
  return (
    <div className="bg-white text-black p-6 rounded-2xl shadow hover:shadow-xl transition">
      <p className="italic text-gray-800">"{review}"</p>
      <p className="mt-4 font-semibold text-yellow-700">- {name}</p>
      <p className="mt-4 font-semibold text-yellow-700">Rating {rating}*</p>
    </div>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Ravi Kumar",
      review: "Amazing food! The Paneer Butter Masala is the best I’ve had.",
      rating: 4.5,
    },
    {
      name: "Sneha Sharma",
      review:
        "Loved the dosa and the service was quick. Truly feels like home-cooked food!",
      rating: 4.5,
    },
    {
      name: "Aman Verma",
      review:
        "Affordable, tasty and hygienic. The ambience is great for families.",
      rating: 4.5,
    },
  ];

  return (
    <section id="testimonials" className="bg-black py-12 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-yellow-500">
          What Our Customers Say
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
        {reviews.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
