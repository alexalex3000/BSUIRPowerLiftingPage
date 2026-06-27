import styles from "../AddField/AddField.module.scss";

const SubmitButton = (props) => {
    const {
        formRef,
        formSubmit,
    } = props;

    return (
        <button onClick={(e) => formSubmit(e,formRef)} className={styles.submitFormButton}>ADD PROGRAM</button>
    )
}

export default SubmitButton;