const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src",url)
    memeTitle.innerHTML=title
    memeAuthor.innerHTML=`Meme By : ${author}`
};

const generateMeme = async () => {
  const response = await fetch("https://meme-api.com/gimme/wholesomememes");
  const data = await response.json();
  console.log(data);

  updateDetails(data.url,data.title,data.author)
};

generateMemeBtn.addEventListener("click", generateMeme);
