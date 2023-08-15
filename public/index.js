function showComment() {
  const element = document.getElementById("comment-box");
  console.log(element.value);
}

function addComment() {
  const msg = "Hello";
  const commentBox = document.createElement("div");
  commentBox.setAttribute("class", "comment-box");

  const comment = document.createElement("p");
  commentBox.textContent = msg;
  commentBox.appendChild(comment);

  // 挿入箇所のタグを取得
  const commentShow = document.getElementById("comment-show");
  commentShow.appendChild(commentBox);

  console.log("add new Comment to DOM");
}
