import { motion } from "framer-motion";
import { Heart, Github, Twitter, Mail, Zap } from "lucide-react";

export const RetroFooter = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com", color: "text-foreground" },
    { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "text-spacehey-blue" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com", color: "text-spacehey-pink" },
    { icon: Zap, label: "Discord", href: "https://discord.com", color: "text-spacehey-purple" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black to-background border-t border-spacehey-pink/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-spacehey-green rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-spacehey rounded-full flex items-center justify-center">
                <span className="text-black font-bold">R</span>
              </div>
              <span className="font-mono font-bold text-xl text-spacehey-pink">RETRO.DEV</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Bringing back the magic of early web aesthetics with modern technology. 
              Built with <Heart className="w-4 h-4 inline text-spacehey-red" /> and lots of nostalgia.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="font-mono font-bold text-lg mb-4 text-spacehey-green">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block hover:text-spacehey-pink transition-colors"
                  whileHover={{ x: 5 }}
                >
                  → {link}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h3 className="font-mono font-bold text-lg mb-4 text-spacehey-purple">Connect</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 border-2 border-current rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-current hover:text-black`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-spacehey-pink/20 mt-8 pt-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground font-mono">
              © {currentYear} RETRO.DEV - Made with vintage vibes ✨
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <motion.span
                className="flex items-center gap-2 text-crt-green"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-crt-green rounded-full" />
                ONLINE
              </motion.span>
              
              <span className="text-muted-foreground">
                Built with React + Vite
              </span>
            </div>
          </div>
        </motion.div>

        {/* Retro marquee text */}
        <motion.div
          className="mt-6 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="whitespace-nowrap text-xs font-mono text-spacehey-pink/50"
            animate={{ x: [1000, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ★ WELCOME TO THE RETRO WEB ★ POWERED BY NOSTALGIA ★ BUILT FOR THE FUTURE ★ Y2K AESTHETIC ★ SYNTHWAVE VIBES ★ 
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};