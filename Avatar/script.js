const randomColorRGB = () => {
  const chars = "0987654321abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += chars[Math.floor(Math.random() * 16)];
  }
  return color;
};
function avatar(name) {
  //card contains Image and Name
  const card = document.createElement("div");
  card.className = "avatar-card";
  card.innerText = name;
  //image generated from name
  const circle = document.createElement("div");
  circle.className = "avatar-circle";
  const shortName = name
    .split(" ")
    .map((chr) => chr[0].toUpperCase())
    .join(" ");
  const circleText = document.createElement("span");
  circleText.innerText = shortName;
  circle.append(circleText);
  circle.style.backgroundColor = randomColorRGB();
  card.prepend(circle);
  document.body.append(card);
}
avatar("Mehdi Taher");
