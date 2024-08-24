import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const Clubs = () => {
    const [clubdata,setclubdata]=useState([]);

    useEffect(()=>{
            const fetchData=async()=>{
                const res=await fetch("/api/clubs/list");
                const data=await res.json();
                setclubdata(data);
            }
            fetchData();
    },[])

    const onClickBtn=()=>{
        
    }

    return (
            // {/* here we
            //     1. to list all the clubs
            //     2. we can add the clubs in here
            //     in first
            //         when clik on create a club should add a club post there so we can direct it to a new page where take the 
            //         things need for creating a club list
            //         or we can implement here itself
            //         1. need a form which takes 
            //             1. name of the club
            //             2. the place where the club is situated
            // */}
           <>
            <div className="flex justify-center mt-6 mb-6">
  <Link
    className="bg-green-700 p-3 rounded-lg hover:bg-green-600 hover:shadow-lg disabled:opacity-80 text-center text-white uppercase transition-all duration-300 ease-in-out transform hover:scale-105"
    to="/club/create_club"
  >
    Add a new Club
  </Link>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {clubdata.map((club) => (
    <div key={club._id} className="relative border border-gray-300 p-4 rounded-lg shadow-lg">
      <button
        className="absolute top-2 right-2 bg-red-700 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
        onClick={onClickBtn}
      >
        Delete
      </button>
      <h2 className="text-xl font-bold mb-2">{club.name}</h2>
      <p className="text-gray-700">Members: {club.members}</p>
      <p className="text-gray-700">Place: {club.place}</p>
      <p className="text-gray-700">Registered: {club.registered ? 'Yes' : 'No'}</p>
      <p className="text-gray-500 text-sm">Created At: {new Date(club.createdAt).toLocaleString()}</p>
      <p className="text-gray-500 text-sm">Updated At: {new Date(club.updatedAt).toLocaleString()}</p>
    </div>
  ))}
</div>

           </>
        
    );
}

export default Clubs;
