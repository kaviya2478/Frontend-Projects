import { useDispatch } from "react-redux";
import { credit, debit, saveTransaction } from "../features/transactions/transactionSlice";
import { useState } from "react";

export default function TransactionForm() {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  const handleCredit = () => {
    dispatch(credit({ amount: Number(amount) }));
    dispatch(saveTransaction({ amount: Number(amount), type: "credit" }));
    setAmount("");
  };

  const handleDebit = () => {
    dispatch(debit({ amount: Number(amount) }));
    dispatch(saveTransaction({ amount: Number(amount), type: "debit" }));
    setAmount("");
  };

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
        className="border p-2 mr-2 rounded"
      />
      <button onClick={handleCredit} className="bg-green-500 text-white px-3 py-1 rounded mr-2">
        Credit
      </button>
      <button onClick={handleDebit} className="bg-red-500 text-white px-3 py-1 rounded">
        Debit
      </button>
    </div>
  );
}
