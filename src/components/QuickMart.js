//WHAT IS PROPS DRILLING ? ==> https://kentcdodds.com/blog/prop-drilling musst read 

//Now i want my quickmart have different componrnts ;

// const Quickmart = () =>{
//     return (<div> 
//         <AboutQuickmart/>
//         <DetailsofQuickmart/>
//         <TeamQuickmart/>
//         <Products/>
//         <Careers/>

//         </div>)};
        
// export default Quickmart; 

//BOVE KE LIYE HM DIFFERENT COMPONENTS BANA SKTE HAIN BUT HAI TOH YE EK PAGE KE HI SECTIONS NA TOH HM IS BAAR SECTIONS KA USE KRKE SECTION BNAYENGE; 

// import { useState } from "react";
// const Section = ({title , Description}) => {

// //ab hme ek show hide button bhi chahiye toh hm uske liye ek state bna lenge


// const [isVisible , setIsVisible] = useState(false);


//     return (
//         <div className="border border-black p-2 m-2">

//             <h3 className="text-3xl">{title}</h3>



  
//             {isVisible ? 
//             ( <button className="font-bold underline" onClick={()=>{
//                 setIsVisible(false)
//                 }}>hide</button>
            
//             ) 
//             :
//             ( <button className="font-bold underline" onClick={()=>
//                 setIsVisible(true)
//                 }>show</button>
//             )}
//             {isVisible && <p>{Description}</p> }
   

//         </div>
        
 
//         );};

// //ye above section ek reusable component hai jo ki title aur description ko leke aata (title aur props isme pass kiye jaare ) hai        

// //! ye jo functionality hai show hide button ki use hm accordium kehtre hai

// const Quickmart = () =>{
    
//     return (

//     <div> 
//         <h1 className="text-3xl p-2 m-2 font-bold">Quickmart</h1>
    
//     {/* //ye section hmara reusable component hia isme hm bs props pass kr re title aur description */}
       
//         <Section 
//         title = {"About Quickmart"} 
//         Description ={"Quickmart is a online grocery store that provides you with the best quality products at the best price But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
//         />

// {/* //AB details ke liye alg se compnent nhi likhne ki jarurat hai bs props pass krke use kr skte hai isi secrtion ko  */}

//         <Section 
//         title  = {"Team OF quick mart"}
//         Description = {"Our team is dedicated to provide you with the best quality products at the best price Quickmart is a online grocery store that provides you with the best quality products at the best price But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
//         />



//         <Section 
//         title  = {"Careers"}
//         Description = {"Our team is dedicated to provide you with the best quality products at the best price Quickmart is a online grocery store that provides you with the best quality products at the best price But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
//         />
//     </div>

// );};
        
// export default Quickmart; 

//! YE JO UPR BNAYA VO  NORMAL ACCORDIUM HAI AB JO BNANE JAAARE VO HAI COLLAPSABLE ACCORDIUM HM YE CHAHTE HAI KI JAB HM KOI SECTION OPEN KRE TOH VO OPEN HO AUR JAB HM KOI AUR SECTION OPEN KRE TOH VO OPEN HO AUR PEHLE WALA CLOSE HO YE FUNCTIONALITY HM COLLAPSABLE ACCORDIUM MEIN KRENGE


//?dekho behind the scene normal accordiuym me yhe tha ki hr section apni state maintain kr ra tha is visble true jb hmne carrers ke show pe click kiya toh uska state true ho gya ai=ur baki ka jo tha vo vaise hi ra 
//?isi trah jb hmne is carres ke hide pe click kiya uska is visble false ho gya aur baki sb ka jo tha vhi ra 

//!Ab HM YE CHAH RE KI JB HM CARRERS KE SHOW PE CLICK KRE TOH VO OPEN HO I.E IS USKA SET STATE TRUE HO JAYE BAKI SB KA FALSE HO JAYE TAKI VO HIDE HO JAYE BASICALLY AB HME SIBLINGS KE STATE KO CHANGE KRNA HAI ;

