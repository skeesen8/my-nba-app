// import React from "react";


// function LikeButton({likes,id,key,onNewLegend}){
//     // const [vote,setVote]=useState(likes)
//     // function handleVote(){
//     //     console.log("click")
//     //     setVote(likes +1)

//         function handleVote() {
//             console.log(key)
//             fetch(`http://localhost:8003/Legends/${id}`, {
//               method: "PATCH",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({ likes: likes + 1 }),
//             })
//               .then((resp) => resp.json())
//               .then((updatedLikes) => onNewLegend(updatedLikes));


//     }

//     return(
//         <p>
//             <button onClick={handleVote}>Votes</button> {likes}        
//         </p>

        

//     )
// }

// export default LikeButton