import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and modern patterns."
    },
    {
      icon: <Palette className="h-8 w-8 text-accent" />,
      title: "UI/UX Focus",
      description: "Creating intuitive user experiences with attention to design details and accessibility."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and excellent user experience."
    }
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Me</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate software developer with over 5 years of experience 
                building modern web applications. I specialize in React, TypeScript, 
                and Node.js, creating solutions that are both technically robust and 
                visually appealing.
              </p>
              
              <p>
                My journey in tech started with a curiosity about how things work under 
                the hood. Today, I combine technical expertise with creative problem-solving 
                to deliver exceptional digital experiences.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or mentoring aspiring developers.
              </p>
            </div>
          </div>
          
          {/* Highlights Cards */}
          <div className="space-y-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="card-gradient p-6 card-shadow hover:scale-105 transition-bounce border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;