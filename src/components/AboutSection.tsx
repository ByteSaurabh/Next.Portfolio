import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Shield, Cloud } from "lucide-react";

const techAreas = [
  { icon: Brain, name: "Full Stack", description: "React, TypeScript, Tailwind, Next.js" },
  { icon: Cpu, name: "IoT, ML & Blockchain", description: "Smart Contracts, Distributed Systems, IoT Solutions, Machine Learning (Python, TensorFlow, Scikit-learn)" },
  { icon: Shield, name: "Cybersecurity", description: "Digital Forensics, Security Analysis, Risk Management" },
  { icon: Cloud, name: "DevOps & Cloud", description: "CI/CD, Docker, Cloud Architecture, Automation" }
];

const journey = [
  { year: "2024", title: "DevOps Internship", description: "XpressBites - Automated deployment pipelines" },
  { year: "2023", title: "Research Publication", description: "IEEE - Blockchain in Supply Chain Management" },
  { year: "2022", title: "Civic Innovation", description: "Built Promise Pulse for political transparency" },
  { year: "2021", title: "AI Journey Begins", description: "Started exploring machine learning and data science" }
];

export const AboutSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-6 gradient-text">
          About Me
        </h2>
        <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
          A passionate technologist exploring the intersection of AI, blockchain, and innovative solutions. 
          Dedicated to creating technology that makes a positive impact on society.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Story Card */}
        <Card className="glass-card p-8 hover:neon-border transition-all duration-500 group">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full blur-sm animate-pulse-glow" />
            <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From exploring the depths of artificial intelligence to diving into blockchain technology, 
              my journey has been driven by curiosity and the desire to solve real-world problems. 
              I specialize in creating innovative solutions that bridge the gap between cutting-edge 
              technology and practical applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="neon-border">Research</Badge>
              <Badge variant="outline" className="neon-border">Innovation</Badge>
              <Badge variant="outline" className="neon-border">Problem Solving</Badge>
            </div>
          </div>
        </Card>

        {/* Tech Areas */}
        <div className="space-y-4">
          {techAreas.map((area, index) => (
            <Card 
              key={area.name} 
              className="glass-card p-6 hover:neon-border transition-all duration-500 group hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-2">{area.name}</h4>
                  <p className="text-muted-foreground text-sm">{area.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto mt-20">
        <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Timeline</h3>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />
          
          {journey.map((item, index) => (
            <div 
              key={item.year} 
              className={`relative mb-12 ${index % 2 === 0 ? 'pr-1/2 text-right' : 'pl-1/2 text-left'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full neon-glow animate-pulse-glow" />
              
              <Card className={`glass-card p-6 hover:neon-border transition-all duration-500 ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};