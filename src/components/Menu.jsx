const Menu = () => {
  const menuItems = [
    {
      name: "Paneer Butter Masala",
      price: "₹220",
      image: "/images/paneer.jpg",
    },
    {
      name: "Masala Dosa",
      price: "₹130",
      image: "/images/dosa.jpg",
    },
    {
      name: "Veg Biryani",
      price: "₹180",
      image: "/images/biryani.jpg",
    },
    {
      name: "Chole Bhature",
      price: "₹150",
      image: "/images/chole.jpg",
    },
    {
      name: "Tandoori Roti",
      price: "₹20",
      image: "/images/roti.jpg",
    },
    {
      name: "Lassi (Sweet/Salty)",
      price: "₹50",
      image: "/images/lassi.jpg",
    },
  ];

  return (
    <section id="menu" className="bg-black text-white py-20 px-[7.5%]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-10">Our Menu</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-yellow-600 font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
