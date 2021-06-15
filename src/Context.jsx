import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = createContext();

export const UserProvider = (props) => {
    useEffect(() => {
        let logindata = localStorage.getItem("key")
        if (JSON.parse(logindata) == null) {
            let login = { user: "nivetha", pass: "niviL03!", access: false }
            localStorage.setItem("key", JSON.stringify(login))
        }
    }, []);
    const [login, setLogin] = useState(() => {
        let a = localStorage.getItem("key")
        return JSON.parse(a)
    });

    const [user,setUser]=useState(()=>{
            axios.get('https://demo6684436.mockable.io/user-lists')
            .then(res=>setUser(res.data))
            .catch(err=>console.log(err))
    });


    /*const [user, setUser] = useState([{
        "id": 1,
        "name": "NIVETHA",
        "age": 21,
        "dob": "03-01-2000",
        "firstName": "NIVETHA",
        "lastName": "L",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Erode",
            "address_line3": "KarungalPalayam",
            "phone": "9876543210"
        }
    }, {
        "id": 2,
        "name": "LOGAN",
        "age": 22,
        "dob": "30-12-2020",
        "firstName": "LOGAN",
        "lastName": "P",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Tirupur",
            "address_line3": "Marapalam",
            "phone": "9123456780"

        }
    },
    {
        "id": 3,
        "name": "SASI",
        "age": 21,
        "dob": "28-05-2000",
        "firstName": "SASI",
        "lastName": "E",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Erode",
            "address_line3": "Thirunagar Colony",
            "phone": "8764343200"
        }
    }, {
        "id": 4,
        "name": "HARSHA",
        "age": 15,
        "dob": "22-07-2005",
        "firstName": "HARSHA",
        "lastName": "R",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Salem",
            "address_line3": "Sai Baba Colony",
            "phone": "6541900980"

        }
    },
    {
        "id": 5,
        "name": "ANJU",
        "age": 17,
        "dob": "26-05-2003",
        "firstName": "ANJU",
        "lastName": "J",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Coimbatore",
            "address_line3": "None",
            "phone": "7987700091"
        }
    }, {
        "id": 6,
        "name": "HARI",
        "age": 18,
        "dob": "10-01-2002",
        "firstName": "HARI",
        "lastName": "P",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Chennai",
            "address_line3": "NGO Colony",
            "phone": "9109832456"

        }
    }, {
        "id": 7,
        "name": "SAI SHARNITHA",
        "age": 18,
        "dob": "18-03-2002",
        "firstName": "SAI SHARNITHA",
        "lastName": "A",
        "more": {
            "address_line1": "Tamil nadu",
            "address_line2": "Tirupur",
            "address_line3": "Thiru Nagar",
            "phone": "6742000123"

        }
    },

    ])*/

    return (
        <UserContext.Provider value={{ userdata: [user, setUser], logindata: [login, setLogin] }}>
            {props.children}
        </UserContext.Provider>
    );
}