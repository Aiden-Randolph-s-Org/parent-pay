
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Plus, Shield, CheckCircle } from "lucide-react";

const BankAccount = () => {
  const [accounts] = useState([
    { id: 1, bankName: "Chase Bank", accountType: "Checking", last4: "1234", isDefault: true, status: "Verified" },
    { id: 2, bankName: "Wells Fargo", accountType: "Savings", last4: "5678", isDefault: false, status: "Pending" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Bank Accounts</h1>
          <p className="text-gray-600">Manage your linked bank accounts for secure payments</p>
        </div>

        <div className="grid gap-6">
          {/* Connected Accounts */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Connected Accounts
                  </CardTitle>
                  <CardDescription>Your linked bank accounts</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Account
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {accounts.map((account) => (
                  <div key={account.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <CreditCard className="h-8 w-8 text-blue-600" />
                      <div>
                        <p className="font-medium">{account.bankName}</p>
                        <p className="text-sm text-gray-600">
                          {account.accountType} •••• {account.last4}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      {account.isDefault && (
                        <Badge variant="default">Default</Badge>
                      )}
                      <Badge variant={account.status === "Verified" ? "default" : "secondary"}>
                        {account.status === "Verified" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {account.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Add New Account */}
          <Card>
            <CardHeader>
              <CardTitle>Add New Bank Account</CardTitle>
              <CardDescription>Connect a new bank account for payments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bank-name">Bank Name</Label>
                  <Input id="bank-name" placeholder="Enter your bank name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-type">Account Type</Label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                    <option>Checking</option>
                    <option>Savings</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="routing">Routing Number</Label>
                  <Input id="routing" placeholder="9-digit routing number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account">Account Number</Label>
                  <Input id="account" placeholder="Account number" />
                </div>
              </div>
              <Button className="w-full">
                Connect Bank Account
              </Button>
            </CardContent>
          </Card>

          {/* Security Info */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                Security & Protection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Bank-level encryption</p>
                  <p className="text-sm text-gray-600">Your account information is encrypted with 256-bit SSL</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Read-only access</p>
                  <p className="text-sm text-gray-600">We can only verify your account, not access your funds</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium">Secure payments</p>
                  <p className="text-sm text-gray-600">All transactions are processed through secure banking networks</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BankAccount;
