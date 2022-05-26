document.addEventListener("DOMContentLoaded", function() {		
	document.querySelectorAll(".card").forEach((Ele)=>{
		Ele.onclick = ()=>{
		let new_location = Ele.getAttribute("href");
		if (new_location != "") {
			location.href = new_location;
			}
		};		
	});
});


