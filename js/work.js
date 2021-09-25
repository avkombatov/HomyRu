const tabs = document.querySelectorAll('.work__section');
const mains = document.querySelectorAll('.work__main');

for (tab of tabs) {
    tab.addEventListener('click', function () {
        for (el of tabs) {
            el.classList.remove('work__section_active');
        }
        this.classList.add('work__section_active');
        tabName = this.getAttribute('data-tab');
        console.log(tabName);
        for (i = 0; i < mains.length; i++) {
            if (tabName == i) {
                mains[i].style.display = 'flex';
            } else {
                mains[i].style.display = 'none';
            }
        }
    })
}