//basically we want to modify the state of siblings that is is about us se khde hoke carrers ki sgtate ko modify krdenn;

//!!!!!??????!!!!!?@@@?@     THE ANSWER IS WE CANNOT CHANGE THE STATE OF A SIBLING LIKE THAT DIRECTLY   WE CANNOT MODIFY  STATE OF A SIBLING FROM AN ANOTHER COMPONENT   //!!!!!!!!!!!!!?@@@@@@@@@@@@

//?TO DO THIS WE HAVE TO PLAY A SMART GAME INSTEAD OF EACH SECTION MAINTAINING ITS OWN STATE  WE CAN MAINTAIN THE STATE OF ALL THE SECTIONS IN THE PARENT COMPONENT AND PASS THE STATE AND THE FUNCTION TO CHANGE THE STATE AS PROPS TO THE CHILDREN COMPONENTS
//I WILL TAKE CONTROL OF SHOW HIDE FROM THIS CHILDRENS TO PARENT 
 

//!THIS IS A VERY IMP CONCEPT KNOWN AS  LIFTING STATE UP  ;  LIFTING STATE UP MEANS THAT WE LIFT THE STATE FROM THE CHILDREN TO THE PARENT COMPONENT


//lets do this 



// import { useState } from "react";
// const Section = ({title , Description , isVisible , setIsVisible}) => {
//     //?I want my instamart to control so hm vha pe state set krenge


//     //!HMNE NECHE IS KO COMMENT KR KE POWER CHEEN LIYAA HAHI  NOW AB PARENT ME EK STATE VARIABLE DEFFIRN KRENGE AUR USKO AS A PROPS PASS KRENGE 

// // const [isVisible , setIsVisible] = useState(false);


//     return (
//         <div className="border border-black p-2 m-2">

//             <h3 className="text-3xl">{title}</h3>



  
//             {isVisible ? 
//             ( <button className="font-bold underline" onClick={()=>{
//                 setIsVisible(false)
//                 }}>hide</button>
            
//             ) 
//             :
//             ( <button className="font-bold underline" onClick={()=>
//                 setIsVisible(true)
//                 }>show</button>
//             )}
//             {isVisible && <p>{Description}</p> }
   

//         </div>
        
 
//         );};

// // AB HMARA PARENT BTAYEGA KI HME KYA SHOW KRANA HAI AUR KYA HIDE KRANA HAI WE CAN TAKE UO ITS PROPERTIES  ; 

// const Quickmart = () =>{
//     //ab isme hm defaukt value me obj pass krenge vo 3 keys hongi

//     const [sectionConfig , setSectionConfig] = useState({
//         showAbout : false,
//         showTeam : false,
//         showCareers : false,
//     })
    
//     return (

//     <div> 
//         <h1 className="text-3xl p-2 m-2 font-bold">Quickmart</h1>
    
//     {/* //ye section hmara reusable component hia isme hm bs props pass kr re title aur description */}
       
//         <Section 
//         title = {"About Quickmart"} 
//         Description ={"Quickmart is a online grocery store that provides you with the best quality products at the best price But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
//         isVisible = {sectionConfig.showAbout}
//         setIsVisible={ () => (setSectionConfig({
//             showAbout : true,
//             showTeam : false,
//             showCareers : false,
//         }))}

//         />

// {/* //AB details ke liye alg se compnent nhi likhne ki jarurat hai bs props pass krke use kr skte hai isi secrtion ko  */}

//         <Section 
//         title  = {"Team OF quick mart"}
//         Description = {"Our team is dedicated to provide you with the best quality products at the best price Quickmart is a online grocery store that provides you with the best quality products at the best price But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
//         isVisible = {sectionConfig.showTeam}
//         setIsVisible={ () => (setSectionConfig({
//             showAbout : false,
//             showTeam : true,
//             showCareers : false,
//         }))}
//        />



