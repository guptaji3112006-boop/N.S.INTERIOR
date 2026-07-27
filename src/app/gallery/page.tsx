"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, PlayCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

const galleryImages = [
  "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1618221195710-dd6b14640f5f?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583847268964-b28ce8f52859?q=80&w=800&auto=format&fit=crop"
];

// Placeholder videos (using actual MP4s for demonstration or thumbnails with video URLs)
const galleryVideos = [
  {
    thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b14640f5f?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const closeLightbox = () => {
    setSelectedImg(null);
    setSelectedVideo(null);
  };

  return (
    <div className="pt-24 pb-20 w-full min-h-screen bg-background">
      <div className="container mx-auto px-4 text-center mb-8">
        <SectionHeading title="Design Gallery" subtitle="A collection of our finest interior design work." />
        
        {/* Tab Toggle */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("images")}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition-colors border",
              activeTab === "images" 
                ? "bg-primary text-white border-primary" 
                : "bg-white text-text-gray border-gray-200 hover:bg-gray-50"
            )}
          >
            Images
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={cn(
              "px-6 py-2 rounded-full font-medium transition-colors border",
              activeTab === "videos" 
                ? "bg-primary text-white border-primary" 
                : "bg-white text-text-gray border-gray-200 hover:bg-gray-50"
            )}
          >
            Videos
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* CSS Columns Masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {activeTab === "images" && galleryImages.map((src, idx) => (
              <motion.div
                key={`img-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid"
              >
                <div 
                  className="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedImg(src)}
                >
                  <Image
                    src={src}
                    alt={`Gallery Image ${idx + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}

            {activeTab === "videos" && galleryVideos.map((video, idx) => (
              <motion.div
                key={`vid-${idx}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid"
              >
                <div 
                  className="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
                  onClick={() => setSelectedVideo(video.videoUrl)}
                >
                  <Image
                    src={video.thumbnail}
                    alt={`Gallery Video ${idx + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {(selectedImg || selectedVideo) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-[110]"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImg && (
                <Image
                  src={selectedImg}
                  alt="Selected Image"
                  fill
                  className="object-contain"
                />
              )}
              {selectedVideo && (
                <video 
                  src={selectedVideo} 
                  controls 
                  autoPlay 
                  className="max-w-full max-h-full rounded-lg shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
