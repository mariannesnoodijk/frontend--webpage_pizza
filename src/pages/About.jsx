import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
    return (
        <div className="about">
            <div className="aboutTop"
                 style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad architecto atque blanditiis commodi cupiditate dolor dolore dolorem eius exercitationem facilis fuga harum, in maiores non nostrum nulla possimus quae quaerat quam quo rem tempora unde veritatis voluptatibus! A aspernatur, atque doloribus excepturi facilis laborum nam nobis nostrum omnis, quaerat quam quod voluptates. Adipisci aliquid consequatur culpa cupiditate dignissimos enim est, fugiat magnam minus, perferendis quas quidem repudiandae sapiente sequi soluta, tempore vero voluptatibus. Facere fuga illum iure necessitatibus nulla, quo. Accusantium aliquid architecto culpa, cumque deleniti dicta doloribus ea eius expedita facere maxime nesciunt numquam porro quam sapiente tempore.</p>
            </div>
        </div>
    );
}

export default About;