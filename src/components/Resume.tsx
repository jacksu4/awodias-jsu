
import { FaDownload, FaEye } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const [showResume, setShowResume] = useState(false);
  const resumeUrl = "/lovable-uploads/8d93f4e6-5de5-4edf-98b3-0d4fa9776a26.png";

  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Resume
          </h2>
          <div className="w-20 h-1 bg-mountain-blue mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            My professional experience and qualifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <Button 
              onClick={() => setShowResume(true)} 
              className="flex items-center gap-2 bg-mountain-blue hover:bg-mountain-dark"
            >
              <FaEye /> View Resume
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="flex items-center gap-2 border-mountain-blue text-mountain-blue hover:bg-mountain-blue/10"
            >
              <a href={resumeUrl} download="Jingcheng_Su_Resume.png">
                <FaDownload /> Download Resume
              </a>
            </Button>
          </div>
          
          {showResume && (
            <div className="mt-6">
              <div className="relative pb-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowResume(false)}
                  className="absolute top-2 right-2 z-10"
                >
                  Close
                </Button>
                <img 
                  src={resumeUrl} 
                  alt="Jingcheng Su's Resume" 
                  className="w-full h-auto border rounded-lg shadow-sm"
                />
              </div>
            </div>
          )}
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              For a more detailed look at my professional background, please view or download my resume.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
