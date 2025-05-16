
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Code, Globe } from 'lucide-react';

const AboutSection = () => {
  const facts = [
    {
      icon: <Code className="h-8 w-8 text-publicnext-purple" />,
      title: "Expert Leadership",
      description: "Founded by experts with Fortune 500 experience."
    },
    {
      icon: <Globe className="h-8 w-8 text-publicnext-purple" />,
      title: "Proven Expertise",
      description: "Successful track record in large-scale web and app solutions."
    },
    {
      icon: <Cloud className="h-8 w-8 text-publicnext-purple" />,
      title: "Focused Solutions",
      description: "Specializing in hyper-local and enterprise solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Our Company</h2>
          <div className="h-1 w-20 bg-publicnext-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            PublicNext is a leading technology platform specializing in web and app development, cloud solutions, 
            and high-performance enterprise software. We focus on building scalable, secure, and data-driven 
            digital experiences tailored to clients' needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center bg-publicnext-grey rounded-full">
                  {fact.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{fact.title}</h3>
                <p className="text-gray-600">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
