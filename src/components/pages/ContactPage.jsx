import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';

export function ContactPage() {
  const contactMethods = [
    {
      title: "Email",
      value: "hello@alexchen.design",
      icon: "📧",
      action: "mailto:hello@alexchen.design",
      description: "Best for project inquiries and collaborations"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/alexchen-design",
      icon: "💼",
      action: "https://linkedin.com/in/alexchen-design",
      description: "Let's connect professionally"
    },
    {
      title: "Twitter",
      value: "@alexchen_design",
      icon: "🐦",
      action: "https://twitter.com/alexchen_design",
      description: "Follow my design thoughts and process"
    },
    {
      title: "Dribbble",
      value: "dribbble.com/alexchen",
      icon: "🏀",
      action: "https://dribbble.com/alexchen",
      description: "See my latest design explorations"
    }
  ];

  const workTypes = [
    "Product Design",
    "UX Consulting",
    "Design System",
    "User Research",
    "Design Strategy",
    "Workshop Facilitation"
  ];

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-5xl lg:text-6xl font-bold">Let's Work Together</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your product vision into an exceptional user experience? 
            I'm here to help you create something extraordinary.
          </p>
        </motion.div>

        {/* Main CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-20"
        >
          <Card className="p-8 lg:p-12 text-center bg-gradient-to-br from-chart-1/10 to-chart-2/10">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Start Your Project</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Whether you need a complete product redesign, UX audit, or strategic design consultation, 
                I'm ready to help you achieve your goals.
              </p>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {workTypes.map((type) => (
                  <Badge key={type} variant="secondary" className="px-3 py-1">
                    {type}
                  </Badge>
                ))}
              </div>
              
              <div className="pt-4">
                <Button size="lg" className="text-lg px-8 py-3 rounded-full">
                  Schedule a Discovery Call
                </Button>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Contact Methods */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">
              Choose your preferred way to connect
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 hover:border-chart-1/30 transition-colors cursor-pointer group">
                  <a href={method.action} className="block space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{method.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-chart-1 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-sm text-chart-1">{method.value}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <Card className="p-8">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Send a Message</h2>
                <p className="text-muted-foreground">
                  Tell me about your project and I'll get back to you within 24 hours
                </p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input placeholder="Your company (optional)" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Type</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {workTypes.map((type) => (
                      <label key={type} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="rounded" />
                        {type}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Details</label>
                  <Textarea 
                    placeholder="Tell me about your project, timeline, and any specific challenges you're facing..."
                    rows={6}
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full rounded-full">
                  Send Message
                </Button>
              </form>
            </div>
          </Card>
        </motion.section>

        {/* Response Time & Availability */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <Card className="p-6">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-chart-1">&lt; 24hrs</div>
                <h3 className="font-semibold">Response Time</h3>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within one business day
                </p>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-chart-2">2-4 weeks</div>
                <h3 className="font-semibold">Project Start</h3>
                <p className="text-sm text-muted-foreground">
                  Current availability for new projects starting in early 2024
                </p>
              </div>
            </Card>
          </div>
        </motion.section>
      </div>
    </div>
  );
}