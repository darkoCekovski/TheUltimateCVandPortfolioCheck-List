$(function() {
  // LinkedIn and Laika tips
  $(".pic_bill_linkedin").mouseenter(function() {
    $(".tips_sugestion").text(
      `Choose a clear, friendly, and appropriately professional image. Not sure what “appropriately professional” means? Take a look around at what the people in your target company, industry sector, or business level are wearing. Match that. Tip: “If you can show yourself in action, do it. “A photo can go a long way to convey passion, energy, charisma, empathy, and other soft skills that are hard to write about.”`
    );
    $(".pic_bill_linkedin").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });

  $(".title_linkedin").mouseenter(function() {
    $(".tips_sugestion").text(
      `Make sure that your title matches your skills. 
      E.g., if you’re an entry level PHP developer, don’t say that you’re a PHP Expert.
      E.g., if you’re an entry level Data Scientist, don’t say that you’re a Data Science Expert.
      E.g., if you’re an entry level PPC specialist, don’t say that you’re a PPC Expert. 
      E.g., if you only finished an academy or course, don’t say you are a Graphic Design Expert. Skip the abbreviations and titles – keep it short and modest. `
    );
    $(".title_linkedin").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });

  $(".about_linkedin").mouseenter(function() {
    $(".tips_sugestion").text(
      "Be concise and easy to understand. Don’t use overdone motivational quotes about work ethics and inspiration, try to make the ‘about’ section as personal and as reflective of you as possible. "
    );
    $(".about_linkedin").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });

  $(".activity_linkedin").mouseenter(function() {
    $(".tips_sugestion").text(
      `Use the new “Open for business” feature. State your area of expertise and industry, to let recruiters know they can reach you. 
    Don’t write in things that you wouldn’t like to happen. For example, if you say you work good under pressure, employers might have an ace up their sleeve when stacking a lot of work with a short deadline, because you said so. Value your skills and free time accordingly. `
    );
    $(".activity_linkedin").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });

  $(".education_linkedin").mouseenter(function() {
    $(".tips_sugestion").text(
      `Under education, list all the formal and non-formal education you have, with focus on the education that is relevant to your current title. For example, if you put Brainster Coding Academy as an education, list all the modules and projects you have worked on. Make sure to list your major and bachelor/master/doctor thesis subject under the university education. 
      Tip: Add connections from the same field of work as you; even people you don’t know personally. That way, recruiters have a bigger chance of coming across your profile.  
      Put in the skills you are most experienced in, so you can be endorsed from other people.  
      Tip: Ask friends and coworkers to endorse you. `
    );
    $(".education_linkedin").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });

  $(".experience_linkedin").mouseenter(function() {
    $(".tips_sugestion").text(
      `Explain every work experience you've had in detail – what were your obligations and tasks, what was your job title, which technologies and tools did you use etc. 
      Don't be shy on listing experience that isn’t connected to your current profession. Volunteering at a local community center, summer jobs, projects you were a part of, pro bono work you did to improve your skills and gain experience – everything counts. Plus, every experience serves as proof to your work ethics and adaptability. 
      Tip: If you have no experience and education to build up your profile, do some pro bono work or volunteer. You can help someone, and at the same time enrich your portfolio.`
    );
    $(".experience_linkedin").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });

  $(".interests_linkedin").mouseenter(function() {
    $(".tips_sugestion").text(
      "List all your relevant accomplishments. Don’t say you have a black belt in karate, but mention an award from a hackaton. "
    );
    $(".interests_linkedin").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });

  // Laika tips
  $(".email_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "Tip: Make sure you leave an email that you check regularly. "
    );
    $(".email_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".social_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "Link all your social media and portfolios you want companies and recruiters to be able to see (LinkedIn, Facebook, Stack Overflow, GitHub, your personal website etc.) "
    );
    $(".social_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".reason_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "Be realistic when choosing the reason why you have a portfolio on Laika. This will help recruiters know whether you are suitable for the position on the long run. "
    );
    $(".reason_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".industry_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "You can only pick 1 industry out of the given 9 (Software Engineering, Design, Marketing and Communication, Data Science, IT and Sysadmin, Sales and Business Development, HR and Recruitment, Project and Product Management, Customer Support). "
    );
    $(".industry_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".experience_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "Work experience is not mandatory, but it helps companies know what kind of experience and in which industry you have."
    );
    $(".experience_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".education_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "Education is also not mandatory, but it adds weight to your portfolio if you have any academic knowledge. "
    );
    $(".education_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".location_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "You can choose out of four locations, or multiple. "
    );
    $(".location_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".job_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "You can choose between a job in office, remote, or both. "
    );
    $(".job_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".title_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "Let the companies know what is your current job title. "
    );
    $(".title_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".oportunity_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "Be honest about the motivation behind looking for a new opportunity. This will help us and the companies searching for new employees. "
    );
    $(".oportunity_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".levelExp_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "Please be honest when selecting the level of your experience. "
    );
    $(".levelExp_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".salary_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "Select your desired salary. Don’t try to be too accessible, but please be realistic – make sure you desired salary is in accordance to your experience. "
    );
    $(".salary_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
  $(".job_plan_laika").mouseenter(function() {
    $(".tips_sugestion").text(
      "You can choose multiple choices for your desired job plan. "
    );
    $(".job_plan_laika").mouseleave(function() {
      $(".tips_sugestion").text(
        "Detailed tips and suggestions on every field."
      );
    });
  });
});
