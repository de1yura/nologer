// Modules (also nests arrays for lessons)
const modulelist = {
    module01: {
        moduleName: "Tooling",
        moduleId: "01",
        moduleLength: "0.5",
        moduleDescription: "",
        lessons: {
            Lesson1: {
                lessonName: "Software Installs",
                lessonDescription: ""
            },
            Lesson2: {
                lessonName: "Command Line",
                lessonDescription: ""
            },
            Lesson3: {
                lessonName: "Git/Github",
                lessonDescription: ""
            }
        }
    },
    module02: {
        moduleName: "Web Fundamentals",
        moduleId: "02",
        moduleLength: "1",
        moduleDescription: "",
        lessons: {
            Lesson1: {
                lessonName: "HTML Intro",
                lessonDescription: ""
            },
            Lesson2: {
                lessonName: "CSS Intro",
                lessonDescription: ""
            },
            Lesson3: {
                lessonName: "SCSS & BEM",
                lessonDescription: ""
            },
            Lesson4: {
                lessonName: "Flexbox",
                lessonDescription: ""
            },
            Lesson5: {
                lessonName: "Grid",
                lessonDescription: ""
            },
            Project1: {
                lessonName: "Portfolio",
                lessonDescription: ""
            }
        }
    },
    module03: {
        moduleName: "Javascript",
        moduleId: "03",
        moduleLength: "2",
        moduleDescription: "",
        lessons: {
            Lesson1: {
                lessonName: "JS Intro",
                lessonDescription: ""
            },
            Lesson2: {
                lessonName: "Functions",
                lessonDescription: ""
            },
            Lesson3: {
                lessonName: "Arrays and Loops",
                lessonDescription: ""
            },
            Lesson4: {
                lessonName: "Array iterators",
                lessonDescription: ""
            },
            Lesson5: {
                lessonName: "Objects and Classes",
                lessonDescription: ""
            },
            Lesson6: {
                lessonName: "The DOM",
                lessonDescription: ""
            },
            Project1: {
                lessonName: "Calculator Challenge",
                lessonDescription: ""
            },
            Project2: {
                lessonName: "Game Challenge",
                lessonDescription: ""
            }
        }
    },
    module04: {
        moduleName: "React",
        moduleId: "04",
        moduleLength: "3",
        moduleDescription: "",
        lessons: {
            Lesson1: {
                lessonName: "React Intro",
                lessonDescription: ""
            },
            Lesson2: {
                lessonName: "State",
                lessonDescription: ""
            },
            Lesson3: {
                lessonName: "React Functions as Props",
                lessonDescription: ""
            },
            Lesson4: {
                lessonName: "React Mapping Over Data",
                lessonDescription: ""
            },
            Lesson5: {
                lessonName: "React Router",
                lessonDescription: ""
            }
        }
    }
};

//Curriculums
const curriculumlist = {
    curriculum01: {
        curriculumName: "Java and Cloud Programming",
        curriculumId: "01",
        curriculumDescription: "",
        modules: {
            Module1: "module01",
            Module2: "module02",
            Module3: "module03",
            Module4: "module04"
        }
    },
    curriculum02: {
        curriculumName: "Web Dev",
        curriculumId: "02",
        curriculumDescription: "",
        modules: {
            Module1: "module04",
            Module2: "module03",
            Module3: "module02",
            Module4: "module01"
        }
    }
};

// Courses
const courselist = {
    course01: {
        courseId: "HAW0521",
        courseName: "Hawaii",
        dateStart: "2021-05-25",
        dateEnd: "2021-12-25",
        color: "red",
        curriculum: "curriculum01",
        //when a course is made, it should use dateStart and numberOfWeeks to create a list of week, day and AM/PM keys. the tags will be created using for loops. when schedule takes a course, it should calculate the current week by comparing dateStart to the current date (unless the course has ended, in which case no schedule should show) and then display that week's days+AM+PM.
        numberOfWeeks: 12,
        calendar: {
            Week1: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week2: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week3: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week4: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week5: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week6: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week7: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week8: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week9: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week10: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week11: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week12: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            }
        },
        leadCoach: "Sam",
        support: "Ashlee",
        description: ""
    },
    course02: {
        courseId: "ROM0121",
        courseName: "Rome",
        dateStart: "2021-01-01",
        dateEnd: "2021-03-30",
        color: "blue",
        curriculum: "Curriculum01",
        numberOfWeeks: 12,
        calendar: {
            Week1: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week2: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week3: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week4: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week5: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week6: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week7: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week8: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week9: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week10: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week11: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week12: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            }
        },
        leadCoach: "Sam",
        support: "Ashlee",
        description: ""
    },
    course03: {
        courseId: "FIJ0621",
        courseName: "Fiji",
        dateStart: "2021-06-25",
        dateEnd: "2022-01-25",
        color: "green",
        curriculum: "Curriculum01",
        numberOfWeeks: 12,
        calendar: {
            Week1: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week2: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week3: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week4: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week5: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week6: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week7: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week8: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week9: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week10: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week11: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week12: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            }
        },
        leadCoach: "Sam",
        support: "Ashlee",
        description: ""
    },
    course04: {
        courseId: "CIT0921",
        courseName: "Citibank",
        dateStart: "2021-09-25",
        dateEnd: "2022-02-25",
        color: "yellow",
        curriculum: "Curriculum01",
        numberOfWeeks: 6,
        calendar: {
            Week1: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week2: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week3: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week4: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week5: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week6: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            }
        },
        leadCoach: "Sam",
        support: "Ashlee",
        description: ""
    },
    course05: {
        courseId: "LON1021",
        courseName: "London",
        dateStart: "2021-10-25",
        dateEnd: "2022-03-25",
        color: "red",
        curriculum: "Curriculum01",
        numberOfWeeks: 12,
        calendar: {
            Week1: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week2: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week3: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week4: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week5: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week6: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week7: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week8: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week9: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week10: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week11: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week12: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            }
        },
        leadCoach: "Sam",
        support: "Ashlee",
        description: ""
    },
    course06: {
        courseId: "ATL1121",
        courseName: "Atlantis",
        dateStart: "2021-11-21",
        dateEnd: "2022-04-22",
        color: "blue",
        curriculum: "Curriculum01",
        numberOfWeeks: 12,
        calendar: {
            Week1: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week2: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week3: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week4: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week5: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week6: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week7: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week8: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week9: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week10: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week11: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            },
            Week12: {
                Monday: {
                    day: "Monday",
                    AM: "",
                    PM: ""
                },
                Tuesday: {
                    day: "Tuesday",
                    AM: "",
                    PM: ""
                },
                Wednesday: {
                    day: "Wednesday",
                    AM: "",
                    PM: ""
                },
                Thursday: {
                    day: "Thursday",
                    AM: "",
                    PM: ""
                },
                Friday: {
                    day: "Friday",
                    AM: "",
                    PM: ""
                }
            }
        },
        leadCoach: "Sam",
        support: "Ashlee",
        description: ""
    }
};


const dummyData = {
    courseList: courselist,
    curriculumList: curriculumlist,
    moduleList: modulelist
};

export default dummyData;