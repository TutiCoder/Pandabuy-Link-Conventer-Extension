const inputUrl = document.getElementById("input-url");
const extractButton = document.getElementById("extract-button");
const result = document.getElementById("result");

extractButton.addEventListener("click", function() {
  const url = inputUrl.value;
  if (!url) {
    result.innerHTML = "Please enter a URL.";
    return;
  }

  const innerLink = extractInnerLink(url);
  if (innerLink) {
    result.innerHTML = "The extracted inner link is: " + innerLink;
  } else {
    result.innerHTML = "No inner link found in the URL.";
  }
});

function extractInnerLink(url) {
  const urlParams = new URLSearchParams(new URL(url).search);
  if (urlParams.has("url")) {
    let innerLink = decodeURIComponent(urlParams.get("url"));
    innerLink = innerLink.replace(/%3A/g, ":").replace(/%2F/g, "/").replace(/%3F/g, "?").replace(/%3D/g, "=");
    return innerLink;
  } else {
    return null;
  }
}
