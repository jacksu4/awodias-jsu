
import { useState } from "react";
import { FaBriefcase, FaGraduationCap, FaCode } from "react-icons/fa";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import WorkExperience from "./experience/WorkExperience";
import EducationExperience from "./experience/EducationExperience";
import ProjectsExperience from "./experience/ProjectsExperience";

const Experience = () => {
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
          
          <WorkExperience />
          <EducationExperience />
          <ProjectsExperience />
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
