const possibleNames = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const possibleOccupations = ["Writer", "Teacher", "Programmer", "Designer", "Consultant"];

const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 }
];

function renderFreelancers() {
  const freelancersList = document.getElementById("freelancersList");
  freelancersList.innerHTML = "";

  freelancers.forEach(freelancer => {
    const listItem = document.createElement("div");
    listItem.textContent = `${freelancer.name}, ${freelancer.occupation}, $${freelancer.price}`;
    freelancersList.appendChild(listItem);
  });
}

function calculateAveragePrice() {
  const totalPrices = freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0);
  const averagePrice = totalPrices / freelancers.length || 0; 
}

function updateAveragePrice() {
  const averagePriceElement = document.getElementById("averagePrice");
  const averagePrice = calculateAveragePrice();
  averagePriceElement.textContent = `Average starting price: $${averagePrice}`;
}

function generateRandomFreelancer() {
  const randomName = possibleNames[Math.floor(Math.random() * possibleNames.length)];
  const randomOccupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 20;

  freelancers.push({ name: randomName, occupation: randomOccupation, price: randomPrice });
}

setInterval(() => {
  generateRandomFreelancer();
  renderFreelancers();
  updateAveragePrice();
}, 3000);
