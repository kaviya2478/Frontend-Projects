import { useContext, useMemo } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactCard from "./ContactCard";

export default function ContactList(){
    const {contacts} = useContext(ContactContext);

    const sortedContacts = useMemo(() => {
        return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    }, [contacts]);

    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedContacts.map((contact, index) => (
                <ContactCard key={index} contact={contact} />
            ))}
        </div>
    );
}