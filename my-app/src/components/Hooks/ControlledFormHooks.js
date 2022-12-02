import React, {useState} from 'react'

function ControlledFormHooks() {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('website')
    const [comment, setComment] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, comment)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='id-name'>Your Name:</label>
                    <input 
                        value={name}
                        onChange={
                            (e) => setName(e.target.value)
                        }
                        id='id-name'    
                        name='name'
                        type="text">
                    </input>
                </div>
                <div>
                    <label htmlFor='id-category'>Query catergory:</label>
                    <select
                        id='id-category'
                        name='category'
                        value={category}
                        onChange={
                            (e) => setCategory(e.target.value)
                            }>
                        <option value='website'>Website issue</option>
                        <option value='order'>Order issue</option>
                        <option value='general'>General inquiry</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='id-comments'>Comments:</label>
                    <textarea 
                        id='id-comments'
                        name='comments'
                        value={comment}
                        onChange={
                            (e) => setComment(e.target.value)
                            }></textarea>
                </div>
                    <input type="submit" value='submit'></input>
                
            </form>
    </div>
  )
}

export default ControlledFormHooks