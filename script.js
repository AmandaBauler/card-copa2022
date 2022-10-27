let isIgnite = false
function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite 
  ? "url(./assets/bg-explores.svg)" 
  : "url(./assets/bg-ignite.svg)"
  isIgnite = !isIgnite
  card.style.backgroundImage = bg
}