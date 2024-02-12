const arrow_btn = document.querySelector(".arrow-btn");
const arrow_asideList = document.querySelector(".asideList"); 

const toggleAssidebar = () => {
    arrow_asideList.classList.toggle("active");
};

arrow_btn.addEventListener("click", () => toggleAssidebar());
