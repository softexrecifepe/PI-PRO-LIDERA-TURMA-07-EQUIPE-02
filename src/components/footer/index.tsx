import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import "./style.css";

export function Fotter() {
  return (
    <footer>
      <div id="fotter">
        <h2 className="contact">Contato</h2>
        <div className="contact-area">
          <div className="contact-tel">
            <FaWhatsapp />
            <p>
              <a href="tel:+1234567890">+55 81 xxxxx-xxxx</a>
            </p>
          </div>
          <div className="contact-mail">
            <MdOutlineEmail />
            <p>
              <a href="mailto:info@example.com">info@example.com</a>
            </p>
          </div>
          <div className="contact-location">
            <CiLocationOn />
            <p>Recife</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
