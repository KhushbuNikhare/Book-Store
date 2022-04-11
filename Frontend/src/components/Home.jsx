// import axios from "axios";
// import React, { useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
// import { getAllBooks } from "../Redux/Actions";

// const Home = () => {
//   const nameRef = useRef();
//   const mobileRef = useRef();
//   const addressRef = useRef();
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(nameRef);
//   };

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const books = await axios.get("http://localhost:5555/books");
//         console.log(books);
//         dispatch({ type: "GETBOOKS", payload: books.data });
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <form>
//         <input type="text" placeholder="enter name" ref={nameRef} />
//         <input
//           type="number"
//           placeholder="enter mobile number"
//           ref={mobileRef}
//         />
//         <input type="text" placeholder="enter address" ref={addressRef} />
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Home;
