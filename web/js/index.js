const mediaQuery = window.matchMedia("(min-width: 768px)");

function descriptionTextHandler(e) {
  if (e.matches) {
    for (let i = 3; i >= 0; i--) {
      const element = $(".text-block")[i];
      var innerDivs = element;
      element.remove();
      $(".aplicaciones-cont")[i].append(innerDivs);
    }
  } else {
    for (let i = 3; i >= 0; i--) {
      const element = $(".text-block")[i];
      var innerDivs = element;
      element.remove();
      $(".image-block")[i].append(innerDivs);
    }
  }
}

mediaQuery.addListener(descriptionTextHandler);



descriptionTextHandler(mediaQuery);
