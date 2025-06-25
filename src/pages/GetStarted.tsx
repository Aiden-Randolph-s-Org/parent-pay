
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Users, Building2, ArrowRight } from "lucide-react";

interface GetStartedProps {
  onNavigate?: (page: string) => void;
}

const GetStarted = ({ onNavigate }: GetStartedProps) => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <CreditCard className="h-10 w-10 text-blue-600" />
            <span className="text-3xl font-bold text-gray-900">ParentPay+</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Started</h1>
          <p className="text-xl text-gray-600">Choose your account type to begin</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 hover:border-blue-200 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">I'm a Parent</CardTitle>
              <CardDescription className="text-lg">
                Pay for school activities with zero transaction fees
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-gray-600">
                <li>• Make payments for lunch, camps, and activities</li>
                <li>• Set up automatic payments</li>
                <li>• Track all receipts in one place</li>
                <li>• No transaction fees ever</li>
              </ul>
              <Button 
                className="w-full" 
                size="lg"
                onClick={() => onNavigate?.('parent')}
              >
                Continue as Parent
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-green-200 transition-colors cursor-pointer">
            <CardHeader className="text-center">
              <Building2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">I'm a School/Organization</CardTitle>
              <CardDescription className="text-lg">
                Collect payments from families with ease
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-gray-600">
                <li>• Send invoices to families instantly</li>
                <li>• Track payment status in real-time</li>
                <li>• Generate financial reports</li>
                <li>• $50/month for unlimited transactions</li>
              </ul>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700" 
                size="lg"
                onClick={() => onNavigate?.('free-trial')}
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Button 
              variant="link" 
              className="p-0 h-auto text-blue-600"
              onClick={() => onNavigate?.('sign-in')}
            >
              Sign in here
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
