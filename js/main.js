let icon = document.querySelectorAll(".icon")

icon.forEach((item, index) => {
  item.addEventListener('click', () => {
    let text = item.querySelector('.label').innerHTML
    let code = `<i class="bi bi-${text}"></i>`
    navigator.clipboard.writeText(code)
  })
})