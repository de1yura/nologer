//List all courses
//Define which courses are 'currently running' (current date lies within course schedule)
//Automatically filter at start so that currently running courses are shown

CSS w/ bullet point to come later

DONE:
Filter courses
-Make a boolean, use new Date()* for current date and check if it lies within range for course date.
*new Date() returns current date. will need to be stored in a function so it can be called flexibly.
-Reverse the dates and combine it into a single number, then check if it is within the limits, eg:
//15/07/2021      10/07/2021 20/07/2021
//20210715     20210710-20210720
-Filter by past/current/future
-Add sort by start date function
-Bonus: Add the button template for the New Course pop-up.

When you click a card:
-The card must change an overarching variable/state that removes bullet points from any other card.
-THEN, the card adds the bullet point to itself.




Deleted codes:

  const getCurrentAndCourseConstructs = (course) => {
    const current = getCurrentDateConstruct();
    const start = getCourseDateConstruct(course.dateStart);
    const end = getCourseDateConstruct(course.dateEnd);
    return [current, start, end];



    const setDateRange = () => {
    //if day/month have 1 digit, add 0 in front
    if (filterStartDay.length === 1){
      setStartDay("0" + filterStartDay);
    }
    if (filterStartMon.length === 1){
      setStartMon("0" + filterStartMon);
    }
    if (filterEndDay.length === 1){
      setEndDay("0" + filterEndDay);
    }
    if (filterEndMon.length === 1){
      setEndMon("0" + filterEndMon);
    }
  }


  //Filter by Specific Date Range
  //States that keep track of specified date range
  const [filterStartDate, setStartDate] = useState('');
  const changeStartDate = (e) => {
    setStartDate(e.target.value);
  }
  const [filterEndDate, setEndDate] = useState('');
  const changeEndDate = (e) => {
    setEndDate(e.target.value)
  }
  //Function to filter the courselist by specified date range
  const filterByDate = (courseStart, courseEnd, filterStart, filterEnd) => {
    return courseStart >= filterStart && filterEnd >= courseEnd;
  }
  const applyDateFilter = () => {
    const filterStart = getCourseDate(filterStartDate);
    const filterEnd = getCourseDate(filterEndDate);
    console.log(filterStartDate);
    console.log(filterStart);
  
    return courselist.filter((course) => 
      filterByDate(getCourseDate(course.dateStart), getCourseDate(course.dateEnd), filterStart, filterEnd)
    )
  }
  //Apply filtered course list to display
  const showCustomList = () => {
    setDisplayList(
      sortByStartDate(applyDateFilter()).map( (course) => {
        return <CourseListItem course={course} />
      })
    )
  } 

          <div>
          <p>
            <input type="date" value={filterStartDate} onChange={changeStartDate}></input>
          </p>
          <p>To</p>
          <p>
            <input type="date" value={filterEndDate} onChange={changeEndDate}></input>
          </p>
          <button onClick={showCustomList}>Filter by Date</button>
        </div>