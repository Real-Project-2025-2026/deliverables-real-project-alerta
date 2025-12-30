# About Alerta

Alerta is a smartphone-independent safety jewelry, designed to offer security without the stigma of traditional medical panic buttons. Unlike app-based solutions that fail when a phone battery dies or the device is out of reach, Alerta operates autonomously using NB-IoT (eSIM) technology.

It addresses "Panic Paralysis" by offering a discreet, physical "blind-press" button that instantly triggers an emergency protocol, ensuring help is called even when unlocking a phone is impossible.

## About this Repository

This repository contains the Virtual Prototype of the Alerta ecosystem, consisting of a Node.js backend server and a React Native/Expo mobile app.

* **Mobile App Source Code**: Developed by Benjamín Morales Pizarro.
* **Virtual Prototype & Backend**: Created by Kaner Etem.

📘 **Business & Strategy**: The full Strategic Business Report (Business Model & Market Analysis) can be found [in the Wiki of this repository](https://github.com/Real-Project-2025-2026/deliverables-real-project-alerta/wiki).

## 🌐 Online Demo (Try it now)

You can test the virtual prototype directly in your browser without any local installation.

👉 [Launch Virtual Prototype Dashboard](https://168.119.118.172.nip.io/dashboard.html)

## 🔗 Product Landing Page
Interested in learning more about Alerta or signing up for early access? Visit our landing page:

👉 [https://watchalerta.netlify.app/](https://watchalerta.netlify.app/)

_developed by Benjamín Morales Pizarro_

The landing page showcases Alerta's features, benefits, and allows potential customers to register their interest for lead generation.

## Local Setup & Installation

If you prefer to run the prototype locally, you will need Node.js and npm installed on your machine.

### 1. Installation

The backend and frontend dependencies are managed together in the `alerta-backend` directory.

1. Navigate to the project folder:
```bash
cd alerta-virtual-prototype/alerta-backend
```

2. Install all dependencies (Express, Axios, React Native, Expo, etc.):
```bash
npm install
```

## Running the Prototype Locally

To run the full system, you need to start the **Backend Server** and the **Frontend App** simultaneously. Please use two separate terminal windows.

### Terminal 1: Backend Server

The server handles API requests, emergency contact configuration, and SMS dispatching (via Seven.io).
```bash
# Inside alerta-backend/
node server.js
```

You should see: "Alerta Server läuft auf http://localhost:3000"

### Terminal 2: Mobile App (Frontend)

This starts the Expo development server.
```bash
# Inside alerta-backend/
npm start
```

* **To run in a web browser**: Press `w` in the terminal to launch the app interface.
* **To run on a device**: Scan the QR code with the Expo Go App (Android/iOS).

## Configuration & Notes

* **Emergency Number**: The default emergency number is set in `server.js`. It can be updated via the app's configuration endpoint or by modifying the `currentEmergencyNumber` variable directly in the code.
* **Port Conflicts**: If port `3000` is in use, modify the port number at the bottom of `server.js`.
