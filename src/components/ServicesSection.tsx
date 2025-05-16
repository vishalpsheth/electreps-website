
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ServicesSection = () => {
  const serviceCategories = [
    {
      id: "development",
      name: "Development",
      services: [
        "Web Development: Next.js, GoLang, React, Drupal, WordPress, Codeigniter",
        "Mobile App Development: Android, IOS, Flutter",
        "Backend & Database Solutions: GoLang, Node.js, Python, MySQL, MongoDB, RDS, Maria DB"
      ]
    },
    {
      id: "cloud",
      name: "Cloud & Infrastructure",
      services: [
        "Cloud & DevOps: AWS, Azure, Google Cloud, Docker, Kubernetes",
        "Security & Compliance: AES-256, TLS 1.2+, Secure Authentication, Data Encryption",
        "Caching: Memcache, Redis, Elastic Search"
      ]
    },
    {
      id: "data",
      name: "Data & Analytics",
      services: [
        "Analytics & Reporting: Real-time dashboards, user tracking, and performance metrics",
        "AI/ML: Python, Jupiter Notebook",
        "Scripting: Python, Shell, PHP, GoLang"
      ]
    },
    {
      id: "integration",
      name: "Integration & Support",
      services: [
        "Integration: Payment Gateway, Analytical Tool, Gaming, Google Search Console, Translation, Firebase",
        "Authentication: OTP, Truecaller, Google, Facebook",
        "MLS: Support for regional languages at DB and UI level"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities & Services</h2>
          <div className="h-1 w-20 bg-publicnext-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of technology services designed to meet your business needs.
          </p>
        </div>

        <Tabs defaultValue="development" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            {serviceCategories.map(category => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-publicnext-purple data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {serviceCategories.map(category => (
            <TabsContent key={category.id} value={category.id} className="p-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-publicnext-blue">
                    {category.name} Services
                  </h3>
                  <ul className="space-y-4">
                    {category.services.map((service, index) => (
                      <li key={index} className="flex">
                        <div className="mr-3 mt-1 h-2 w-2 rounded-full bg-publicnext-purple shrink-0"></div>
                        <span className="text-gray-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesSection;
