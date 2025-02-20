import React,  { useState }from "react";
import "./CreateTaskForm.css";

const CreateTaskForm = (props) => {

    const [taskName, setTaskName] = useState("");
    const [dueDate, setdueDate] = useState("");
    const [taskDetails, settaskDetails] = useState("");

    // const [formData, setFormData] = useState({
    //     taskName: "",
    //     dueDate: "",
    //     taskDetails: "",
    // });

    const handleNameChange = (event) => {
        setTaskName(event.target.value);
    };

    //     setFormData((prevState) => ({
    //         ...prevState,
    //         taskName: event.target.value,
    //     }));
        
   
    const handleDateChange = (event) => {
        setdueDate(event.target.value);
    };
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         dueDate: event.target.value,
    //     }));
        

    const handleDetailsChange = (event) => {
        settaskDetails(event.target.value);
    };
    //     setFormData((prevState) => ({
    //         ...prevState,
    //         taskDetails: event.target.value,
    //     }));
        
  

    // const handleInputChange = (event) => {
    //     setFormData((prevState) => (
    //         {
    //         ...prevState,
    //         [event.target.name]: event.target.value,    
    //         }
    //     ));
    // }

    const resetForm = () => {
        setTaskName("");
        setdueDate("");
        settaskDetails(""); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            name: taskName,
            dueDate: dueDate,
            taskDetails: taskDetails,
            status: "To do",
        }

        props.addNewTask(newTask);
        console.log("newTask ", newTask);
        resetForm();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label className="label-md"> Task Name</label>
                    <input 
                        value= {taskName}
                        name="taskName"
                        onChange={handleNameChange}
                        className="input-primary" 
                        type="text" />
                </div>

                <div className="form-row">
                    <label className="label-md"> Due Date</label>
                    <input 
                        value= {dueDate}
                        name="dueDate"
                        onChange={handleDateChange}
                        className="input-primary" 
                        type="date" />
                </div>

                <div className="form-row">
                    <label className="label-md"> Task Details</label>
                    <textarea 
                        value= {taskDetails}
                        name="taskDetails"
                        onChange={handleDetailsChange}
                        className="input-primary" 
                        cols="30" 
                        rows="10">
                    </textarea>
                </div>

                <button className="button-primary" type="submit">Create Task</button>
            </form>
        </div>
    )
}

export default CreateTaskForm ;