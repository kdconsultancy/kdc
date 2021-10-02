
import "./contact.scss";
import { Person} from "@material-ui/icons";

export default function Contact() {
  

  
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h1>Contact.</h1>
        <table>
          <tr>
          <p>
           <Person className="icon" />
          <h3><b>Dinesh Pandey(Insurance Advisor)</b></h3>
          </p>
          <p>Mobile Number : 99045 13729</p>
          <p>Email : talk2pandeyji3@gmail.com </p>
          </tr>
         
          <tr>
          <p><Person className="icon" />
          <h3><b>Rohit Pandey(Tax Consultant)</b></h3></p>
          <p>Mobile Number : 78788 81491</p>
          <p>Email : talk2rohit1@gmail.com</p> 
          </tr>
          </table>
        
      </div>
    </div>
  );
}
