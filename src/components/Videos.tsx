
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { FaBasketballBall, FaTableTennis } from "react-icons/fa";

const Videos = () => {
  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Watch Me in Action
          </h2>
          <div className="w-20 h-1 bg-mountain-blue mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            See my athletic side through these videos of me playing basketball and table tennis
          </p>
        </div>

        <Tabs defaultValue="basketball" className="max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-md mb-10">
            <TabsList className="grid grid-cols-2 bg-gray-100">
              <TabsTrigger 
                value="basketball" 
                className="text-lg py-3 data-[state=active]:bg-white flex items-center justify-center"
              >
                <FaBasketballBall className="mr-2 h-5 w-5" />
                Basketball
              </TabsTrigger>
              <TabsTrigger 
                value="table-tennis" 
                className="text-lg py-3 data-[state=active]:bg-white flex items-center justify-center"
              >
                <FaTableTennis className="mr-2 h-5 w-5" />
                Table Tennis
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="basketball">
            <Card>
              <CardHeader>
                <CardTitle>Basketball Skills</CardTitle>
                <CardDescription>Watch me playing basketball</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/RCBwdvMHqmU" 
                    title="Basketball" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="table-tennis">
            <Card>
              <CardHeader>
                <CardTitle>Table Tennis Skills</CardTitle>
                <CardDescription>Watch me playing table tennis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/gLNh2lKHfck" 
                    title="Table Tennis" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Videos;
