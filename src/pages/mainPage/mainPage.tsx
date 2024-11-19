
import "./mainPage.css"
import VaderIntro from "../../assets/vaderintro.jpg"

const MainPage: React.FC = () => {
    return (
        <div>
            <div className="mainpage-title">
                <h1>Welcome to StarWars guide</h1>
            </div>
            <div className="vader">
                <div className="vader-background">
                    <img src={VaderIntro} alt="Darth Vader" />
                    <div className="lightsaber">
                        <div className="blade"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
