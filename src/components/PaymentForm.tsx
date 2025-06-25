
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PaymentFormProps {
  amount?: number;
  description?: string;
  onSuccess?: () => void;
}

const PaymentForm = ({ amount = 0, description = "", onSuccess }: PaymentFormProps) => {
  const [paymentAmount, setPaymentAmount] = useState(amount);
  const [paymentDescription, setPaymentDescription] = useState(description);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    if (!paymentAmount || paymentAmount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid payment amount.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Payment Successful",
        description: `Payment of $${paymentAmount.toFixed(2)} has been processed.`,
      });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <CreditCard className="h-5 w-5 text-blue-600" />
          <CardTitle>Make Payment</CardTitle>
        </div>
        <CardDescription>
          Secure payment processing via bank transfer
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            placeholder="What is this payment for?"
            value={paymentDescription}
            onChange={(e) => setPaymentDescription(e.target.value)}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              id="amount"
              type="number"
              placeholder="0.00"
              className="pl-10"
              value={paymentAmount || ""}
              onChange={(e) => setPaymentAmount(parseFloat(e.target.value) || 0)}
              step="0.01"
              min="0"
            />
          </div>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>No transaction fees!</strong> Your payment will be processed via secure bank transfer.
          </p>
        </div>

        <Button 
          onClick={handlePayment} 
          disabled={isProcessing || !paymentAmount}
          className="w-full"
        >
          {isProcessing ? "Processing..." : `Pay $${paymentAmount.toFixed(2)}`}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Payments are processed securely through your linked bank account
        </p>
      </CardContent>
    </Card>
  );
};

export default PaymentForm;
