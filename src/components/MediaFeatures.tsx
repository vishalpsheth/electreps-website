import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MediaFeatures = () => {
  const baseUrl = import.meta.env.BASE_URL;

  const mediaOutlets = [
    {
      name: "Money Control",
      logo: `${baseUrl}assets/images/money-control-logo.png`,
      fallback: "https://via.placeholder.com/150x60?text=YourStory",
      url: "https://www.moneycontrol.com/news/business/startup/google-and-meity-startup-hub-announce-2023-cohort-of-100-indian-startups-10326791.html#google_vignette"
    },
    {
      name: "Business Standard",
      logo: `${baseUrl}assets/images/business-standard-logo.png`,
      fallback: "https://via.placeholder.com/150x60?text=Business+Standard",
      url: "https://www.business-standard.com/content/press-releases-ani/publicnext-has-been-selected-as-a-recipient-of-the-google-news-initiative-gni-innovation-challenge-asia-pacific-along-with-funding-from-google-123010400547_1.html"
    },
    {
      name: "ANI",
      logo: `${baseUrl}assets/images/ani-logo.png`,
      fallback: "https://via.placeholder.com/150x60?text=ANI",
      url: "https://www.aninews.in/news/business/business/publicnext-has-been-selected-as-a-recipient-of-the-google-news-initiative-gni-innovation-challenge-asia-pacific-along-with-funding-from-google20230104131434/"
    },
    {
      name: "The Times of India",
      logo: `${baseUrl}assets/images/times-of-india-logo.png`,
      fallback: "https://via.placeholder.com/150x60?text=Times+of+India",
      url: "https://timesofindia.indiatimes.com/gadgets-news/appscale-academys-class-of-2023-meity-startup-hub-and-google-to-support-these-100-indian-startups/articleshow/99082059.cms"
    }
  ];

  return (
    <section id="featured" className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Featured In</h2>
          <div className="h-1 w-20 bg-publicnext-purple mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mediaOutlets.map((media, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex items-center justify-center p-4 h-24">
                <a
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full flex items-center justify-center"
                >
                  <img
                    src={media.logo}
                    alt={`${media.name} Logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.onerror = null;
                      target.src = media.fallback;
                    }}
                  />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaFeatures;

