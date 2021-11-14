import {Link} from "react-router-dom"
import {useState, useEffect} from "react"


const Index = (props) =>{
    
    const [editForm, setEditForm] = useState({
        title: "",
        url: ""
    })

    const handleChange = (event) =>{
        const newForm = {...editForm}
        newForm[event.target.name] = event.target.value
        setEditForm(newForm)
    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.createBookmark(editForm)
    }

    const loaded = () =>{
        return props.bookmark.map((bookmark)=>{
            return <div className="links" key={bookmark._id}>
                <Link to={`bookmark/${bookmark._id}`}>
                    <h1>{bookmark.title}</h1>
                </Link>
                <div className="buttons">
                <Link to={`bookmark/${bookmark._id}`}>
                <button>Edit</button>
                </Link>
                <a href={bookmark.url}><button>Visit</button></a>
                </div>
            </div>
        })
    }

    const loading = () =>{
        return <h1>Loading...</h1>
    }
     
    return <section>
    <form className="create" onSubmit={handleSubmit}>
        <h1>Create a Bookmark!</h1>
        <input type="text" name="title" value={editForm.title} placeholder="Title" onChange={handleChange}/>
        <input type="text" name="url" value={editForm.url} placeholder="https://" onChange={handleChange}/>
        <input className="createButton" type="submit" value="Create New Bookmark"/>
    </form>
    <div className="bookmarks">
    {props.bookmark ? loaded() : loading()}
    </div>
    </section>
}

export default Index