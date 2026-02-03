// Run after page load
window.onload = function () {

  // Load saved reviews
  let savedReviews = localStorage.getItem("reviews");

  if (savedReviews) {
    document.getElementById("reviewList").innerHTML = savedReviews;
  }

  // Star Rating
  let stars = document.querySelectorAll(".stars span");
  let ratingText = document.getElementById("ratingText");
  let rating = 0;

  stars.forEach(star => {
    star.addEventListener("click", function () {

      rating = this.getAttribute("data-val");

      stars.forEach(s => s.classList.remove("active"));

      for (let i = 0; i < rating; i++) {
        stars[i].classList.add("active");
      }

      ratingText.innerText = "Your Rating: " + rating;
    });
  });

  // Survey
  document.getElementById("surveyForm").addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you for your feedback!");

    this.reset();

  });

};


// Add Review
function addReview() {

  let name = document.getElementById("name").value;
  let review = document.getElementById("review").value;

  if (name == "" || review == "") {
    alert("Fill all fields");
    return;
  }

  let div = document.createElement("div");
  div.className = "review";

  div.innerHTML =
    "<b>" + name + "</b><br>" +
    review +
    "<br><button class='deleteBtn' onclick='deleteReview(this)'>Delete</button>";

  document.getElementById("reviewList").appendChild(div);

  // Save to localStorage
  localStorage.setItem(
    "reviews",
    document.getElementById("reviewList").innerHTML
  );

  document.getElementById("name").value = "";
  document.getElementById("review").value = "";
}


// Delete Review
function deleteReview(btn) {

  btn.parentElement.remove();

  localStorage.setItem(
    "reviews",
    document.getElementById("reviewList").innerHTML
  );
}