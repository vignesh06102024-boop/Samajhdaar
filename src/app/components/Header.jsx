export function Header() {

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b-2 border-[#138808]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo = Home */}
        <div
          onClick={() => scrollTo("home")}
          className="text-2xl font-bold cursor-pointer"
        >
          <span className="text-[#FF9933]">Samajhdaar</span>{" "}
          <span className="text-[#138808]">Bharat</span>
        </div>

        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <button 
            onClick={() => scrollTo("home")} 
            className="cursor-pointer hover:text-[#138808] transition-colors duration-300"
          >
            Home
          </button>
          <button 
            onClick={() => scrollTo("about")} 
            className="cursor-pointer hover:text-[#138808] transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollTo("civic-education")} 
            className="cursor-pointer hover:text-[#138808] transition-colors duration-300"
          >
            Civic Education
          </button>
          <button 
            onClick={() => scrollTo("challenges")} 
            className="cursor-pointer hover:text-[#138808] transition-colors duration-300"
          >
            Challenges
          </button>
          <button 
            onClick={() => scrollTo("contact")} 
            className="cursor-pointer hover:text-[#138808] transition-colors duration-300"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
