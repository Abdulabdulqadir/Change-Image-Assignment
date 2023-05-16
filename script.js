function getResult() {
    var RandomNumber = Math.floor(Math.random() * 5);
  
    if (RandomNumber === 0) {
      document.getElementById(
        "result"
      ).innerHTML = `<img src="D:\download (1).jpeg" />`;
    }
    if (RandomNumber === 1) {
      document.getElementById(
        "result"
      ).innerHTML = `<img src="D:\Free-Mobile-App-and-Web-Development-Course-Saylani-Courses-Adm.jpg" />`;
    }
    if (RandomNumber === 2) {
      document.getElementById(
        "result"
      ).innerHTML = `<img src="D:\download.jpeg" />`;
    }
    if (RandomNumber === 3) {
      document.getElementById(
        "result"
      ).innerHTML = `<img src="D:\Saylani-Courses-SMIT-Admission-Karachi.jpg" />`;
    }
    if (RandomNumber === 4) {
      document.getElementById(
        "result"
      ).innerHTML = `<img src="D:\Saylani-Web-and-Mobile-App-Development-Course-SMIT-Courses-2021.jpg" />`;
    }
    if (RandomNumber === 5) {
      document.getElementById(
        "result"
      ).innerHTML = `<img src="D:\download (2).jpeg" />`;
    }
  }