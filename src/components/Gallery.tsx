
import { useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState<number | null>(null);
  
  const images = [
    {
      src: "/lovable-uploads/9552f5d7-825b-44c9-b58c-ac49ffc6dacd.png",
      alt: "Mount Rainier",
      caption: "Hiking in Mount Rainier"
    },
    {
      src: "/lovable-uploads/a589ec88-957a-40d4-a51a-c5563d048010.png", 
      alt: "MacleaMacLehose Trail",
      caption: "Hiking in Hong Kong"
    },
    {
      src: "/lovable-uploads/10d3c6fe-3b9f-40fd-8f29-ef9121bceb59.png",
      alt: "Snowboarding",
      caption: "Winter adventures"
    },
    {
      src: "/lovable-uploads/5c5f41fa-7689-4015-9679-b4caba5b9047.png",
      alt: "Autumn forest path",
      caption: "Exploring autumn nature trails"
    },
    {
      src: "/lovable-uploads/b32b58b1-af99-4dd2-9b70-ed6c0b266e3a.png",
      alt: "London",
      caption: "Travel to London"
    },
    {
      src: "/lovable-uploads/2403784e-c75b-4ac4-8454-06bda4caeaf0.png",
      alt: "NVIDIA GTC Conference",
      caption: "Attending NVIDIA GTC Conference"
    },
    {
      src: "/lovable-uploads/9d2f86b3-8449-4d58-9bbb-4ad0eb906c5e.png",
      alt: "Google",
      caption: "Google events with college friend"
    },
    {
      src: "/lovable-uploads/8d93f4e6-5de5-4edf-98b3-0d4fa9776a26.png",
      alt: "Basketball",
      caption: "Balling with teammates"
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
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 text-white hover:text-gray-300 z-10"
              aria-label="Previous image"
            >
              <ArrowLeft size={32} />
            </button>
            
            <img 
              src={images[currentImage].src} 
              alt={images[currentImage].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            
            <button 
              onClick={nextImage}
              className="absolute right-4 text-white hover:text-gray-300 z-10"
              aria-label="Next image"
            >
              <ArrowRight size={32} />
            </button>
            
            <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-lg">
              {images[currentImage].caption}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
