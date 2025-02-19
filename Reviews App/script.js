const reviewBy = document.getElementById("review-by");
const reviewFor = document.getElementById("review-for");
const review = document.getElementById("review");
const submitReviewBtn = document.getElementById("submit-review-btn");

const reviewParentContainer = document.getElementById("all-review-container");

submitReviewBtn.addEventListener("click", function () {
  let name = reviewBy.value;
  let reviewForWhat = reviewFor.value;
  let reviewContent = review.value;

  const reviewDiv = document.createElement("div");
  const reviewHeadingH4 = document.createElement("h4");
  const reviewContentParagraph = document.createElement("p");
  const reviewByH6 = document.createElement("h6");

  reviewHeadingH4.textContent = reviewForWhat;
  reviewContentParagraph.textContent = reviewContent;
  reviewByH6.textContent = name;

  console.log(reviewHeadingH4);
  console.log(reviewByH6);
  console.log(reviewContentParagraph);
  if (
    reviewHeadingH4.textContent !== "" &&
    reviewContentParagraph.textContent !== "" &&
    reviewByH6.textContent !== ""
  ) {
    reviewDiv.appendChild(reviewHeadingH4);
    reviewDiv.appendChild(reviewContentParagraph);
    reviewDiv.appendChild(reviewByH6);

    reviewParentContainer.prepend(reviewDiv);

    reviewBy.value = "";
    review.value = "";
    reviewFor.value = "";

    console.log("Inside IF");
  } else {
    alert("All fields are necessary");
  }
});
