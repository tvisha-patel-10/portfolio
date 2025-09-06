import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export function ResumePage() {
  const experience = [
    {
      company: "TechFlow Inc.",
      position: "Senior Product Designer",
      period: "2022 - Present",
      description: "Lead design for B2B SaaS platform serving 500k+ users. Spearheaded design system implementation and cross-functional collaboration.",
      achievements: [
        "Increased user engagement by 85% through dashboard redesign",
        "Reduced support tickets by 45% with improved UX",
        "Led design system adoption across 12 product teams"
      ]
    },
    {
      company: "FinanceFirst",
      position: "Product Designer",
      period: "2020 - 2022",
      description: "Designed mobile banking experiences with focus on security and accessibility. Collaborated with fintech regulations team.",
      achievements: [
        "Boosted mobile app conversion rate by 340%",
        "Streamlined KYC process reducing completion time by 60%",
        "Achieved 94% user satisfaction score"
      ]
    },
    {
      company: "StartupStudio",
      position: "UX Designer",
      period: "2019 - 2020",
      description: "Worked with early-stage startups to define product strategy and create user-centered designs from 0 to 1.",
      achievements: [
        "Launched 8 successful products in various industries",
        "Conducted 200+ user interviews and usability tests",
        "Generated $2.3M in combined startup revenue"
      ]
    }
  ];

  const education = [
    {
      institution: "Stanford University",
      degree: "Master of Science in Human-Computer Interaction",
      period: "2017 - 2019",
      details: "Focus on cognitive psychology and design research methods"
    },
    {
      institution: "UC Berkeley",
      degree: "Bachelor of Arts in Cognitive Science",
      period: "2013 - 2017",
      details: "Minor in Computer Science, Magna Cum Laude"
    }
  ];

  const skills = {
    "Design Tools": ["Figma", "Sketch", "Adobe Creative Suite", "Principle", "Framer"],
    "Research Methods": ["User Interviews", "Usability Testing", "A/B Testing", "Analytics", "Surveys"],
    "Technical Skills": ["HTML/CSS", "JavaScript", "React", "Design Systems", "Prototyping"],
    "Soft Skills": ["Leadership", "Strategy", "Facilitation", "Storytelling", "Cross-functional Collaboration"]
  };

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
          <h1 className="text-5xl font-bold">Resume</h1>
          <p className="text-xl text-muted-foreground">
            5+ years of experience transforming complex problems into intuitive solutions
          </p>
          <Button size="lg" className="rounded-full">
            Download PDF Resume
          </Button>
        </motion.div>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <Card className="p-8 bg-gradient-to-r from-chart-1/10 to-chart-2/10">
            <h2 className="text-2xl font-bold mb-4">Professional Summary</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Strategic product designer with a proven track record of driving measurable business impact 
              through user-centered design. Expertise in end-to-end product design, from research and 
              strategy to implementation and optimization. Passionate about creating inclusive experiences 
              that solve real user problems while achieving business objectives.
            </p>
          </Card>
        </motion.section>

        {/* Experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={job.company} className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.position}</h3>
                      <p className="text-lg text-chart-1">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {job.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-chart-1 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Education */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={edu.institution} className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-chart-1">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.details}</p>
                  </div>
                  <Badge variant="outline">
                    {edu.period}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="p-6">
                <h3 className="font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}