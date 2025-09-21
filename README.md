# Lab – Reusable & Interactive Components / Componentes reusables e interactivos

> **Stack**: React + Vite + Vitest  
> **Repo folder**: `assignments-micro-course-JSX`  
> **OS**: Windows / macOS / Linux (cross‑platform)

---

## 🚀 Quick Start (EN)

### 0) Prerequisites
- Node.js ≥ 18 (recommended: 20 LTS). Check with:
  ```bash
  node -v
  npm -v
  ```

### 1) Clone & install
```bash
# Go to a working folder
cd ~/Downloads

# Clone the repository
git clone https://github.com/ada-school/assignments-micro-course-JSX

# Enter the project
cd assignments-micro-course-JSX

# Install dependencies
npm install
```

### 2) Run the dev server (Vite)
```bash
npm run dev
```
Open the URL shown in the console (e.g. `http://localhost:5173`) in your browser.

### 3) Start the assignment (Ada Client)
> ⚠️ Use the **interactive assignment URL** (not the cohort URL). It usually looks like:  
> `https://eci.learn.ada-school.org/assignments/<ID>/interactive` **or** `https://eci.learn.ada-school.org/activities/<ID>/interactive`

**Windows (PowerShell):**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Unblock-File .\ada-client.exe
.\ada-client.exe login
.\ada-client.exe start --project "." "<INTERACTIVE-ASSIGNMENT-URL>"
```
**macOS / Linux:**
```bash
chmod +x ./ada-client-linux
./ada-client-linux login
./ada-client-linux start --project "." "<INTERACTIVE-ASSIGNMENT-URL>"
```

> This step downloads the tests into `src/__ada_test/`.

### 4) Run tests
```bash
npm run ada-test
```
You should see test files like `src/__ada_test/App.test.jsx` being discovered and executed.

### 5) Submit
```powershell
# Windows
.\ada-client.exe submit "<ASSIGNMENT-SUBMIT-URL>"
```
```bash
# macOS / Linux
./ada-client-linux submit "<ASSIGNMENT-SUBMIT-URL>"
```
If the platform supports submission from the interactive URL, you can also run `submit` with the same URL used for `start`.

---

## 🧩 What you need to implement

Create these components under `src/components/`:

```
src/components/
  ArtPicture.jsx
  Title.jsx
  Paragraph.jsx
  Image.jsx
  MyButton.jsx
```

**`src/components/Title.jsx`**
```jsx
export default function Title({ children }) {
  return <h5>{children}</h5>;
}
```

**`src/components/Paragraph.jsx`**
```jsx
export default function Paragraph({ children }) {
  return <p>Author: {children}</p>;
}
```

**`src/components/Image.jsx`**
```jsx
export default function Image({ imgURL, paintingName }) {
  return <img src={imgURL} alt={paintingName} />;
}
```

**`src/components/MyButton.jsx`**
```jsx
export default function MyButton({ children, authorDescription }) {
  const handleClick = () => alert(authorDescription);
  return <button onClick={handleClick}>Información acerca de {children}</button>;
}
```

**`src/components/ArtPicture.jsx`**
```jsx
import Title from "./Title.jsx";
import Paragraph from "./Paragraph.jsx";
import Image from "./Image.jsx";
import MyButton from "./MyButton.jsx";

export default function ArtPicture({ picture }) {
  const { paintingName, imgURL, author, authorDescription } = picture;

  return (
    <article>
      <Title>{paintingName}</Title>
      <Image imgURL={imgURL} paintingName={paintingName} />
      <Paragraph>{author}</Paragraph>
      <MyButton authorDescription={authorDescription}>{author}</MyButton>
    </article>
  );
}
```

Then, use them in **`src/App.jsx`**:
```jsx
import ArtPicture from "./components/ArtPicture.jsx";
import { firstPicture, secondPicture, thirdPicture, fourthPicture } from "./data.js";

export function App() {
  return (
    <section>
      <ArtPicture picture={firstPicture} />
      <ArtPicture picture={secondPicture} />
      {thirdPicture && <ArtPicture picture={thirdPicture} />}
      {fourthPicture && <ArtPicture picture={fourthPicture} />}
    </section>
  );
}

export default App;
```

Sample **`src/data.js`**:
```js
export const firstPicture = {
  imgURL: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Ada_Lovelace.jpg',
  author: 'Margaret Sarah Carpenter',
  paintingName: 'Ada King (1815–1852), Countess of Lovelace, Mathematician, Daughter of Lord Byron',
  authorDescription:
    'Margaret Sarah Carpenter (1793–1872) fue una pintora británica conocida por sus retratos. Fue una artista destacada de su época, exponiendo en la Royal Academy y otras instituciones importantes. Su trabajo captura la esencia de sus sujetos con un realismo y sensibilidad notables.'
};

export const secondPicture = {
  imgURL: 'https://upload.wikimedia.org/wikipedia/commons/1/12/We_Can_Do_It%21.jpg',
  author: 'J. Howard Miller',
  paintingName: 'We Can Do It!',
  authorDescription:
    'J. Howard Miller fue un artista gráfico estadounidense...'
};

