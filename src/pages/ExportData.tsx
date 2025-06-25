
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Download, Database, Calendar, CheckCircle } from "lucide-react";

const ExportData = () => {
  const [exportFormat, setExportFormat] = useState("csv");
  const [dateRange, setDateRange] = useState({ start: "", end: "" });
  const [selectedData, setSelectedData] = useState({
    payments: true,
    families: false,
    invoices: true,
    reports: false,
  });

  const exportOptions = [
    { id: "payments", label: "Payment Transactions", description: "All payment records with amounts and dates" },
    { id: "families", label: "Family Information", description: "Contact details and account information" },
    { id: "invoices", label: "Invoice Data", description: "Sent invoices and their status" },
    { id: "reports", label: "Financial Reports", description: "Generated report data and analytics" },
  ];

  const recentExports = [
    { id: 1, name: "June_Payments_Export.csv", date: "2024-06-20", size: "2.4 MB", status: "Completed" },
    { id: 2, name: "Q2_Financial_Report.xlsx", date: "2024-06-15", size: "1.8 MB", status: "Completed" },
    { id: 3, name: "Family_Directory.csv", date: "2024-06-10", size: "856 KB", status: "Completed" },
  ];

  const handleExport = () => {
    console.log("Exporting data:", { exportFormat, dateRange, selectedData });
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Export Data</h1>
          <p className="text-gray-600">Export your school's payment and family data</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Export Configuration */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  Configure Export
                </CardTitle>
                <CardDescription>Select the data you want to export</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Data Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Data to Export</Label>
                  {exportOptions.map((option) => (
                    <div key={option.id} className="flex items-start space-x-3">
                      <Checkbox
                        id={option.id}
                        checked={selectedData[option.id as keyof typeof selectedData]}
                        onCheckedChange={(checked) =>
                          setSelectedData(prev => ({ ...prev, [option.id]: checked }))
                        }
                      />
                      <div className="space-y-1">
                        <Label htmlFor={option.id} className="font-medium">
                          {option.label}
                        </Label>
                        <p className="text-sm text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Date Range */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Date Range</Label>
                  <div className="grid grid-cols-2 gap-4">
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
                </div>

                {/* Format Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium">Export Format</Label>
                  <div className="flex space-x-4">
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="csv"
                        checked={exportFormat === "csv"}
                        onChange={(e) => setExportFormat(e.target.value)}
                      />
                      <span>CSV</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="xlsx"
                        checked={exportFormat === "xlsx"}
                        onChange={(e) => setExportFormat(e.target.value)}
                      />
                      <span>Excel (XLSX)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value="pdf"
                        checked={exportFormat === "pdf"}
                        onChange={(e) => setExportFormat(e.target.value)}
                      />
                      <span>PDF</span>
                    </label>
                  </div>
                </div>

                <Button onClick={handleExport} className="w-full" size="lg">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Exports & Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Exports</CardTitle>
                <CardDescription>Your previously exported files</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentExports.map((export_) => (
                    <div key={export_.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Database className="h-6 w-6 text-blue-600" />
                        <div>
                          <p className="font-medium">{export_.name}</p>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Calendar className="h-3 w-3" />
                            <span>{export_.date}</span>
                            <span>•</span>
                            <span>{export_.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="default">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          {export_.status}
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

            <Card>
              <CardHeader>
                <CardTitle>Quick Exports</CardTitle>
                <CardDescription>Common export templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export This Month's Payments
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export All Family Contacts
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export Pending Invoices
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export Year-to-Date Summary
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportData;
