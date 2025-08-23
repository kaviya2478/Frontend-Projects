import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { ContactProvider } from "./context/ContactContext";

export default function App() {
  return (
    <ContactProvider>
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Contact Card App</h1>
        <ContactForm />
        <ContactList />
      </div>
    </ContactProvider>
  );
}