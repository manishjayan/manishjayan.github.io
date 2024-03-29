(function () {

    // full Name 
    let fullName = data.firstName + " " + data.lastName;
    document.title = fullName;
    let fullNameClass = document.querySelectorAll('.fullName');
    fullNameClass.forEach(function (c) {
        c.innerHTML = fullName;
    });

    // Social links 
    let genericClass = document.querySelectorAll('.twitter');
    genericClass.forEach(function (c) {
        c.href = data.twitter;
    });
    genericClass = document.querySelectorAll('.instagram');
    genericClass.forEach(function (c) {
        c.href = data.instagram;
    });
    genericClass = document.querySelectorAll('.github');
    genericClass.forEach(function (c) {
        c.href = data.github;
    });
    genericClass = document.querySelectorAll('.linkedin');
    genericClass.forEach(function (c) {
        c.href = data.linkedin;
    });

    // My Journey
    data.education.forEach(educationitem => {
        document.getElementById("education-items").innerHTML +=
            "<div class='myjourney-item'><h4 id = 'school'>" + educationitem.school
            + "</h4><h5 id = 'period'>" + educationitem.startYear + " - " + educationitem.endYear
            + "</h5><em><p id = 'fieldofstudy'>" + educationitem.fieldOfStudy
            + "</p></em><p></p></div>";
    })

    data.experience.forEach(professionalitem => {
        document.getElementById("professional-items").innerHTML +=
            "<div class='myjourney-item'>"
            + "<h4 id = 'etitle'>" + professionalitem.title
            + "</h4><h5 id = 'eperiod'>" + professionalitem.startDate + " - " + professionalitem.endDate
            + "</h5><em><p id = 'location'>" + professionalitem.location
            + "</h5><em><p id = 'description'>" + professionalitem.description + "</p></em></div>";
    })

    // skills
    var flag = 1
    Object.keys(data.skills).map(skill =>{
        var part = flag ? "skillspart1" : "skillspart2";
        document.getElementById(part).innerHTML += "<div class='progress'>"
        +"<span class='skill'> "+skill+" <i class='val'>"+data.skills[skill]+"%</i></span>"
        +"<div class='progress-bar-wrap'>"
        +  "<div class='progress-bar' role='progressbar' aria-valuenow="+data.skills[skill]+" aria-valuemin='0' aria-valuemax='100'></div>"
        +"</div></div>"
        flag = !flag
    });

    // Project
    data.projects.forEach((projectitem,index) => {
        document.getElementById("project-items").innerHTML += "<div class='col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0' data-aos='zoom-in' data-aos-delay='200'>"
            + "<div class='icon-box'>"
            + "<img src='assets/img/projects/project-"+(index+1)+".jpg' class='img-fluid' alt=''>"
            + "<h4><a href='" + projectitem.link + "'target='_blank'>" + projectitem.name + " - " + projectitem.purpose + "</a></h4><p>"
            + projectitem.description
            + "</p></div></div>";
    })

    // Certificates
    var c = 1;
    for (var i = 0, j = 0; i < 3 || j < 3; i++, j++) {
        if (i < 3) {
            document.getElementById("certificates").innerHTML += "<div class='col-lg-4 col-md-6 certificate-item filter-app'>"
                + "<div class='certificate-wrap'>"
                + "<img src='assets/img/certificates/technical-" + (i+1) + ".jpg' class='img-fluid' alt=''>"
                + "<div class='certificate-info'>"
                + "<h4 id = 'technical-certificate-name-1'>" + data.technicalCertificates[i].name + "</h4>"
                + "<p id = 'technical-certificate-issuingOrganization-1'>" + data.technicalCertificates[i].issuingOrganization + "</p>"
                + "<p id = 'technical-certificate-issuedDate-1'>" + data.technicalCertificates[i].issuedDate + "</p>"
                + "<div class='certificate-links'>"
                + "<a href='assets/img/certificates/technical-" + (i+1) +".jpg' data-gallery='certificateGallery' class='certificate-lightbox' title=''><i class='bx bx-plus'></i></a>"
                + "<a target = '_blank' href='"+data.technicalCertificates[i].verify+"'><i class='bx bx-link'></i></a>"
                + "</div></div></div></div>";
            c++;
        }
        if (j < 3) {
            document.getElementById("certificates").innerHTML += "<div class='col-lg-4 col-md-6 certificate-item filter-web'>"
                + "<div class='certificate-wrap'>"
                + "<img src='assets/img/certificates/others-" + (j+1) + ".jpg' class='img-fluid' alt=''>"
                + "<div class='certificate-info'>"
                + "<h4 id = 'technical-certificate-name-1'>" + data.otherCertificates[j].name + "</h4>"
                + "<p id = 'technical-certificate-issuingOrganization-1'>" + data.otherCertificates[j].issuingOrganization + "</p>"
                + "<p id = 'technical-certificate-issuedDate-1'>" + data.otherCertificates[j].issuedDate + "</p>"
                + "<div class='certificate-links'>"
                + "<a href='assets/img/certificates/others-" + (j+1) +".jpg' data-gallery='certificateGallery' class='certificate-lightbox' title=''><i class='bx bx-plus'></i></a>"
                + "<a target = '_blank' href='"+data.otherCertificates[i].verify+"' ><i class='bx bx-link'></i></a>"
                + "</div></div></div></div>";
            c++;
        }
    }


    // contact form
    document.getElementById("mylocation").innerHTML = data.city + ", " + data.state;
    document.getElementById("myemail").innerHTML = data.email;
    document.getElementById("phone").innerHTML = data.phoneNumber;
    
})()