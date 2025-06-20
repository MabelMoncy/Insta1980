
 function like(button) {
  const post = button.closest(".post");
  let output = post.querySelector(".like-output");

  if (!output) {
    output = document.createElement("div");
    output.className = "output like-output";
    post.appendChild(output);
  }

  output.innerText = "You liked this post!";
}

function comment(button) {
  const userComment = prompt("Type your comment:");
  if (userComment) {
    const post = button.closest(".post");
    let output = post.querySelector(".comment-output");

    if (!output) {
      output = document.createElement("div");
      output.className = "output comment-output";
      post.appendChild(output);
    }

    output.innerText = `You commented: "${userComment}"`;
  }
}

function share(button) {
  const post = button.closest(".post");
  let output = post.querySelector(".share-output");

  if (!output) {
    output = document.createElement("div");
    output.className = "output share-output";
    post.appendChild(output);
  }

  output.innerText = "You shared this post! ↪️";
}
  const audio = document.getElementById("myAudio");

  function playAudio() {
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }
