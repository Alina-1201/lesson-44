const btnStart = document.querySelector('.start')
const btnClick = document.querySelector('.click')
const timerSpan = document.querySelector('.timer')

let score = 0


btnStart.addEventListener('click', ()=>{
    timer()
    btnClick.addEventListener('click' , () =>{
        score++
    })
    setTimeout(() => {
        btnClick.setAttribute('disabled', true)
        document.querySelector('body').innerHTML += createModal(score)
        closeModel()
        const result = document.querySelector('.score_item')
        result.textContent = score
    }, 10000);
})

const timer = () =>{
    let number = 9

    setInterval(() => {
        if(number>=0){
            timerSpan.textContent = number
            number--
        }
    }, 1000);
}

const createModal = score =>{
    return`
    <div class="modal_wrapper">
    <div class="modal">
        <div class="modal_text">Вітаю ви отримали ${score} кліків</div>
        <button class="okey">Okey</button>
    </div>
    </div>
    `
}

const closeModel = () =>{
    const btnModalClose = document.querySelector('.okey')
    btnModalClose.addEventListener('click', ()=>{
        document.querySelector('.modal_wrapper').remove()
    })
}