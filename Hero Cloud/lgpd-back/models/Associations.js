import User from "./User.js";
import Course from "./Course.js";
import Teacher from "./Teacher.js";
import Evaluation from "./Evaluation.js";
import { Association } from "sequelize";

const associations = () => {

    Course.hasMany(Teacher);
    User.hasMany(Evaluation);
    Course.hasMany(Evaluation);
}

const factory = {
    associations
}

export default factory;
