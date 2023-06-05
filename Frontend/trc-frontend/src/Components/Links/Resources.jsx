import "./Resources.css";
import pcb from "../../assets/pcb.jpg"
import arduino from "../../assets/arduino.jpg"
import pi from "../../assets/pi.jpg"
import battery from "../../assets/battery.jpg"
import electronics from "../../assets/electronics.jpg"
import { FaGoogleDrive } from 'react-icons/fa'
import { AiOutlineLink } from "react-icons/ai";

const Resources = () => {
  return (
    <div className='card-container'>
      <div className="card">
        <img src={pcb} alt="Card" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">PCB Designing</h2>
          <p className="card-subtitle">some good resources to start with.</p>
          <div className="icons-container">
            <FaGoogleDrive size={25} className='icons' />
            <AiOutlineLink size={25} className='icons' />
          </div>
        </div>

      </div>
      <div className="card">
        <img src={arduino} alt="Card" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Arduino </h2>
          <p className="card-subtitle">some good resources to start with.</p>
          <div className="icons-container">
            <FaGoogleDrive size={25} className='icons' />
            <AiOutlineLink size={25} className='icons' />
          </div>
        </div>
      </div>
      <div className="card">
        <img src={pi} alt="Card" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Raspberry Pi</h2>
          <p className="card-subtitle">Some good resources to start with.</p>
          <div className="icons-container">
            <FaGoogleDrive size={25} className='icons' />
            <AiOutlineLink size={25} className='icons' />
          </div>
        </div>
      </div>
      <div className="card">
        <img src={battery} alt="Card" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Batteries</h2>
          <p className="card-subtitle">some good resources to start with.</p>
          <div className="icons-container">
            <FaGoogleDrive size={25} className='icons' />
            <AiOutlineLink size={25} className='icons' />
          </div>
        </div>
      </div>
      <div className="card">
        <img src={electronics} alt="Card" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Basic Electronics</h2>
          <p className="card-subtitle">some good resources to start with.</p>
          <div className="icons-container">
            <FaGoogleDrive size={25} className='icons' />
            <AiOutlineLink size={25} className='icons' />
          </div>
        </div>
      </div>

    </div>

  );
};

export default Resources