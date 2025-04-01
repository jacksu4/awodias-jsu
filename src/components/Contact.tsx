
import { Mail, Linkedin, Phone } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-mountain-blue text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="mr-4 h-6 w-6" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:sujingcheng1105@gmail.com" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    sujingcheng1105@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="mr-4 h-6 w-6" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a 
                    href="tel:+17134569988" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    +1 713-456-9988
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Linkedin className="mr-4 h-6 w-6" />
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a 
                    href="https://www.linkedin.com/in/jingchengsu/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    linkedin.com/in/jingchengsu
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-xl font-heading font-semibold mb-4">
                Current Location
              </h3>
              <p className="text-white/80">
                San Jose, California<br />
                United States
              </p>
              
              <h3 className="text-xl font-heading font-semibold mt-8 mb-4">
                Moving Soon To
              </h3>
              <p className="text-white/80">
                Hong Kong
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                  placeholder="Your message"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-white text-mountain-dark hover:bg-white/90"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
