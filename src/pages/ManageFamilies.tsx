
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Users, Search, Plus, Mail, Phone, CreditCard, Eye } from "lucide-react";

const ManageFamilies = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const families = [
    {
      id: 1,
      name: "Wilson Family",
      email: "wilson@email.com",
      phone: "(555) 123-4567",
      children: ["Emma Wilson (Grade 3)", "Jack Wilson (Grade 1)"],
      status: "Active",
      balance: 150.00,
      lastPayment: "2024-06-20"
    },
    {
      id: 2,
      name: "Johnson Family",
      email: "johnson@email.com",
      phone: "(555) 234-5678",
      children: ["Sarah Johnson (Grade 5)"],
      status: "Active",
      balance: 75.00,
      lastPayment: "2024-06-18"
    },
    {
      id: 3,
      name: "Smith Family",
      email: "smith@email.com",
      phone: "(555) 345-6789",
      children: ["Mike Smith (Grade 4)", "Lisa Smith (Grade 2)"],
      status: "Pending Setup",
      balance: 0.00,
      lastPayment: "Never"
    },
    {
      id: 4,
      name: "Davis Family",
      email: "davis@email.com",
      phone: "(555) 456-7890",
      children: ["Anna Davis (Grade 6)"],
      status: "Active",
      balance: 225.00,
      lastPayment: "2024-06-15"
    },
  ];

  const filteredFamilies = families.filter(family =>
    family.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    family.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Families</h1>
              <p className="text-gray-600">View and manage all registered families</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Family
            </Button>
          </div>
        </div>

        {/* Search and Stats */}
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Search Families
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Families</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">324</div>
              <p className="text-xs text-muted-foreground">+12 this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">298</div>
              <p className="text-xs text-muted-foreground">92% of families</p>
            </CardContent>
          </Card>
        </div>

        {/* Family List */}
        <Card>
          <CardHeader>
            <CardTitle>Family Directory</CardTitle>
            <CardDescription>All registered families and their information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredFamilies.map((family) => (
                <div key={family.id} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <h3 className="text-lg font-semibold">{family.name}</h3>
                        <Badge variant={family.status === "Active" ? "default" : "secondary"}>
                          {family.status}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-gray-600">
                            <Mail className="h-4 w-4 mr-2" />
                            {family.email}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Phone className="h-4 w-4 mr-2" />
                            {family.phone}
                          </div>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">Current Balance: ${family.balance.toFixed(2)}</p>
                          <p className="text-sm text-gray-600">Last Payment: {family.lastPayment}</p>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-sm font-medium mb-1">Children:</p>
                        <div className="flex flex-wrap gap-2">
                          {family.children.map((child, index) => (
                            <Badge key={index} variant="outline">
                              {child}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="outline" size="sm">
                        <Mail className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common family management tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-16 flex-col">
                <Mail className="h-6 w-6 mb-2" />
                Bulk Email
              </Button>
              <Button variant="outline" className="h-16 flex-col">
                <Users className="h-6 w-6 mb-2" />
                Export List
              </Button>
              <Button variant="outline" className="h-16 flex-col">
                <Plus className="h-6 w-6 mb-2" />
                Import Families
              </Button>
              <Button variant="outline" className="h-16 flex-col">
                <CreditCard className="h-6 w-6 mb-2" />
                Payment Status
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManageFamilies;
