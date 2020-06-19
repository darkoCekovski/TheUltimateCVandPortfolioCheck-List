// web development CV

$(function() {
  // edit text
  $(".edit").on("click", function() {
    $(".contentedit").attr("contenteditable", true);
    $("#inputWebdevImg").addClass("show");
    $(".edit").html("SAVE");
    $(".edit").on("click", function() {
      $(".contentedit").attr("contenteditable", false);
      $("#inputWebdevImg").removeClass("show");
      $(".edit").hide();
    });
  });

  // image change
  var bannerImage = document.getElementById("inputWebdevImg");
  var result = document.getElementById("webdevRes");
  var img = document.getElementById("webdevImg");

  bannerImage.addEventListener("change", function() {
    var file = this.files[0];
    if (file.type.indexOf("image") < 0) {
      res.innerHTML = "invalid type";
      return;
    }
    var fReader = new FileReader();
    fReader.onload = function() {
      img.src = fReader.result;
      console.log(fReader.result);
      localStorage.removeItem("imgData");
      localStorage.setItem("imgData", fReader.result);
    };

    fReader.readAsDataURL(file);
  });

  function fetchimage() {
    var dataImage = localStorage.getItem("imgData");
    img.src = dataImage;
  }

  fetchimage();

  // download pdf
  function getPDF() {
    var HTML_Width = $(".cv-content").innerWidth();
    var HTML_Height = $(".cv-content").innerHeight();
    var top_left_margin = 15;
    var PDF_Width = HTML_Width + top_left_margin * 2;
    var PDF_Height = HTML_Height + top_left_margin * 2;
    var canvas_image_width = HTML_Width;
    var canvas_image_height = HTML_Height;

    var totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas($(".cv-content")[0], {
      allowTaint: true
    }).then(function(canvas) {
      canvas.getContext("2d");

      console.log(canvas.height + "  " + canvas.width);

      var imgData = canvas.toDataURL("image/jpeg", 1.0);
      var pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );

      for (var i = 1; i <= totalPDFPages; i++) {
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          -(PDF_Height * i) + top_left_margin * 4,
          canvas_image_width,
          canvas_image_height
        );
      }

      pdf.save("cv.pdf");
    });
  }

  $(".download").on("click", function() {
    $(document).scrollTop(0);
    getPDF();
    setTimeout(function() {
      window.location.href = "indexPopUp.html";
    }, 5000);
  });

  // CV tips
  $(".intro").click(function() {
    $(".tips_sugestion").text(
      "Tip: Write a short intro that truly represents you –not cheesy quotes, but something you truly believe in. Don’t put overused buzzwords, describe yourself and your capabilities with your own vocabulary. "
    );
  });
  $("#webdevImg").click(function() {
    $(".tips_sugestion").text(
      "Tip: Your photo should be professional. It’s better to send a CV without a photo, that with one that makes you seem unserious. "
    );
  });
  $(".contacts").click(function() {
    $(".tips_sugestion").text(
      "Tip: Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you have proof of your previous job experiences online, link that too.  "
    );
  });
  $(".workexp").click(function() {
    $(".tips_sugestion").text(
      "Tip: Write your previous ​job experience​ and if you’re currently working, your current job titles. Explain your responsibilities and projects and list the tech stack and products/projects you worked on. If you were working in a team, let the recruiter know what your role was. "
    );
  });
  $(".skills").click(function() {
    $(".tips_sugestion").text(
      "Tip: Showcase your tech stack​. List the stack under every previous project you have worked on, or showcase your projects on GitHub. The easiest way to do this is to list the stack under a previous project that you have worked on. Another way is to showcase your projects on GitHub. "
    );
  });
  $(".achivment").click(function() {
    $(".tips_sugestion").text(
      "Tip: Don’t be afraid to include a “Informal Education” section, where you can list all the courses, podcasts and webinars that you used to teach yourself about software development. Don’t include everything – just the education that is relevant and necessary for the position you are applying for. "
    );
  });
  $(".interests").click(function() {
    $(".tips_sugestion").text(
      "Tip: Tailor the CV according to job you’re applying for. There is no ‘one size fits all’ CV – so always adapt it before applying to a job.  "
    );
  });
});
