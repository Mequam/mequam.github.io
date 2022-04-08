function test() {
	console.log("works :D");
}
window.onload = ()=> {
	document.getElementById("main-menu").addEventListener('click',dropMainMenu);
}
function scroll() {

}
function add_scroll_css(css_class) {
	document.querySelector(css_class).forEach((ele)=>{
		ele.onwheel = scroll;
	});
}
//this function drops the main menu
function dropMainMenu() {
	let mainMenu = document.getElementById("main-menu");
	if (mainMenu.classList.contains("down")) {
		mainMenu.classList.remove("down");
	}
	else {
		mainMenu.classList.add("down");
	}
}
