import "./TaskViewer.css";
import TaskCard from "./task-card/TaskCard"

export default function TaskViewer() {
    const data = [{
            id: "T-1",
            name: "Create a Design System for Enum Workspace.",
            status: "Todo",
            dueDate: new Date(2022, 5, 23),
        },
        {
            id: "T-2",
            name: "12 Create a Design System for Enum Workspace.",
            status: "In Progress",
            dueDate: new Date(2022, 7, 24),
        },
    ];

    return ( <
        div class = "task-viewer-container" >
        Task Viewer <
        TaskCard id = {
            data[0].id
        }
        status = {
            data[0].status
        }
        name = {
            data[0].name
        }
        dueDate = {
            data[0].dueDate
        }
        /> <
        TaskCard id = {
            data[1].id
        }
        status = {
            data[1].status
        }
        name = {
            data[1].name
        }
        dueDate = {
            data[1].dueDate
        }
        /> <
        /div>
    );
}