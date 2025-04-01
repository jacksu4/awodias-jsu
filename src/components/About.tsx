
import { 
  FaBasketballBall, 
  FaTableTennis, 
  FaMountain, 
  FaPlane, 
  FaGamepad, 
  FaCode,
  FaDumbbell
} from "react-icons/fa";
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
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <Card className="overflow-hidden border-none shadow-lg h-full">
            <div className="relative">
              <img 
                src="/lovable-uploads/25be2e1e-5bb0-4369-a7bd-c6bdd1cf0ba8.png" 
                alt="Profile photo at Alcatraz Island" 
                className="w-full h-auto object-cover"
              />
              <div className="bg-white py-2 px-4 text-center text-gray-700">
                <p className="italic">Visiting Alcatraz Island</p>
              </div>
            </div>
          </Card>
          
          {/* Bio Information */}
          <div className="space-y-6 lg:col-span-2">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a 25-year-old Software Engineer from Shenzhen, China, now living in the Bay Area. I earned my Computer Science degrees from UC Irvine (BS) and Rice University (MS). With a strong foundation in both academic knowledge and practical experience, I've been focusing on developing innovative solutions that bridge technology and business needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Currently working at BILL (NYSE: BILL) in fintech industry, I'm preparing to transition into investment and relocate to Hong Kong. This career shift allows me to combine my technical expertise with my passion for finance and business strategy. I'm excited about this new chapter that will leverage both my engineering background and investment interests.
            </p>
          </div>
        </div>
        
        {/* Quick Facts and Interests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card className="shadow-md p-6 h-full">
            <h3 className="text-xl font-heading font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-2 h-8 bg-mountain-blue mr-3 rounded-full"></span>
              Quick Facts
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="font-medium text-gray-900 min-w-28">Born:</span>
                <span className="text-gray-700">Shenzhen, China</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 min-w-28">Education:</span>
                <div className="text-gray-700">
                  <div>BS in Computer Science (UC Irvine)</div>
                  <div>MS in Computer Science (Rice University)</div>
                  <div>MBA (HKU, part-time, upcoming)</div>
                </div>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 min-w-28">Current Role:</span>
                <span className="text-gray-700">Software Engineer at BILL</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium text-gray-900 min-w-28">Next Chapter:</span>
                <span className="text-gray-700">From Engineer to Investor in Hong Kong</span>
              </li>
            </ul>
          </Card>
          
          <Card className="shadow-md p-6 h-full">
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
    </section>
  );
};

export default About;
