import { useSelector } from "react-redux";

export default function TransactionHistory() {
  const history = useSelector((state) => state.transactions.history);

  return (
    <div className="mt-4 p-4 bg-white shadow rounded">
      <h2 className="font-semibold mb-2">Transaction History</h2>
      <ul>
        {history.map((t, index) => (
          <li key={index} className="border-b py-2">
            <span className={t.type === "credit" ? "text-green-600" : "text-red-600"}>
              {t.type.toUpperCase()}
            </span>{" "}
            - ₹{t.amount} on {t.date}
          </li>
        ))}
      </ul>
    </div>
  );
}
