import { Send } from "@mui/icons-material";
import "../Style/newsletter.css"

const Newsletter = () => {
    return (
        <div className="newsletter-container">
            <h1>Newsletter</h1>
            <div className="newsletter-desc">Get timely updates from your favorite products.</div>
            <div className="newsletter-input-container">
                <input type="email" placeholder="Your email"/>
                <button>
                    <Send />
                </button>
            </div>
        </div>
    );
};

export default Newsletter;
