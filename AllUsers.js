import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../Redux/Slices/UserSlice';



const AllUsers = () => {
const dispatch=useDispatch();
const { allUsers } = useSelector((state) => state.userAuth);
// const { userLoggedIn} = useSelector((state) => state.userAuth);

const { userAuth } = useSelector((state) => state);
useEffect(()=>{
    dispatch(getAllUsers())

},[dispatch])
  return (
    <div>
        <h2 style={{color:'blue'}}>All Users:</h2> 
      {userAuth?.userLoggedIn?.found
        ? allUsers?.map((el) => <p> {el.name} </p>)
        : <h2 style={{color:'red'}}>"You need to Login first to see our customers"</h2>}
    </div>
  )
}
export default AllUsers;