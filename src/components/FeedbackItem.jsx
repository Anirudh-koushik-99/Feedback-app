import { FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";


function FeedBackItem({ item }) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button 
        onClick={() => deleteFeedback(item.id)} 
        className="close">
          <FaTimes color="purple" />
      </button>
      <button 
        onClick={() => editFeedback(item)}
        className="edit">
          <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedBackItem.protoTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedBackItem;
