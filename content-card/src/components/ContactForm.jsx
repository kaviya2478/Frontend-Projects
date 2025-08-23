import { useState,useRef, useEffect, useContext, useCallback} from "react";
import { ContactContext } from "../context/ContactContext";
import useFormValidation from "../hooks/useFormValidation";

export default function ContactForm(){
    const {addContact} = useContext(ContactContext);
    const [values, setValues] = useState({name : "", email: "", phone: ""});
    const {errors,validate} = useFormValidation();
    const nameRef = useRef();

    useEffect(() =>{
        nameRef.current.focus();
    }, []);

    const handleChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = useCallback(
        (e) =>{
            e.preventDefault();
            if(validate(values)){
                addContact(values);
                setValues({name:"", email: "", phone: ""});
                nameRef.current.focus();
            }
        },
        [values, addContact, validate]
    );

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Add Contact</h2>
            <input ref={nameRef} type="text" name="name" placeholder="Name" value={values.name} onChange={handleChange} className="w-full p-2 mb-2 border rounded" />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

           <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={values.phone}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Add Contact
      </button>
        </form>
    )
}