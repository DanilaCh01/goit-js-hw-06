const categoriesCounter = document.querySelectorAll(".item").length;
console.log("Number of categories:", categoriesCounter);

const categoriesArray = document.querySelectorAll(".item");
categoriesArray.forEach(category => {
    const categoryName = category.firstElementChild.textContent;
    const listCounter = category.lastElementChild.children.length;
    
    console.log("Category:", categoryName);
    console.log("Elements:", listCounter);
});
