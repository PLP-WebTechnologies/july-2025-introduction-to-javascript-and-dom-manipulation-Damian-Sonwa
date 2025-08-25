// Part 1: Variables & Conditionals
let name = "Paul", age = 20, isStudent = true;
document.getElementById("intro").textContent = 
  isStudent ? name + " is a student, age in 5 years: " + (age + 5) 
            : name + " is not a student.";

// Part 2: Functions
function add(a, b) { return a + b; }
function greet(person) { return "Hello, " + person + "!"; }
document.getElementById("functions-output").textContent = 
  "Add: " + add(2, 3) + " | " + greet(name);

// Part 3: Loops
let nums = [1,2,3], result = "";
for (let i=0; i<nums.length; i++) result += nums[i] + " ";
nums.forEach(n => result += (n*2) + " ");
document.getElementById("loops-output").textContent = "Loops: " + result;

// Part 4: DOM Interactions
let text = document.getElementById("text");
document.getElementById("change-btn").onclick = () => text.textContent = "Text changed!";
document.getElementById("toggle-btn").onclick = () => text.style.display = text.style.display==="none"?"block":"none";
document.getElementById("countdown-btn").onclick = () => {
  let c=5, t=setInterval(()=>{ 
    document.getElementById("countdown").textContent = c--; 
    if(c<0){clearInterval(t); document.getElementById("countdown").textContent="Done!";} 
  },1000);
};

