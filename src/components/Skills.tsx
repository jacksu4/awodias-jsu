
import { 
  FaCode,
  FaDatabase,
  FaServer,
  FaChartLine,
  FaLanguage, 
  FaUsers,
  FaBrain
} from "react-icons/fa";

const Skills = () => {
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "C++", "SQL", "JavaScript", "TypeScript", "HTML/CSS"],
      icon: FaCode
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
      icon: FaDatabase
    },
    {
      category: "Technologies & Frameworks",
      skills: ["React", "REST APIs", "Microservices", "Spring Boot", "Node.js", "AWS"],
      icon: FaServer
    }
  ];

  const softSkills = [
    {
      skill: "Analytical Thinking",
      description: "Analyzing complex problems and developing effective solutions",
      icon: FaBrain
    },
    {
      skill: "Public Speaking",
      description: "Presenting ideas clearly and confidently to various audiences",
      icon: FaLanguage
    },
    {
      skill: "Effective Collaboration",
      description: "Working seamlessly with cross-functional teams",
      icon: FaUsers
    },
    {
      skill: "Proactive Leadership",
      description: "Taking initiative and guiding teams toward success",
      icon: FaChartLine
    }
  ];

  const certificates = ["HKSI Paper 1 passed", "CFA Level 1 passed", "CFA Level 2 passed"];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-mountain-blue mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
              Technical Skills
            </h3>
            
            <div className="space-y-8">
              {technicalSkills.map((skillGroup, index) => (
                <div key={index}>
                  <div className="flex items-center mb-4">
                    <skillGroup.icon className="mr-3 h-6 w-6 text-mountain-blue" />
                    <h4 className="text-xl font-heading font-medium text-gray-800">
                      {skillGroup.category}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-white rounded-md shadow-sm text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mt-12 mb-8">
              Certificates
            </h3>
            
            <div className="flex flex-wrap gap-4">
              {certificates.map((cert, index) => (
                <div 
                  key={index}
                  className="px-5 py-3 bg-mountain-blue/10 border border-mountain-blue/20 rounded-md text-mountain-dark font-medium"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-heading font-semibold text-gray-900 mb-8">
              Soft Skills
            </h3>
            
            <div className="grid gap-6">
              {softSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-mountain-blue/10 rounded-full mr-4">
                      <skill.icon className="h-6 w-6 text-mountain-blue" />
                    </div>
                    <h4 className="text-xl font-heading font-medium text-gray-800">
                      {skill.skill}
                    </h4>
                  </div>
                  <p className="text-gray-600">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
