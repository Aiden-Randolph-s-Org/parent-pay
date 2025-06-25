
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download, Calendar, CheckCircle, AlertCircle } from "lucide-react";

const ManageBilling = () => {
  const billingHistory = [
    { id: 1, date: "2024-06-01", amount: 50.00, status: "Paid", method: "Auto-Pay" },
    { id: 2, date: "2024-05-01", amount: 50.00, status: "Paid", method: "Auto-Pay" },
    { id: 3, date: "2024-04-01", amount: 50.00, status: "Paid", method: "Credit Card" },
    { id: 4, date: "2024-03-01", amount: 50.00, status: "Paid", method: "Credit Card" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Billing</h1>
          <p className="text-gray-600">Manage your ParentPay+ subscription and billing</p>
        </div>

        <div className="grid gap-6">
          {/* Current Subscription */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Current Subscription
              </CardTitle>
              <CardDescription>Your ParentPay+ plan details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-gray-600">Plan</p>
                  <p className="text-2xl font-bold">ParentPay+ School</p>
                  <Badge variant="default" className="mt-2">Active</Badge>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly Cost</p>
                  <p className="text-2xl font-bold">$50.00</p>
                  <p className="text-sm text-gray-600">Per month</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Next Billing Date</p>
                  <p className="text-2xl font-bold">July 25</p>
                  <p className="text-sm text-gray-600">2024</p>
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline">Update Payment Method</Button>
                <Button variant="outline">Change Plan</Button>
                <Button variant="outline">Cancel Subscription</Button>
              </div>
            </CardContent>
          </Card>

          {/* Payment Method */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
              <CardDescription>How you pay for your subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="font-medium">Visa •••• 1234</p>
                    <p className="text-sm text-gray-600">Expires 12/27</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant="default">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing History */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Billing History</CardTitle>
                  <CardDescription>Your subscription payment history</CardDescription>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {billingHistory.map((bill) => (
                  <div key={bill.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-8 w-8 text-gray-400" />
                      <div>
                        <p className="font-medium">{bill.date}</p>
                        <p className="text-sm text-gray-600">ParentPay+ Monthly Subscription</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-medium">${bill.amount.toFixed(2)}</p>
                        <p className="text-sm text-gray-600">{bill.method}</p>
                      </div>
                      <Badge variant="default">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {bill.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Usage Stats */}
          <Card>
            <CardHeader>
              <CardTitle>Usage This Month</CardTitle>
              <CardDescription>Your platform usage statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">324</p>
                  <p className="text-sm text-gray-600">Active Families</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-600">1,247</p>
                  <p className="text-sm text-gray-600">Payments Processed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-600">$12,450</p>
                  <p className="text-sm text-gray-600">Total Volume</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-orange-600">94.3%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ManageBilling;
