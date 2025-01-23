let heroElements = document.getElementsByClassName("hero");
if (heroElements.length > 0) {
  let hero = heroElements[0];
  hero.setAttribute("id", "featured");
  console.log(hero);
} else {
  console.log("No elements with class 'hero' found.");
}
