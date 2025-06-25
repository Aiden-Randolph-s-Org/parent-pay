
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard, Users, Building2, TrendingDown, Shield, Clock } from "lucide-react";

interface LandingPageProps {
  onNavigate?: (page: string) => void;
}

const LandingPage = ({ onNavigate }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            School Payments Made Simple
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Pay for lunch accounts, summer camps, and activities with no transaction fees for families. 
            Schools pay one simple monthly fee for unlimited family payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg"
              onClick={() => onNavigate?.('free-trial')}
            >
              Start Free Trial
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg"
              onClick={() => onNavigate?.('learn-more')}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose ParentPay+?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <TrendingDown className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>No Fees for Families</CardTitle>
                <CardDescription>
                  Families pay zero transaction fees. Schools cover the platform cost at just $50/month.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Secure & Reliable</CardTitle>
                <CardDescription>
                  Bank-level security with direct account linking. No card fees, maximum protection.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <Clock className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Auto-Pay & Tracking</CardTitle>
                <CardDescription>
                  Set up automatic payments and never miss a deadline. Track all receipts in one place.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Simple, Transparent Pricing
          </h3>
          <div className="max-w-md mx-auto">
            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">For Schools & Organizations</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-900 mt-2">
                  $50<span className="text-sm font-normal text-gray-600">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Unlimited family payments
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Zero fees for families
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Send invoices easily
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Track payment status
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Automated reminders
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Financial reporting
                  </li>
                </ul>
                <Button 
                  className="w-full mt-6 bg-green-600 hover:bg-green-700"
                  onClick={() => onNavigate?.('free-trial')}
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Eliminate Transaction Fees?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join schools nationwide already providing fee-free payments to families
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="px-8 py-3 text-lg"
            onClick={() => onNavigate?.('free-trial')}
          >
            Start Your Free Trial Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
