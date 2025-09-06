import { motion } from 'motion/react';
import { CaseStudyPreview } from '../CaseStudyPreview';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

export function PortfolioPage() {
  const caseStudies = [
    {
      title: "FinTech Mobile Banking App",
      category: "Mobile Design",
      impact: "+340% conversion rate",
      description: "Complete redesign of mobile banking onboarding flow with focus on security and ease of use. Implemented biometric authentication and simplified KYC process.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      tags: ["Mobile", "FinTech", "UX Research", "Conversion"]
    },
    {
      title: "E-commerce Platform Redesign",
      category: "Web Design",
      impact: "-65% task completion time",
      description: "Streamlined checkout process and navigation for major e-commerce platform. Reduced cart abandonment and improved user satisfaction scores.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tags: ["E-commerce", "Web", "Checkout", "Navigation"]
    },
    {
      title: "Healthcare Patient Portal",
      category: "Web Application",
      impact: "+85% user adoption",
      description: "Designed patient-centered portal for healthcare provider. Simplified appointment booking and medical record access with accessibility focus.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tags: ["Healthcare", "Accessibility", "Web App", "Portal"]
    },
    {
      title: "SaaS Dashboard Analytics",
      category: "Data Visualization",
      impact: "+120% user engagement",
      description: "Complex data visualization dashboard for B2B SaaS. Transformed overwhelming data into actionable insights with progressive disclosure.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["SaaS", "Dashboard", "Analytics", "B2B"]
    },
    {
      title: "Food Delivery Mobile App",
      category: "Mobile Design",
      impact: "+220% order frequency",
      description: "End-to-end mobile app design for food delivery service. Optimized for speed and convenience with smart recommendation engine.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      tags: ["Mobile", "Food Tech", "Recommendations", "Speed"]
    },
    {
      title: "EdTech Learning Platform",
      category: "Educational Design",
      impact: "+95% course completion",
      description: "Interactive learning platform design with gamification elements. Improved student engagement and knowledge retention significantly.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      tags: ["EdTech", "Gamification", "Learning", "Engagement"]
    }
  ];

  const categories = ["All", "Mobile Design", "Web Design", "Data Visualization", "Educational Design"];

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl font-bold">Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects where design meets strategy to create meaningful impact. 
            Each case study represents a unique challenge solved through user-centered design.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <CaseStudyPreview {...study} />
            </motion.div>
          ))}
        </div>

        {/* Process Overview */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-24 py-20 bg-muted/30 rounded-2xl"
        >
          <div className="px-8 text-center space-y-12">
            <h2 className="text-4xl font-bold">My Design Process</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Research & Discovery",
                  description: "Understanding users, business goals, and technical constraints through research and stakeholder interviews."
                },
                {
                  step: "02",
                  title: "Ideation & Strategy",
                  description: "Collaborative workshops to define problems, explore solutions, and align on design direction."
                },
                {
                  step: "03",
                  title: "Design & Prototype",
                  description: "Creating high-fidelity designs and interactive prototypes to validate concepts with users."
                },
                {
                  step: "04",
                  title: "Test & Iterate",
                  description: "Continuous testing and refinement based on user feedback and performance metrics."
                }
              ].map((phase, index) => (
                <div key={phase.step} className="space-y-4">
                  <div className="text-3xl font-bold text-chart-1">{phase.step}</div>
                  <h3 className="text-lg font-semibold">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}