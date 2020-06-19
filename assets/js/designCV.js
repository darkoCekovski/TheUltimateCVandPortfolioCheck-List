// design CV

$(function() {
  // edit text
  $(".edit").on("click", function() {
    $(".contentedit").attr("contenteditable", true);
    $(".edit").html("SAVE");
    $(".edit").on("click", function() {
      $(".contentedit").attr("contenteditable", false);
      $(".edit").hide();
    });
  });

  // download pdf
  function getPDF() {
    var HTML_Width = $(".cv-content").width();
    var HTML_Height = $(".cv-content").height();
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
  $(".workexp").click(function() {
    $(".tips_sugestion").text(
      "Tip: Write your previous ​job experience​ and if you’re currently working, your current job titles. Explain your responsibilities and projects and list the tech stack and products/projects you worked on. If you were working in a team, let the recruiter know what your role was. "
    );
  });
  $(".contacts").click(function() {
    $(".tips_sugestion").text(
      "Tip: Email, phone number and date of birth are the practical part of the assembly of a CV. Enter your professional email address, preferably on Gmail. Your city of living is an information that interests your potential employers. But don’t leave your home address. Leave a link to your LinkedIn profile. If you have proof of your previous job experiences online, link that too.  "
    );
  });
  $(".education").click(function() {
    $(".tips_sugestion").text(
      "Tip: Let the recruiter know about your ​education​, but only write the important parts – skip the high school and elementary, stick to the university degrees and courses relevant to the job you’re applying for. "
    );
  });
  $(".skills").click(function() {
    $(".tips_sugestion").text(
      "Tip: Make sure you use keywords that will put the focus on your best skills. If an HR/recruiter just scans your CV, they will catch their attention. Highlight terms like “Python” or “Machine learning”. Space is limited, so don’t waste t on soft skills like leadership or communication. "
    );
  });
});
