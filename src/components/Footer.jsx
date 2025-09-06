import { Mail, Linkedin, Github, ArrowUp } from 'lucide-react';

export function Footer() {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
  
    return (
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Main content row */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12"   style={{ marginTop: '3rem' }}
>
            {/* Left side - Brand/Name */}
            <div className="flex flex-col">
              <h3 className="text-xl font-medium text-foreground mb-2">Tvisha Patel</h3>
              <p className="text-muted-foreground text-base">Product Designer</p>
            </div>
  
            {/* Center - Social Links */}
            <div className="flex items-center gap-8 flex-wrap">
              <a
                href="mailto:tvishapatel0@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Mail size={20} />
                <span>Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/tvishapatel-10/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
  
            {/* Right side - Back to top */}
            <button
              onClick={scrollToTop}
              className="flex cursor-pointer items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <ArrowUp size={20} />
              <span>Back to top</span>
            </button>
          </div>
  
          {/* Bottom section with border */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground">
           <div className="flex flex-col sm:flex-row items-center justify-between w-full" style={{ marginTop: '3rem', marginBottom: '3rem'}}>
            <p>© {new Date().getFullYear()} Tvisha Patel. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <span>Designed & built with 🤖 and 🍵</span>
            </div>
          </div>
          </div>
        </div>
      </footer>
    );
}