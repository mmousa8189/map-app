export default (text = "Hello, From Map Example!") => {
  const element = document.createElement("h1");

  element.innerHTML = text;

  return element;
};
