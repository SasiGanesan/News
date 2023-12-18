import React from 'react';
import { Form,Button } from 'react-bootstrap';

const Searchbox = ({news}) => {
    const submitHandler=(e)=>{
    // const [query, setQuery] = useState("")
      e.preventDefault()
    //   setQuery(e.target.value)
    }

    return(
        <>
        <center>
       <Form id='search-btn'>
        <input type='text' placeholder='Search' onChange={e => news(e.target.value)}/>
       <span><Button type="submit" onClick={submitHandler}>Go</Button></span> 
       </Form>
       <p id='para'>TOP NEWS FROM INDIA</p>
       </center>
        </>
    )
};
    export default Searchbox;