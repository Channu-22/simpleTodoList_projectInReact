import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";

function Main() {
    const[fname,setFname]=useState("");
    const[lname,setLname]=useState("");
    const[country,setCountry]=useState("");
    const[score,setScore]=useState("");
    const[data,setData]=useState([]);

    function handleSubmit(e){
        e.preventDefault();
        // console.log("Jai Jagannath")

        const obj={
            id:Date.now(),
            name:fname+ " " + lname,
            country:country,
            score:score,
        }
        setData((prev) => {
            const newData=[...prev,obj];
            return newData.sort((a,b) => b.score-a.score)
            
        });
        setFname("");
        setLname("");
        setCountry("");
        setScore("");
    }
    // console.log(data)

    function handleDelete(id){
        setData(
            data.filter((obj) => {
            return obj.id !== id;
        })
        )
    }

    function modifyScore(id,sign){

        setData(
            data.map((obj) => {
                return obj.id === id ? {
                    ...obj,score: sign === "+" ? Number(obj.score) + 5 :Number(obj.score) - 5,
                }
                : obj
            })
        )

        setData((prev) => {
            const newData=[...prev];
            return newData.sort((a,b) => b.score-a.score)
            
        });

        // // setData(
        //     data.map((obj) => {
        //      return obj.id == id ? {
        //         ...obj,score: sign === "+" ? Number(obj.score) + 5 : Number(obj.score) - 5,
        //      } : obj;
        // })
        // )
        
    }

  return (
   <>
   <div className="w-full flex justify-center my-6">
  <h1 className="text-center font-bold text-2xl text-[#212121]">
    🏆LEADERBOARD🏆
  </h1>
</div>



   <form action="" className="flex flex-col border-none bg-transparent lg:flex-row lg:bg-green-300 gap-3 justify-center items-center mt-5 w-5xl border-2 rounded-3xl border-transparent  m-auto py-2 px-4 " onSubmit={handleSubmit}>

    <input type="text" 
     placeholder="First Name..."  id="" 
     value={fname} 
     onChange={(e) => setFname(e.target.value)}
     className="w-[200px] py-2 px-4 rounded-lg focus:outline-none focus:ring-2 border-2  focus:ring-blue-500 focus:border-transparent placeholder:text-[#212121]"
    />

    <input type="text" 
     placeholder="Last Name..." name="" id="" 
     value={lname} 
     onChange={(e) => setLname(e.target.value)}
     className="w-[200px] py-2 px-4 rounded-lg focus:outline-none focus:ring-2 border-2  focus:ring-blue-500 focus:border-transparent placeholder:text-[#212121]"
    />
    
    <select value={country} onChange={(e) => setCountry(e.target.value)}
        className="w-[200px] py-2 px-4 rounded-lg focus:outline-none focus:ring-2 border-2  focus:ring-blue-500 focus:border-transparent">
        <option value="" >Select Country</option>
        <option value="India">India</option>
        <option value="Austrailia">Austrailia</option>
        <option value="England">England</option>
        <option value="Newzealand">Newzealand</option>
        <option value="WestIndies">WestIndies</option>
        <option value="SouthAfrica">SouthAfrica</option>
    </select>

    <input type="text" 
     placeholder="Enter a Score..." name="" id="" 
     value={score} 
     onChange={(e) => setScore(e.target.value)} 
     className="w-[200px] py-1.5 px-3 border-2  rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-[#212121]"
    />

    <button type="submit" className="border border-2 bg-blue-400 hover:bg-gray-300 px-4 py-2 rounded-lg border-transparent cursor-pointer">Add
    </button>
   </form>

   <div>
    {   
        data.map((obj) => {
            return (
               <div key={obj.id} className="flex gap-3 items-center justify-between my-4 w-[480px] mx-auto border-transparent py-2 px-4 rounded-2xl  bg-blue-300 hover:bg-green-400 font-[Baloo 2]">
                 <div className="flex gap-3">
                    <p>{obj.name}</p>
                    <p>{obj.country}</p>
                    <p>{obj.score}</p>
                 </div>
                 <div className="flex items-center gap-3">
                    <span className="text-red-500 text-[18px] cursor-pointer"><MdDelete onClick={() => handleDelete(obj.id)}/></span>
                    <span onClick={() => modifyScore(obj.id,"+")} className="cursor-pointer">+5</span>
                    <span onClick={() => modifyScore(obj.id,"-")} className="text-red-500 cursor-pointer">-5</span>
                 </div>
               </div>
            )
        })
    }
   </div>


   </>
  )
}

export default Main;

