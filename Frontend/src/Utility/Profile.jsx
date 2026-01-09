import { useNavigate } from "react-router-dom"
import {motion} from "framer-motion"
import { useUser } from "../contexts/UserContext";
import { employees } from "../utils/employees";
const Profile = ({userID=null})=>{
    const navigate = useNavigate();
    const currentUser = useUser();


    // Here to fetch user profile info with userID
    const user = employees.find(el =>el.employeeId===userID)
    const col = Object.keys(user)
    const row = Object.values(user)

    return (
        <>
        <button onClick={()=>navigate(-1)}>
            Back button
        </button>
        
        <motion.div
            initial = {{opacity:0, scale:0.8}}
            animate = {{opacity: 1, scale:1}}
            className="w-full flex justify-center"
        >
            <motion.div className="border-2 border-gray-300 rounded-2xl flex flex-col items-center w-[50%]">
                <motion.img
                src = {user.profilePicture}
                alt={`${user.firstName} ${user.lastName}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                    width:"150px",
                    height:"150px",
                    borderRadius:"50%",
                    objectFit:"cover"
                }}

            />
            {
                col.map((el,index)=><>
                {
                    el!=="profilePicture" &&
                    <div key = {el} className=" p-2 ">
                    {/* <p key={el} className="text-lg border-b border-transparent hover:border-gray-200">{`${el.replace(/([A-Z])/g, ' $1').toUpperCase()}: ${<span>row[index]</span>}`}</p> */}
                    <label className="border-b border-transparent font-bold text-gray-500 underline hover:border-gray-200 mr-4">{`${el.replace(/([A-Z])/g, ' $1').toUpperCase()}: `}</label>
                        <span>{row[index]}</span>
                    {/* <p key={row[index]}>{row[index]}</p> */}
                    </div>
                }
                </>)
            }

            </motion.div>


                

        </motion.div>
        </>
    )
}

export default Profile