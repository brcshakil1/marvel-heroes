// import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


function Home() {
    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);
    const [totalRemaining, setTotalRemaining] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const budget = 1300000;

    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setAllActors(data))
    },[])

    const handleSelectActor = actor => {
        const isExist = selectedActors.find(item => item.id === actor.id);
        let count = actor.salary;
        if(isExist) {
            return alert("Already Booked")
        } else {
            selectedActors.forEach(item => {
                count+= item.salary
            })
            const totalBudgetRemaining = budget - count;
            if(count > budget) {
                return alert('Your Budget is over. I cannot book anymore actor')
            }
            setTotalCost(count);
            setTotalRemaining(totalBudgetRemaining)
            setSelectedActors([...selectedActors, actor])
        }
    }

  return (
    <div className="container mx-auto pt-20">
        <div className='flex flex-col-reverse md:flex-row'>
            {/* card container*/}
            <div className='w-full md:w-2/3 md:flex flex-wrap justify-center gap-5 mb-6'>
                {
                    allActors.map(actor => <div key={actor.id} className="border-2 mx-auto mb-4 border-gray-300 w-[250px] h-[340px] rounded-sm text-center space-y-1">
                                <img className='w-full rounded-md' src={actor.image} alt="" />
                                <h2 className='text-3xl font-semibold'>{actor.name}</h2>
                                <p className='font-semibold'>Role: {actor.role}</p>
                                <div className='flex justify-between items-center px-3'>
                                    <p>Salary: {actor.salary}$</p>
                                    <p>Age: {actor.age}</p>
                                </div>
                                <button 
                                className='bg-blue-500 py-2 px-6 rounded-md' 
                                onClick={() => handleSelectActor(actor)}
                                >Select</button>
                            </div>)
                }
            </div>
            {/* cart */}
            <div className='w-full md:w-1/3 mx-auto pb-10 md:pl-12'>
               <div className='mb-5'>
                <Cart 
                    selectedActors={selectedActors}
                    totalCost={totalCost}
                    totalRemaining={totalRemaining}
                    ></Cart>
               </div>
            </div>
        </div>
    </div>
  )
}

// Home.propTypes = {}

export default Home
