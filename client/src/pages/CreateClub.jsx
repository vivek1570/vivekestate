import React, { useState } from 'react';

const CreateClub = () => {

    const [formdata,setformdata]= useState({
        name:"",
        members:0,
        place:"",
        registered:false
    })
    const initialFormState = {
        name: '',
        members: '',
        place: '',
        registered: false,
      };

   const handleSubmit= async (e)=>{
    e.preventDefault();
    try{
        const res= await fetch("/api/clubs/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formdata)
        })
        const data=await res.json();
        setformdata(initialFormState)
        if(data.success===false)
        {
            console.log("an error occured here data.success is false");
        }
    }   
    catch(error)
    {
        next(error);
    }
   }
const handleChage=(e)=>{
    if(e.target.id=="reg")
    {
        setformdata({...formdata,[e.target.id]:e.target.checked});
    }
    else{
        setformdata({...formdata,[e.target.id]:e.target.value});
    }
}
    return (
            <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Club
      </h1>
      <form
       onSubmit={handleSubmit} 
      className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            maxLength="62"
            minLength="10"
            required
            value={formdata.name}
            onChange={handleChage}
          />
          <input
            type="number"
            placeholder="Members"
            className="border p-3 rounded-lg"
            id="members"
            required
            value={formdata.members}
            onChange={handleChage}
            />
          <input
            type="text"
            placeholder="Place"
            className="border p-3 rounded-lg"
            id="place"
            required
            value={formdata.place}
            onChange={handleChage}
          />
          <div className="flex gap-2">
              <input
                type="checkbox"
                id="reg"    
                className="w-5"
                onChange={handleChage}
              />
              <span>Registered?</span>
            </div>
            <button
            
            className="bg-slate-700 p-3 rounded-lg hover:opacity-95 disabled:opacity-80  text-white uppercase"
          >
            Create List
          </button>
            </div>
            </form>
        </main>
    );
}

export default CreateClub;
