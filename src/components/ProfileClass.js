import React from "react"



//we wxtend react component so as that to diffrrentiate between a normal javascript class and class component 

// class Profile extends React.Component {

//     //!Render method is mandatory we cant create a class component without render method
//     render() {
//         //!class component has render mewthod and it returns the jsx
//         //!functional component does not have render method it directly returns jsx
//         return (
//             <div>
//                 <h1>Made With Hunger By Akhil Mishra</h1>
//             </div>
//         );
//     };
// };
// //! whatr ever we return from render method will be displayed on the screen ND RECONSILIATION ALGORITHM HAPPENS AGAIN 







/**
 * when we pass props in  class component we use this.props
 * for example ==>
 * 
 * <Profile name = "Akhil Mishra" />
 * then in our class component we can access the name by using this.props.name
 * 
 */
 
  class Profile extends React.Component {  
    //read about constructer super 
    constructor(props) {
        super(props);


        //here state is a object and we can have multiple state variables but in class component all state variables are create as a part of single state object 
        //basically in class componenet we use state obejct in for all the state variables 

// intial value jo state variable ki hogi jaise use effect me dalte hai useState(initial  value )
        this.state = {

            count: 0 , 
            count2 : 0,
            userInfo : {
                name : "Akhil Mishra",
                age : 21
            }
        };
        console.log("Child - constructor") ;
    }

    async componentDidMount() {   
        console.log("Child -  componentDidMount") ;
        //this will be called after the render method is called
        //it is  a great place to do api call
        //IT IS A LIFE CYCLE METHOD 
        //Api call is done here
         
        const data = await fetch("https://api.github.com/users/akhilmishra365") ; 
        const  json = await data.json() ;

        this.setState({

            userInfo : json}) ; 
            console.log("api call done") ;




            this.timer = setInterval(() => {
                console.log("hello") ; 
            
            },1000)

    }
    //useState me jo hm dependency array pass krte the isme hme vo kaam krna padega yha pe arguments pass krne pdenge 
    componentDidUpdate(prevProps , prevState) {
        if(prevState.count !== this.state.count) {
            //do anything 

        }


        //aur do countr ho toh two condition lgane pdenge isi liye dependency "array" hai 
        console.log("Parent - componentDidUpdate") ;
        //called after every render 


        
    } 


   
    componentWillUnmount() {

        //for this maan lo hmne ek function set kiya component did mount me 

        //toh agr nhi Likhenge toh vo function jb jb ek jagah se dusri jagah jayenge tb tb new re render hoke chlne lagega
//isi liye component did mount likh re ki jb jb ye hm bnd kre toh component destriy ho jaye; 

//dekho jb jb hm page change kre toh ye ek SPA hai toh ye component ko reload ni kr ra ye bs unko change kr ra hai ; 
       

//this is why we unmount the component

        console.log("Parent - componentWillUnmount") ;


       clearInterval(this.timer) ;
        //ek hi this class ke hr component me share hoga toh hm  this ke through refrence kr skte hai ; 

    }


    render() {
        // for destructuring
        // const {count} = this.state ;


        console.log("Child - render") ;
        return (
            <div>
                <h1>Made With Hunger By Akhil Mishra</h1>
                <h2>NAME  IS == {this.props.name}</h2>
                <h3>{this.state.count}</h3>
                //setcount is a function which is used to update the state variable
                //it is a setstate variable like before but in class component we use this.setstate


                <button onClick ={()=> {
                    //we donot directly update the state variable we use setstate method to update the state variable
                    //NEver do this.state = {count : this.state.count+1}
                    //bcz when we use setstate method it updates the state variable and then calls the render method again and react keeps track and does reconciliation algorith
//all state variables are updated at the same time in a single srt state.

                    this.setState({
                        count : this.state.count+1,
                        count2 : this.state.count2+1

                    });
                    }}
                    >Increment</button>
                       
                
            </div>
        );
    };
};
//class component flow  ==> first constructer called then render method called then componentdidmount called

export default Profile ;