import React, {useState, useEffect} from 'react'
import API from '../API';

const api = new API();
const Home = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        api 
            .fetchItems()
            .then((response)=> {
                setItem(response.data.students);
                console.log(response.data.students)
            })
    },[])

  return (
    <div className='items'>
       {item.map((items)=> {
        let average = 
                    items.grades.reduce((acc, cur) => +acc + +cur, 0) / items.grades.length;
        return (
          <div className="flex">
            <img src={items.pic} alt="" />
            <div className="details">
              <h1>
                {items.city} {items.lastName}
              </h1>
              <div className='description'>
              <p>Email : {items.email}</p>
              <p>Company : {items.company}</p>
              <p>Skill : {items.skill}</p>
              <p>Average : {average}</p>
              </div>
            </div>
          </div>
        );
        
       })}
    </div>
  )
}

export default Home