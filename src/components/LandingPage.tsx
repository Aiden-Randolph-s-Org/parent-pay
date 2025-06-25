
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, CreditCard, Users, Building2, TrendingDown, Shield, Clock } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            School Payments Made Simple
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Pay for lunch accounts, summer camps, and activities with a flat monthly subscription. 
            No more transaction fees eating into your budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
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
                <CardTitle>Save on Fees</CardTitle>
                <CardDescription>
                  Pay just $5/month instead of $2-3 per transaction. Save hundreds annually.
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
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200 relative">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">For Parents</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-900 mt-2">
                  $5<span className="text-sm font-normal text-gray-600">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Unlimited payments
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Auto-pay setup
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Receipt tracking
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-600 mr-3" />
                    Multiple children support
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200">
              <CardHeader className="text-center">
                <Building2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">For Organizations</CardTitle>
                <CardDescription className="text-3xl font-bold text-gray-900 mt-2">
                  2%<span className="text-sm font-normal text-gray-600"> of transactions</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left">
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
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700">
                  Contact Sales
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
            Ready to Save on School Payments?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of families already saving money with ParentPay+
          </p>
          <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
            Start Your Free Trial Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
