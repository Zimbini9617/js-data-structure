function getInitials(students) {
    // use Array.map() to create a new array of initials
    const initials = students.map((student) => {
      // get the first letter of the first and last names
      const firstInitial = student.first[0];
      const lastInitial = student.last[0];
  
      // concatenate the initials
      return `${firstInitial}${lastInitial}`;
    });
  
    return initials;
  }
  let students1 = [
    { first: 'ada', last: 'yonath', subject: 'chemistry' },
    { first: 'nelly', last: 'sachs', subject: 'literature' },
    { first: 'rosalyn', last: 'yallow', subject: 'medicine' }
  ];
  console.log(getInitials(students1)); // ['AY', 'NS', 'RY']
  
  
  let students2 = [
      { first: 'margaret', last: 'knight' },
      { first: 'ellen', last: 'ochoa' },
  ];
  console.log(getInitials(students2)); // ['MK', 'EO']  