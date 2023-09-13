// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'
import panther from '../../images/black-panther.jpg'


function Home() {
    const [] = useState([]);

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])


  return (
    <div className="container mx-auto pt-20">
        <div>
            {/* card */}
            <div className="border-2 border-gray-300 w-[250px] h-[320px] rounded-lg text-center space-y-1">
                <img className='w-full rounded-md' src={panther} alt="" />
                <h2 className='text-3xl font-semibold'>Black Panther</h2>
                <p>Role: King of Wakanda</p>
                <div className='flex justify-between items-center px-7'>
                    <p>Salary: 2000</p>
                    <p>King</p>
                </div>
                <button className='bg-blue-500 py-2 px-6 rounded-md'>Select</button>
            </div>
        </div>
    </div>
  )
}

// Home.propTypes = {}

export default Home
