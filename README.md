# **CSS Optimizer** 🚀

A **lightweight Node.js tool** to **optimize, sort, and merge CSS files** by:

- **Merging duplicate selectors**  
- **Sorting CSS properties alphabetically**  
- **Preserving `@media` queries & nested rules**  
- **Minimizing CSS file size** for better performance  

---

## 📌 **Features**

✔ **Merge duplicate CSS selectors** automatically  
✔ **Sort CSS properties alphabetically**  
✔ **Handle & retain `@media` queries and nested rules**  
✔ **Minimize & optimize CSS files** for production  
✔ **Works as a CLI tool or JavaScript module**  

---

## 🔧 **Installation**

### **1️⃣ Clone the Repository & Install Dependencies**

```sh
git clone https://github.com/nviewsweb/css-optimizer.git
cd css-optimizer
npm install
```

### **2️⃣ Install as a Global Package**

```sh
npm install -g github:nviewsweb/css-optimizer
```

---

## 🚀 **Usage**

### **🟢 Basic Optimization (Overwrites Input File)**

```sh
node css-optimizer src/css/styles.css
```

✅ **Optimizes** `src/css/styles.css`  
✅ **Overwrites the same file** with the optimized CSS  

---

### **📌 Optimize & Save to a New File**

```sh
node css-optimizer src/css/styles.css src/css/styles-optimized.css
```

✅ **Input:** `src/css/styles.css`  
✅ **Output:** `src/css/styles-optimized.css`  

---

### **🔄 Optimize & Rename `-toptimize.css` Files Automatically**

If your file name ends with `-toptimize.css`, the tool **renames it back to the original filename**:

```sh
node css-optimizer src/css/styles-toptimize.css
```

✅ **Input:** `src/css/styles-toptimize.css`  
✅ **Output:** `src/css/styles.css`  

---

## ⚙️ **Options & Rules**

| Option                         | Description                                                                   |
|--------------------------------|-------------------------------------------------------------------------------|
| `-toptimize`                   | If file ends with `-toptimize.css`, it saves output as the original filename. |
| `src/css/input.css`            | Process and **overwrite** input file directly.                                |
| `src/css/input.css output.css` | Process input file and **save to** `output.css`.                              |

---

## 🛠 **Using CSS Optimizer in JavaScript**

### **1️⃣ Import & Optimize CSS File**

```javascript
const optimizeCSS = require('css-optimizer');

const inputFile = "assets/css/style.css";
const outputFile = "assets/css/style-optimized.css";

// Run Optimization
optimizeCSS(inputFile, outputFile)
    .then(() => console.log("✅ CSS Optimization Complete!"))
    .catch(err => console.error("❌ Error:", err));
```

---

### **2️⃣ Optimize Multiple Files**

```javascript
const filesToOptimize = [
    "assets/css/admin.css",
    "assets/css/frontend.css",
    "assets/css/editor.css"
];

filesToOptimize.forEach(file => {
    optimizeCSS(file, file)
        .then(() => console.log(`✅ Optimized: ${file}`))
        .catch(err => console.error(`❌ Failed: ${file}", err));
});
```

---

### **3️⃣ Automate Optimization in package.json**

Add this script to your `package.json`:

```json
"scripts": {
    "optimize-css": "node css-optimizer assets/css/style.css"
}
```

Run it using:

```sh
npm run optimize-css
```

---

## 📦 **Integration with Gulp**

```javascript
const gulp = require('gulp');
const optimizeCSS = require('css-optimizer');

gulp.task('optimize-css', async function () {
    await optimizeCSS("assets/css/style.css", "assets/css/style.min.css");
    console.log("✅ CSS Minified & Optimized!");
});
```

Run the task:

```sh
gulp optimize-css
```

---

## 🛠 **License**

This project is **licensed under the GNU General Public License v3.0**.  
See the [**LICENSE.md**](LICENSE.md) file for more details.  

---

## 👨‍💻 **Contributing**

1️⃣ **Fork** the repository  
2️⃣ **Create a new branch** (`feature/new-improvement`)  
3️⃣ **Commit** your changes  
4️⃣ **Push** to your branch  
5️⃣ **Submit** a pull request  

---

## 📢 **Credits & Contributors**

- **Prabakaran Shankar** ([@prabashri](https://github.com/prabashri))  
- **Maintained by** [NviewsWeb](https://github.com/nviewsweb)  

---

### 🎯 **Why Use CSS Optimizer?**

This tool is designed to **clean, optimize, and sort CSS files efficiently**.  
It ensures structured, minimal, and readable CSS while preserving important rules.  

🚀 **Start optimizing your CSS today!**  

