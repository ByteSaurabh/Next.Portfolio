import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  {
    title: "The Full Stack",
    organization: "Meta",
    year: "2024",
    category: "Development",
    color: "primary",
    link: "https://coursera.org/share/62508dfd8ea35bf1895d23d89abfa759"
  },
  {
    title: "Databases and SQL for Data Science with Python",
    organization: "IBM",
    year: "2024",
    category: "Data Science",
    color: "secondary",
    link: "https://www.coursera.org/account/accomplishments/verify/2KEK4JZGC9EV"
  },
  {
    title: "SQL: A Practical Introduction for Querying",
    organization: "IBM",
    year: "2023",
    category: "Database",
    color: "accent",
    link: "https://www.coursera.org/account/accomplishments/verify/2ME6MXAH78UG"
  },
  {
    title: "Play It Safe: Manage Security Risks",
    organization: "Google",
    year: "2024",
    category: "Security",
    color: "primary",
    link: "https://www.coursera.org/account/accomplishments/verify/SEG9JFVJVZRD"
  },
  {
    title: "Introduction to Databases",
    organization: "Meta",
    year: "2023",
    category: "Database",
    color: "secondary",
    link: "https://www.coursera.org/account/accomplishments/verify/3FMT9M5AMVK4"
  },
  {
    title: "IT Security: Defense Against the Digital Dark Arts",
    organization: "Google",
    year: "2024",
    category: "Security",
    color: "accent",
    link: "https://www.coursera.org/account/accomplishments/verify/Z8MM76Y7GS83"
  },
  {
    title: "Python for Data Science, AI and Development",
    organization: "IBM",
    year: "2023",
    category: "AI/ML",
    color: "primary",
    link: "https://www.coursera.org/account/accomplishments/verify/67AC3LPTCAQE"
  },
  {
    title: "Foundations of Cybersecurity",
    organization: "Google",
    year: "2024",
    category: "Security",
    color: "secondary",
    link: "https://www.coursera.org/account/accomplishments/verify/MZSNMGKPLFXM"
  },
  {
    title: "Prompt Engineering for ChatGPT",
    organization: "Google",
    year: "2024",
    category: "AI/ML",
    color: "accent",
    link: "https://www.coursera.org/account/accomplishments/verify/Y4UW5TJG6NPP"
  }
];

export const CertificationsSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background Effects */}
      <div className="absolute top-20 left-32 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 right-20 w-56 h-56 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-4s' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Digital Credentials
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional certifications from industry leaders, validating expertise across multiple technology domains
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={`${cert.title}-${cert.organization}`}
              className="glass-card p-6 hover:neon-border transition-all duration-500 group relative overflow-hidden hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Certification Glow */}
              <div className={`absolute -top-8 -right-8 w-16 h-16 bg-${cert.color}/10 rounded-full blur-xl group-hover:bg-${cert.color}/20 transition-all duration-500`} />
              

              <div className="relative z-10">
                {/* Category & Year */}
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-xs text-muted-foreground">
                    {cert.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{cert.year}</span>
                </div>

                {/* Certification Title */}
                <h3 className={`font-bold text-lg mb-2 text-${cert.color} group-hover:gradient-text transition-all duration-300 leading-tight`}>
                  {cert.title}
                </h3>

                {/* Organization */}
                <p className="text-muted-foreground text-sm mb-6 font-medium">
                  {cert.organization}
                </p>

                {/* View Certificate Button */}
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="w-full block">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="w-full glass-card hover:neon-border transition-all duration-300 group/btn"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      View Certificate
                    </Button>
                  </a>
                ) : (
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="w-full glass-card hover:neon-border transition-all duration-300 group/btn"
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    View Certificate
                  </Button>
                )}
              </div>

              {/* 3D Flip Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-${cert.color} rounded-full animate-ping`} />
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <Card className="glass-card p-8 text-center hover:neon-border transition-all duration-500 group">
            <div className="text-4xl font-bold gradient-text mb-2">9+</div>
            <p className="text-muted-foreground">Professional Certifications</p>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          </Card>
          
          <Card className="glass-card p-8 text-center hover:neon-border transition-all duration-500 group">
            <div className="text-4xl font-bold gradient-text mb-2">4</div>
            <p className="text-muted-foreground">Technology Domains</p>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
          </Card>
          
          <Card className="glass-card p-8 text-center hover:neon-border transition-all duration-500 group">
            <div className="text-4xl font-bold gradient-text mb-2">3</div>
            <p className="text-muted-foreground">Industry Leaders</p>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
          </Card>
        </div>
      </div>
    </section>
  );
};