
import { FaBriefcase } from "react-icons/fa";
import { TabsContent } from "@/components/ui/tabs";

type JobProps = {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
};

const workExperience: JobProps[] = [
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
    company: "Tesla",
    role: "Application Support Engineer Intern",
    location: "Shanghai, China",
    period: "July 2021",
    achievements: [
      "Developed an internal supporting tool for MFS (Material Flow System) in Shanghai Giga Factory which improved 20% of the coworkers' productivity (Python, Pandas, MySQL)",
      "Upgraded the Splunk dashboard to visualize MFS's Kafka and SQL statistics for 20+ Support Engineers",
      "Facilitated vehicle manufacture by writing SQL and SPL queries to find and fix discrepancies in data and operations caused by the system and factory workers"
    ]
  },
  {
    company: "Douban",
    role: "Software Engineer Intern",
    location: "Beijing, China",
    period: "Oct 2020 - Dec 2020",
    achievements: [
      "Improved 10% of user retention rate by building the back end of Badge ranking system: allowing users to see infos of different badges which acquired by watching series of Movies",
      "Enabled push functionality toward all active Douban App user for operation teams using PySpark",
      "Fixed back end bugs to prevent discrepancies on users' profile display",
      "Participated in Agile Development: took part in weekly scrum meetings and collaborated with project managers and software engineers to meet deadlines on every tasks"
    ]
  },
  {
    company: "Lenovo",
    role: "Software Engineer Intern",
    location: "Shenzhen, China",
    period: "June 2019 - Sep 2019",
    achievements: [
      "Encapsulated machine learning algorithms into Hyperminer (Lenovo machine learning platform) using Python's Scikit-Learn and XGBoost Library",
      "Upgraded Hyperminer's CRUD Operations using Python's Django Framework and wrote API documentations"
    ]
  }
];

const JobCard = ({ job }: { job: JobProps }) => (
  <div className="relative">
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
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
);

const WorkExperience = () => {
  return (
    <TabsContent value="work" className="mt-6 space-y-12">
      {workExperience.map((job, index) => (
        <JobCard key={index} job={job} />
      ))}
    </TabsContent>
  );
};

export default WorkExperience;
