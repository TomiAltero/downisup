const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const moment = require('moment');

// Endpoint para obtener todos los especialistas y sus horarios
router.get('/especialistas', (req, res) => {
  try {
    const especialistasPath = path.join(__dirname, '../../data/especialistas.json');
    const especialistas = JSON.parse(fs.readFileSync(especialistasPath, 'utf8'));
    res.json(especialistas);
  } catch (error) {
    console.error('Error al obtener especialistas:', error);
    res.status(500).send({ error: 'Error al obtener especialistas' });
  }
});

// Endpoint para obtener la disponibilidad de horarios de un especialista en un día específico
router.get('/disponibilidad/:nombre/:dia', (req, res) => {
  const { nombre, dia } = req.params;
  const especialistasPath = path.join(__dirname, '../../data/especialistas.json');
  const turnosPath = path.join(__dirname, '../../data/turnos.json');
  
  try {
    const especialistas = JSON.parse(fs.readFileSync(especialistasPath, 'utf8'));
    const turnosAgendados = JSON.parse(fs.readFileSync(turnosPath, 'utf8') || '[]');
    
    const especialista = especialistas.find(e => e.nombre === nombre);
    if (!especialista || !especialista.diasDisponibles.includes(Number(dia))) {
      return res.status(404).send({ error: 'Especialista no disponible en el día seleccionado' });
    }
    
    // Generar disponibilidad horaria en intervalos de 30 minutos
    let disponibilidad = [];
    let inicio = moment(especialista.horarios.inicio, 'HH:mm');
    const fin = moment(especialista.horarios.fin, 'HH:mm');
    
    while (inicio.isBefore(fin)) {
      const horario = inicio.format('HH:mm');
      disponibilidad.push({ horario, ocupado: false });
      inicio.add(30, 'minutes');
    }
    
    const horariosOcupados = turnosAgendados
      .filter(turno => turno.especialista === nombre && turno.dia === Number(dia))
      .map(turno => turno.horario);
    
    disponibilidad = disponibilidad.map(h => ({
      ...h,
      ocupado: horariosOcupados.includes(h.horario),
    }));
    
    res.status(200).json({ disponibilidad });
  } catch (error) {
    console.error('Error al obtener disponibilidad de horarios:', error);
    res.status(500).send({ error: 'Error al obtener disponibilidad de horarios' });
  }
});


// Endpoint para guardar un turno
router.post('/guardar', (req, res) => {
  const newTurno = req.body;
  const turnosPath = path.join(__dirname, '../../data/turnos.json');
  
  try {
    let turnos = JSON.parse(fs.readFileSync(turnosPath, 'utf8') || '[]');
    turnos.push(newTurno);
    
    fs.writeFile(turnosPath, JSON.stringify(turnos, null, 2), (err) => {
      if (err) return res.status(500).send({ error: 'Error al guardar el turno' });
      res.status(201).send({ message: 'Turno guardado exitosamente' });
    });
  } catch (error) {
    console.error('Error al guardar el turno:', error);
    res.status(500).send({ error: 'Error al guardar el turno' });
  }
});

module.exports = router;
