
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Settings, Plus, Trash2 } from "lucide-react";

const AutoPaySettings = () => {
  const [autoPayItems, setAutoPayItems] = useState([
    { id: 1, description: "Lunch Account - Emma Wilson", amount: 75.00, enabled: true, frequency: "Weekly" },
    { id: 2, description: "Music Lessons - Piano", amount: 120.00, enabled: true, frequency: "Monthly" },
    { id: 3, description: "After School Care", amount: 200.00, enabled: false, frequency: "Monthly" },
  ]);

  const toggleAutoPay = (id: number) => {
    setAutoPayItems(items => 
      items.map(item => 
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Auto-Pay Settings</h1>
          <p className="text-gray-600">Manage automatic payments for recurring expenses</p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2" />
                    Auto-Pay Rules
                  </CardTitle>
                  <CardDescription>Configure automatic payments for recurring items</CardDescription>
                </div>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Auto-Pay
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {autoPayItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{item.description}</p>
                      <p className="text-sm text-gray-600">${item.amount.toFixed(2)} - {item.frequency}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Badge variant={item.enabled ? "default" : "secondary"}>
                        {item.enabled ? "Active" : "Disabled"}
                      </Badge>
                      <Switch 
                        checked={item.enabled}
                        onCheckedChange={() => toggleAutoPay(item.id)}
                      />
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Auto-Pay Settings</CardTitle>
              <CardDescription>Configure how automatic payments work</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notifications">Email Notifications</Label>
                    <p className="text-sm text-gray-600">Get notified before auto-payments are processed</p>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="backup">Backup Payment Method</Label>
                    <p className="text-sm text-gray-600">Use backup if primary payment fails</p>
                  </div>
                  <Switch id="backup" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="days-ahead">Days to Process Ahead</Label>
                <Input 
                  id="days-ahead" 
                  type="number" 
                  defaultValue="3" 
                  className="w-24"
                />
                <p className="text-sm text-gray-600">
                  Process auto-payments this many days before the due date
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AutoPaySettings;
