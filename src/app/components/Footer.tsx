import { Facebook, Twitter, Instagram, Linkedin, Youtube, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl mb-4 bg-gradient-to-r from-[#FF9933] to-[#138808] bg-clip-text text-transparent">
                Samajhdaar Bharat
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                An awareness initiative for responsible citizens
              </p>
              <div className="flex gap-2">
                <div className="w-12 h-1 bg-[#FF9933] rounded-full"></div>
                <div className="w-12 h-1 bg-white rounded-full"></div>
                <div className="w-12 h-1 bg-[#138808] rounded-full"></div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-[#FF9933] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#challenges" className="text-gray-300 hover:text-[#FF9933] transition-colors">
                    Challenges
                  </a>
                </li>
                <li>
                  <a href="#stories" className="text-gray-300 hover:text-[#FF9933] transition-colors">
                    Stories
                  </a>
                </li>
                <li>
                  <a href="#share" className="text-gray-300 hover:text-[#FF9933] transition-colors">
                    Share Your Act
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-[#FF9933] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h4 className="text-lg mb-4">Connect With Us</h4>
              <p className="text-gray-300 mb-4">
                Join the movement on social media
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-gray-700 rounded-full hover:bg-[#FF9933] transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="text-center space-y-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Samajhdaar Bharat. An awareness initiative for responsible citizens.
            </p>
            <p className="text-gray-400 text-sm">
              <strong>Disclaimer:</strong> This is a public awareness platform.
            </p>
            <p className="text-gray-300 text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for a better India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
