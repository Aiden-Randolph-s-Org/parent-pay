
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, DollarSign, Users, FileText, Download, Calendar } from "lucide-react";

const ViewReports = () => {
  const monthlyData = [
    { month: "Jan", collected: 8400, pending: 400 },
    { month: "Feb", collected: 9200, pending: 300 },
    { month: "Mar", collected: 10100, pending: 200 },
    { month: "Apr", collected: 11200, pending: 450 },
    { month: "May", collected: 11800, pending: 390 },
    { month: "Jun", collected: 12450, pending: 890 },
  ];

  const paymentTypes = [
    { name: "Lunch Accounts", value: 45, color: "#3B82F6" },
    { name: "Summer Camps", value: 25, color: "#10B981" },
    { name: "Field Trips", value: 15, color: "#8B5CF6" },
    { name: "Supplies", value: 10, color: "#F59E0B" },
    { name: "Other", value: 5, color: "#EF4444" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Reports & Analytics</h1>
              <p className="text-gray-600">Comprehensive payment and financial reporting</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Date Range
              </Button>
              <Button>
                <Download className="h-4 w-4 mr-2" />
                Export All
              </Button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Collected</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$63,240</div>
              <p className="text-xs text-muted-foreground">+12.5% from last period</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Families</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324</div>
              <p className="text-xs text-muted-foreground">+12 new this month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">94.3%</div>
              <p className="text-xs text-muted-foreground">+2.1% improvement</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">$890</div>
              <p className="text-xs text-muted-foreground">12 invoices pending</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Collections Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Collections</CardTitle>
              <CardDescription>Payment collection trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="collected" fill="#3B82F6" name="Collected" />
                  <Bar dataKey="pending" fill="#F59E0B" name="Pending" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Payment Types Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Types</CardTitle>
              <CardDescription>Breakdown by payment category</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={paymentTypes}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {paymentTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Reports */}
        <Card>
          <CardHeader>
            <CardTitle>Available Reports</CardTitle>
            <CardDescription>Generate detailed reports for specific analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                  <Badge variant="outline">Monthly</Badge>
                </div>
                <h3 className="font-semibold mb-2">Payment Summary</h3>
                <p className="text-sm text-gray-600 mb-4">Complete payment overview by month</p>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Generate
                </Button>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <Users className="h-8 w-8 text-green-600" />
                  <Badge variant="outline">Real-time</Badge>
                </div>
                <h3 className="font-semibold mb-2">Family Report</h3>
                <p className="text-sm text-gray-600 mb-4">Individual family payment history</p>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Generate
                </Button>
              </Card>
              <Card className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                  <Badge variant="outline">Quarterly</Badge>
                </div>
                <h3 className="font-semibold mb-2">Financial Analysis</h3>
                <p className="text-sm text-gray-600 mb-4">Trends and financial insights</p>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Generate
                </Button>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ViewReports;
