
import PaymentForm from "@/components/PaymentForm";

const MakePayment = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Make a Payment</h1>
          <p className="text-gray-600">Send a secure payment to your school</p>
        </div>
        <PaymentForm />
      </div>
    </div>
  );
};

export default MakePayment;
