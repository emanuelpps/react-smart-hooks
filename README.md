<p>
  <img src="https://res.cloudinary.com/dkgoszhfr/image/upload/f_auto,q_auto/c1mhg44uvuzyidlxynyu" alt="React Smart Hooks banner" />
</p>

## ✨ Features

- ⚛️ **Built for React** – Designed exclusively for React projects.
- 🛡️ **TypeScript First** – Strict typing and excellent developer experience.
- 🧪 **Tested** – 100% test coverage using [Vitest](https://vitest.dev/).
- 📦 **Lightweight** – Zero dependencies, fully tree-shakable.
- 🔌 **Reusable** – Plug-and-play for any React component.

---

## 📦 Installation

```bash
npm install @react-smart-hooks
# or
yarn add @react-smart-hooks
# or
pnpm add @react-smart-hooks
```

---

## 🧠 Available Hooks

### 🔁 `useDebounce`

```tsx
const debouncedValue = useDebounce(value, delay);
```

Delays value changes until a pause in user input – ideal for search fields or autosave logic.

---

### 💾 `useLocalStorage`

```tsx
const [storedValue, setStoredValue] = useLocalStorage("key", defaultValue);
```

Persist state in `localStorage`, fully reactive.

---

### 🔀 `useToggle`

```tsx
const [value, toggle] = useToggle(initialValue);
```

A simple boolean toggle, perfect for modals, dropdowns, and more.

---

### 🔎 `useIsMounted`

```tsx
const isMounted = useIsMounted();
```

Prevent updates on unmounted components – great for safe async effects.

---

### 🖱️ `useOnClickOutside`

```tsx
useOnClickOutside(ref, handler);
```

Detect clicks outside a ref – useful for closing dropdowns, modals, etc.

---

## 💡 Example Usage

```tsx
import { useDebounce, useToggle } from "react-smart-hooks";

function SearchBox() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <p>Debounced: {debouncedQuery}</p>
      <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>
    </div>
  );
}
```

---

## 🔍 Why Use This Library?

- ✅ Save time with ready-to-use React logic
- ✅ Works with React 18+
- ✅ No external dependencies
- ✅ Tree-shakable and lightweight
- ✅ Fully typed and tested

---

## 📄 License

MIT

---

## 🔎 Keywords (npm & SEO)

`react`, `react hooks`, `custom hooks`, `typescript`, `useDebounce`, `useToggle`, `useLocalStorage`, `useOnClickOutside`, `react utils`, `typed hooks`, `react 18`, `vitest`, `frontend utils`, `minimal react hooks`, `zero dependency`

---

## 👤 Author

**Emanuel Pagés** – [emanuelpps](https://github.com/emanuelpps)
