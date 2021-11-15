import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react"

const Show = (props) => {
  // grab the navigate function
  const navigate = useNavigate()
  // get the params object
  const params = useParams();
  // grab the id from params
  const id = params.id;
  // grab bookmark from props
  const bookmark = props.bookmark;
  // create state for form
  const [editForm, setEditForm] = useState({})
  // useEffect to set state to the existing bookmark, when the data is available
  useEffect(() => {
      if(props.bookmark){
          const specificBookmark = bookmark.find((b) => b._id === id);
          setEditForm(specificBookmark)
      }
  }, [props.bookmark])

  if (props.bookmark) {
    // grab the target bookmark from the bookmark array
    const specificBookmark = bookmark.find((b) => b._id === id);
    
    // handleChange function for form
    const handleChange = (event) => {
        // create a copy of the state
        const newState = {...editForm}
        // update the newState
        newState[event.target.name] = event.target.value
        // update the state
        setEditForm(newState)
    }

        // handleSubmit for form
        const handleSubmit = (event) => {
            // prevent the refresh
            event.preventDefault()
            // pass the form data to updateBookmark
            props.updateBookmark(editForm, id)
            // redirect bookmark back to index
            navigate("/")
        }

        
    const removeBookmark = (event) => {
        event.preventDefault()
        props.deleteBookmark(id)
        navigate("/")
    }

    const form = (
        <form className="editForm" onSubmit={handleSubmit}>
          <input
            type="text"
            value={editForm.title}
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
          <input
            type="text"
            value={editForm.url}
            name="url"
            placeholder="URL"
            onChange={handleChange}
          />
          <input type="submit" value="Update Bookmark" />
        </form>
      );

    return (
      <div className="bookmark">
        <div className="showCard">
        <h1>{specificBookmark.title}</h1>
        <h2>URL : <a href={specificBookmark.url}>{specificBookmark.url}</a></h2>
        </div>
        {form}
        <button className="deleteButton" onClick={removeBookmark}>Delete Bookmark</button>
      </div>
    );
  } else {
    return <h1>No Bookmark</h1>;
  }
};

export default Show;