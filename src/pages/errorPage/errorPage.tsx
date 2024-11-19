import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Yoda from "../../assets/yoda.png"
import "./errorPage.css"

const ErrorPage: React.FC = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/people");
        }, 10000);
    }, [navigate]);

    return (
        <div className="errorpage-image">
            <img src={Yoda} alt="" />
            <h3>Back where you came, return you must</h3>
            <p>You will return to home page in 10 seconds</p>
        </div>

    )
}

export default ErrorPage;
