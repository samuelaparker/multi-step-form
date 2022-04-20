import styles from "../styles/formPage.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { questions } from '../helpers/questions'
import { useState } from "react";



export default function Forms() {
    const [formStep, setFormStep] = useState(0);

    const completeFormStep = () => {
        setFormStep(formStep + 1);
    }

    const completeFormStepPrev = () => {
        setFormStep(formStep - 1);
    }



    const renderNextButton = () => {
        if (formStep === questions.length - 1) {
            return (
                <button disabled={!isValid} type="submit">Submit</button>
            )
        } else {

            return (
                <button disabled={!isValid} onClick={completeFormStep} type="button">Next</button>
            )
        }
    }


    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isValid }, // catch error messages
    } = useForm({ mode: "all" });




    function onSubmit(data: any) {

        console.log('handler fired', data, 'event', event)

        completeFormStep()
        fetch('/api/sheet', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        reset(); // clears the input on submitting
    }

    // const onSubmit = (data: any) => console.log('TESTING onSUBMIT', JSON.stringify(data));


    console.log(JSON.stringify(watch())); // watch input value by passing the name of it

    return (

        <>

            <main className={styles.main}>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {formStep === 0 && (
                        <section className={styles.section}>
                            <h1>{questions[0].question}</h1>

                            <label htmlFor={questions[0].question}>{questions[0].choices[0].value}*</label>

                            <input

                                type={questions[0].inputType}
                                id={questions[0].question}
                                placeholder={questions[0].placeholder}
                                {...register(questions[0].choices[0].value, { required: true })}
                            />


                            <label htmlFor={questions[0].question}>{questions[0].choices[1].value}*</label>
                            <input
                                type={questions[0].inputType}
                                placeholder={questions[0].placeholder}
                                {...register(questions[0].choices[1].value, { required: true })}
                            />

                            {renderNextButton()}
                        </section>
                    )}

                    {formStep === 1 && (
                        <section className={styles.section}>
                            <h1>{questions[1].question}</h1>
                            <input
                                className={styles.inputHidden}
                                type={questions[1].inputType}
                                id={questions[1].choices[0].value}
                                placeholder={questions[1].placeholder}
                                {...register(questions[1].choices[0].value, { required: '' })}
                            />
                            <label
                                htmlFor={questions[1].choices[0].value}
                                className={styles.multipleInputLabel}
                            >
                                {questions[1].choices[0].value}
                            </label>

                            <input
                                className={styles.inputHidden}

                                id={questions[1].choices[1].value}
                                type={questions[1].inputType}
                                placeholder={questions[1].placeholder}
                                {...register(questions[1].choices[1].value, { required: '' })}
                            />

                            <label
                                className={styles.multipleInputLabel}
                                htmlFor={questions[1].choices[1].value}
                            >
                                {questions[1].choices[1].value}</label>


                            <input
                                className={styles.inputHidden}
                                id={questions[1].choices[2].value}
                                type={questions[1].inputType}
                                placeholder={questions[1].placeholder}
                                {...register(questions[1].choices[2].value, { required: '' })}
                            />
                            <label
                                className={styles.multipleInputLabel}
                                htmlFor={questions[1].choices[2].value}
                            >
                                {questions[1].choices[2].value}</label>


                            <input
                                className={styles.inputHidden}
                                id={questions[1].choices[3].value}
                                type={questions[1].inputType}
                                placeholder={questions[1].placeholder}
                                {...register(questions[1].choices[3].value, { required: '' })}
                            />
                            <label
                                className={styles.multipleInputLabel}
                                htmlFor={questions[1].choices[3].value}
                            >
                                {questions[1].choices[3].value}</label>
                            {renderNextButton()}
                        </section>
                    )}

                    {formStep === 2 && (
                        <section className={styles.section}>
                            <h1>{questions[2].question}</h1>
                            <label htmlFor={questions[2].question}>{questions[2].choices[0].value}*</label>
                            <textarea
                                // type={questions[2].inputType}
                                id={questions[2].question}
                                placeholder={questions[2].placeholder}
                                {...register(questions[2].question, { required: true })}>
                            </textarea>
                            {renderNextButton()}
                        </section>
                    )}

                    {formStep === 3 && (
                        <section className={styles.section}>
                            <h1>{questions[3].question}</h1>
                            
                                <input
                                    className={styles.inputHidden}
                                    type={questions[3].inputType}
                                    id={questions[3].choices[0].value}
                                    placeholder={questions[3].placeholder}
                                    value={questions[3].choices[0].value}
                                    {...register(questions[3].question, { required: '' })}
                                />
                                <label
                                    className={styles.multipleInputLabel}
                                    htmlFor={questions[3].choices[0].value}
                                >
                                    {questions[3].choices[0].value}</label>


                                <input
                                    className={styles.inputHidden}
                                    type={questions[3].inputType}
                                    id={questions[3].choices[1].value}
                                    placeholder={questions[3].placeholder}
                                    value={questions[3].choices[1].value}
                                    {...register(questions[3].question, { required: '' })}
                                />
                                <label
                                    className={styles.multipleInputLabel}
                                    htmlFor={questions[3].choices[1].value}
                                >
                                    {questions[3].choices[1].value}</label>
                            

                            {renderNextButton()}

                        </section>
                    )}

                    {formStep === 4 && (
                        <section className={styles.section}>
                            <h1>What is your project&apos;s budget?</h1>
                            
                                <input
                                    className={styles.inputHidden}
                                    type={questions[4].inputType}
                                    id={questions[4].choices[0].value}
                                    placeholder={questions[4].placeholder}
                                    value={questions[4].choices[0].value}
                                    {...register("What is your project&apos;s budget?", { required: '' })}

                                />
                                <label
                                    className={styles.multipleInputLabel}
                                    htmlFor={questions[4].choices[0].value}
                                >
                                    {questions[4].choices[0].value}</label>


                                <input
                                    className={styles.inputHidden}
                                    type={questions[4].inputType}
                                    id={questions[4].choices[1].value}
                                    placeholder={questions[4].placeholder}
                                    value={questions[4].choices[1].value}
                                    {...register("What is your project&apos;s budget?", { required: '' })}

                                />
                                <label
                                    className={styles.multipleInputLabel}
                                    htmlFor={questions[4].choices[1].value}
                                >
                                    {questions[4].choices[1].value}</label>


                                <input
                                    className={styles.inputHidden}
                                    type={questions[4].inputType}
                                    id={questions[4].choices[2].value}
                                    placeholder={questions[4].placeholder}
                                    value={questions[4].choices[2].value}
                                    {...register("What is your project&apos;s budget?", { required: '' })}

                                />
                                <label
                                    className={styles.multipleInputLabel}
                                    htmlFor={questions[4].choices[2].value}
                                >
                                    {questions[4].choices[2].value}</label>


                                <input
                                    className={styles.inputHidden}
                                    type={questions[4].inputType}
                                    id={questions[4].choices[3].value}
                                    placeholder={questions[4].placeholder}
                                    value={questions[4].choices[3].value}
                                    {...register("What is your project&apos;s budget?", { required: '' })}

                                />
                                <label
                                    className={styles.multipleInputLabel}
                                    htmlFor={questions[4].choices[3].value}
                                >
                                    {questions[4].choices[3].value}</label>
                            

                            {renderNextButton()}
                        </section>
                    )}

                    {formStep === 5 && (
                        <section className={styles.section}>
                            <h1>{questions[5].question}</h1>
                            <label htmlFor={questions[5].question}>{questions[5].choices[0].value}*</label>
                            <input
                                type={questions[5].inputType}
                                id={questions[5].question}
                                placeholder={questions[5].placeholder}
                                {...register(questions[5].choices[0].value, { required: true })}
                            />

                            <label htmlFor={questions[5].question}>{questions[5].choices[1].value}*</label>
                            <input
                                type={questions[5].inputType}
                                placeholder={questions[5].placeholder}
                                {...register(questions[5].choices[1].value, { required: true })}
                            />

                            <label htmlFor={questions[5].question}>{questions[5].choices[2].value}*</label>
                            <input
                                type={questions[5].inputType}
                                placeholder={questions[5].placeholder}
                                {...register(questions[5].choices[2].value, { required: true, pattern: /^\S+@\S+$/i })}
                            />
                            {renderNextButton()}

                        </section>

                    )}
                    {formStep === 6 && (
                        <section className={styles.section}>
                            <h1>Thank you!</h1>
                            <p>Your submission has been received.</p>
                            <p>We will be in touch shortly.</p>
                        </section>
                    )}
                </form>
            </main>

        </>
    )
}


