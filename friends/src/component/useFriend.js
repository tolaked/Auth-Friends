// import React, { useEffect, useState } from "react";
// import withAuthCheck from "../axios/index";

// export default function useFriend() {
//   const initialState = {
//     name: "",
//     age: "",
//     email: ""
//   };
//   const [form, useForm] = useState({});
//   const useInputChange = e => {
//     const { name, value } = e.target;
//     useForm(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <div>
//       <form>
//         <input
//           value={form.name}
//           type="text"
//           name="name"
//           onChange={useInputChange}
//         />

//         <input
//           value={form.age}
//           type="number"
//           name="age"
//           onChange={useInputChange}
//         />

//         <input
//           value={form.email}
//           type="email"
//           name="name"
//           onChange={useInputChange}
//         />
//       </form>
//     </div>
//   );
// }

// // export default CreateFriend;
