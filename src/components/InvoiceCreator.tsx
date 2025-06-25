
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send, Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface InvoiceItem {
  id: number;
  description: string;
  amount: number;
}

const InvoiceCreator = () => {
  const [recipient, setRecipient] = useState("");
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, description: "", amount: 0 }
  ]);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const addItem = () => {
    const newId = Math.max(...items.map(item => item.id)) + 1;
    setItems([...items, { id: newId, description: "", amount: 0 }]);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: number, field: 'description' | 'amount', value: string | number) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const getTotalAmount = () => {
    return items.reduce((total, item) => total + (item.amount || 0), 0);
  };

  const handleSendInvoice = async () => {
    if (!recipient.trim()) {
      toast({
        title: "Recipient Required",
        description: "Please enter a recipient for the invoice.",
        variant: "destructive",
      });
      return;
    }

    if (getTotalAmount() <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please add at least one item with a valid amount.",
        variant: "destructive",
      });
      return;
    }

    setIsSending(true);
    
    try {
      // Simulate sending invoice
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Invoice Sent",
        description: `Invoice for $${getTotalAmount().toFixed(2)} sent to ${recipient}.`,
      });
      
      // Reset form
      setRecipient("");
      setItems([{ id: 1, description: "", amount: 0 }]);
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "There was an error sending the invoice. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Send className="h-5 w-5 text-blue-600" />
          <CardTitle>Create Invoice</CardTitle>
        </div>
        <CardDescription>
          Send payment requests to families
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="recipient">Recipient (Family Name or Email)</Label>
          <Input
            id="recipient"
            placeholder="Enter family name or email address"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Invoice Items</Label>
            <Button variant="outline" size="sm" onClick={addItem}>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
          
          {items.map((item, index) => (
            <div key={item.id} className="flex items-center space-x-2 p-3 border rounded-lg">
              <div className="flex-1">
                <Input
                  placeholder="Description (e.g., Lunch Account, Field Trip)"
                  value={item.description}
                  onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                />
              </div>
              <div className="w-32">
                <Input
                  type="number"
                  placeholder="Amount"
                  value={item.amount || ""}
                  onChange={(e) => updateItem(item.id, 'amount', parseFloat(e.target.value) || 0)}
                  step="0.01"
                  min="0"
                />
              </div>
              {items.length > 1 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total Amount:</span>
            <span className="text-2xl font-bold text-blue-600">
              ${getTotalAmount().toFixed(2)}
            </span>
          </div>
          
          <Button 
            onClick={handleSendInvoice} 
            disabled={isSending || !recipient.trim() || getTotalAmount() <= 0}
            className="w-full"
          >
            {isSending ? "Sending..." : "Send Invoice"}
          </Button>
        </div>

        <div className="bg-green-50 p-3 rounded-lg">
          <p className="text-sm text-green-800">
            <strong>No transaction fees for families!</strong> They only pay what you invoice.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvoiceCreator;
