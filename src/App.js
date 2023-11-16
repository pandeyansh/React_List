// 1Question

// import Studentslist from "./1Question/Studentlist";
// function App() {
//   return (
//     <div>
//       <Studentslist/>
//     </div>
//   );
// };
// export default App;

// Question1

// import Numberlist from "./Question1.js/Numberlist.js";
// function App ()
// {
//   return(
//     <div>
// <Numberlist></Numberlist>
//     </div>
//   );
// };
// export default App;

// Question2

// import Arrayofobject from "./Question2.js/Arrayofobject";
// function App ()
// {
//   return(
//     <div>
//       <Arrayofobject></Arrayofobject>
//     </div>
//   );
// };
// export default App;

//Question4

// import Arrayofstring from "./Question4.js/Arrayofstring";
// function App ()
// {
//   return(
//     <div>
//     <Arrayofstring></Arrayofstring>
//     </div>
//   );
// };
// export default App;

//question5-1

// import Arrayofimages from "./Question5-1.js/Arrayofimages";
// function App() {
//   const imagearray = [
//     {
//       img: 'https://w0.peakpx.com/wallpaper/106/425/HD-wallpaper-money-heist-glasses-professor-el-professor-thumbnail.jpg'},
//     {
//       img: 'https://gumlet.assettype.com/filmcompanion%2F2023-06%2F9158303e-0296-4750-b36b-9e8d8b090e51%2FRW_lead_3.jpg?auto=format%2Ccompress&fit=max&w=1200'
//     },
//     {
//       img:'https://gumlet.assettype.com/filmcompanion%2F2023-06%2F9158303e-0296-4750-b36b-9e8d8b090e51%2FRW_lead_3.jpg?auto=format%2Ccompress&fit=max&w=1200'
//     },
//     {
// img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuYRBO2pR2LKfcnkYSg_uaGAzbY_OF5NdaWw&usqp=CAUn'
//     }
//   ];
//   return (
//     <div>
//       <Arrayofimages image={imagearray} />
//     </div>
//   );
// };
// export default App;

//Question6

import './App.css';
import UserProfile from "./Question6/UserProfile";
const users = [
    {
        id: 1,
        name: 'Ansh Pandey',
        profilePicture: 'https://th.bing.com/th?id=OIP.ILS1f5vVu432msHYDebgxgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        bio: 'Java Full Stack Developer Trainee'
    },
    {
        id: 2,
        name: 'Pragya Mishra',
        profilePicture: 'https://www.bing.com/th?id=OIP.mzgnWb1Th9fRhsSEiZb3FwHaHa&pid=3.1&cb=&w=300&h=300&p=0',
        bio: 'Mern Stack Developer Trainee'
    },
    {
        id: 3,
        name: 'Shubham Gupta',
        profilePicture:'https://th.bing.com/th?id=OIP.apy2LNVZKNlyYxtCaS7IZQAAAA&w=222&h=280&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
        bio: 'Python Full Stack Developer Trainee'
    }
];
function App() {
    return (
        <div>
            <UserProfile users={users} />
        </div>
    );
};
export default App;