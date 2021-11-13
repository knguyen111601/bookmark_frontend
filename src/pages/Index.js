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
            return <div key={bookmark._id}>
                <Link to={`bookmark/${bookmark._id}`}>
                    <h1>{bookmark.title}</h1>
                </Link>
                <Link to={`${bookmark.url}`}>
                    <h3>{bookmark.url}</h3>
                </Link>
            </div>
        })
    }

    const loading = () =>{
        return <h1>Loading...</h1>
    }
     
    return <section>
    <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={editForm.title} placeholder="title" onChange={handleChange}/>
        <input type="text" name="url" value={editForm.url} placeholder="url" onChange={handleChange}/>
        <input type="submit" value="Create New Bookmark"/>
    </form>
    {props.bookmark ? loaded() : loading()}
    </section>
}

export default Index