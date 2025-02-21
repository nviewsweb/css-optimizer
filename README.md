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

| Option | Description |
|--------|-------------|
| `-toptimize` | If file ends with `-toptimize.css`, it saves output as the original filename. |
| `src/css/input.css` | Process and **overwrite** input file directly. |
| `src/css/input.css output.css` | Process input file and **save to** `output.css`. |

---

## 🛠️ **License**  

This project is **licensed under the GNU General Public License v3.0**.  
See the **[LICENSE.md](LICENSE.md)** file for more details.  

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

