# 🎓 Control Escolar en Solana

## 📌 Descripción

Este proyecto consiste en el desarrollo de un sistema de **control escolar** utilizando tecnología blockchain en la red **Solana**, implementado con el framework Anchor.

El sistema permite la administración de estudiantes incluyendo:

* Estatus (activo / baja)
* Calificaciones
* Faltas
* Evaluaciones extraordinarias

---

## 🎯 Objetivo

Desarrollar una aplicación descentralizada (dApp) que gestione información académica de estudiantes de manera segura, transparente y eficiente utilizando Solana.

---

## ⚙️ Tecnologías Utilizadas

* Solana (Blockchain)
* Anchor Framework
* Rust (Smart Contract)
* JavaScript (Cliente)
* TypeScript (Tests)

---

## 🧠 Funcionalidades

### 👤 Estudiantes

* Crear estudiante
* Cambiar estatus (activo / baja)

### 📊 Académico

* Registrar calificaciones
* Registrar faltas
* Registrar extraordinarios

### 📈 Reporte

* Consulta de promedio
* Estado académico del estudiante

---

## 🏗️ Arquitectura del Proyecto

```bash
control-escolar/
├── programs/
│   └── control_escolar/
│       └── src/lib.rs      # Smart contract
├── tests/
│   └── control_escolar.ts  # Pruebas
├── app/
│   └── client.js           # Cliente
```

---

## 🚀 Despliegue

### 1. Configurar red (Devnet)

Asegúrate de estar en:

```
Devnet
```

---

### 2. Build

```bash
anchor build
```

---

### 3. Deploy

```bash
anchor deploy
```

---

### 4. Ejecutar cliente

```bash
node app/client.js
```

---

### 5. Ejecutar tests

```bash
anchor test
```

---

## 💰 Obtención de SOL (Faucet)

Puedes obtener tokens de prueba desde:

* Solana Playground (Airdrop)
* Faucet oficial de Solana

---

## 🧪 Pruebas

El sistema incluye pruebas automatizadas que validan:

* Creación de estudiante
* Registro de calificaciones
* Registro de faltas
* Registro de extraordinarios
* Cambio de estatus

---

## 🎨 Mockup

El sistema cuenta con un diseño conceptual (mockup) que incluye:

* Panel de estudiantes
* Registro de datos académicos
* Reportes

---

## 📹 Video demostración

*(Agregar enlace de Loom aquí)*

---

## 🐙 Repositorio

*(Agregar enlace de GitHub aquí)*

---

## 👨‍💻 Autor(es)
Esteban manuel
Darwin 
Cristian

---

## 📌 Estado del Proyecto

✅ Funcional en Devnet
✅ Backend desplegado
✅ Cliente conectado
✅ Tests implementados

---

## 🔥 Notas Finales

Este proyecto demuestra el uso de la blockchain de Solana en aplicaciones educativas, garantizando la integridad y seguridad de los datos académicos.

---
