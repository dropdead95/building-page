import { v4 as uuidv4 } from "uuid";

import Review_1 from "../assets/review-1.png";
import Review_2 from "../assets/review-2.png";
import Review_3 from "../assets/review-3.png";

export const reviews = [
  {
    id: uuidv4(),
    image: Review_1,
  },
  {
    id: uuidv4(),
    image: Review_2,
  },
  {
    id: uuidv4(),
    image: Review_3,
  },
];
