import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      detail: "ianmisiko2020@gmail.com",
      link: "ianmisiko2020@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-accent" />,
      title: "Phone",
      detail: "+254743621127",
      link: "tel:+254743621127"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      detail: "Nairobi, Kenya",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 section-padding bg-card/30">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient p-8 card-shadow border-primary/20 animate-fade-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/50 border-primary/30 focus:border-primary transition-smooth"
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-primary/30 focus:border-primary transition-smooth"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 border-primary/30 focus:border-primary transition-smooth min-h-[120px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full primary-gradient hover:scale-105 transition-smooth glow-shadow"
              >
                Send Message
              </Button>
            </form>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or potential collaborations. Feel free to reach out through any of the 
                channels below.
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a 
                  key={item.title}
                  href={item.link}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/50 hover:bg-card/80 transition-smooth group"
                >
                  <div className="flex-shrink-0 group-hover:scale-110 transition-smooth">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;