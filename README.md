# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Add at least 3 Project features.
3 Project features:
1.Responsive Design
2.User Notifications and Alerts
3.Fake Data Generation 

Discuss how you managed the state in your assignment project.
Answer: Here's a breakdown of how state is managed in my component:

When the component mounts, the useEffect hook fetches data from a JSON file and updates the allCourses state variable with the fetched data.

When a course is selected, the handleSelectedCourse function is called. It checks if the selected course already exists in the selectCourse array to prevent duplicates. If it's a new course, it calculates the new total credits, total price, and remaining credits based on the selected course's credit and price. Then, it updates the respective state variables (totalCredit, totalPrice, remaining), and finally, it adds the selected course to the selectCourse array.

Toast messages are displayed to provide feedback to the user based on certain conditions like exceeding the credit limit or adding a course more than once.
