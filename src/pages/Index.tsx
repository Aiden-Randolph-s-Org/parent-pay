
import { useState } from "react";
import Header from "@/components/Header";
import LandingPage from "@/components/LandingPage";
import ParentDashboard from "@/components/ParentDashboard";
import OrganizationDashboard from "@/components/OrganizationDashboard";

// Import all the new pages
import SignIn from "./SignIn";
import GetStarted from "./GetStarted";
import FreeTrial from "./FreeTrial";
import LearnMore from "./LearnMore";
import MakePayment from "./MakePayment";
import NewPayment from "./NewPayment";
import AutoPaySettings from "./AutoPaySettings";
import ManageAutoPay from "./ManageAutoPay";
import DownloadReceipts from "./DownloadReceipts";
import BankAccount from "./BankAccount";
import NewInvoice from "./NewInvoice";
import ManageBilling from "./ManageBilling";
import SendInvoice from "./SendInvoice";
import ViewReports from "./ViewReports";
import ExportData from "./ExportData";
import ManageFamilies from "./ManageFamilies";
import PaymentHistory from "./PaymentHistory";

const Index = () => {
  const [currentView, setCurrentView] = useState('home');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <LandingPage onNavigate={setCurrentView} />;
      case 'parent':
        return <ParentDashboard onNavigate={setCurrentView} />;
      case 'organization':
        return <OrganizationDashboard onNavigate={setCurrentView} />;
      case 'sign-in':
        return <SignIn />;
      case 'get-started':
        return <GetStarted onNavigate={setCurrentView} />;
      case 'free-trial':
        return <FreeTrial />;
      case 'learn-more':
        return <LearnMore onNavigate={setCurrentView} />;
      case 'make-payment':
        return <MakePayment />;
      case 'new-payment':
        return <NewPayment />;
      case 'autopay-settings':
        return <AutoPaySettings />;
      case 'manage-autopay':
        return <ManageAutoPay />;
      case 'download-receipts':
        return <DownloadReceipts />;
      case 'bank-account':
        return <BankAccount />;
      case 'new-invoice':
        return <NewInvoice />;
      case 'manage-billing':
        return <ManageBilling />;
      case 'send-invoice':
        return <SendInvoice />;
      case 'view-reports':
        return <ViewReports />;
      case 'export-data':
        return <ExportData />;
      case 'manage-families':
        return <ManageFamilies />;
      case 'payment-history':
        return <PaymentHistory />;
      default:
        return <LandingPage onNavigate={setCurrentView} />;
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
