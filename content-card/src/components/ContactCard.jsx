export default function ContactCard({contact}){
    return (
        <div className="bg-gray-100 p-4 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-bold">{contact.name}</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
        </div>
    );
}