const Hero = () => {
  return (
    <section className="hero-section w-full text-white bg-[url(./assets/images/hero-banner.png)] bg-cover">
      <div className="bg-[#00000080] h-[60vh] flex items-center justify-center">
        <div className=" flex flex-col items-center">
          <h1 className="text-center text-5xl">Welcome To HariOm भोजनालय</h1>
          <p className="py-5">Delicious Taste of Tradition</p>
          <div className="flex justify-between gap-10 text-center">
            <a id="#menu" className="cursor-pointer w-30 py-2 rounded-2xl bg-gradient-to-r from-yellow-400 to-white text-black">
              See Menu
            </a>
            <a className="cursor-pointer w-30 py-2 rounded-2xl bg-gradient-to-l from-yellow-400 to-white text-black">
              Order Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
