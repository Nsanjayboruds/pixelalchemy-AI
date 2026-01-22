"use client";
import { Crop, Expand, Scissors, Type, Zap} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const features = [
  {
    icon: Scissors,
    title: "AI Background Removal",
    description:
      "1-click clean photos with precision AI. Remove any background instantly and get professional results.",
    gradient: "from-primary to-primary-glow",
    delay: 0.1,
  },
  {
    icon: Expand,
    title: "AI Generative Fill",
    description:
      "Expand your canvas and auto-fill edges seamlessly. Create perfect aspect ratios effortlessly.",
    gradient: "from-secondary to-secondary-glow",
    delay: 0.2,
  },
  {
    icon: Zap,
    title: "AI Upscale & Enhance",
    description:
      "Boost resolution up to 4x while fixing details. Transform low-res into stunning high-quality images.",
    gradient: "from-primary to-secondary",
    delay: 0.3,
  },
  {
    icon: Crop,
    title: "Smart Crop & Face Focus",
    description:
      "Perfect thumbnails automatically. AI detects faces and important content for optimal cropping.",
    gradient: "from-secondary to-primary",
    delay: 0.4,
  },
  {
    icon: Type,
    title: "Watermark & Text Overlay",
    description:
      "Brand your content professionally. Add custom watermarks and text with perfect positioning.",
    gradient: "from-primary-glow to-secondary-glow",
    delay: 0.5,
  },
  {
    icon: Type,
    title: "Advanced Editing",
    description:
      "Adjust brightness, contrast, and saturation to fine-tune your images.",
    gradient: "from-primary to-secondary",
    delay: 0.6,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Magical </span>
            <span className="bg-gradient-primary bg-clip-text! text-transparent">
              Features
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your photos with cutting-edge AI technology. Each feature
            is designed to give you professional results in seconds, not hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {features?.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index + 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  const { icon: Icon, title, description, gradient, delay } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group"
    >
      <div className="h-full glass rounded-2xl p-8 border border-card-border hover:border-primary/30 transition-all duration-300 shadow-glow-subtle hover:shadow-glow-primary">
        <div className="relative mb-6">
          <div
            className={`w-16 h-16 rounded-2xl bg-linear-to-br ${gradient} p-4 group-hover:animate-glow-pulse`}
          >
            <Icon className="w-full h-full text-background" />
          </div>
          <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-linear-to-br from-primary/20 to-secondary/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="mt-6 pt-6 border-t border-card-border">
          <div className="flex items-center space-x-2 text-sm text-primary">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="font-medium">Pixora AI Powered</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const AdvancedEditingFeature = () => {
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);

  const filterStyle: React.CSSProperties = {
    filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
  };

  return (
    <div className="glass rounded-2xl p-6 border border-card-border mt-8">
      <h2 className="text-xl font-semibold mb-4 text-primary">Advanced Editing</h2>

      <div className="bg-muted/40 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center">
        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Preview"
            className="w-full h-full object-cover rounded-lg shadow-glow-subtle"
            style={filterStyle}
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <SliderControl
            label="Brightness"
            value={brightness}
            min={50}
            max={200}
            onChange={setBrightness}
          />
          <SliderControl
            label="Contrast"
            value={contrast}
            min={50}
            max={200}
            onChange={setContrast}
          />
          <SliderControl
            label="Saturation"
            value={saturation}
            min={0}
            max={300}
            onChange={setSaturation}
          />
        </div>
      </div>
    </div>
  );
};

const SliderControl = ({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (val: number) => void;
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm text-foreground">
        <span>{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-primary"
      />
    </div>
  );
};

export default AdvancedEditingFeature;
