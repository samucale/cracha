const linksSocialMedia = {
  github: 'samucale',
  youtube: 'channel/UC4s9mAIU_RZZaYrY9embaCA',
  facebook: 'profile.php?id=100006210999084',
  instagram: 'samuelantoniosilva07gmail.com9/',
  twitter: 'samyblues'
}

function changeSocialMediaLinks(){
for (let li of ocialLinks.children){
  const social=li.getAttribute('class')

  li.children[0].href =`https://${social}.com/${linksSocialMedia[social]}`
}

}

changeSocialMedialinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.userBio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      UserLogin.textContent = data.UserLogin
    })
}

getGithubProfileInfo()
