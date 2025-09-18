import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import whatImage from "@/assets/whatsapp-icon-logo-svgrepo-com.svg"

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-bg"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center section-padding container-max animate-fade-up">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-gradient">I'M IAN MISIKO</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Kenyan based Software Developer passionate about building robust web,mobile and cloud based applications to solve real world problems
            
          </p>
          
          <div className="flex justify-center gap-4 pt-8">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="primary-gradient hover:scale-105 transition-smooth glow-shadow"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-primary/50 hover:border-primary hover:bg-primary/10 transition-smooth"
            >
              View Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="//ianmisiko2020@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://wa.me/254743621127"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110"
            >
              <Mail size={24}/>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-smooth"
        >
          <span className="text-sm">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;