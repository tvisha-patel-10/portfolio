import { motion } from "motion/react";
import { Link } from 'react-router-dom';
import { MetricsGrid } from "../MetricsGrid";
import { CaseStudyPreview } from '../CaseStudyPreview';
import { Button } from "../ui/button";
import { Badge } from "../ui/badge"; 
import { ImageWithFallback } from "../figma/ImageWithFallback"; 
import profile_ill from '../../assets/images/profile_ill.webp';
import bh_cover from '../../assets/images/BH_cover.webp';
import echokids_cover from '../../assets/images/echokids_cover.webp';
import strby_cover from '../../assets/images/strby_cover.webp';
import { VscGraph } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";

export function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit">
                Product Designer
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              I design products that transform
                <span className="text-chart-1"> data </span>
                into 
                <span className="text-chart-1"> measurable impact</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              With a background in psychology, I combine human behavior insights with product strategy to create scalable and user-centered designs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full cursor-pointer" onClick={() => {
    const element = document.getElementById("about");
    element.scrollIntoView({ behavior: "smooth" });
  }}
>
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="rounded-full cursor-pointer">
                Download Resume
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 sm:gap-8 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-chart-1">$10M+</div>
                <div className="text-sm text-muted-foreground">Revenue Influenced</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-chart-2">5M+</div>
                <div className="text-sm text-muted-foreground">Users Reached</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-chart-4">3+</div>
                <div className="text-sm text-muted-foreground">Design Systems Built</div>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp} transition={{ delay: 0.2, duration: 0.6 }} className="relative">
            <div className="aspect-square p-6 sm:p-8 items-center content-center">
                <ImageWithFallback
                  src={profile_ill}
                  alt="Tvisha Patel"
                  className="w-fit h-fit rounded-xl object-cover"
                />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="px-4 sm:px-6 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">Design Philosophy</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-12">
              {[
                { icon: <VscGraph/>, title: "Data-Driven", description: "Applying research, analytics, and insights to validate design decisions and drive effective outcomes." },
                { icon: <FiUser />, title: "User-Centered", description: "Balancing user needs with business goals to design solutions that are both intuitive and impactful." },
                { icon: <VscGraph/>, title: "Systematic", description: "Building scalable, accessible, and reusable design systems that empower consistency and efficiency." },
              ].map((principle, index) => (
                <motion.div
                  key={principle.title}
                  {...fadeInUp}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="text-center space-y-3"
                >
                  <div className="text-chart-1 text-3xl flex justify-center">{principle.icon}</div>
                  <h3 className="text-lg font-semibold">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Highlights */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Impact & Results</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Here's how my design work has transformed
              businesses and user experiences
            </p>
          </motion.div>
          <MetricsGrid />
        </div>
      </section>

      {/* Featured Case Studies */}
      <section id="about" className="px-4 sm:px-6 py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Work</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase strategic
              thinking and creative execution
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Link to="/strawberry">
            <CaseStudyPreview
              title="Landing page revamp @Strawberry.me"
              category="Conversion"
              impact="+20% conversion rate"
              description="Redesigned the homepage for a coaching platform, increasing credability and trust with the user."
              image={strby_cover}
              tags={["UX research", "Product thinking", "Data Analysis"]}
            />
            </Link>
            <Link to="/echoKids">
            <CaseStudyPreview
              title="Mentor dashboard redesign @EchoKids"
              category="Retention"
              impact="+200% increased retention"
              description="Revamped the mentor dashboard to streamline the user flow and reduce cognitive load."
              image={echokids_cover}
              tags={["Design system", "UX research", "Information architecture"]}
            />
            </Link>
            <Link to="/betterHelp">
            <CaseStudyPreview
              title="Video session test redesign @BetterHelp"
              category="User Flow"
              impact="+33% more efficient user flow"
              description="Re-structured the video session test feature to decrease user friction and frustration."
              image={bh_cover}
              tags={["User flow", "Competitive analysis", "User-centric"]}
            />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}