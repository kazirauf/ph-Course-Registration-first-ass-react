import { useEffect, useState } from "react";
import Courses from "../Courses/Courses";
import SelectCourse from "../SelectCourse/SelectCourse";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [allCourses, setAllCourses] = useState([])
    const [selectCourse, setSelectCourse] = useState([])
    const [remaining, setRemaining] = useState(20)
    const [totalCredit,setTotalCredit] = useState(0)
    const [totalPrice, setTotalPrice]  = useState(0)

    useEffect(() => {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setAllCourses(data))
    }, [])
    
    const handleSelectedCourse = (course) => {
   const isExist = selectCourse.find(c => c.id === course.id)

   let credit = course.credit;
   let price = course.price;
   if(isExist){
    return toast.error("Can't be added more than once")
   }
   else{
     selectCourse.forEach((i) => {
        credit += i.credit;
        price += i.price;
       
     })
     if(credit > 20){
         toast.warn("You must not exceed a maximum of 20 credit limit.",{
            position: "top-center",
        })
     }
     const totalRemaining = 20 - credit;
     if(totalRemaining < 0){
        return toast.warn("Remaining cannot be less than 0",{
            position: "bottom-center",
        })
     }
     setTotalPrice(price)
       setTotalCredit(credit)
       setRemaining(totalRemaining)     
    setSelectCourse([...selectCourse, course])
   }

        
    }
    return (
        <div className="lg:flex justify-between ml-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {
                allCourses.map(course => <Courses 
                    key={course.id} 
                    course={course}
                    handleSelectedCourse={handleSelectedCourse}
                    ></Courses>)
            }
          </div>
       <SelectCourse 
      totalPrice={totalPrice}
       selectCourse={selectCourse}
       remaining={remaining}
       totalCredit={totalCredit}
       ></SelectCourse>
       <ToastContainer/>
        </div>
    );
};

export default Home;