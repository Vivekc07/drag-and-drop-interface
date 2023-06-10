const items = document.querySelectorAll('.item');
const containers = document.querySelectorAll('.container');
const resetBtn = document.getElementById('resetBtn');

let draggedItem = null;

// Event listeners for drag events
items.forEach(item => {
  item.addEventListener('dragstart', function() {
    draggedItem = this;
    setTimeout(() => {
      this.style.display = 'none';
    }, 0);
  });

  item.addEventListener('dragend', function() {
    setTimeout(() => {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });
});

// Event listeners for drop events
containers.forEach(container => {
  container.addEventListener('dragover', function(e) {
    e.preventDefault();
  });

  container.addEventListener('dragenter', function(e) {
    e.preventDefault();
    this.classList.add('hovered');
  });

  container.addEventListener('dragleave', function() {
    this.classList.remove('hovered');
  });

  container.addEventListener('drop', function() {
    this.classList.remove('hovered');
    this.appendChild(draggedItem);
    displaySuccessMessage();
  });
});

// Event listener for reset button
resetBtn.addEventListener('click', function() {
  containers[0].innerHTML = '<h2>Container 1</h2>';
  containers[1].innerHTML = '<h2>Container 2</h2>';
  populateContainer1();
});

// Function to populate container 1 with initial items
function populateContainer1() {
  const container1 = containers[0];
  container1.innerHTML = '<h2>Container 1</h2>';
  
  items.forEach(item => {
    container1.appendChild(item);
  });
}

// Function to display a success message
function displaySuccessMessage() {
  const message = document.createElement('p');
  message.innerText = 'Item dropped successfully!';
  containers[1].appendChild(message);
}
