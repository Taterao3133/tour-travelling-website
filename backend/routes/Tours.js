
import express from  'express';

import { createTour, deleteTour, getAllTour, getFeaturedTour,
        getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js';

const router = express.Router()

// create new tour
router.post('/', createTour);

// update tour
router.put('/:id', updateTour);


// delete tour
router.delete('/:id', deleteTour);

// getsingle tour
router.get('/:id', getSingleTour);

// getAll tour
router.get('/', getAllTour);

//get tour by search
router.post('/search/getTourBySearch',getTourBySearch)
router.post('/getFeaturedTour',getFeaturedTour)
router.post('/search/getTourCount',getTourCount)

export default router;

