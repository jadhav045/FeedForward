// export default function Sidebar() { 
//     return <aside 
//         className="w-1/3 px-8 py-16 md:w-72 rounded-r-xl" 
//         style={{ 
//             backgroundColor: "var(--leftsidebar-bg-color)",
//             color: "var(--leftsidebar-text-color)"
//         }}
//     >
//         <h2 className="mb-8 font-bold uppercase md:text-xl"
//             style={{ color: "var(--leftsidebar-heading-color)"}}
//         >
//           Activity Center
//         </h2>
//     </aside>
// }
import React from 'react'

const Sidebar = () => {
  return (
        <div className="w-1/3 px-8 py-16 md:w-72 rounded-r-xl" 
        style={{ 
            backgroundColor: "var(--leftsidebar-bg-color)",
            color: "var(--leftsidebar-text-color)"
        }} >
            
    
        <h2 className="mb-8 font-bold uppercase md:text-xl"
            style={{ color: "var(--leftsidebar-heading-color)"}}
        >
          Activity Center
        </h2>
        </div>
        
    
    
  )
}

export default Sidebar