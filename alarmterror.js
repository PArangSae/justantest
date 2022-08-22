const csrf = await fetch("https://playentry.org");
const body = await csrf.text();
const index = body.indexOf("csrf-token") + 21;
const csrfToken = body.slice(index, index + 36);
let limit = prompt("알림테러 몇번 하실 건가요?");
let target = prompt("타깃이 될 유저의 아이디를 입력해주세요.");
for(let i = 0; i < limit; i++)
{
	fetch('https://playentry.org/graphql', {
	  method: "POST",
	  headers: {"Content-Type": "application/json", "CSRF-Token": csrfToken},
	  body: JSON.stringify({"query":"\n    mutation FOLLOW(\n        \n    $user: String\n\n    ) {\n        follow(\n            \n    user: $user\n\n        ) {\n            \n    id\n    \n    id\n    user {\n        id\n        username\n        nickname\n        profileImage {\n            \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n        }\n        status {\n            following\n            follower\n        }\n        isFollow\n        projects {\n            id\n            thumb\n            name\n        }\n    }\n\n    \n    id\n    follow {\n        id\n        username\n        nickname\n        profileImage {\n            \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n        }\n        status {\n            following\n            follower\n        }\n        isFollow\n        projects {\n            id\n            thumb\n            name\n        }\n    }\n\n\n        }\n    }\n","variables":{"user":target}})});
	fetch('https://playentry.org/graphql', {
	  method: "POST",
	  headers: {"Content-Type": "application/json", "CSRF-Token": csrfToken},
	  body: JSON.stringify({"query":"\n    mutation UNFOLLOW(\n        \n    $user: String\n\n    ) {\n        unfollow(\n            \n    user: $user\n\n        ) {\n            \n    id\n    \n    id\n    user {\n        id\n        username\n        nickname\n        profileImage {\n            \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n        }\n        status {\n            following\n            follower\n        }\n        isFollow\n        projects {\n            id\n            thumb\n            name\n        }\n    }\n\n    \n    id\n    follow {\n        id\n        username\n        nickname\n        profileImage {\n            \n    id\n    name\n    label {\n        \n    ko\n    en\n    ja\n    vn\n\n    }\n    filename\n    imageType\n    dimension {\n        \n    width\n    height\n\n    }\n    trimmed {\n        filename\n        width\n        height\n    }\n\n        }\n        status {\n            following\n            follower\n        }\n        isFollow\n        projects {\n            id\n            thumb\n            name\n        }\n    }\n\n\n        }\n    }\n","variables":{"user":target}})});}
// import("https://raw.githack.com/PArangSae/justantest/main/alarmterror.js");
