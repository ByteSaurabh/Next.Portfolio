import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Github, 
  Linkedin, 
  Youtube, 
  Send, 
  MapPin, 
  Phone,
  MessageCircle 
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "saurabhaasharma@gmail.com",
    href: "mailto:saurabhaasharma@gmail.com",
    color: "primary"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@ByteSaurabh", 
    href: "https://github.com/ByteSaurabh",
    color: "secondary"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Saurabh Sharma",
  href: "https://www.linkedin.com/in/saurabh-sharma-25b96a218/",
    color: "accent"
  }
];

const faqs = [
  {
    question: "What's your primary tech stack?",
    answer: "I specialize in React, Node.js, Python, and modern web technologies with expertise in AI/ML and blockchain."
  },
  {
    question: "Are you available for freelance projects?",
    answer: "Yes! I'm open to interesting projects, especially in AI, blockchain, and innovative web applications."
  },
  {
    question: "What's your development approach?",
    answer: "I focus on clean, scalable code with user-centric design and modern development practices."
  }
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 px-6 relative">
      {/* Background Effects */}
      <div className="absolute top-32 left-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-32 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on something amazing? Drop me a message or connect through your preferred platform
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card p-8 hover:neon-border transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send a Message</h3>
            
            <form
              className="space-y-6"
              action="https://formspree.io/f/movwzqwa"
              method="POST"
              onSubmit={(e) => {
                // Allow default submit
                setTimeout(() => {
                  (e.target as HTMLFormElement).reset();
                }, 100);
              }}
            >
              <input type="hidden" name="_captcha" value="false" />
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="glass-card border-primary/30 focus:neon-border transition-all duration-300"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="glass-card border-primary/30 focus:neon-border transition-all duration-300"
                  />
                </div>
              </div>
              <Input
                name="subject"
                placeholder="Subject"
                required
                className="glass-card border-primary/30 focus:neon-border transition-all duration-300"
              />
              <Textarea
                name="message"
                placeholder="Your message..."
                rows={6}
                required
                className="glass-card border-primary/30 focus:neon-border transition-all duration-300 resize-none"
              />
              <Button 
                type="submit" 
                size="lg"
                className="w-full neon-glow hover:neon-border transition-all duration-300 group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & FAQ */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="glass-card p-8 hover:neon-border transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 text-secondary">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.title}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg glass-card hover:neon-border transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-full bg-${method.color}/10 group-hover:bg-${method.color}/20 transition-all duration-300`}>
                      <method.icon className={`w-5 h-5 text-${method.color}`} />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-muted-foreground">{method.title}</div>
                      <div className={`font-bold text-${method.color}`}>{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* AI Chatbot Assistant */}
            <Card className="glass-card p-8 hover:neon-border transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                <Badge variant="outline" className="text-xs text-primary border-primary">
                  AI Assistant
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-accent">Quick FAQ</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Get instant answers to common questions
              </p>
              
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-accent/20 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full p-4 text-left hover:bg-accent/5 transition-colors duration-200 flex items-center justify-between"
                    >
                      <span className="font-medium text-sm">{faq.question}</span>
                      <MessageCircle className={`w-4 h-4 text-accent transition-transform duration-200 ${activeFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    {activeFaq === index && (
                      <div className="p-4 border-t border-accent/20 bg-accent/5">
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Location & Availability */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="glass-card p-8 text-center hover:neon-border transition-all duration-500">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-muted-foreground">India</p>
            <p className="text-muted-foreground text-sm mt-2">Open to remote collaboration worldwide</p>
          </Card>
          
          <Card className="glass-card p-8 text-center hover:neon-border transition-all duration-500">
            <Phone className="w-12 h-12 text-secondary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Availability</h3>
            <p className="text-muted-foreground">Available for projects</p>
            <p className="text-muted-foreground text-sm mt-2">Typically respond within 24 hours</p>
          </Card>
        </div>
      </div>
    </section>
  );
};