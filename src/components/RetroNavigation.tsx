import { motion } from "framer-motion";
import { useState } from "react";
import { Home, User, FolderOpen, Mail, Music, Menu, X } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Music, label: "Music", href: "#music" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export const RetroNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-spacehey-pink/30"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-spacehey rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">R</span>
              </div>
              <span className="font-mono font-bold text-spacehey-pink">RETRO.DEV</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 hover:bg-spacehey-pink/20 transition-colors rounded-none border border-transparent hover:border-spacehey-pink/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-mono text-sm">{item.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:bg-spacehey-pink/20 transition-colors border border-spacehey-pink/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed top-16 right-0 bottom-0 w-64 bg-background border-l border-spacehey-pink/30 z-40 md:hidden"
      >
        <div className="p-4">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 p-3 hover:bg-spacehey-pink/20 transition-colors border border-transparent hover:border-spacehey-pink/50 w-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-mono">{item.label}</span>
              </motion.a>
            ))}
          </div>

          {/* Mobile footer */}
          <motion.div
            className="mt-8 p-4 retro-card text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-xs text-muted-foreground mb-2">Currently playing</div>
            <div className="font-mono text-sm text-spacehey-pink">Synthwave Mix 🎵</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Floating action buttons (Desktop) */}
      <div className="fixed bottom-6 right-6 z-50 hidden lg:block">
        <div className="flex flex-col gap-3">
          {/* Music player mini */}
          <motion.button
            className="w-12 h-12 bg-spacehey-pink text-black rounded-full flex items-center justify-center shadow-glow-pink"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              boxShadow: [
                "var(--glow-pink)",
                "0 0 40px hsl(var(--spacehey-pink) / 0.8)",
                "var(--glow-pink)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Music className="w-5 h-5" />
          </motion.button>

          {/* Back to top */}
          <motion.button
            className="w-12 h-12 bg-crt-green text-black rounded-full flex items-center justify-center shadow-glow-green"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Home className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </>
  );
};