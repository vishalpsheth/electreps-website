
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Manjunath Rao",
      role: "CEO & Co-Founder",
      image: "/assets/images/team/manjunath.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      linkedin: "https://www.linkedin.com/in/manjunath-rao-9ab95721/",
      experience: "Infosys, MetricStream",
      education: "A seasoned technology and product leader with 20 years of global experience across India, the U.S., and other international markets. Proven track record at leading firms like Infosys and MetricStream, with deep expertise in consulting, product strategy, and driving large-scale digital transformations. Holds a B.E. in Computer Science from Bangalore Institute of Technology"
    },
    {
      name: "Vishal Sheth",
      role: "CTO & Co-Founder",
      image: "/assets/images/team/vishal.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      linkedin: "https://www.linkedin.com/in/vpsheth/",
      experience: "GoCoop, Indecomm",
      education: "An accomplished technology architect and engineering leader with over 15 years of experience driving innovation at companies like GoCoop and Indecomm. Holds a Master's in Data Science and brings deep expertise in cloud infrastructure, video transcoding, big data (Hadoop), and scalable server architecture. Renowned for building robust, high-performance systems that power modern digital platforms"
    },
    {
      name: "Raghavendra K G",
      role: "COO & Co-Founder",
      image: "/assets/images/team/raghavendra.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      linkedin: "https://www.linkedin.com/in/raghavendra-gopal-rao-43360818/",
      experience: "Kshema Tech, Lotus Labs",
      education: "A strategic operations and business management leader with over 25 years of experience in senior roles across supply chain, project management, financial accounting, and corporate operations. With a strong foundation from organizations like Kshema Tech and Lotus Labs, and an MBA in International Business, he brings a proven ability to streamline complex processes and drive organizational efficiency at scale."
    },
    {
      name: "Prakash B T",
      role: "Solution Architect",
      image: "/assets/images/team/prakash.jpg",
      fallbackImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80",
      linkedin: "https://www.linkedin.com/in/prakashbt/",
      experience: "PMP, CSM Certified | Web Development Specialist",
      education: "A certified PMP and CSM professional, and a seasoned web development specialist with 20 years of experience leading cross-functional teams in project management, product development, and end-to-end web solutions. Known for delivering complex digital products with precision, efficiency, and a deep understanding of agile methodologies and modern tech stacks"
    }
  ];

  return (
    <section id="team" className="py-20 bg-publicnext-grey">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="h-1 w-20 bg-publicnext-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our leadership team of industry experts dedicated to delivering exceptional technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-lg overflow-hidden">
              <div className="aspect-[3/4] relative">
                <img 
                  src={`${import.meta.env.BASE_URL}${member.image}`}
                  alt={member.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // @ts-ignore - currentTarget is valid
                    e.currentTarget.onerror = null;
                    // @ts-ignore - currentTarget is valid
                    e.currentTarget.src = member.fallbackImage;
                  }}
                />
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute top-3 right-3 p-2 bg-white/90 rounded-full hover:bg-publicnext-purple hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
              <CardContent className="p-5">
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-publicnext-purple font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs mb-1">Experience: {member.experience}</p>
                <p className="text-gray-600 text-xs">{member.education}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
