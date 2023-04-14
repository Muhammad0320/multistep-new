"use strict";

const toggle = document.querySelector('.toggle__container');

const inputs = document.querySelectorAll('.input')

const icon = document.querySelector('.toggle');

const month = document.querySelector('.monthly') 
const year = document.querySelector('.yearly')

const option = document.querySelector('.option')

const price1 = document.querySelector('.price--1')
const price2 = document.querySelector('.price--2')
const price3 = document.querySelector('.price--3')
const add = document.querySelectorAll('.add')



const plan = document.querySelector('.plan')

const lists = document.querySelectorAll('.plan__list')

const boxes = document.querySelectorAll('.box')

const empty = document.querySelectorAll('.empty')

const checks = document.querySelectorAll('.icon-check')

const stepContainer = document.querySelector('.steps')

const number = document.querySelectorAll('.step__number')

const content = document.querySelectorAll('.step__content')

const steps = document.querySelectorAll('.step')

const priceadd1 = document.querySelector('.price__box--1');
const priceadd2 = document.querySelector('.price__box--2');
const priceadd3= document.querySelector('.price__box--3');

const finalHead = document.querySelector('.step__text--1')
const finalprice = document.querySelector('.final--1')

const addonsContent = document.querySelector('.add-ons__content')

const change = document.querySelector('.change')

const inpName = document.getElementById('name')
const errName = document.querySelector('.err1')

const inpEmail = document.querySelector('#email')
const errEmail = document.querySelector('.err2')

const inpPhone = document.querySelector('#phone')
const errPhone = document.querySelector('.err3')

const finalstep1 = document.querySelector('.step__text--2');
const finalprice2 = document.querySelector('.final--2');

const totalText = document.querySelector('.total__text')
const totalPrice = document.querySelector('.total__price')

const label = document.querySelectorAll('.input__label')

const back = document.querySelectorAll('.back')
const next = document.querySelectorAll('.btn')



inpName.addEventListener('invalid', (e) =>  {

    e.preventDefault()



    inpName.setCustomValidity(' Name must be valid')
    errName.textContent = ' Name must be valid'

    inpName.classList.add('invalid')

    if (inpName.value === '') {

        inpName.setCustomValidity(' This field is required')
        errName.textContent = ' This field is required'
    
        inpName.classList.add('invalid')
        
    }


})

inpName.addEventListener('input', () => {

    inpName.setCustomValidity('')
    errName.textContent = ''

    if (inpName.classList.contains('invalid')) {
        
        inpName.classList.remove('invalid')


    }


})

inpEmail.addEventListener('invalid', (e) =>  {

    e.preventDefault()

    inpEmail.setCustomValidity(' Email must be valid')
    errEmail.textContent = ' Email must be valid'

    inpEmail.classList.add('invalid')

    if (inpEmail.value === '') {

        inpEmail.setCustomValidity(' This field is required')
        errEmail.textContent = ' This field is required'
    
        inpEmail.classList.add('invalid')
        
    }


})



inpEmail.addEventListener('input', () => {

    inpEmail.setCustomValidity('')
    errEmail.textContent = ''

    if (inpEmail.classList.contains('invalid')) {
        
        inpEmail.classList.remove('invalid')


    }



})


inpPhone.addEventListener('invalid', (e) =>  {

    e.preventDefault()

    inpPhone.setCustomValidity(' Phone must be valid')
    errPhone.textContent = ' Phone must be valid'

    inpPhone.classList.add('invalid')

    if (inpPhone.value === '') {

        inpPhone.setCustomValidity(' This field is required')
        errPhone.textContent = ' This field is required'
    
        inpPhone.classList.add('invalid')
        console.log('okay')
        
    }


})



inpPhone.addEventListener('input', () => {

    inpPhone.setCustomValidity('')
    errPhone.textContent = ''

    if (inpPhone.classList.contains('invalid')) {
        
        inpPhone.classList.remove('invalid')


    }


})





let currentPage = 0

const showpage = function (index) {

    content[index].classList.add('step__content--active')
    number[index].classList.add('step__number--active')


}



  const goToNextPage = function () {

    content[currentPage].classList.remove('step__content--active')
    number[currentPage].classList.remove('step__number--active')

    currentPage++

    showpage(currentPage)

    console.log('okay')


  }



  const goToPreviousPage = function () {

    content[currentPage].classList.remove('step__content--active')
    number[currentPage].classList.remove('step__number--active')


    currentPage--

    showpage(currentPage)


  }

  

