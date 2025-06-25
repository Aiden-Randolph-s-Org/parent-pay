
import { useState } from "react";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import ParentDashboard from "@/components/ParentDashboard";
import OrganizationDashboard from "@/components/OrganizationDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <LandingPage />;
      case 'parent':
        return <ParentDashboard />;
      case 'organization':
        return <OrganizationDashboard />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentView={currentView} onViewChange={setCurrentView} />
      {renderCurrentView()}
    </div>
  );
};

export default Index;
