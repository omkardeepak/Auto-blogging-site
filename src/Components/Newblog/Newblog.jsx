import React from "react";
import { useState } from "react";
import "./Newblog.css"
function Newblog(){
    const[blog,setBlog]=useState('');
    const[bloggerName,setBloggername]=useState('');

    function handleChangeblog(event){
        setBlog(event.target.value);
    }
    function handleChangename(event){
        setBloggername(event.target.value);
    }

    function handlesubmit(){
        console.log(blog);
        console.log(bloggerName)
    }
    return(
        <div className="base_div">
            <div className="heading">
            ⌨ Start Blogging!!!
            </div>
                <textarea type="text" name="bloginput" value={blog} placeholder="max 10 lines"  className="bloginput" onChange={handleChangeblog}/><br></br>
                <textarea type="text" name="name" value={bloggerName} placeholder="Name"  className="nameinput" onChange={handleChangename}/>
            <div><button className="submit" onClick={handlesubmit} >Submit</button></div>

        </div>
)}
export default Newblog