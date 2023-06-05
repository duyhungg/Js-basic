var users = [
  {
    id: 1,
    name: "Duy Hung 1",
  },
  {
    id: 2,
    name: "Duy Hung 2",
  },
  {
    id: 3,
    name: "Duy Hung 3",
  },
];
var comments = [
  {
    id: 1,
    user_id: 1,
    content: " code di ",
  },
  {
    id: 2,
    user_id: 2,
    content: " code roi ",
  },
];
// 1. lấy comment
// 2. lấy user_id
// 3. từ user_id lấy ra user tương ứng
function getUserId(userIds) {
  return new Promise(function (resolve, reject) {
    var result = users.filter(function (users) {
      return userIds.includes(users.id);
    });
    setTimeout(function () {
      resolve(result);
    }, 1000);
  });
}
function getComment() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(comments);
    }, 1000);
  });
}
getComment()
  .then(function (comments) {
    var userIds = comments.map(function (comment) {
      return comment.user_id;
    });
    return getUserId(userIds).then(function (user) {
      return {
        user: user,
        comment: comments,
      };
    });
  })
  .then(function (data) {
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    data.comment.forEach(function (comment) {
      var user = data.users.find(function (user) {
        return user.id === comments.user_id;
      });
    });

    html += ` <li>${user.name}</li> <li>${comments.content}</li>`;
    commentBlock.innerHTML = html;
  });
