import styles from "../styles/formPage.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Home() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }, // catch error messages
    } = useForm();

    function submitHandler(data: any) {
        console.log('submitHandler', data);
        fetch('/api/sheet', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        reset(); // clears the input on submitting
    }

    return (
        <div className={styles.container}>


            <main className={styles.main}>



                <form onSubmit={handleSubmit(submitHandler)}>
                    <input
                        placeholder="Enter Name"


                        {...register('Name', { required: 'Please enter your name' })}
                    />
                    {errors.Name && errors.Name.message}
                    <input
                        placeholder="Enter Message"


                        {...register('Feedback', { required: 'Enter your feedback!' })}
                    />
                    {errors.Feedback && errors.Feedback.message}

                    <button


                        type="submit"


                    >
                        Submit Form
                    </button>

                </form>
            </main>
        </div>
    );
}