const ulList = document.querySelector('#categories');
const itemsCounter = document.querySelectorAll(".item").length;

console.log("Number of categories:", itemsCounter);


const itemsArray = document.querySelectorAll(".item");

itemsArray.forEach(item => {
    const categoryName = item.firstElementChild.textContent;
    const categoriesCounter = item.lastElementChild.children.length;

    console.log("Category:", categoryName);
    console.log("Elements:", categoriesCounter);
});
