
import { Button } from "@/components/ui/button";
import { CreditCard, Users, Building2 } from "lucide-react";

interface HeaderProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

const Header = ({ currentView, onViewChange }: HeaderProps) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <CreditCard className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">ParentPay+</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => onViewChange('home')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentView === 'home'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onViewChange('parent')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentView === 'parent'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Parent Dashboard
          </button>
          <button
            onClick={() => onViewChange('organization')}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              currentView === 'organization'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Organization
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => onViewChange('sign-in')}
          >
            Sign In
          </Button>
          <Button 
            size="sm" 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={() => onViewChange('get-started')}
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
