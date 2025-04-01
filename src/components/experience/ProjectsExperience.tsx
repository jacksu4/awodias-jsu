
import { FaCode, FaGithub } from "react-icons/fa";
import { TabsContent } from "@/components/ui/tabs";

type ProjectProps = {
  name: string;
  technologies: string;
  period: string;
  description: string;
  githubUrl: string;
  achievements: string[];
};

const projects: ProjectProps[] = [
  {
    name: "AwoDB",
    technologies: "C++",
    period: "Jan 2022 - Apr 2022",
    description: "Database system with storage, modification and deletion capabilities",
    githubUrl: "https://github.com/jacksu4/AwoDB",
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
    githubUrl: "https://github.com/jacksu4/Fabflix",
    achievements: [
      "Developed an online movie browsing website and used JDBC to interact with MySQL Database",
      "Wrote plain Javascript, JQuery, HTML, CSS for front end and Java Servlet with RESTful APIs for back end",
      "Utilized HTTPS, reCaptcha and Password Hashing to secure login and payment",
      "Improved QPS limit by over 400% by Scaling the project using Apache Load Balancer, MySQL master/slave replication on Amazon Web Service and tested with JMeter"
    ]
  }
];

const ProjectCard = ({ project }: { project: ProjectProps }) => (
  <div className="relative">
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <span className="inline-block px-3 py-1 bg-mountain-blue/10 text-mountain-blue text-sm font-medium rounded-full mb-3">
        {project.period}
      </span>
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-xl font-heading font-semibold text-gray-900">
          {project.name}
        </h3>
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-mountain-blue hover:underline"
          >
            <FaGithub className="mr-1" />
            <span>View on GitHub</span>
          </a>
        )}
      </div>
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
);

const ProjectsExperience = () => {
  return (
    <TabsContent value="projects" className="mt-6 space-y-12">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </TabsContent>
  );
};

export default ProjectsExperience;
