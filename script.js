const slider = document.querySelector(".slider")
const container = document.querySelector(".container")
const overlay = document.querySelector(".image-container-overlay")

let isDragging = false

function dragStart() {
	isDragging = true
}

function dragEnd() {
	isDragging = false
}

function dragging(e) {
	if (!isDragging) return

	e.preventDefault()

	const containerX = container.getBoundingClientRect().x

	mouseX = Math.max(
		0,
		Math.min(
			(e.pageX ?? e.touches[0].pageX) - containerX,
			container.clientWidth
		)
	)

	overlay.style.width = mouseX + "px"
	slider.style.left = mouseX + "px"
}

slider.addEventListener("mousedown", dragStart)
slider.addEventListener("touchstart", dragStart)
document.addEventListener("mouseup", dragEnd)
document.addEventListener("touchend", dragEnd)
document.addEventListener("mousemove", dragging)
document.addEventListener("touchmove", dragging)
