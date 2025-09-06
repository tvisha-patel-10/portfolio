import { motion } from 'framer-motion';
import { Pointer } from 'lucide-react';
import { Badge } from "./ui/badge"; 

export function CaseStudyPreview({ title, category, impact, description, image, tags = [] }) {  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      style={{ 
        padding: "24px", 
        height: "100%",
        border: "1px solid var(--border)", 
        margin: "10px",
        cursor: "pointer", 
        borderRadius: "12px",
        backgroundColor: "var(--card)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        overflow: "hidden"
      }}
    >
      {/* Image placeholder */}
      <div style={{
        width: "100%",
        height: "200px",
        backgroundColor: "#f1f5f9",
        borderRadius: "8px",
        marginBottom: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
      }}>

      <div className="absolute top-2 left-4">
        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm>">
          {category}
        </Badge>
      </div>

      <img 
  src={image} 
  alt={title} 
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px"
  }}
/>
      </div> 
      
      {/* Content */}
      <div style={{ marginBottom: "16px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}>
          {title}
        </h3>
        <p style={{ color: "#64748b", marginBottom: "16px" }}>
          {description}
        </p>
      </div>
      
      {/* Impact and Tags */}
        <div style={{ 
          fontSize: "18px", 
          fontWeight: "700", 
          color: "var(--chart-1)" 
        }}>
          {impact}
        </div>
        <div className="flex flex-wrap gap-2">
  {tags.map((tag, index) => (
    <span 
      key={index} 
      className="mt-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-md border border-gray-700"
    >
      {tag}
    </span>
  ))}
</div>
    </motion.div>
  );
}