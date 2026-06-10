# NoidaShop - Premium Tech E-Commerce Platform 🚀

A highly responsive, state-driven, localized modern E-Commerce frontend web application built using **React 18**, **Vite**, and **Redux Toolkit**. The application showcases a slick gadget catalog with an advanced fluid search layout, custom filter matrix elements, dynamic cart tallies, and an inline wishlist engine.

🔗 **Live Link:** [View Live Site](https://gauravchauhan88.github.io/week5-ecommerce-frontend/)

---

## 📋 Project Overview

### Goals & Objectives
The primary objective of **NoidaShop** is to engineer a blazing-fast, single-page application (SPA) e-commerce interface that demonstrates industry-standard state management and highly adaptive layout systems. 

Key product goals include:
* **Centralized Data Flow:** Eradicating props-drilling by managing asynchronous UI state updates globally through Redux.
* **Localized Context:** Creating a realistic e-commerce experience tailored explicitly to Indian consumers with static local asset optimization and standardized Indian Rupee (₹) monetization strings.
* **Performance-First Design:** Ensuring instantaneous data mutations (search filtering, cart tracking, and wishlisting) without full-page reloads.

---

## ⚙️ Setup & Installation Instructions

To clone this repository, install dependencies, and run a localized development server environment session on your machine, follow these step-by-step instructions:

1. **Clone the code repository via HTTPS:**
   ```bash
   git clone [https://github.com/gauravchauhan88/week5-ecommerce-frontend.git](https://github.com/gauravchauhan88/week5-ecommerce-frontend.git)
   ```
2. **Navigate directly into the project directory root:**
    ```bash
    cd week5-ecommerce-frontend
    ```
3. **Install the package dependencies (this compiles your project node modules):**

```Bash
npm install
```
4. **Fire up the localized live preview Vite development server:**

```Bash
npm run dev
```
5. **Access the application:**
Open your preferred web browser and navigate directly to: http://localhost:5173/

---

## 🗂️ Code Structure & File Hierarchy
The project follows a standard production-ready folder architecture emphasizing modular component segregation and explicit global state separation:

```Plaintext
week5-ecommerce-frontend/
├── .github/workflows/
│   └── deploy.yml              # Automated cloud compilation script
├── public/
│   ├── headphones.jpg          # Local optimized static product imagery
│   ├── phone-case.jpg
│   └── ... (remaining core assets)
├── src/
│   ├── components/             # Reusable Visual Functional UI Components
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   ├── ProductCard/
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductCard.css
│   ├── store/                  # Central Redux Ledger (Slices)
│   │   ├── store.js            # Main configured central store
│   │   ├── productSlice.js     # Catalog logic, selection handlers
│   │   ├── cartSlice.js        # Cart arrays, additions, computations
│   │   └── wishlistSlice.js    # Uniquely filtered item array keys
│   ├── App.jsx                 # Core Root Application Shell
│   └── main.jsx                # Global Entry Script with Store Provider
├── index.html
├── package.json
└── vite.config.js              # Production asset path configurations
```

---

## 📐 Component Architecture & Data FlowHierarchy Representation
```Plaintext
      [ Provider: Redux Store ]
                 │
             [ App ]
                 │
         ┌───────┴───────┐
     [ Navbar ]    [ ProductGrid ]
                         │
                 [ ProductCard ] ❌ 12
```

### Unidirectional Data Lifecycle
1. User interacts with a visual control item (e.g., clicks "Add to Cart" or typed into the search element in Navbar).
2. The UI component triggers a native handler callback which calls useDispatch().
3. The targeted Redux Reducer Action intercepts the transaction payload inside the state machine context.
4. Redux Toolkit mutates state parameters tracking immutable principles under-the-hood.
5. The downstream visual hooks (useSelector()) register state variances and dynamically update text blocks across components immediately.
---

## 💻 Technical Details & Implementation
### Algorithms & Performance Optimizations
1. Linear Time Catalog Matching ($O(N)$): Implemented an instantaneous search engine within the UI render cycle. It parses criteria sequences strings linearly using native .filter() sequences, guaranteeing flawless execution bounds.
2. Constant Time Cart Lookups ($O(1)$): Item additions inside Redux state arrays leverage fast hash pointers tracking index checks before committing increments, preventing heavy iteration cycles.

### State Specifications Data Model Example
```JavaScript
// Initial Immutable Product State Instance Setup
{
  id: 1,
  name: 'Wireless Noise-Canceling Headphones',
  price: 8499,
  category: 'Electronics',
  rating: 4.5,
  image: 'headphones.jpg',
  description: 'High-fidelity audio with advanced active noise-canceling technology...'
}
```
---

## 🖼️ Visual Documentation & Functional Evidence
 The live production application displays complete alignment with design criteria across layouts:
### 1. Catalog Interface Overview: 
Demonstrates a responsive CSS grid block tracking full product cards, image normalization templates via object-fit: contain;, categories, ratings, and localized Rupee fields.
<img width="1906" height="1086" alt="image" src="https://github.com/user-attachments/assets/be723195-17bd-404d-9ab3-d55d70af7f80" />


### 2. Dynamic Search Functionality: 
Live user keyword mapping updates the visibility metrics dynamically across the screen.
<img width="1890" height="1073" alt="image" src="https://github.com/user-attachments/assets/d6a88162-8e1b-4891-b7bc-3ce899565892" />


### 3. Responsive Media Adaptability: 
Breakpoints transform multi-column desktop arrangements cleanly into slim single-column panels on smartphones without breaking structures.
<p align="center">
<img src="https://github.com/user-attachments/assets/a25b9b37-f939-4faa-93c9-a53e5850982f" width="60%" />
<img src="https://github.com/user-attachments/assets/b95c8c7d-627a-44d2-b602-0aaf3eb15f14" width="30%" />
</p>

---

## 🧪 Testing Evidence & Validation
The application functionality was evaluated under multiple rigid validation paths before live release:
### Key Manual Test Scenarios

| Test Target Reference | Input Vector Scenario | Expected Application Outcome | Status |
| :--- | :--- | :--- | :--- |
| **Global Filtering Grid** | Type `"wireless"` in search bar | Hides all secondary assets; renders IDs containing headphone and vertical mouse records exclusively | PASS ✅ |
| **State Cart Syncing** | Click "Add to Cart" sequentially | Increments main counter value tracker in real-time within the header panel instantly | PASS ✅ |
| **Network Autonomy** | Toggled browser to "Offline" | Page runs locally without throwing broken images or layout formatting shifts | PASS ✅ |
| **Asset Path Mappings** | Build compilation pipeline | Absolute assets resolved without throwing console 404 tracking layout errors | PASS ✅ |


## 🎓 About the Developer

Name: Gaurav Chauhan  

Education: BCA+MCA Dual Degree, Amity University Noida (2027)   

Focus: Full-Stack Development, Data Analytics, and Cloud Computing