back.forEach(bac => bac.addEventListener('click', () => {

    goToPreviousPage()

}))


next.forEach(nex => nex.addEventListener('click', () => {

    goToNextPage()

}))


// const reloadPage = function() {

//     content.forEach(cont => {

//         cont.outerHTML = ''
//         document.body.insertAdjacentHTML('beforeend', `<div class="step__content"> ${cont.innerHTML} </div>`)

//     })

// }

// confirm.addEventListener('click', () => {

//     reloadPage()
//     currentPage = 0

//     showpage(currentPage)

// })
 

 change.addEventListener('click', () => {

    content.forEach(c => c.classList.remove('step__content--active'))

    document.querySelector('.steps__content--2').classList.add('step__content--active')

 })

stepContainer.addEventListener('click', (e) => {
    
    
    number.forEach(num => num.classList.remove('step__number--active'))
    const clicked = e.target.closest('.step')
    const num = e.target.closest('.step__number')

    // if(!num) return


    num.classList.add('step__number--active')



    // Guard clause
    if (!clicked) return

    steps.forEach(step => step.classList.remove('step__active'))

    content.forEach(c => c.classList.remove('step__content--active'))



    clicked.classList.add('step__active')

    document.querySelector(`.steps__content--${clicked.dataset.tab}`).classList.add('step__content--active')


})






boxes.forEach(box => box.addEventListener('click', (e) => {

    

    checks.forEach(ch => ch.classList.remove('block'))


   const check =  e.target.closest('.icon-check')

   check.classList.add('block')

}))









toggle.addEventListener('click', () => {

    

    if (!icon.classList.contains('move')) {
        
        icon.classList.add('move')
        
        month.classList.add('color-l')
        month.classList.remove('color-d')
        year.classList.add('color-d')
        year.classList.remove('color-l')
        price1.textContent = '$90/yr'
        price2.textContent = '$120/yr'
        price3.textContent = '$150/yr'
        add.forEach (add => {
            add.textContent = '2 months free'

            
        })

        finalHead.textContent += '(Yearly)' 
        totalText.textContent += '(per Year)'

        priceadd1.textContent = '$10/yr '
        priceadd2.textContent = '20/yr '
        priceadd3.textContent = '20/yr '
        
 
    }else{

        icon.classList.remove('move');
        month.classList.add('color-d')
        month.classList.remove('color-l')
        year.classList.add('color-l')
        year.classList.remove('color-d');

        price1.textContent = ' $9/mo '
        price2.textContent = '$12/mo'
        price3.textContent = '15/mo'
        add.forEach (add => {
            add.textContent = ''

            
        })

        finalHead.textContent += '( Monthly )'
        totalText.textContent += '(per Month)'



    }
    
 
})

const slice = function ( price ){

    const original = price.slice(1)

    return original
}



console.log(slice('$23/mon'))

let firstNumber = 0;
let secondNumber = 0;




    plan.addEventListener('click', (e) => {

    
        lists.forEach(l => {
        
            l.classList.remove('list')
        
        
        })
        
            const list = e.target.closest('.plan__list')
        
            list.classList.add('list')
        
            
        
                const head = list.querySelector('.plan__list > :first-child > div:nth-of-type(1)').textContent;
                console.log(head)
        
                const price = list.querySelector('.price').textContent;
        
                finalprice.textContent = price
    
               const priced = slice(price);
                console.log(priced)
               const number = Number.parseFloat(priced)
                console.log(number)
               firstNumber += number
                

        
                finalHead.textContent = head
        
        
            
        })

        




  
    addonsContent.addEventListener('click', (e) => {

        boxes.forEach(box => box.classList.remove('clicked'))
    
        const click = e.target.closest('.box')
    
        click.classList.add('clicked')
    
        const step = click.querySelector('.text__box--large').textContent
        const priced = click.querySelector('.price__box').textContent

        // slice(priced)
    
        finalstep1.textContent = step;
    
        finalprice2.textContent = priced;

        const price = slice(priced);
        console.log(price)
       const number = Number.parseFloat(price)
       console.log(number)


       secondNumber += number 
    
          console.log('Allihamdullilah', secondNumber + firstNumber)
          const result = secondNumber + firstNumber

          totalPrice.textContent = `+$${result}`

          if (icon.classList.contains('move')) {
            
            totalPrice.textContent += '/yr'

          } else {
            
            totalPrice.textContent += '/mo'

          }



    })
    