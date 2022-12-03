import React from 'react'
import Book from './Book'

function RenderingLists() {
    // const bookList = [
    //     'to kill a mockingbird',
    //     'the great gatsby',
    //     'the catcher in the rye'
    // ]

    const books = [
    {
        title: 'to kill a mocking bird',
        author: 'harper lee',
        pages: '234',
    },
    {
        title: 'the great gatsby',
        author: 'fitzgerald',
        pages: '231',
    },
    {
        title: 'the catcher in the rye',
        author: 'salinger',
        pages: '254',
    },
    ]
  return (
    <div>
        {books.map(book => {
            return (
            <div key={book.title}>
                <h5>{book.title}</h5>
                <p>{book.author}</p>
                <p>{book.pages}</p>
            </div>
            )  
        })}
        <hr></hr>
        {
            books.map(books => {
                return <Book key={books.title} book={books}/>
            })
        }
    </div>
  )
}

export default RenderingLists