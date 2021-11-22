function toggle(accordion) {
  const content = accordion.nextElementSibling;
  if (content.getAttribute("isExpanded") == "true") {
    content.setAttribute("isExpanded", "false");
    content.style.maxHeight = "0px";
  } else {
    content.setAttribute("isExpanded", "true");
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
