
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, Users, Building2, DollarSign, Shield, Clock, TrendingUp } from "lucide-react";

interface LearnMoreProps {
  onNavigate?: (page: string) => void;
}

const LearnMore = ({ onNavigate }: LearnMoreProps) => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CreditCard className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">ParentPay+</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How ParentPay+ Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The simple, affordable way to handle school payments without transaction fees for families
          </p>
        </div>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>1. School Subscribes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your school pays $50/month for unlimited family payments. No setup fees, no hidden costs.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>2. Families Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Parents link their bank accounts securely and can make payments instantly with zero fees.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>3. Everyone Saves</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Families avoid $2-3 per transaction. Schools save money compared to traditional payment processors.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-lg">Bank-Level Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">256-bit encryption and secure bank connections</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-lg">Auto-Pay</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Set up recurring payments for lunch accounts and activities</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-lg">Real-Time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Monitor payment status and generate reports instantly</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-lg">Family Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Support multiple children and payment methods per family</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Benefits for Families</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm">No transaction fees - pay exactly what's invoiced</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm">Automatic payments for lunch accounts</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm">All receipts organized in one place</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm">Secure bank transfers instead of credit cards</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Building2 className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Benefits for Schools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm">Predictable monthly cost - no surprise fees</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm">Higher family participation due to no fees</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm">Automated invoice sending and tracking</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  <p className="text-sm">Detailed reporting and analytics</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="bg-blue-600 text-white">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join schools nationwide already saving families money on every payment
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="px-8 py-3 text-lg"
                  onClick={() => onNavigate?.('free-trial')}
                >
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600"
                  onClick={() => onNavigate?.('get-started')}
                >
                  Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default LearnMore;
