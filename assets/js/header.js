
const mainHeaderSearchInputEle = $("#mainHeaderSearchInput");
const mainHeaderSearchIconEle = $("#mainHeaderSearchIcon");


mainHeaderSearchInputEle.focus(function(){
    const inputZIndex = mainHeaderSearchInputEle.css("z-index");
    const iconZIndex = parseInt(inputZIndex) + 1;
    console.log("inputZIndex: ", inputZIndex);
    console.log("iconZIndex: ", iconZIndex);
    mainHeaderSearchIconEle.css("z-index", iconZIndex);
})
