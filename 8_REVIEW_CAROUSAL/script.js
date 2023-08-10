let rev = 0;
re(rev);
function previousReview() {
	rev = rev - 1;
	re(rev);
}
function nextReview() {
	rev = rev + 1;
	re(rev);
}
function re(review) {
    
	let reviews = document.getElementsByClassName("r");
    if(review<reviews.length && review>=0){
	for (let i = 0; i < reviews.length; i++) {
		reviews[i].style.display = "none";
	}
	reviews[review].style.display = "flex";}
}
