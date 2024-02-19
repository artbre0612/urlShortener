const copyBtn = document.querySelector('.copy-btn')
const shortenedURL = document.getElementById('shortenedURL').innerText
copyBtn.addEventListener('click', copy)

async function copy() {
  try{
    await navigator.clipboard.writeText(shortenedURL)
    copyBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
  }
  catch(err){
    error => console.log(error)
  }
}