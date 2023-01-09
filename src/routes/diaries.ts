import { Router } from 'express';
import {
  getAllDiaries,
  getDiariesByID,
  createDiaryEntry,
} from '../services/diaryServices';

/* Define el router que manejara los endpoints */
const router = Router();

router
  .get('/', (_req, res) => {
    res.status(200).send(getAllDiaries());
  })
  .get('/:id', (req, res) => {
    const { id } = req.params;
    res.status(200).send(getDiariesByID(+id));
  })
  .post('/', (req, res) => {
    const { date, weather, visibility, comment } = req.body;

    /*NOTE: Se debe realizar una validación de los parametros que vienen de body por ser "any"
    y transformarlos al tipo de dato que requiere */

    const newDiaryEntry = createDiaryEntry({
      date,
      weather,
      visibility,
      comment,
    });

    res.send(newDiaryEntry);
  });

export default router;
