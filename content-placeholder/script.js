const header1 = document.getElementById('header1')
const title1 = document.getElementById('title1')
const excerpt1 = document.getElementById('excerpt1')
const profile_img1 = document.getElementById('profile_img1')
const name1 = document.getElementById('name1')
const date1 = document.getElementById('date1')

const header = document.getElementById('header2')
const title = document.getElementById('title2')
const excerpt = document.getElementById('excerpt2')
const profile_img = document.getElementById('profile_img2')
const name = document.getElementById('name2')
const date = document.getElementById('date2')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData1, 1500)
setTimeout(getData, 1500)

function getData1() {
  header1.innerHTML =
    '<img src="https://elintransigente.com/wp-content/uploads/2021/08/Florencia-de-la-Ve.jpg" alt="" />'
  title1.innerHTML = 'Todas putas'
  excerpt1.innerHTML =
    'Son todas trolas, por ese motivo, es que ahora me gustan los travestis'
  profile_img1.innerHTML =
    '<img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/361675249_830174291589344_5115261202975283298_n.jpg?ccb=11-4&oh=01_AdQarxyWvwKoY-dWBeeQr_ZdFAzyRDdKwlLkiQ36FjifNA&oe=6564B96D&_nc_sid=e6ed6c&_nc_cat=107" alt="" />'
  name1.innerHTML = 'Rodrigo Noguera'
  date1.innerHTML = 'Oct 08, 2023'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}

function getData() {
    header.innerHTML =
      '<img src="https://elintransigente.com/wp-content/uploads/2021/08/Florencia-de-la-Ve.jpg" alt="" />'
    title.innerHTML = 'Todas putas'
    excerpt.innerHTML =
      'Son todas trolas, por ese motivo, es que ahora me gustan los travestis'
    profile_img.innerHTML =
      '<img src="https://media-eze1-1.cdn.whatsapp.net/v/t61.24694-24/361675249_830174291589344_5115261202975283298_n.jpg?ccb=11-4&oh=01_AdQarxyWvwKoY-dWBeeQr_ZdFAzyRDdKwlLkiQ36FjifNA&oe=6564B96D&_nc_sid=e6ed6c&_nc_cat=107" alt="" />'
    name.innerHTML = 'Rodrigo Noguera'
    date.innerHTML = 'Oct 08, 2023'
  
    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
  }