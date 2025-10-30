
import { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  
  const images = [
    {
      src: "/lovable-uploads/2403784e-c75b-4ac4-8454-06bda4caeaf0.png",
      alt: "NVIDIA GTC Conference",
      caption: "Attending NVIDIA GTC Conference"
    },
    {
      src: "/lovable-uploads/6bb35d1c-a030-4ff6-8413-1e3d0aca21de.png",
      alt: "Snowboarding",
      caption: "Snowboarding in Palisades, Tahoe"
    },
    {
      src: "/lovable-uploads/5c5f41fa-7689-4015-9679-b4caba5b9047.png",
      alt: "Autumn forest path",
      caption: "Exploring autumn in North Michigan"
    },
    {
      src: "/lovable-uploads/d28c42fc-3696-4758-8e4a-fd9eac50dfa0.png",
      alt: "Emirates Stadium",
      caption: "Visiting Emirates Stadium, London"
    },
    {
      src: "/lovable-uploads/a589ec88-957a-40d4-a51a-c5563d048010.png", 
      alt: "MacLehose Trail",
      caption: "Hiking in MacLehose Trail, Hong Kong"
    },
    {
      src: "/lovable-uploads/9d2f86b3-8449-4d58-9bbb-4ad0eb906c5e.png",
      alt: "Google",
      caption: "Attending Google Cloud event"
    },
    {
      src: "/lovable-uploads/8d93f4e6-5de5-4edf-98b3-0d4fa9776a26.png",
      alt: "Basketball",
      caption: "Balling with teammates"
    },
    {
      src: "/lovable-uploads/8829cfcf-957c-4455-ba10-60e76e08331d.png",
      alt: "BILL Team",
      caption: "Celebrating wins with the team at BILL"
    },
    {
      src: "/lovable-uploads/girlfriend-okinawa-night.jpeg",
      alt: "Okinawa Night View",
      caption: "Beautiful night view in Okinawa with Zixin"
    },
    {
      src: "/lovable-uploads/girlfriend-okinawa-sunset.jpeg",
      alt: "Okinawa Sunset",
      caption: "Sunset moments in Okinawa"
    },
    {
      src: "/lovable-uploads/girlfriend-okinawa-beach.jpeg",
      alt: "Okinawa Beach",
      caption: "Beach day in Okinawa"
    },
    {
      src: "/lovable-uploads/girlfriend-okinawa-mountain.jpeg",
      alt: "Okinawa Mountain Views",
      caption: "Mountain adventure in Okinawa"
    },
    {
      src: "/lovable-uploads/girlfriend-kyoto-temple.jpeg",
      alt: "Kyoto Temple",
      caption: "Exploring temples in Kyoto"
    },
    {
      src: "/lovable-uploads/girlfriend-kyoto-night.jpeg",
      alt: "Kyoto Night",
      caption: "Evening stroll in Kyoto"
    },
    {
      src: "/lovable-uploads/girlfriend-japan-cycling.jpeg",
      alt: "Japan Cycling",
      caption: "Cycling adventure in Japan"
    },
    {
      src: "/lovable-uploads/girlfriend-kyoto-shrine.jpeg",
      alt: "Kyoto Shrine",
      caption: "山頂 (Mountaintop) shrine visit in Kyoto"
    },
    {
      src: "/lovable-uploads/girlfriend-japan-restaurant.jpeg",
      alt: "Japanese Cuisine",
      caption: "Enjoying delicious Japanese food"
    },
    {
      src: "/lovable-uploads/girlfriend-kyoto-bamboo.jpeg",
      alt: "Kyoto Bamboo Forest",
      caption: "Bamboo forest adventure in Kyoto"
    },
  ];

  const openModal = (index: number) => {
    setCurrentImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (currentImage === null) return;
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    if (currentImage === null) return;
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Photo Gallery
          </h2>
          <div className="w-20 h-1 bg-mountain-blue mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Glimpses of my adventures, travels, and activities that shape who I am beyond my professional life
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative h-64 overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 text-lg font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {currentImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            
            <div className="relative w-full max-w-4xl flex justify-center items-center">
              <button 
                onClick={prevImage}
                className="absolute left-0 text-white hover:text-gray-300 z-10"
                aria-label="Previous image"
              >
                <ArrowLeft size={32} />
              </button>
              
              <img 
                src={images[currentImage].src} 
                alt={images[currentImage].alt}
                className="max-h-[80vh] max-w-[90vw] object-contain"
              />
              
              <button 
                onClick={nextImage}
                className="absolute right-0 text-white hover:text-gray-300 z-10"
                aria-label="Next image"
              >
                <ArrowRight size={32} />
              </button>
            </div>
            
            <div className="w-full text-center mt-4">
              <p className="text-white text-lg font-medium">
                {images[currentImage].caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
