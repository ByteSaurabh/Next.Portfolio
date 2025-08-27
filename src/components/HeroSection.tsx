import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Youtube, FileText } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const roles = ["Full Stack Developer", "Researcher", "Innovator", "AI Enthusiast"];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentRoleText.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentRoleText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isTyping, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '-4s' }} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Name & Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text animate-pulse-glow">
            Saurabh Sharma
          </h1>
          <div className="text-2xl md:text-4xl text-muted-foreground mb-6">
            <span className="inline-block min-w-[300px] text-left">
              {displayText}
              <span className="animate-blink text-primary">|</span>
            </span>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the future with Web Development, AI, blockchain, and innovative technologies. 
            Crafting solutions that bridge the gap between imagination and reality.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6 justify-center mb-12">
          <a href="/Saurabh_resume.pdf" download className="block">
            <Button size="lg" className="neon-glow hover:neon-border transition-all duration-300 group">
              <FileText className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Resume
            </Button>
          </a>
          <a href="https://github.com/ByteSaurabh" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="glass-card hover:neon-border transition-all duration-300 group">
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/saurabh-sharma-25b96a218/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="glass-card hover:neon-border transition-all duration-300 group">
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full mx-auto">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};