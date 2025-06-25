
import InvoiceCreator from "@/components/InvoiceCreator";

const SendInvoice = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Send Invoice</h1>
          <p className="text-gray-600">Create and send payment requests to families</p>
        </div>
        <InvoiceCreator />
      </div>
    </div>
  );
};

export default SendInvoice;
