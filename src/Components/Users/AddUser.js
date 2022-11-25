import React,{useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser=(props)=>{
    const [enteredUsername,setEnteredUsername]=useState('')
    const [enteredAge,setEnteredAge]=useState('')

    const [error,setError]=useState()


    const addUserHandler=(event)=>{
        event.preventDefault()

        if (enteredUsername.trim().length===0 || enteredAge.trim().length===0){
            setError({title:'Fields is/are empty',message:'Please check for empty fields'})
            return
        }
        if (+enteredAge<1){

            setError({title:'Age is invalid',message:'Age must be greater than 0'})
            return
        }

        props.onGetUserData(enteredUsername,enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const onUsernameChangeHandler=(e)=>{
        setEnteredUsername(e.target.value)
    }

    const onAgeChangeHandler=(e)=>{
        setEnteredAge(e.target.value)
    }

    const ErrorShowState=()=>{
        setError(null)
        
    }

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} modalShowHandler={ErrorShowState}></ErrorModal>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>

            <label htmlFor="username">Username:</label>
            <input id='username' type='text' value={enteredUsername} onChange={onUsernameChangeHandler}></input>
            <label htmlFor="age">Age (years) </label>
            <input id='age' type='number' value={enteredAge} onChange={onAgeChangeHandler}></input>
            <Button className={classes.button} type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser