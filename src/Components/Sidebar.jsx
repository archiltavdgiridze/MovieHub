import React from 'react'


const Sidebar = () => {

  // function setActive(element) {
  //   // remove the active class from all li elements
  //   var liElements = document.querySelectorAll("li");
  //   liElements.forEach(function (li) {
  //     li.classList.remove("active");
  //   });

  //   // add the active class to the clicked li element
  //   element.classList.add("active");
  // }


  return (
    // <div className='navbar'>
    <div className="sidebar_list">
      <h2>MovieHub</h2>
      <ul>
        <li className="active" onclick={"setActive(this)"}>
          Main page
        </li>
        <li onclick={"setActive(this)"}>Most liked</li>
        <li onclick={"setActive(this)"}>All Movies</li>
        <li onclick={"setActive(this)"}>Contact us</li>
      </ul>
    </div>
    //</div>
  );
}




export default Sidebar