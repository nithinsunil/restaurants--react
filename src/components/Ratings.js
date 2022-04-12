import React from 'react'

function Ratings({data}) {
  return (
    <div>
        {data.map(item=> (
            <>
            <h2 className="py-4">{item.name}: {item.rating} &#9733;</h2>
            <h5>{item.date}</h5>
            <p>{item.comments}</p>
            </>
        ))}
    </div>
  )
}

export default Ratings