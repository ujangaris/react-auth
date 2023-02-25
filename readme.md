#React authentication using JSON Server REST API_Registrations

## Setup & Install

    - npm install bootstrap
    - npm install react-toastify
    - npm install react-router-dom

    - Home.jsx
    - Login.jsx
    - Register.jsx
    - App.jsx
    - jalankan server : npm run dev

## Json Server , Register & IsValidate

    - Pasang jalankan server : json-server --watch db.json --port 8000
    - Register.jsx
      * hooks data
      * improt dan pasang usNavigate
      * buat handele submit
      * import dan pasang Isvalidate
      * buat form dan panggil handleSubmit
    - IsValidate.jsx
      * ini adalah function untuk form required yang dibuat menjadi component dan dipanggil pada Register.jsx
      * import dan pasang toastify
    - pada terminal
      * terminal pertama: json-server --watch db.json --port 8000
      * terminal keddua: npm run dev

## Login

    - Login.jsx
      * buat functional component Login 'rfce'
      * hooks data
      * import pasang usNavigate dari react-router-dom
      * buat function validate username dan password
      * buat handle login  & fetch
      * pasang validation & toastify
      * import dan pasang Link dari react-router-dom
    - Register.jsx
      * import dan pasang Link dari react-router-dom
    - pada terminal
      * terminal pertama: json-server --watch db.json --port 8000
      * terminal keddua: npm run dev
