import PropTypes from 'prop-types';

function Cart({selectedActors, totalCost, totalRemaining}) {
  return (
    <div className='text-center md:text-left'>
      <h3 className='text-xl font-semibold'>Total Actors: {selectedActors.length}</h3>
      <h4>Remaining: {totalRemaining}</h4>
      <h4>Total Cost: {totalCost}</h4>
      {
        selectedActors.map((actor, idx) => <div key={idx} 
          className='flex items-center bg-[#4a4848cc] p-2.5 my-2 rounded-md mx-auto w-[250px]'>
          <img className='w-20' src={actor.image} alt="" /> 
          <h3 className='pl-2'>{actor.name}</h3>
        </div>)
      }
    </div>
  )
}

Cart.propTypes = {
  selectedActors: PropTypes.array,
  totalCost: PropTypes.number,
  totalRemaining: PropTypes.number,
}

export default Cart
