function scroll() {

}

function add_scroll_css(css_class) {
	document.querySelector(css_class).forEach((ele)=>{
		ele.onwheel = scroll;
	});
}
