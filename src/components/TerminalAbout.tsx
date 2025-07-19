import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Terminal, User, Code, Coffee } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const terminalCommands = [
  "$ whoami",
  "> Frontend Developer & Digital Artist",
  "$ cat skills.txt",
  "> React, TypeScript, Three.js, CSS3",
  "> Framer Motion, GSAP, WebGL",
  "> Figma, Photoshop, After Effects",
  "$ pwd",
  "> /home/retro-dev/portfolio",
  "$ ls -la experience/",
  "> 3+ years building pixel-perfect interfaces",
  "> Specialized in nostalgic & interactive UX",
  "$ echo $MOTTO",
  "> \"Making the web more beautiful, one pixel at a time\" ✨",
  "$ status --mood",
  "> Currently vibing to synthwave 🎵",
  "$ _"
];

export const TerminalAbout = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (visibleLines < terminalCommands.length) {
      const timer = setTimeout(() => {
        if (currentChar < terminalCommands[visibleLines].length) {
          setCurrentChar(currentChar + 1);
          setIsTyping(true);
        } else {
          setVisibleLines(visibleLines + 1);
          setCurrentChar(0);
          setIsTyping(false);
        }
      }, Math.random() * 100 + 50);

      return () => clearTimeout(timer);
    }
  }, [visibleLines, currentChar]);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="terminal-window crt-flicker">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-crt-green/30">
                <Terminal className="w-4 h-4" />
                <span className="font-bold">retro-terminal v2.0.24</span>
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 bg-spacehey-red rounded-full" />
                  <div className="w-2 h-2 bg-spacehey-yellow rounded-full" />
                  <div className="w-2 h-2 bg-crt-green rounded-full" />
                </div>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-sm leading-relaxed min-h-96">
                {terminalCommands.slice(0, visibleLines).map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className={`mb-1 ${
                      line.startsWith('$') 
                        ? 'text-crt-green' 
                        : line.startsWith('>') 
                        ? 'text-foreground' 
                        : 'text-spacehey-pink'
                    }`}
                  >
                    {line}
                  </motion.div>
                ))}
                
                {visibleLines < terminalCommands.length && (
                  <div className={`mb-1 ${
                    terminalCommands[visibleLines].startsWith('$') 
                      ? 'text-crt-green' 
                      : terminalCommands[visibleLines].startsWith('>') 
                      ? 'text-foreground' 
                      : 'text-spacehey-pink'
                  }`}>
                    {terminalCommands[visibleLines].slice(0, currentChar)}
                    {isTyping && (
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="text-crt-green"
                      >
                        █
                      </motion.span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Profile section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            {/* Profile avatar */}
            <motion.div
              className="relative inline-block mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden retro-border neon-glow">
                <img 
                  src={profileAvatar} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Online indicator */}
              <motion.div
                className="absolute -bottom-2 -right-2 bg-crt-green w-8 h-8 rounded-full border-4 border-background flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-3 h-3 bg-background rounded-full" />
              </motion.div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold font-mono mb-6">
              <span className="bg-gradient-spacehey bg-clip-text text-transparent">
                ABOUT_ME.EXE
              </span>
            </h2>

            <div className="space-y-6 text-lg">
              <p className="leading-relaxed">
                Hey there! 👋 I'm a <span className="text-spacehey-pink font-bold">frontend developer</span> with 
                a passion for bringing the aesthetic of the early 2000s web into modern applications.
              </p>

              <p className="leading-relaxed">
                When I'm not coding, you'll find me creating 
                <span className="text-spacehey-green font-bold"> pixel art</span>, listening to synthwave, 
                or diving deep into nostalgic internet archives.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="retro-card text-center">
                  <Code className="w-8 h-8 text-spacehey-blue mx-auto mb-2" />
                  <div className="font-bold text-xl">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                
                <div className="retro-card text-center">
                  <Coffee className="w-8 h-8 text-spacehey-yellow mx-auto mb-2" />
                  <div className="font-bold text-xl">∞</div>
                  <div className="text-sm text-muted-foreground">Cups of Coffee</div>
                </div>
              </div>

              {/* Current status */}
              <motion.div
                className="retro-card bg-spacehey-pink/10 border-spacehey-pink"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-spacehey-pink" />
                  <div>
                    <div className="font-bold">Current Status</div>
                    <div className="text-sm">Available for freelance projects! 🚀</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};