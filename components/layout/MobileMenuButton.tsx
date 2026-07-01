import { Menu, X } from "lucide-react";

type MobileMenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function MobileMenuButton({
  isOpen,
  onClick,
}: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors duration-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:hidden"
    >
      {isOpen ? (
        <X
          className="h-6 w-6"
          aria-hidden="true"
        />
      ) : (
        <Menu
          className="h-6 w-6"
          aria-hidden="true"
        />
      )}
    </button>
  );
}