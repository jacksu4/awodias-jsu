
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Card */}
          <div className="lg:col-span-4 lg:order-1">
            <Card className="overflow-hidden border-none shadow-lg">
              <div className="relative">
                <img 
                  src="/lovable-uploads/25be2e1e-5bb0-4369-a7bd-c6bdd1cf0ba8.png" 
                  alt="Profile photo at Alcatraz Island" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium">Visiting Alcatraz Island in San Francisco Bay</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-mountain-blue"></div>
                    <h3 className="font-heading font-semibold">Software Engineer at BILL</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-forest-green"></div>
                    <h3 className="font-heading font-semibold">From Shenzhen, China</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-mountain-light"></div>
                    <h3 className="font-heading font-semibold">Based in Bay Area, California</h3>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-forest-yellow"></div>
                    <h3 className="font-heading font-semibold">Future: Hong Kong</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Bio Information */}
          <div className="space-y-6 lg:col-span-4 lg:order-2">
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
          <div className="lg:col-span-4 lg:order-3">
            <Card className="shadow-md p-6 h-full">
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-mountain-blue mr-3 rounded-full"></span>
                Quick Facts
              </h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 min-w-24">Born:</span>
                  <span className="text-gray-700">Shenzhen, China</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 min-w-24">Education:</span>
                  <div className="text-gray-700">
                    <div>BS in Computer Science (UC Irvine)</div>
                    <div>MS in Computer Science (Rice University)</div>
                    <div>MBA (HKU, part-time, upcoming)</div>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 min-w-24">Current Role:</span>
                  <span className="text-gray-700">Software Engineer at BILL</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 min-w-24">Next Chapter:</span>
                  <span className="text-gray-700">From Engineer to Investor in Hong Kong</span>
                </li>
              </ul>
              
              <h3 className="text-xl font-heading font-semibold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-forest-green mr-3 rounded-full"></span>
                Interests
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <div 
                    key={interest.name} 
                    className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <interest.icon size={16} className="mr-2 text-mountain-blue" />
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