export const thirdPicture = {
  imgURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/800px-Meisje_met_de_parel.jpg',
  author: 'Johannes Vermeer',
  paintingName: 'La joven de la perla',
  authorDescription:
    'Johannes Vermeer (1632–1675) fue un pintor holandés del Barroco...'
};

export const fourthPicture = {
  imgURL: 'https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvNWYyNTMxM2UyZGUyZC5qcGciLCJyZXNpemUsODAwIl19.-dJRrycn7cE7szQihpGdLGy0woa-4K0SSluurohZlwE.jpg',
  author: 'Frida Kahlo',
  paintingName: 'Autoretrato con mono',
  authorDescription:
    'Frida Kahlo (1907–1954) fue una pintora mexicana conocida por sus autorretratos...'
};

export const pictures = [firstPicture, secondPicture, thirdPicture, fourthPicture];
```

---

## 🧪 Test strategy

- Tests are provided by the platform and downloaded into `src/__ada_test/` when you run `ada-client start`.
- Run them locally with:
  ```bash
  npm run ada-test
  ```
- If tests are **not discovered**, ensure you started the assignment with the **interactive URL** and that your session is active (`login`).

---

## 🛠️ Troubleshooting

### “No test files found”
- You used a **cohort URL** instead of an **interactive assignment URL**.
- Fix: run `start` with a URL like `.../assignments/<ID>/interactive` or `.../activities/<ID>/interactive`.

### Windows blocks `ada-client.exe`
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Unblock-File .\ada-client.exe
```

### Using the wrong binary
Check which binary is being executed:
```powershell
where ada-client.exe   # Windows
which ./ada-client-linux  # macOS/Linux
```

### Port already in use
If Vite can’t start, try:
```bash
npm run dev -- --port 5174
```

---

## 📦 Useful Scripts

- `npm run dev` — start dev server (Vite)
- `npm run ada-test` — run platform tests (Vitest)

---

## 🧱 Project structure (expected)

```
assignments-micro-course-JSX/
├─ src/
│  ├─ App.jsx
│  ├─ data.js
│  ├─ __ada_test/           # downloaded by ada-client
│  └─ components/
│     ├─ ArtPicture.jsx
│     ├─ Title.jsx
│     ├─ Paragraph.jsx
│     ├─ Image.jsx
│     └─ MyButton.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

---

## ✅ Submission Checklist

- [ ] Components created under `src/components/` as specified.
- [ ] `App.jsx` renders 4 pictures via `<ArtPicture />`.
- [ ] Tests pass locally (`npm run ada-test`).
- [ ] Submitted with `ada-client submit "<ASSIGNMENT-URL>"`.

---

## 🌐 Guía rápida (ES)

### 0) Prerrequisitos
- Node.js ≥ 18 (ideal: 20 LTS). Verifica:
  ```bash
  node -v
  npm -v
  ```

### 1) Clonar e instalar
```bash
cd ~/Downloads
git clone https://github.com/ada-school/assignments-micro-course-JSX
cd assignments-micro-course-JSX
npm install
```

### 2) Correr Vite
```bash
npm run dev
```
Abre la URL mostrada (p. ej. `http://localhost:5173`).

### 3) Iniciar el lab (Ada Client)
> ⚠️ Usa la **URL interactiva del assignment** (no la del cohorte):  
> `https://eci.learn.ada-school.org/assignments/<ID>/interactive` **o** `https://eci.learn.ada-school.org/activities/<ID>/interactive`

**Windows (PowerShell):**
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
Unblock-File .\ada-client.exe
.\ada-client.exe login
.\ada-client.exe start --project "." "<URL-INTERACTIVO-DEL-LAB>"
```

**macOS / Linux:**
```bash
chmod +x ./ada-client-linux
./ada-client-linux login
./ada-client-linux start --project "." "<URL-INTERACTIVO-DEL-LAB>"
```

### 4) Ejecutar pruebas

<img width="995" height="274" alt="imagen" src="https://github.com/user-attachments/assets/e04ebe90-2746-4d1b-9005-68220afbe5da" />

```bash
npm run ada-test
```

### 5) Enviar
```powershell
# Windows
.\ada-client.exe submit "<URL-DEL-ASSIGNMENT>"
```
```bash
# macOS / Linux
./ada-client-linux submit "<URL-DEL-ASSIGNMENT>"
```

---

## ❗Errores frecuentes (ES)

- **“No test files found”** → Iniciaste con URL del **cohorte**. Repite `start` con la URL **interactiva**.
- **Bloqueo de Windows** → ejecuta `Set-ExecutionPolicy` y `Unblock-File` (arriba).
- **Binario incorrecto** → verifica con `where ada-client.exe` / `which ada-client-linux`.
- **Puerto ocupado** → `npm run dev -- --port 5174`.

---

## 📄 License
Educational use. Adapt according to your course requirements.
