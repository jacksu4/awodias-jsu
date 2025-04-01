
import { FaGraduationCap } from "react-icons/fa";
import { TabsContent } from "@/components/ui/tabs";

type EducationProps = {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details: string;
};

const educationExperience: EducationProps[] = [
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

const EducationCard = ({ education }: { education: EducationProps }) => (
  <div className="relative">
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <span className="inline-block px-3 py-1 bg-mountain-blue/10 text-mountain-blue text-sm font-medium rounded-full mb-3">
        {education.period}
      </span>
      <h3 className="text-xl font-heading font-semibold text-gray-900 mb-1">
        {education.degree}
      </h3>
      <p className="text-gray-700 mb-4">
        {education.institution} · {education.location}
      </p>
      <p className="text-gray-600">
        {education.details}
      </p>
    </div>
  </div>
);

const EducationExperience = () => {
  return (
    <TabsContent value="education" className="mt-6 space-y-12">
      {educationExperience.map((education, index) => (
        <EducationCard key={index} education={education} />
      ))}
    </TabsContent>
  );
};

export default EducationExperience;
