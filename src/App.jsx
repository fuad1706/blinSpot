import React, { useState, useEffect } from "react";
import Whatsapp from "/img/whatsapp.png";
import {
  Shield,
  Camera,
  Zap,
  Phone,
  Mail,
  CheckCircle,
  Eye,
  Wifi,
  Lock,
  AlertTriangle,
  Monitor,
  Settings,
} from "lucide-react";

const BlindspotLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "CCTV Systems",
      description:
        "Professional surveillance solutions with cutting-edge camera technology and monitoring systems.",
      features: [
        "HD/4K Recording",
        "Remote Monitoring",
        "Night Vision",
        "Motion Detection",
      ],
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "DSTV & Satellite",
      description:
        "Expert installation and configuration of satellite TV systems and digital broadcasting solutions.",
      features: [
        "Multi-room Setup",
        "Signal Optimization",
        "Decoder Configuration",
        "Maintenance Support",
      ],
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Fire & Smoke Alarms",
      description:
        "Life-saving detection systems with smart sensors and emergency response integration.",
      features: [
        "Smart Detection",
        "Emergency Alerts",
        "System Integration",
        "Regular Testing",
      ],
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Intercom Systems",
      description:
        "Seamless communication solutions for residential and commercial properties.",
      features: [
        "Video Calling",
        "Remote Access",
        "Multi-unit Support",
        "Mobile Integration",
      ],
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Access Control",
      description:
        "Advanced security systems with biometric and card-based entry solutions.",
      features: [
        "Biometric Access",
        "Card Systems",
        "Time Tracking",
        "Remote Management",
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "General Electrical",
      description:
        "Comprehensive electrical services from installation to maintenance and repairs.",
      features: [
        "Wiring & Installation",
        "Maintenance",
        "Emergency Repairs",
        "System Upgrades",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Eye className="w-16 h-16 text-blue-400 animate-pulse" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              BLINDSPOT
            </h1>
            <p className="text-xl md:text-2xl text-center mb-4 text-blue-200">
              System Solution
            </p>
            <p className="text-lg text-center mb-12 text-gray-300 italic">
              Quality Beyond Your Awareness
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                Get Quote Today
              </button>
              <button className="border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                View Services
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-3 h-3 bg-blue-300 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30 hover:border-blue-400/50 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  activeService === index ? "ring-2 ring-blue-400" : ""
                }`}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="text-blue-400 mb-6 transform hover:rotate-12 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-400"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Why Choose Blindspot?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Trusted Security",
                desc: "Years of experience in security solutions",
              },
              {
                icon: <Settings className="w-12 h-12" />,
                title: "Expert Installation",
                desc: "Professional setup and configuration",
              },
              {
                icon: <Wifi className="w-12 h-12" />,
                title: "24/7 Support",
                desc: "Round-the-clock technical assistance",
              },
              {
                icon: <CheckCircle className="w-12 h-12" />,
                title: "Quality Assured",
                desc: "Premium products with warranty",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                    <p className="text-blue-300">+234 802 991 3908</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <p className="text-blue-300">
                      blinspotsystemsolution@gmail.com
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-600/30">
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Ready to Secure Your Space?
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Contact us today for a free consultation and quote. Our
                    experts will assess your needs and provide tailored
                    solutions.
                  </p>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300">
                    Schedule Consultation
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/30">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                  <div>
                    <select className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option value="">Select Service</option>
                      <option value="cctv">CCTV Systems</option>
                      <option value="satellite">DSTV & Satellite</option>
                      <option value="alarms">Fire & Smoke Alarms</option>
                      <option value="intercom">Intercom Systems</option>
                      <option value="access">Access Control</option>
                      <option value="electrical">General Electrical</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows="4"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/2348029913908?text=Hi%20Blindspot%20System%20Solution,%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          // className="bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 group"
        >
          <img src={Whatsapp} alt="Whatsapp" className="h-[60px] w-[60px]" />
          {/* <MessageCircle className="w-8 h-8 text-white" /> */}
          <div className="absolute -top-12 -left-8 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Chat on WhatsApp
          </div>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <Eye className="w-8 h-8 text-blue-400 mr-2" />
            <span className="text-2xl font-bold text-white">
              Blindspot System Solution
            </span>
          </div>
          <p className="text-gray-400 mb-4">Quality Beyond Your Awareness</p>
          <p className="text-sm text-gray-500">
            © 2025 Blindspot System Solution. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlindspotLanding;
