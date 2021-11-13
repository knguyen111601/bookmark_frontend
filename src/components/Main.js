import {useEffect, useState} from "react"
import {Route, Routes} from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

const Main = (props) => {

// State to hold our list of people
    const [bookmark, setBookmark] = useState(null)

// your deployed heroku URL
const URL = "https://bookmarkd-backend-api.herokuapp.com/bookmarks/"

// function to get updated list of bookmark
const getBookmark = async () => {
    // make the api call
    const response = await fetch(URL)
    // turn the response in an object
    const data = await response.json()
    // set the state to the api data
    setBookmark(data)
}
    // function that will later be passed data from our new/create form and make the post request to create a new bookmark
  const createBookmark = async (singleBookmark) => {
    // make the post request to our API
    await fetch(URL, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singleBookmark)
    })

    // get updated list of bookmark
    getBookmark()
}

 // function to update a singleBookmark
 const updateBookmark = async (singleBookmark, id) => {
    // make the put request
    await fetch(URL + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(singleBookmark)
    })
    // update the list of bookmark
    getBookmark()
}

 // create function to delete a singleBookmark
 const deleteBookmark = async (id) => {
    // make the delete request
    await fetch(URL + id, {
        method: "delete"
    })
    // update the list of bookmark
    getBookmark()
}


  // a useEffect to make a call to getBookmark when page loads
  useEffect(() => {
    getBookmark()
}, [])



return <main>
<Routes>
    <Route path="/" element={<Index bookmark={bookmark} createBookmark={createBookmark}/>}/>
    <Route path="/bookmark/:id" element={<Show bookmark={bookmark} updateBookmark={updateBookmark} deleteBookmark={deleteBookmark}/>} />
</Routes>
</main>
}




export default Main;