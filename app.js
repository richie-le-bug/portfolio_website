let accordian = document.querySelectorAll('.accordian-btn')

accordian.forEach((acc, idx) => {
     acc.addEventListener('click', () => {
         let panel = acc.nextElementSibling
        if(panel.style.maxHeight){
            panel.classList.remove('active')
            panel.style.maxHeight = null 
        }else{
            panel.classList.add('active')
            panel.style.maxHeight = panel.scrollHeight + 'px'
        }
     })
})