import React from 'react'
import {Link} from '@reach/router'

const List = ({listState}) => {
    return(
        <div>
            {listState.map((item,i)=> (
                <div key={i}>
                    <Link to={"/" + item._id}>
                        Detail: {item.title}
                    </Link>
                   
                </div>
            
            ))}
        </div>
    )
}

export default List;