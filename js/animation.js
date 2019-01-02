function openMenu() {
	var navLinks = document.getElementById("navLinks");
	if (navLinks.className === "navLinks") {
		navLinks.className += " mobileNavLinks";
	} else {
		navLinks.className = "navLinks";
	}
}