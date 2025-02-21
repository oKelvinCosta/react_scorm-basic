# React + React router dom + Vite + SCORM

**React router dom** must be used with Hash mode.

**SCOM conclusion** There are 2 examples of conclusion in the _Home.jsx_.

This template provides a minimal setup to get React working in Vite and SCORM with HMR and some ESLint rules.

## 🚀 Setup

### 1. vite.config.js

Change the _base_ to

```
*base: "./"*
```

### 2. Dev

To devlopment use the variables from _src/assets/scorm/SCOApp.js _

```
_DEV_: true

_DEBUG_: true
```

To see in browser

```
npm run dev
```

### 3. Prod

To build in the _docs_ folder

```
npm run build
```

### 4. Xml files from SCORM

1. Copy and paste the files from _xml_ folder to the _docs_ folder.

2. Inside the _docs_ folder, compact everything in a _ZIP_ file. Great! Package SCORM done!

3. Upload the LMS and done!

---

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
