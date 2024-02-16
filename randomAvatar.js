const avatars = [
  "https://cdn-icons-png.flaticon.com/128/1326/1326377.png",
  "https://cdn-icons-png.flaticon.com/128/3940/3940403.png",
  "https://cdn-icons-png.flaticon.com/128/1326/1326405.png",
  "https://cdn-icons-png.flaticon.com/128/4322/4322992.png",
  "https://cdn-icons-png.flaticon.com/128/1308/1308845.png",
  "https://cdn-icons-png.flaticon.com/128/4322/4322991.png",
  "https://cdn-icons-png.flaticon.com/128/3940/3940417.png",
  "https://cdn-icons-png.flaticon.com/128/3687/3687893.png",
];

function getRandomAvatar() {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return avatars[randomIndex];
}

module.exports = getRandomAvatar;
