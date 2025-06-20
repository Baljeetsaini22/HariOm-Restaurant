const Menu = () => {
  const menuItems = [
    {
      name: "Paneer Butter Masala",
      price: "₹220",
      image: "/foodImg/paneer.jpg",
    },
    {
      name: "Masala Dosa",
      price: "₹130",
      image: "/foodImg/dossa.jpg",
    },
    {
      name: "Veg Biryani",
      price: "₹180",
      image: "/foodImg/biryani.jpg",
    },
    {
      name: "Chole Bhature",
      price: "₹150",
      image: "/foodImg/bature.jpg",
    },
    {
      name: "Tandoori Roti",
      price: "₹20",
      image: "/foodImg/tanduriRoti.jpg",
    },
    {
      name: "Lassi (Sweet/Salty)",
      price: "₹50",
      image: "/foodImg/lassi.jpg",
    },
  ];

  return (
    <section id="menu" className="bg-black text-white py-20 px-[7.5%]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#eeb753] mb-5">Our Menu</h2>
        <p className="text-white mb-10">
          Delicious & Affordable Vegetarian Dishes
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className=" bg-white text-black rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-[#eeb753] font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
