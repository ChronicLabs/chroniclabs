import { Link, useLocation } from "wouter";
import { ReactNode } from "react";
import { Home, Gamepad2, Shield, MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "HOME", icon: Home },
    { href: "/defrag", label: "DEFRAG", icon: Gamepad2 },
    { href: "/privacy", label: "PRIVACY", icon: Shield },
    { href: "/support", label: "SUPPORT", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden scanlines">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-[#050505]/95 border-b border-[#00FF41] backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                <div className="w-8 h-8 border border-[#00FF41] flex items-center justify-center group-hover:bg-[#00FF41] group-hover:text-black transition-colors">
                  <span className="font-bold text-xl leading-none">C</span>
                </div>
                <span className="font-bold text-xl tracking-widest group-hover:text-white transition-colors">
                  CHRONIC_LABS
                </span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className={`
                      px-3 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-2
                      ${location === link.href 
                        ? "text-[#00FF41] border-b-2 border-[#00FF41]" 
                        : "text-[#003B00] hover:text-[#00FF41] hover:text-shadow"}
                    `}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#00FF41] hover:text-white p-2"
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-b border-[#003B00] bg-black"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      block px-3 py-2 text-base font-medium border-l-2 pl-4 transition-colors
                      ${location === link.href 
                        ? "text-[#00FF41] border-[#00FF41] bg-[#00FF41]/10" 
                        : "text-[#003B00] border-transparent hover:text-[#00FF41] hover:border-[#003B00]"}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="w-5 h-5" />
                      {link.label}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-[#003B00] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[#003B00] text-sm mb-4 md:mb-0 text-center md:text-left">
              <p>© 2026 CHRONIC LABS.</p>
              <p className="mt-1 font-mono text-xs">BUILDING DIGITAL EXPERIENCES</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-[#003B00] hover:text-[#00FF41] transition-colors">
                PRIVACY
              </Link>
              <span className="text-[#003B00]">|</span>
              <Link href="/support" className="text-[#003B00] hover:text-[#00FF41] transition-colors">
                SUPPORT
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
