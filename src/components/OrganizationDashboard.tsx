
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, DollarSign, FileText, TrendingUp, Send, Download, Eye, Plus } from "lucide-react";

const OrganizationDashboard = () => {
  const recentInvoices = [
    { id: 1, recipient: "Wilson Family", description: "Summer Camp Registration", amount: 250.00, status: "Paid", date: "2024-06-20" },
    { id: 2, recipient: "Johnson Family", description: "Art Supplies", amount: 25.00, status: "Pending", date: "2024-06-18" },
    { id: 3, recipient: "Smith Family", description: "Field Trip", amount: 35.00, status: "Overdue", date: "2024-06-15" },
  ];

  const paymentStats = [
    { period: "This Month", collected: 12450, pending: 890 },
    { period: "Last Month", collected: 11230, pending: 450 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Organization Dashboard</h1>
          <p className="text-gray-600">Sunshine Elementary School</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Families</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
              <p className="text-xs text-muted-foreground">+8.2% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$890</div>
              <p className="text-xs text-muted-foreground">12 outstanding invoices</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">94.3%</div>
              <p className="text-xs text-muted-foreground">Payment collection rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Invoices */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Recent Invoices</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Invoice
                </Button>
              </div>
              <CardDescription>Latest payment requests sent to families</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentInvoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{invoice.recipient}</p>
                      <p className="text-sm text-gray-500">{invoice.description}</p>
                      <p className="text-xs text-gray-400">{invoice.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${invoice.amount.toFixed(2)}</p>
                      <Badge 
                        variant={
                          invoice.status === 'Paid' ? 'default' : 
                          invoice.status === 'Pending' ? 'secondary' : 
                          'destructive'
                        }
                      >
                        {invoice.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Analytics</CardTitle>
              <CardDescription>Collection performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {paymentStats.map((stat, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{stat.period}</span>
                      <span className="text-sm text-gray-500">
                        ${(stat.collected + stat.pending).toLocaleString()} total
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-green-600">Collected: ${stat.collected.toLocaleString()}</span>
                        <span className="text-orange-600">Pending: ${stat.pending.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ 
                            width: `${(stat.collected / (stat.collected + stat.pending)) * 100}%` 
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <Send className="h-6 w-6 mb-2" />
                Send Invoice
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Eye className="h-6 w-6 mb-2" />
                View Reports
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Download className="h-6 w-6 mb-2" />
                Export Data
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Users className="h-6 w-6 mb-2" />
                Manage Families
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <FileText className="h-6 w-6 mb-2" />
                Payment History
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrganizationDashboard;
