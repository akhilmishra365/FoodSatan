import github from "../Images/github.png"
import linkedin from "../Images/linkedin.webp"
import Instagram from "../Images/Instagram.png"
import Gmail from "../Images/Gmail.png"
const Contact = () => {
    return  <div className= "flex justify-center items-center flex-col w-[100%] h-[100%]">
                <h1 className="font-serif text-black bg-orange-100 p-2 m-2 rounded-lg">Contact Us</h1> 
                <p className="font-sans bg-fuchsia-200 p-2 m-2  rounded-lg">For any queries or feedback, please reach out to us at:</p>
                <div className="flex justify-center items-center p-[11px] m-[11px] bg-gray-300 border-fuchsia-50 rounded-md" >
                    <a href="https://www.linkedin.com/in/akhilmishra1676" >
                        <img src={linkedin} alt = "linkedin" className = "h-32 w-32 p-4"/>
                    </a>
                    <a href="https://github.com/akhilmishra365" >
                        <img src={github} alt = "github" className = "h-32 w-34 p-4"/>
                    </a>
                    <a href="https://www.instagram.com/akhil.mishra360" >
                        <img src={Instagram} alt = "instagram" className = "h-32 w-32 p-4"/>
                    </a>
                    <a href="mailto:someone@example.com">
                        <img src={Gmail} alt = "akhilmishra1676@gmail.com" className = "h-32 w-34 p-4 border-blue-900 border-solid"/>
                    </a>

                    </div>

                

    </div>
                   
};
export default Contact;
