import JotformEmbed from "react-jotform-embed";
import styles from "../styles/formPage.module.css";

export default function FormPage() {
    function submitHandler() {
        console.log("Form submitted");
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label className="visuallyhidden" htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" />
                <button>Submit!</button>
            </form>

        </div>
    )
}



