import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      title: "Empathy-Driven Design",
      description: "Every design decision starts with understanding real user needs, pain points, and motivations.",
      icon: "❤️"
    },
    {
      title: "Continuous Learning",
      description: "Staying curious about new technologies, design trends, and user behavior patterns.",
      icon: "🧠"
    },
    {
      title: "Collaborative Innovation",
      description: "The best solutions emerge from diverse perspectives and cross-functional collaboration.",
      icon: "🤝"
    },
    {
      title: "Accessible Excellence",
      description: "Design should be inclusive and accessible to everyone, regardless of their abilities.",
      icon: "♿"
    }
  ];

  const interests = [
    {
      title: "Photography",
      description: "Capturing moments and exploring composition principles that influence my design work.",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop"
    },
    {
      title: "Rock Climbing",
      description: "Problem-solving under pressure and finding creative routes to reach the summit.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
    },
    {
      title: "Cooking",
      description: "Experimenting with flavors and presentations - design thinking applied to cuisine.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    }
  ];

  const funFacts = [
    "I've designed products in 12 different languages",
    "Coffee enthusiast with a collection of 20+ brewing devices",
    "Completed a digital detox trek in the Himalayas",
    "Built my first website at age 12 using table layouts",
    "Speak 4 languages fluently (English, Mandarin, Spanish, French)",
    "Volunteer design mentor for underrepresented students"
  ];

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond pixels and prototypes, I'm a curious human who believes that great design 
            comes from understanding people, embracing diverse perspectives, and never stopping to learn.
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Journey</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My path to design wasn't traditional. I started as a cognitive science student, 
                  fascinated by how the human mind processes information and makes decisions. 
                  This foundation in psychology shapes every design choice I make today.
                </p>
                <p>
                  After discovering the intersection of technology and human behavior, I dove into 
                  UX design through internships at startups. There, I learned that beautiful 
                  interfaces mean nothing without solving real problems.
                </p>
                <p>
                  Today, I combine analytical thinking with creative problem-solving to create 
                  products that not only look great but genuinely improve people's lives. 
                  Every project is an opportunity to make technology more human.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="Alex Chen working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-chart-1 text-white p-4 rounded-xl">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years Designing</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Values & Pillars */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Values & Principles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core beliefs that guide my approach to design and collaboration
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full">
                  <div className="space-y-4">
                    <div className="text-3xl">{value.icon}</div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Interests & Hobbies */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Beyond Design</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My hobbies and interests that inspire my creative process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <ImageWithFallback
                      src={interest.image}
                      alt={interest.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">{interest.title}</h3>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Fun Facts */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fun Facts</h2>
            <p className="text-muted-foreground">Random things about me that might surprise you</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={fact}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.3 }}
              >
                <Card className="p-4 text-center hover:scale-105 transition-transform">
                  <p className="text-sm">{fact}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Card className="p-8 text-center bg-gradient-to-r from-chart-1/10 to-chart-2/10">
            <h2 className="text-2xl font-bold mb-4">Let's Create Something Amazing</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate with passionate teams and tackle complex design challenges. 
              Whether you have a project in mind or just want to chat about design, I'd love to hear from you.
            </p>
            <div className="flex gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Badge className="px-6 py-2 text-base bg-chart-1 hover:bg-chart-1/80">
                  Get In Touch
                </Badge>
              </motion.a>
            </div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}