
const SelectCourse = ({selectCourse, remaining, totalCredit, totalPrice}) => {
    console.log(selectCourse);
    return (
        <div className="bg-white h-96 rounded-lg px-5 pt-5 w-96">
        <h2 className="border-b-2 border-gray-400 w-64 pb-5 text-[18px] text-blue-500 font-bold">Credit Hour Remaining {remaining}hr</h2>
           <h2 className="font-bold text-xl mt-5">Course Name</h2>
           <ol className="border-b-2 border-gray-400 w-64 pb-10 ml-5 mt-7" >
              {
                selectCourse.map(course => <li className="text-[16px] text-gray-400 font-bold list-decimal" key={course.id}>{course.title}</li>)
              }
           </ol>
           <h2 className="text-[18px] font-bold mt-5 border-b-2 border-gray-400 w-64 pb-5">Total Credit Hour: {totalCredit}hr</h2>
           <h2 className="text-[18px] font-bold mt-5 ">Total Price : {totalPrice} USD</h2>
        </div>
    );
};

export default SelectCourse;