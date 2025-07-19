import { motion } from "framer-motion";
import { Play, Heart, Star, Music } from "lucide-react";
import vinylHero from "@/assets/vinyl-hero.jpg";

export const RetroHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-retro">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-spacehey-pink rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* CRT Scanlines */}
      <div className="absolute inset-0 crt-scanlines pointer-events-none" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Hero text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              className="inline-block px-4 py-2 bg-spacehey-pink text-black font-bold mb-6 retro-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ✨ ONLINE NOW ✨
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-mono">
              <span className="glitch-text neon-glow">YOUR NAME</span>
              <br />
              <span className="bg-gradient-spacehey bg-clip-text text-transparent">
                RETRO PORTFOLIO
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Welcome to my digital space! ✨ Frontend Developer passionate about creating 
              <span className="text-spacehey-pink font-bold"> pixel-perfect experiences</span> 
              and nostalgic interfaces that bring back the golden age of the web.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button
                className="spacehey-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4 mr-2 inline" />
                View Projects
              </motion.button>

              <motion.button
                className="px-4 py-2 bg-transparent border-2 border-spacehey-green text-spacehey-green font-bold hover:bg-spacehey-green hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-4 h-4 mr-2 inline" />
                Add Friend
              </motion.button>
            </div>

            {/* Retro stats */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-spacehey-pink">2024</div>
                <div className="text-sm text-muted-foreground">Since</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-spacehey-green">∞</div>
                <div className="text-sm text-muted-foreground">Views</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-spacehey-purple">👑</div>
                <div className="text-sm text-muted-foreground">Mood</div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Vinyl record */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Vinyl record */}
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden retro-border"
                whileHover={{ scale: 1.05 }}
                animate={{ rotate: 360 }}
                transition={{ 
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                }}
              >
                <img 
                  src={vinylHero} 
                  alt="Vinyl Record" 
                  className="w-full h-full object-cover"
                />
                {/* Center hole */}
                <div className="absolute inset-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-black rounded-full border-2 border-spacehey-pink" />
              </motion.div>

              {/* Floating music notes */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-spacehey-pink text-2xl"
                  style={{
                    left: `${50 + Math.sin(i * Math.PI / 3) * 120}px`,
                    top: `${50 + Math.cos(i * Math.PI / 3) * 120}px`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Music className="w-6 h-6" />
                </motion.div>
              ))}
            </div>

            {/* Now playing widget */}
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 retro-card min-w-64"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-spacehey rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-black" />
                </div>
                <div className="flex-1">
                  <div className="font-bold text-sm">Now Playing</div>
                  <div className="text-xs text-muted-foreground">Retro Synthwave</div>
                </div>
                <Star className="w-4 h-4 text-spacehey-yellow animate-pulse" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};