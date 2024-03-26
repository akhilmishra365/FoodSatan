import profilePhoto from "../Images/profilePhoto.png"
import React from "react";



//open profile and profile class both and see diffrence between functional ands class



// const About = () => {
//     return(
//         <div>
//             <h1>About Us</h1>
//             <p>
//                  I am a software developer who is passionate about food and technology. </p>
//                 {/**<Outlet/> */}  or <Profile  name = "akhil mishra class "/> or <Profilefunctional name = "akhil" />

//         </div>
        
//     );    
// };

// export default About;



//let us convert our about to class component
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("Parent -constructor") ;
    }

    componentDidMount() {   
        console.log(" Parent  - componentDidMount") ;
    }

    render() {
        console.log("Parent - render") ;
        return (
            <div >
                {/* <h1>About Us</h1>



                {/* //! using the context here ==> old way  */}

                {/* <UserContext.Consumer>
                    {
                        // (value) => {
                        //     return <h1>{value.user.name}</h1>
                        // }

                        // ya  phir upr wala code ko destructuring krke likh skte hai
                        ({user}) => {
                            return <h1 className="font-bold text-3xl">{user.name}</h1>
                        }
                    }
                    
                    </UserContext.Consumer> */}
                {/* <p>
                     I am a software developer who is passionate about food and technology. </p> */}
                {/* <Profile  name = "FIRST CHILD "/> 
                <Profilefunctional name = "SECOND CHILD" /> */} 

<header class="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
    <h1 class="text-xl font-bold">About Us</h1>
    <a href="/" class="text-gray-300 hover:text-white">Home</a>
  </header>
  <main class="container mx-auto px-4 py-12">
    <section class="flex flex-col md:flex-row md:space-x-12 items-center">
      <img src={profilePhoto} alt="Chefs cooking" class="w-full mb-4 md:mb-0 md:w-1/2 rounded-lg"/>
      <div class="text-gray-700 space-y-4">
        <h2 class="text-2xl font-bold">Who I am</h2>
       <p className="font-mono py-6">
        B.Tech. Undergraduate (Expected Graduation: 2024)
        I'm a passionate software engineering student with a strong foundation in web development technologies like React.js, Express.js, Node.js, and a 
        keen interest in full-stack development using the MERN stack. I'm proficient in Java, Python, and JavaScript 
        and have honed my problem-solving skills by tackling over 200 challenges on LeetCode.
        Highly motivated and eager to leverage my skills and knowledge to contribute to a dynamic team. Currently seeking internship or 
        full-time opportunities that allow me to learn, grow, and contribute meaningfully to impactful projects.
        </p>
        <a href="https://www.linkedin.com/in/akhilmishra1676" className="bg-orange-200 text-black p-2 m-4 rounded-md font-bold">Lets connect</a>
      </div>
    </section>
  </main>
  <footer class="bg-gray-800 text-white py-4 px-6 text-center">
    <p>&copy; [FoodSatan] 2024</p>
    <p>Created by [Akhil Mishra]</p>
    
  </footer>

















                
            </div>
        );
    };
}

export default About;





//when react is rendering it renders it in two phase 
 //1. phase 1 is called render phase
 //2. phase 2 is called commit phase

//what happens is rendwer phase has constructer  and render method and commit phase is after render phase and it has componentdidmount method
// commit phase  has componentdidmount method 
//in commit phaase reactg actually upadets the dom and after that component did mount is cALLED