import React, {useState} from 'react'
import "./style.css"
import Menu from './menuApi.js';
import MenuCard from './MenuCard';
import Navbar from './Navbar';
// import {DropDownList} from "@progress/kendo-react-dropdowns";

const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category;
        })
    )
];

console.log(uniqueList);

const Restru = () => {
    const [menuData, setmenuData] = useState(Menu);

    const filterItem= (category) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setmenuData(updatedList);
    };

    // console.log(menuData);
    // return (
    //     <div>
    //         <Navbar filterItem = {filterItem}/>
    //         <div className="droptitle">
    //             <div>T-Shirt Size</div>
    //             <DropDownList data = {sizes} />
    //         </div>
    //         <MenuCard menuData = {menuData} />
    //     </div>
    // )
};

export default Restru;