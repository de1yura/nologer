"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// Modules (also nests arrays for lessons)
var modulelist = [{
  moduleName: "Introduction",
  lessons: {
    Lesson1: "Github",
    Lesson2: "HTML"
  }
}, {
  moduleName: "CSS",
  lessons: {
    Lesson1: "Flexbox",
    Lesson2: "Gridbox",
    Lesson3: "SCSS",
    Project1: "Portfolio"
  }
}, {
  moduleName: "Javascript",
  lessons: {
    Lesson1: "JS Intro",
    Lesson2: "Functions",
    Lesson3: "Arrays and Loops",
    Lesson4: "Array iterators",
    Lesson5: "Objects and Classes",
    Lesson6: "The DOM",
    Project1: "Calculator Challenge",
    Project2: "Game Challenge"
  }
}, {
  moduleName: "React",
  lessons: {
    Lesson1: "React Intro",
    Lesson2: "State",
    Lesson3: "React Functions As Props",
    Lesson4: "React Mapping Over Data",
    Lesson5: "React Router"
  }
}]; //Curriculums

var curriculumlist = [{
  curriculumName: "Java and Cloud Programming",
  modules: {
    Module1: modulelist[0],
    Module2: modulelist[1],
    Module3: modulelist[2],
    Module4: modulelist[3]
  }
}]; // Courses

var courselist = [{
  courseName: "Hawaii",
  dateStart: "2021-05-25",
  dateEnd: "2021-12-25",
  color: "red",
  curriculum: curriculumlist[0],
  numberOfWeeks: 12,
  leadCoach: "Sam",
  support: "Ashlee",
  description: "",
  Day: "Monday",
  Date: "5th July 2021"
}, {
  courseName: "Rome",
  dateStart: "2021-01-01",
  dateEnd: "2021-03-30",
  color: "blue",
  curriculum: curriculumlist[0],
  numberOfWeeks: 12,
  leadCoach: "Sam",
  support: "Ashlee",
  description: "",
  Day: "Tuesday",
  Date: "6th July 2021"
}, {
  courseName: "Fiji",
  dateStart: "2021-06-25",
  dateEnd: "2022-01-25",
  color: "green",
  curriculum: curriculumlist[0],
  numberOfWeeks: 12,
  leadCoach: "Sam",
  support: "Ashlee",
  description: "",
  Day: "Wednesday",
  Date: "7th July 2021"
}, {
  courseName: "Citibank",
  dateStart: "2021-09-25",
  dateEnd: "2022-02-25",
  color: "yellow",
  curriculum: curriculumlist[0],
  numberOfWeeks: 6,
  leadCoach: "Sam",
  support: "Ashlee",
  description: "",
  Day: "Thursday",
  Date: "8th July 2021"
}, {
  courseName: "London",
  dateStart: "2021-10-25",
  dateEnd: "2022-03-25",
  color: "red",
  curriculum: curriculumlist[0],
  numberOfWeeks: 12,
  leadCoach: "Sam",
  support: "Ashlee",
  description: "",
  Day: "Friday",
  Date: "9th July 2021"
}, {
  courseName: "Atlantis",
  dateStart: "2021-11-21",
  dateEnd: "2022-04-22",
  color: "blue",
  curriculum: curriculumlist[0],
  numberOfWeeks: 12,
  leadCoach: "Sam",
  support: "Ashlee",
  description: "",
  Day: "Friday",
  Date: "9th July 2021"
}];
var dummyData = {
  courseList: courselist,
  curriculumList: curriculumlist,
  moduleList: modulelist
};
var _default = dummyData;
exports["default"] = _default;