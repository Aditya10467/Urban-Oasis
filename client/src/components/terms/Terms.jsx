import Footer from "../footer/Footer"
import MailList from "../mailList/MailList"
import Navbar from "../navbar/Navbar"

// styles
import "./terms.css"

// Assets
import logo from "../../Assets/logo.png"

const Terms =()=>{
    
    return(
        <div>
            <Navbar/>
            <div className="terms">

            <img className="logo5" src={logo} alt="" />
            <h1 class="H3">Terms And Conditions....</h1>
            <hr/>
            <p>These Terms of Service reflect the way that Urban Oasis business works, the laws that apply to our company, and certain things that we’ve always believed to be true. As a result, these Terms of Service help define Urban Oasis relationship with you as you interact with our services.</p>

            
            <li class="H2">What you can expect from us, which describes how we provide and develop our services</li>
            <li class="H2">What we expect from you, which establishes certain rules for using our services
            </li>
            <li class="H2">Content in Urban Oasis services, which describes the intellectual property rights to the content that you find in our services – whether that content belongs to you, Urban Oasis or others</li>
            <li class="H2">In case of problems or disagreements, which describes other legal rights that you have, and what to expect in case someone violates these terms.</li>
            <br/>
            <p>Understanding these terms is important because, by using our services, you’re agreeing to these terms.</p>
            <h4 class="H3">Service Providers...</h4>
            <hr/>
            <p>Urban Oasis services are provided by, and you’re contracting with:</p>
            <br/>
            <p>Urban Oasis LLC</p>
            <p>organised under the laws of the State of Madhya Pradesh, INDIA, and operating under the laws of the INDIA
            </p>
            <p>Bhopal, Madhya Pradesh</p>
            </div>




            <MailList/>


            <br />
            <br />
            <div className="ft">
            <Footer/>
            </div>
        </div>
    )
        
        
}

export default Terms