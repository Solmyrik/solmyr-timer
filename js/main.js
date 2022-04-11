// Timer fields
const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const millisecondElement = document.querySelector('.millisecond')

// buttons

const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const newButton = document.querySelector('.new')

// listeners
startButton.addEventListener('click', () => {
   clearInterval(interval)
   interval = setInterval(startTimer, 10)
})

pauseButton.addEventListener('click', () => {
   clearInterval(interval)
})

stopButton.addEventListener('click', () => {
   clearInterval(interval)
   clearFields()
   newButton.disabled = true
})

// variables
let hour = 00,
   minute = 00,
   second = 00,
   millisecond = 00,
   interval,
   counter = 0,
   disabled = true

function startTimer() {
   millisecond++
   if (millisecond < 9) {
      millisecondElement.innerText = "0" + millisecond
   }
   if (millisecond > 9) {
      millisecondElement.innerText = millisecond
   }
   if (millisecond > 99) {
      second++
      secondElement.innerText = "0" + second
      millisecond = 0
      millisecondElement.innerText = '0' + millisecond
   }

   if (second > 9) {
      secondElement.innerText = second
   }
   if (second > 59) {
      minute++
      minuteElement.innerText = '0' + minute
      second = 0
      secondElement.innerText = '0' + second
   }

   if (minute > 9) {
      minuteElement.innerText = minute
   }
   if (minute > 59) {
      hour++
      hourElement.innerText = '0' + hour
      minute = 0
      minuteElement.innerText = '0' + minute
   }

   if (hour > 9) {
      hourElement.innerText = hour
   }

   newButton.disabled = false
}
resul = 'result'
newButton.addEventListener('click', () => {
   clearInterval(interval)
   counter++
   const results = document.querySelector('.results')
   const block = document.createElement('div')
   if (millisecond < 9) {
      millisecond = "0" + millisecond
   }
   if (second < 9) {
      second = "0" + second
   }
   if (minute < 9) {
      minute = "0" + minute
   }
   if (hour < 9) {
      hour = "0" + hour
   }
   block.innerText = `${resul} ${counter}: ${hour}:${minute}:${second}:${millisecond}`
   block.classList.add('results__info')
   results.append(block)
   clearFields()
   clearInterval(interval)
   interval = setInterval(startTimer, 10)
})

function clearFields() {
   hour = 00
   minute = 00
   second = 00
   millisecond = 00
   hourElement.textContent = '00'
   minuteElement.textContent = '00'
   secondElement.textContent = '00'
   millisecondElement.textContent = '00'
}

function disableBtn() {
   if (disabled) {
      newButton.disabled = true
   }
   if (millisecond > 1) {
      newButton.disabled = false
   }
}

disableBtn()


// изменение языков
const select = document.querySelector('select')
const AllLang = ['en', 'ru', 'ua']

select.addEventListener('change', changeURLLanguage)

function changeURLLanguage() {
   let lang = select.value
   location.href = window.location.pathname + '#' + lang
   location.reload()
}

function changeLunguage() {
   let hash = window.location.hash
   hash = hash.substr(1)
   console.log(hash)
   if (!AllLang.includes(hash)) {
      location.href = window.location.pathname + '#en'
      location.reload();
   }
   select.value = hash
   //
   // const file = "js/lang.json";
   // const parseJson = JSON.parse(file)
   // console.log(parseJson)

   //
   document.querySelector('title').innerHTML = langArr['unit'][hash]
   resul = langArr['resul'][hash]
   for (let key in langArr) {
      let elem = document.querySelector('.lng-' + key)
      if (elem) {
         elem.innerHTML = langArr[key][hash]
      }

   }
}

changeLunguage()

// изменение фона

document.querySelector('.themes').addEventListener('change', (event) => {
   if (event.target.nodeName === 'INPUT') {
      document.documentElement.classList.remove('dark', 'light')
      document.documentElement.classList.add(event.target.value)
   }
})