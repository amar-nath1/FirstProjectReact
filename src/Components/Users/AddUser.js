import React,{useState,useRef} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import ErrorModal from "../UI/ErrorModal";

const AddUser=(props)=>{

    const nameInputRef=useRef()
    const ageInputRef=useRef()
    const collegeNameInputRef=useRef()
    const [error,setError]=useState()
    const addUserHandler=(event)=>{
        event.preventDefault()
        const inputName=nameInputRef.current.value
        const inputAge=ageInputRef.current.value
        const collegeName=collegeNameInputRef.current.value

        if (inputName.trim().length===0 || inputAge.trim().length===0 || collegeName.trim().length===0){
            setError({title:'Fields is/are empty',message:'Please check for empty fields'})
            return
        }
        if (+inputAge<1){

            setError({title:'Age is invalid',message:'Age must be greater than 0'})
            return
        }

        props.onGetUserData(inputName,inputAge,collegeName)
       
        nameInputRef.current.value=''
        ageInputRef.current.value=''
        collegeNameInputRef.current.value=''

        
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
            <input ref={nameInputRef} id='username' type='text' ></input>
            <label htmlFor="age">Age (years) </label>
            <input ref= {ageInputRef} id='age' type='number'></input>
            <label htmlFor="collegeName">College Name</label>
            <input ref= {collegeNameInputRef} id='collegeName' type='text'></input>
            <Button className={classes.button} type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser