
import { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("work");
  
  const workExperience = [
    {
      company: "BILL",
      role: "Software Engineer II - Onboarding Team",
      location: "San Jose, California",
      period: "Feb 2023 - Present",
      achievements: [
        "Led strategic email marketing campaigns using SendGrid and LaunchDarkly, driving a $68,000 increase in Total Payment Volume within three months",
        "Developed and launched a Duplicate Detection API, reducing duplicate registrations by small businesses by 40%, enhancing user onboarding efficiency",
        "Executed Google Sign-In integration, accelerating user growth rate from 10% to 12%, marking a 20% increase in growth trends",
        "Managed migration of onboarding logic to a microservice architecture, shortening 15% of time-to-market for new feature deployments",
        "Actively participated in Agile Development cycles, ensuring timely delivery through meticulous project management and effective cross-team collaboration"
      ]
    },
    {
      company: "Kirboreo Asset Investment Limited",
      role: "Co-Founder",
      location: "Remote, Hong Kong",
      period: "Jan 2023 - Present",
      achievements: [
        "Collaborating with stakeholders on Type 9 licensing application, developing investment strategies, preparing equity research reports, and building company website"
      ]
    },
    {
      company: "BILL",
      role: "Software Engineer Intern",
      location: "San Jose, California",
      period: "May 2022 - Aug 2022",
      achievements: [
        "Revamped the sign-in architecture by migrating the step page determination logic from the frontend to the backend, halving the signup page response time and effectively addressing user dropout issues"
      ]
    },
    {
      company: "Douban",
      role: "Software Engineer Intern",
      location: "Beijing, China",
      period: "Oct 2020 - Dec 2020",
      achievements: [
        "Improved 10% of user retention rate by building the back end of Badge ranking system: allowing users to see infos of different badges which acquired by watching series of Movies"
      ]
    }
  ];
  
  const educationExperience = [
    {
      institution: "Rice University",
      degree: "Master of Computer Science",
      location: "Houston, TX",
      period: "Aug 2021 - Dec 2022",
      details: "GPA: 3.74/4.00"
    },
    {
      institution: "University of California, Irvine",
      degree: "Bachelor of Science in Computer Science",
      location: "Irvine, CA",
      period: "Sept 2017 - June 2021",
      details: "GPA: 3.62/4.00"
    }
  ];
  
  const projects = [
    {
      name: "AwoDB",
      technologies: "C++",
      period: "Jan 2022 - Apr 2022",
      description: "Database system with storage, modification and deletion capabilities",
      achievements: [
        "Constructed a full-fledged database system which support storing, modifying and deleting records from scratch",
        "Implemented Buffer and File Manager, Record Manager for the lower level and SQL semantic checking, Relational operations for the upper level",
        "Reduced database processing time by 50% by using LRU Algorithm for buffer management, B+ Tree implementation for data storage and TPMMS for data sort"
      ]
    },
    {
      name: "Fabflix",
      technologies: "Java, Javascript, MySQL",
      period: "Feb 2020 - May 2020",
      description: "Online movie browsing website with database integration",
      achievements: [
        "Developed an online movie browsing website and used JDBC to interact with MySQL Database",
        "Wrote plain Javascript, JQuery, HTML, CSS for front end and Java Servlet with RESTful APIs for back end",
        "Utilized HTTPS, reCaptcha and Password Hashing to secure login and payment",
        "Improved QPS limit by over 400% by Scaling the project using Apache Load Balancer, MySQL master/slave replication on Amazon Web Service and tested with JMeter"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-mountain-blue mx-auto"></div>
        </div>
        
        <Tabs defaultValue="work" className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-md mb-10">
            <TabsList className="grid grid-cols-3 bg-gray-100">
              <TabsTrigger value="work" className="text-lg py-3 data-[state=active]:bg-white">
                <FaBriefcase className="mr-2 h-5 w-5" />
                Work
              </TabsTrigger>
              <TabsTrigger value="education" className="text-lg py-3 data-[state=active]:bg-white">
                <FaGraduationCap className="mr-2 h-5 w-5" />
                Education
              </TabsTrigger>
              <TabsTrigger value="projects" className="text-lg py-3 data-[state=active]:bg-white">
                <FaCode className="mr-2 h-5 w-5" />
                Projects
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="work" className="mt-6 space-y-12">
            {workExperience.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Remove blue dot with vertical line */}
                
                <div className={`md:flex md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 bg-mountain-blue/10 text-mountain-blue text-sm font-medium rounded-full mb-3">
                        {job.period}
                      </span>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">
                        {job.role}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {job.company} · {job.location}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="flex">
                            <span className="mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="education" className="mt-6 space-y-12">
            {educationExperience.map((edu, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Remove blue dot with vertical line */}
                
                <div className={`md:flex md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 bg-mountain-blue/10 text-mountain-blue text-sm font-medium rounded-full mb-3">
                        {edu.period}
                      </span>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {edu.institution} · {edu.location}
                      </p>
                      <p className="text-gray-600">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="projects" className="mt-6 space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Remove blue dot with vertical line */}
                
                <div className={`md:flex md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:text-right'}`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="inline-block px-3 py-1 bg-mountain-blue/10 text-mountain-blue text-sm font-medium rounded-full mb-3">
                        {project.period}
                      </span>
                      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">
                        {project.name}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Technologies: {project.technologies}
                      </p>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="flex">
                            <span className="mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
