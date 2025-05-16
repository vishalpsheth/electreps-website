import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MediaFeatures = () => {
const baseUrl = import.meta.env.BASE_URL;
 
const mediaOutlets = [
    {
      name: "YourStory",
      logo: `${baseUrl}assets/images/yourstory-logo.png`,
      fallback: "https://via.placeholder.com/150x60?text=YourStory"
    },
    {
      name: "Business Standard",
      logo: `${baseUrl}assets/images/business-standard-logo.png`,
      fallback: "https://via.placeholder.com/150x60?text=Business+Standard"
    },
    {
      name: "ANI",
      logo: `${baseUrl}assets/images/ani-logo.png`,
      fallback: "https://via.placeholder.com/150x60?text=ANI"
    },
    {
      name: "The Times of India",
      logo: `${baseUrl}assets/images/times-of-india-logo.png`,
      fallback: "https://via.placeholder.com/150x60?text=Times+of+India"
    }
  ];

  return (
    <section id="featured" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Featured In</h2>
          <div className="h-1 w-20 bg-publicnext-purple mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mediaOutlets.map((media, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex items-center justify-center p-4 h-24">
                <img 
                  src={media.logo} 
                  alt={`${media.name} Logo`} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    // @ts-ignore - currentTarget is valid
                    e.currentTarget.onerror = null;
                    // @ts-ignore - currentTarget is valid
                    e.currentTarget.src = media.fallback;
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaFeatures;
