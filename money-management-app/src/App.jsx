import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";
import TransactionHistory from "./components/TransactionHistory";

export default function App() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">💰 Money Manager</h1>
      <Balance />
      <TransactionForm />
      <TransactionHistory />
    </div>
  );
}
