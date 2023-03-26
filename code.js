const form  = document.querySelector("form")
const BASE_URL = "https://opentdb.com/api.php?amount=10"
const main = document.querySelector("main.centered");


form.addEventListener("submit", (event)=>{
    event.preventDefault();

    fetch(BASE_URL)
    .then((response) => response.json())
    // .then((json) => {
    //     json.results.forEach((result) => {
    //       displayCard(result)  
    //     })
    .then((json) => {
        displayCard(json)
    }).catch(displayError);
})
    function displayCard({ results }) {
        const section = document.createElement("section");
        section.classList.add("card");
        main.append(section)

        let category = document.createElement("h2")
        category.textContent = results[0].category
        section.append(category)
        
        let question = document.createElement("p")
        question.textContent = results[0].question
        section.append(question)
        
        let correctAnswer = document.createElement("p")
        correctAnswer.setAttribute("class", "hidden")
        correctAnswer.textContent = results[0].correct_answer

        console.log(correctAnswer)

        function toggleClass(){
            correctAnswer.classList.toggle("hidden")
        }

        let showAnswer = document.createElement("button")
        showAnswer.textContent = "Show Answer"
        section.append(showAnswer)
        showAnswer.addEventListener("click", toggleClass())

      }
/////////////////////////////////////////////////////
    function displayError(error) {

        main.style.display = "block";
      
        const paragraph = document.createElement("p");
        paragraph.textContent = "Something went wrong!";
      
        const errorMessage = document.createElement("p");
        errorMessage.classList.add("error-message");
        errorMessage.textContent = error;
      
        main.append(paragraph, errorMessage);
      }
// let main = document.getElementsByTagName("main")
// let list = document.createElement("ul")
// main.append(list)

