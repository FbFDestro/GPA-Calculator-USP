function hasWorkLoad(courseData, numberElements) {
  return !isNaN(parseInt(courseData[numberElements - 5]));
}

function calculatePoints(grade, credits) {
  let point = 0;
  if (grade >= 9 && grade <= 10) {
    // A
    point = 4;
  } else if (grade >= 7 && grade < 9) {
    // B
    point = 3;
  } else if (grade >= 5 && grade < 7) {
    // C
    point = 2;
  } else if (grade >= 3 && grade < 5) {
    // D
    point = 1;
  }
  // F recieves 0 points
  return point * credits;
}

function calculateGPA() {
  const text = document.getElementsByTagName('textarea')[0].value;
  const courses = text.split('\n');

  let sumPoints = 0;
  let totalNumberOfCredits = 0;

  for (course of courses) {
    const courseData = course.split(' ');

    const numberElements = courseData.length - 1;
    const grade = parseFloat(courseData[numberElements - 1]);

    let offsetCredits;
    // depends if it has work load
    if (hasWorkLoad(courseData, numberElements)) {
      offsetCredits = numberElements - 5;
    } else {
      offsetCredits = numberElements - 4;
    }
    const credits = parseInt(courseData[offsetCredits]);

    // console.log(grade, credits);
    sumPoints += calculatePoints(grade, credits);
    totalNumberOfCredits += credits;
  }

  const gpa = sumPoints / totalNumberOfCredits;
  const spanResult = document.getElementById('gpaResult');
  spanResult.innerText = gpa;
}
