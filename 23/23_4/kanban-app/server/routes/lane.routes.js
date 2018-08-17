import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

// Add new Lane
router.route('/lanes').post(LaneController.addLane);

// Get all lines
router.route('/lanes').get(LaneController.getLanes);

// Delete a lane by laneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

// Change lane's name
router.route('/lanes').put(LaneController.updateLane);

export default router;
