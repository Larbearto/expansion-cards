const panels = document.querySelectorAll('.panel') // brings all panels into the javascript with querySelectorAll()
console.log(panels)
console.log(panels[0])

panels.forEach((panel) => {
	panel.addEventListener('click', () => {
		removeActiveClasses()
		panel.classList.add('active')
	})
})

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active')
	})
}

// the variable panels contains all 5 panels.
// we want to have an event listener on each of the panels so that when we click on it, something will happen.
// I want to have any panel clicked to now be the active panel.
// adding.classList to panel will give me a list of the classes and also methods on this class list object like 'add' where we can specifically add a class and here i'm going to add a class of 'active'.
// Now every panel clicked will be 'active', however just because you click a new panel, it doesn't make the prior panels not active. So we need to remove the active class on the other panels.
