
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, Search } from "lucide-react";

const DownloadReceipts = () => {
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [searchTerm, setSearchTerm] = useState("");

  const receipts = [
    { id: 1, description: "Lunch Account - Emma Wilson", amount: 75.00, date: "2024-06-20", status: "Completed" },
    { id: 2, description: "Summer Camp - Soccer Skills", amount: 250.00, date: "2024-06-18", status: "Completed" },
    { id: 3, description: "Art Supplies - Grade 3", amount: 25.00, date: "2024-06-15", status: "Completed" },
    { id: 4, description: "Music Lessons - Piano", amount: 120.00, date: "2024-06-10", status: "Completed" },
    { id: 5, description: "Field Trip - Science Museum", amount: 35.00, date: "2024-06-05", status: "Completed" },
  ];

  const handleDownloadAll = () => {
    console.log("Downloading all receipts...");
  };

  const handleDownloadSelected = () => {
    console.log("Downloading selected receipts...");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Download Receipts</h1>
          <p className="text-gray-600">Download and manage your payment receipts</p>
        </div>

        <div className="grid gap-6">
          {/* Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Filter Receipts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="search">Search Description</Label>
                  <Input
                    id="search"
                    placeholder="Search payments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={dateRange.start}
                    onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={dateRange.end}
                    onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <Button onClick={handleDownloadAll}>
                  <Download className="h-4 w-4 mr-2" />
                  Download All
                </Button>
                <Button variant="outline" onClick={handleDownloadSelected}>
                  <Download className="h-4 w-4 mr-2" />
                  Download Selected
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Receipt List */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Payment Receipts
              </CardTitle>
              <CardDescription>All completed payment receipts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {receipts.map((receipt) => (
                  <div key={receipt.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <input type="checkbox" className="rounded" />
                      <div>
                        <p className="font-medium">{receipt.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {receipt.date}
                          </span>
                          <span>${receipt.amount.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant="default">{receipt.status}</Badge>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Downloads</CardTitle>
              <CardDescription>Common receipt downloads</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-16 flex-col">
                  <FileText className="h-6 w-6 mb-2" />
                  This Month
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <FileText className="h-6 w-6 mb-2" />
                  Last Month
                </Button>
                <Button variant="outline" className="h-16 flex-col">
                  <FileText className="h-6 w-6 mb-2" />
                  Year to Date
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DownloadReceipts;
