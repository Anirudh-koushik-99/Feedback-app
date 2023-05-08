import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text:'This is feedback item 1',
            rating: 10
        },
        {
            id:2,
            text:'This is feedback item 2',
            rating: 10
        },
        {
            id:3,
            text:'This is feedback item 3',
            rating: 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item:{},
        edit: false
    })

    //ADD FEEDBACK//
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    //DELETE FEEDBACK//
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    //SET ITEM TO BE UPDATED//
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    return (
    <FeedbackContext.Provider 
        value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback, //Function that runs when the edit icon is clicked//
            feedbackEdit //Actual piece of state that holds the item and boolean
        }}
    >
            {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext;