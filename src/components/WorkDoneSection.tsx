
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Smartphone, Laptop, Code, FileCode, Database, FileText, Film } from 'lucide-react';

const WorkDoneSection = () => {
  const [activeTab, setActiveTab] = useState('mobile');

  const projects = {
    mobile: [
      {
        title: "PublicNext – Android App for the Masses",
        description: "We built a native Android app in Java for PublicNext, tightly integrated with the Drupal CMS and backend APIs. Designed for scale and performance, the app delivers multimedia-rich content with low latency.",
        icon: <Smartphone className="h-10 w-10 text-publicnext-purple" />,
        tech: "Java"
      },
      {
        title: "PublicNext – iOS App for Hyperlocal News",
        description: "We delivered a feature-rich iOS app for PublicNext using Flutter, integrated with the Drupal CMS and optimized for fast content delivery, media consumption, and SEO through Firebase app indexing.",
        icon: <Smartphone className="h-10 w-10 text-publicnext-purple" />,
        tech: "Flutter"
      }
    ],
    web: [
      {
        title: "PublicNext – Scalable Hyperlocal News Platform",
        description: "ElectReps Pvt Ltd developed a powerful, multilingual website for PublicNext, Karnataka's leading hyperlocal news platform. The system is designed to handle millions of user traffic, media-rich content, and district-wise personalization.",
        icon: <Laptop className="h-10 w-10 text-publicnext-purple" />,
        tech: "Web"
      },
      {
        title: "Gia Life Sciences – Medical Device Website",
        description: "Gia Life Sciences is a pioneering medical device manufacturer with a strong focus on advanced healthcare technology. PublicNext developed their corporate website to reflect their innovation, industry leadership, and product portfolio.",
        icon: <Laptop className="h-10 w-10 text-publicnext-purple" />,
        tech: "WordPress"
      }
    ],
    enterprise: [
      {
        title: "Expense Tracking System for Yastel Networks",
        description: "Yastel Networks operates multiple field sites for underground cable laying. We built a system to track operational expenses, replacing manual logbooks with a digital solution that provides transparency and real-time tracking of advances, expenses and budgets.",
        icon: <FileText className="h-10 w-10 text-publicnext-purple" />,
        tech: "Enterprise Software"
      },
      {
        title: "Location-Based Employee Attendance System",
        description: "For Yastel Networks, we developed a geolocation-based attendance system with selfie verification that ensures employees are physically present at assigned field sites, eliminating manual reporting and false attendance issues.",
        icon: <Database className="h-10 w-10 text-publicnext-purple" />,
        tech: "Enterprise Software"
      },
      {
        title: "Video Transcoding – Scalable Media Delivery",
        description: "ElectReps Pvt Ltd has built a robust video transcoding infrastructure to support high-performance media platforms like PublicNext and other client projects. Our system ensures seamless video playback, optimized storage, and cost-effective delivery across devices and networks.",
        icon: <Film className="h-10 w-10 text-publicnext-purple" />,
        tech: "Cloud Infrastructure"
      }
    ]
  };

  return (
    <section id="work" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-publicnext-darkblue mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful projects delivering innovative solutions across mobile, web, and enterprise platforms.
          </p>
        </div>

        <Tabs defaultValue="mobile" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="mobile" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                <span className="hidden sm:inline">Mobile Apps</span>
              </TabsTrigger>
              <TabsTrigger value="web" className="flex items-center gap-2">
                <Laptop className="h-4 w-4" />
                <span className="hidden sm:inline">Websites</span>
              </TabsTrigger>
              <TabsTrigger value="enterprise" className="flex items-center gap-2">
                <Database className="h-4 w-4" />
                <span className="hidden sm:inline">Enterprise</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {Object.keys(projects).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects[category as keyof typeof projects].map((project, index) => (
                  <Card key={index} className="overflow-hidden h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="bg-gradient-to-r from-publicnext-blue to-publicnext-purple p-6">
                      <div className="flex items-center justify-between">
                        {project.icon}
                        <span className="bg-white text-publicnext-purple text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {project.tech}
                        </span>
                      </div>
                      <CardTitle className="text-white mt-4">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardDescription className="text-gray-700 text-base">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default WorkDoneSection;
