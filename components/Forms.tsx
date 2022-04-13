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

    const renderButton = () => {
        if (formStep > questions.length - 1) {
            return (
                undefined
            )
        } else {

            return (
                <button disabled={!isValid} onClick={completeFormStep}>Next</button>
            )
        } 
    }

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

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors, isValid }, // catch error messages
    } = useForm({ mode: "all" });

    console.log(JSON.stringify(watch(), null, 2))


    return (

        <>

                <main className={styles.main}>

                    <form onSubmit={handleSubmit(submitHandler)}>
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

                                {renderButton()}
                            </section>
                        )}

                        {formStep === 1 && (
                            <section>
                                <h1>{questions[1].question}</h1>
                                <label htmlFor={questions[1].question}>{questions[1].choices[0].value}</label>
                                <input
                                    type={questions[1].inputType}
                                    id={questions[1].question}
                                    placeholder={questions[1].placeholder}
                                    {...register(questions[1].choices[0].value, { required: '' })}
                                />

                                <label htmlFor={questions[1].question}>{questions[1].choices[1].value}</label>
                                <input
                                    type={questions[1].inputType}
                                    placeholder={questions[1].placeholder}
                                    {...register(questions[1].choices[1].value, { required: '' })}
                                />

                                <label htmlFor={questions[1].question}>{questions[1].choices[2].value}</label>
                                <input
                                    type={questions[1].inputType}
                                    placeholder={questions[1].placeholder}
                                    {...register(questions[1].choices[2].value, { required: '' })}
                                />

                                <label htmlFor={questions[1].question}>{questions[1].choices[3].value}</label>
                                <input
                                    type={questions[1].inputType}
                                    placeholder={questions[1].placeholder}
                                    {...register(questions[1].choices[3].value, { required: '' })}
                                />

                                {renderButton()}
                            </section>
                        )}

                        {formStep === 2 && (
                            <section>
                                <h1>{questions[2].question}</h1>
                                <label htmlFor={questions[2].question}>{questions[2].choices[0].value}*</label>
                                <textarea
                                    // type={questions[2].inputType}
                                    id={questions[2].question}
                                    placeholder={questions[2].placeholder}
                                    {...register(questions[2].question, { required: true })}>
                                </textarea>
                                {renderButton()}
                            </section>
                        )}

                        {formStep === 3 && (
                            <section>
                                <h1>{questions[3].question}</h1>
                                <label htmlFor={questions[3].question}>{questions[3].choices[0].value}</label>
                                <input
                                    type={questions[3].inputType}
                                    id={questions[3].choices[0].value}
                                    placeholder={questions[3].placeholder}
                                    value={questions[3].choices[0].value}
                                    {...register(questions[3].question, { required: '' })}

                                />

                                <label htmlFor={questions[3].question}>{questions[3].choices[1].value}</label>
                                <input
                                    type={questions[3].inputType}
                                    id={questions[3].choices[1].value}
                                    placeholder={questions[3].placeholder}
                                    value={questions[3].choices[1].value}
                                    {...register(questions[3].question, { required: '' })}
                                />
                                {renderButton()}
                            </section>
                        )}

                        {formStep === 4 && (
                            <section>
                                <h1>What is your project&apos;s budget?</h1>
                                <label htmlFor="What is your project&apos;s budget?">{questions[4].choices[0].value}</label>
                                <input
                                    type={questions[4].inputType}
                                    id={questions[4].choices[0].value}
                                    placeholder={questions[4].placeholder}
                                    value={questions[4].choices[0].value}
                                    {...register("What is your project&apos;s budget?", { required: '' })}

                                />

                                <label htmlFor="What is your project&apos;s budget?">{questions[4].choices[1].value}</label>
                                <input
                                    type={questions[4].inputType}
                                    id={questions[4].choices[1].value}
                                    placeholder={questions[4].placeholder}
                                    value={questions[4].choices[1].value}
                                    {...register("What is your project&apos;s budget?", { required: '' })}

                                />

                                <label htmlFor="What is your project&apos;s budget?">{questions[4].choices[2].value}</label>
                                <input
                                    type={questions[4].inputType}
                                    id={questions[4].choices[2].value}
                                    placeholder={questions[4].placeholder}
                                    value={questions[4].choices[2].value}
                                    {...register("What is your project&apos;s budget?", { required: '' })}

                                />

                                <label htmlFor="What is your project&apos;s budget?">{questions[4].choices[3].value}</label>
                                <input
                                    type={questions[4].inputType}
                                    id={questions[4].choices[3].value}
                                    placeholder={questions[4].placeholder}
                                    value={questions[4].choices[3].value}
                                    {...register("What is your project&apos;s budget?", { required: '' })}

                                />
                                {renderButton()}
                            </section>
                        )}

                        {formStep === 5 && (
                            <section>
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
                                    {...register(questions[5].choices[2].value, {required: true, pattern: /^\S+@\S+$/i})}
                                />

                                {renderButton()}
                            </section>
                        )}


                    </form>
                </main>
    
        </>
    )
}


