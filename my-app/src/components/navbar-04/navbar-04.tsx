import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';

const Navbar04Page = () => {
  return (
    <div className="min-h-screen bg-muted fixed z-50">
      <nav
        className="
          fixed top-6 inset-x-4 h-16
          bg-white/20 dark:bg-slate-900/30
          backdrop-blur-xl
          border border-white/30 dark:border-slate-800/50
          shadow-lg shadow-black/5
          max-w-(--breakpoint-xl) mx-auto
          rounded-full
          transition-all duration-300
        "
      >
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full backdrop-blur-sm bg-white/40 dark:bg-slate-800/40 border border-white/20 dark:border-slate-700/50 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all"
            >
              Kontakt
            </Button>
            <Button className="rounded-full">Umów spotkanie</Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar04Page;
