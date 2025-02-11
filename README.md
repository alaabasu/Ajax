# 📡 AJAX Data Fetching Project  

A JavaScript project demonstrating **AJAX requests** to fetch data from **text files, JSON files, and external APIs**.  

---

## 📌 Features  
✔ Fetch data from a **local text file** using AJAX.  
✔ Fetch data from a **local JSON file** and display structured information.  
✔ Fetch data from an **external API** and dynamically generate content.  

---

## 🛠 Technologies Used  
- **HTML** (Structure)  
- **CSS** (Styling)  
- **JavaScript** (Logic & AJAX Requests)  

---

## 🚀 How It Works  

### **1️⃣ Fetch Data from a Text File**  
- Click the **"Fetch Text"** button.  
- An AJAX request fetches the **messages.txt** file.  
- The content is displayed inside the webpage.  

```js
let textbutton = document.querySelector('#text-btn');
textbutton.addEventListener('click', function() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', './data/messages.txt', true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            displayData(data);
        }
    }
});

let displayData = (data) => {
    document.querySelector('#card-text').innerHTML = `<h3>${data}</h3>`;
};



📂 Project Structure
graphql
Copy
Edit
/AjaxProject
│── /data
│   ├── messages.txt  # Sample text file
│   ├── use.json      # Sample JSON data
│── index.html        # Main HTML file
│── styles.css        # CSS file for styling
│── script.js         # JavaScript file with AJAX requests
│── README.md         # Documentation




![AJAX Example](https://github.com/alaabasu/Ajax/blob/main/Ajax.png?raw=true)
