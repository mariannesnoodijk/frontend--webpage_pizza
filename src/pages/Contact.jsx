import "../styles/Contact.css";
import PizzaLeft from "../assets/pizzaLeft.jpg";

function Contact() {
    return (
        <div className="contact">
        <div className="leftSide"
             style={{ backgroundImage: `url(${PizzaLeft})` }}>
        </div>
            <div className="rightSide">
                <h1>Contact us</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter full name"
                    />
                    <label htmlFor="email">Email address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        cols="30"
                        rows="6"
                        placeholder="Enter message"
                        required
                    >
                    </textarea>
                    <button type="submit">Send message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;