//         <Section 
//         title  = {"Careers"}
//         Description = {"Our team is dedicated to provide you with the best quality products at the best price Quickmart is a online grocery store that provides you with the best quality products at the best price But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
//         isVisible = {sectionConfig.showCareers}

//         //children se parent me state change krne ke liye hmne ek function pass kiya hai
//         setIsVisible={ () => (setSectionConfig({
//             showAbout : false,
//             showTeam : false,
//             showCareers : true,
//         }))}
//        />
//     </div>

// );};
        
// export default Quickmart; 

//?UPR HMARA KAAM TOH HO RA THA BUT CODE WAS SHITTY CODE SO .. WE WILL IMPROVE IT 
//DEKHO AT LASTBASIC FUNCTIONALITY KYA HAI EK SECTION DIKHE TOH DUSRA HIDE HO JAYE AUR JAB DUSRA DIKHE TOH PEHLE WALA HIDE HO JAYE
import { useState } from "react";
const Section = ({title , Description , isVisible , setIsVisible}) => {
    //?I want my instamart to control so hm vha pe state set krenge


    //!HMNE NECHE IS KO COMMENT KR KE POWER CHEEN LIYAA HAHI  NOW AB PARENT ME EK STATE VARIABLE DEFFIRN KRENGE AUR USKO AS A PROPS PASS KRENGE 

// const [isVisible , setIsVisible] = useState(false);

//isvisble ek tareeke ka boolean hia jo true hoga toh hme dikhega vrna ni dikhegaa
    return (
        <div className="border border-black p-2 m-2">

            <h3 className="text-3xl">{title}</h3>



  
            {isVisible ? 
            (<button className="font-bold underline" onClick={()=>{
                setIsVisible(false)
                }}>hide</button>
            
            ) 
            :
            (<button className="font-bold underline" onClick={()=>{
                setIsVisible(false)
                }}>show</button>
            )
            }
            {isVisible && <p>{Description}</p> }
   

        </div>
        
 
        );};

// AB HMARA PARENT BTAYEGA KI HME KYA SHOW KRANA HAI AUR KYA HIDE KRANA HAI WE CAN TAKE UO ITS PROPERTIES  ; 

const Quickmart = () =>{
    //ab isme hm defaukt value me obj pass krenge vo 3 keys hongi
//!AB HM SIRF EK STAET VAraibale bna re hia jo sbka visibilty conterol krega

const [visibleSection , setIsVsibleSection] = useState("team")

    // const [sectionConfig , setSectionConfig] = useState({
    //     showAbout : false,
    //     showTeam : false,
    //     showCareers : false,
    // })
    
    return (

    <div> 
        <h1 className="text-3xl p-2 m-2 font-bold">Quickmart</h1>
    
    {/* //ye section hmara reusable component hia isme hm bs props pass kr re title aur description */}
       
        <Section 
        title = {"About Quickmart"} 
        Description ={"Quickmart is a online grocery store that provides you with the best quality products at the best price But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
        isVisible = {visibleSection === "about"}
       

        />

{/* //AB details ke liye alg se compnent nhi likhne ki jarurat hai bs props pass krke use kr skte hai isi secrtion ko  */}

        <Section 
        title  = {"Team OF quick mart"}
        Description = {"Our team is dedicated to provide you with the best quality products at the best price Quickmart is a online grocery store that provides you with the best quality products at the best price But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
        isVisible = {visibleSection === "team"}
       
       />



        <Section 
        title  = {"Careers"}
        Description = {"Our team is dedicated to provide you with the best quality products at the best price Quickmart is a online grocery store that provides you with the best quality products at the best price But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"}
        isVisible = {visibleSection === "careers"}

        //children se parent me state change krne ke liye hmne ek function pass kiya hai
        
       />
    </div>

);};
        
export default Quickmart;