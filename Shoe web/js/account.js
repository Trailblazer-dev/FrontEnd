function openTab(event, tabName) {
            var i, tabContent, tabLinks;
            tabContent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabContent.length; i++) {
                tabContent[i].style.display = "none";
            }
            tabLinks = document.getElementsByClassName("tab");
            for (i = 0; i < tabLinks.length; i++) {
                tabLinks[i].className = tabLinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";
            event.currentTarget.className += " active";
        }
        document.querySelectorAll('.toggle-btn').forEach(button => {
        button.addEventListener('click', () => {
            const question = button.closest('.question');
            question.classList.toggle('active');
            button.textContent = question.classList.contains('active') ? 'Hide Answer' : 'Show Answer';
        });
    })