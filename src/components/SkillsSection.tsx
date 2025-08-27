import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["C++", "Java", "Python", "Kotlin", "Swift", "JavaScript", "TypeScript"],
    color: "primary"
  },
  {
    title: "Frameworks & Tools",
    skills: ["React", "Node.js", "MongoDB", "Firebase", "Docker", "Selenium", "TestNG"],
    color: "secondary"
  },
  {
    title: "Specializations",
    skills: ["AI/ML", "Blockchain", "IoT", "Cybersecurity", "DevOps", "Cloud Computing"],
    color: "accent"
  },
  {
    title: "Core Concepts",
    skills: ["Data Structures", "Algorithms", "System Design", "Database Design", "API Development"],
    color: "primary"
  }
];

export const SkillsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 left-32 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Skills Universe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the vast cosmos of technology with expertise across multiple domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="glass-card p-8 hover:neon-border transition-all duration-500 group relative overflow-hidden"
            >
              {/* Category Glow Effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${category.color}/5 rounded-full blur-3xl group-hover:bg-${category.color}/10 transition-all duration-500`} />
              
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-6 text-${category.color}`}>
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="group/skill"
                      style={{ 
                        animationDelay: `${categoryIndex * 200 + skillIndex * 100}ms` 
                      }}
                    >
                      <Badge 
                        variant="outline" 
                        className={`
                          w-full justify-center py-2 px-4 text-sm
                          glass-card hover:neon-border transition-all duration-300
                          group-hover/skill:scale-105 group-hover/skill:text-${category.color}
                          hover:shadow-lg cursor-pointer
                        `}
                      >
                        <span className="font-medium">{skill}</span>
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Effect Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute top-4 right-4 w-2 h-2 bg-${category.color} rounded-full animate-ping`} />
                <div className={`absolute bottom-4 left-4 w-1 h-1 bg-${category.color} rounded-full animate-ping`} style={{ animationDelay: '0.5s' }} />
                <div className={`absolute top-1/2 left-8 w-1.5 h-1.5 bg-${category.color} rounded-full animate-ping`} style={{ animationDelay: '1s' }} />
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Center Piece */}
        <div className="mt-20 flex justify-center">
          <Card className="glass-card p-12 hover:neon-border transition-all duration-500 group relative">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text">∞</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Always exploring new technologies and pushing the boundaries of what's possible
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};