import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import FormNewCase from "./FormNewCase"

const Report = () => {
    return (
        <div>
            <FormNewCase/> 
        </div>
    )
}

export default Report


// fetch('https://601da02bbe5f340017a19d60.mockapi.io/users', {
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     address: 'asdfghjkl; 3456789',
//     email: 'pepo.pepe@gmail.com',
//     fullname: 'Pepo',
//     phone: '1924839292',
//   }),
// })
//   .then(res => res.json())
//   .then(data => {

//     console.log('lo que recibo del post', data)

//     fetch('https://601da02bbe5f340017a19d60.mockapi.io/users')
//       .then(res2 => res2.json())
//       .then(data2 => {
//         // Puedo leer la informacion que recibi
//         console.log('lo que recibo del get', data2);
//       });

//   });
