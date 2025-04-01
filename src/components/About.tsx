
import { 
  FaBasketballBall, 
  FaTableTennis, 
  FaMountain, 
  FaCampground, 
  FaPlane, 
  FaGamepad, 
  FaCode,
  FaDumbbell
} from "react-icons/fa";

const About = () => {
  const interests = [
    { name: "Basketball", icon: FaBasketballBall },
    { name: "Table Tennis", icon: FaTableTennis },
    { name: "Hiking", icon: FaMountain },
    { name: "Traveling", icon: FaPlane },
    { name: "Gaming", icon: FaGamepad },
    { name: "Coding", icon: FaCode },
    { name: "Fitness", icon: FaDumbbell },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-mountain-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Profile Image - New addition */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/lovable-uploads/25be2e1e-5bb0-4369-a7bd-c6bdd1cf0ba8.png" 
                  alt="Profile photo at Alcatraz Island" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-md">
                <p className="text-sm font-medium text-gray-800">Visiting Alcatraz Island in San Francisco Bay</p>
              </div>
            </div>
          </div>
          
          {/* Bio Information */}
          <div className="space-y-6 order-2 lg:order-1 lg:col-span-1">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a 25-year-old Software Engineer originally from Shenzhen, China, and currently based in Bay Area, California. I moved to the United States for my education, completing my undergraduate degree at UC Irvine and Master's at Rice University, both in Computer Science.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently, I work as a Software Engineer at BILL (NYSE: BILL), where I've been developing innovative solutions for the financial technology industry. I'm also preparing for an exciting transition as an incoming investor planning to relocate to Hong Kong soon.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              While establishing my investment company in Hong Kong, I'll be attending the HKU MBA program part-time to enhance my communication, business, and finance skills. Additionally, I'm currently preparing for the CFA Level 2 exam taking place this May.
            </p>
          </div>
          
          {/* Quick Facts and Interests */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-md order-3 lg:order-3">
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-6">
              Quick Facts
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">Born:</span>
                <span className="text-gray-700">Shenzhen, China</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">Education:</span>
                <span className="text-gray-700">BS in Computer Science (UC Irvine)<br />MS in Computer Science (Rice University)<br />MBA (HKU, part-time, upcoming)</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">Current Role:</span>
                <span className="text-gray-700">Software Engineer at BILL</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 mr-2">Next Chapter:</span>
                <span className="text-gray-700">From Engineer to Investor in Hong Kong</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-heading font-semibold text-gray-900 mt-8 mb-6">
              Interests
            </h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <div 
                  key={interest.name} 
                  className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm text-gray-700"
                >
                  <interest.icon size={16} className="mr-2 text-mountain-blue" />
                  <span>{interest.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
