const images = [
  {
    path: "./assets/photography/20191225-DSC_0005.jpg",
    title: "Tokyo, Japan 2019 - Shinagawa City",
    alt: "Person standing in a Japanese alleyway",
  },
  {
    path: "./assets/photography/20191227-DSC_0348.jpg",
    title: "Tokyo, Japan 2019 - Minato City, teamLab Borderless",
    alt: "Person posing with lights in teamLab Borderless",
  },
  {
    path: "./assets/photography/20191231-DSC_0867.jpg",
    title: "Tokyo, Japan 2019 - Sumida",
    alt: "Night street view in Sumida City in Japan",
  },
  {
    path: "./assets/photography/20191229-DSC_0564.jpg",
    title: "Tokyo, Japan 2019 - Fujikawaguchiko",
    alt: "View of small road with car in the town of Fujikawaguchiko",
  },
  {
    path: "./assets/photography/20200104-DSC_0308.jpg",
    title: "Kyoto, Japan 2020 - Fushimi Inari Shrine",
    alt: "Multiple Fushimi Inari shrines",
  },
  {
    path: "./assets/photography/20200102-DSC_0885.jpg",
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "View of Miyajima Island from boat",
  },
  {
    path: "./assets/photography/20200102-DSC_0937.jpg",
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "Japanese child and nara deer posing with sunsetting",
  },
  {
    path: "./assets/photography/20200102-DSC_0028.jpg",
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "Close up of nara deer",
  },
  {
    path: "./assets/photography/20200102-DSC_0986.jpg",
    title: "Hiroshima, Japan 2020 - Miyajima Island",
    alt: "Close up of Japanese origami decoration",
  },
  {
    path: "./assets/photography/20200104-DSC_0272.jpg",
    title: "Kyoto, Japan 2020 - Shimogyō-ku",
    alt: "Japanese women in kimonos walking on street",
  },
  {
    path: "./assets/photography/20220629-IMG_0166.jpg",
    title: "Joshua Tree, California 2022 - Keys View",
    alt: "Sunset at Keys View in Joshua Tree",
  },
  {
    path: "./assets/photography/MarlieGasStation2.jpg",
    title: "Joshua Tree, California 2022 - Route 66",
    alt: "Girl posing by retro car at desert gas station",
  },
  {
    path: "./assets/photography/20230903-IMG_1589.jpg",
    title: "Manhattan, New York 2023 - Meatpacking District",
    alt: "Architect creation at the MeatPacking District in NYC",
  },
  {
    path: "./assets/photography/20230904-IMG_1627.jpg",
    title: "New York 2023 - Liberty Island",
    alt: "Statue of Liberty",
  },
  {
    path: "./assets/photography/20170601-IMG_1814.jpg",
    title: "Toronto, Ontario 2017 - Graffiti Alley",
    alt: "String of colours at Graffiti Alley in Toronto",
  },
  {
    path: "./assets/photography/DSC_0378.jpg",
    title: "Toronto, Ontario 2019 - High Park",
    alt: "Cherry Blossom Branches with sun in the background at High Park",
  },
  {
    path: "./assets/photography/20230617-IMG_1419.jpg",
    title: "Toronto, Ontario 2023 - Mimico Waterfront Park",
    alt: "Mimico Waterfront condos",
  },
];

function generateCarouselItems(image) {
  return `<div
          class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none photoItem"
          data-te-carousel-item
        >
          <div class="rounded-lg bg-white py-2 text-center text-xl">
            ${image.title}
          </div>
          <img
            src="${image.path}"
            alt="${image.alt}"
            class="m-auto block h-[90vh] w-full"
          />
        </div>`;
}

document.addEventListener("DOMContentLoaded", function () {
  function initCarouselPhotography() {
    const carouselArea = document.getElementById("photographyCarouselItems");
    if (!carouselArea) {
      console.error("Carousel area not found");
      return;
    }

    let carouselHTML = "";

    images.forEach((image, index) => {
      carouselHTML += generateCarouselItems(image);
    });

    carouselArea.innerHTML = carouselHTML;

    const carouselItems = document.querySelectorAll(".photoItem");
    if (!carouselItems.length) {
      console.error("No carousel items found");
      return;
    }

    carouselItems[0].classList.add("data-te-carousel-active");

    const prevButton = document.querySelector("#prevButton");
    const nextButton = document.querySelector("#nextButton");
    let currentIndex = 0;

    prevButton.addEventListener("click", () => {
      goToSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
      goToSlide(currentIndex + 1);
    });

    function goToSlide(index) {
      if (index < 0) {
        index = carouselItems.length - 1; //wrapping around when carousel is at last image;
      } else if (index >= carouselItems.length) {
        index = 0;
      }

      currentIndex = index;

      carouselItems.forEach((item, i) => {
        if (i === currentIndex) {
          item.classList.add("data-te-carousel-active");
        } else {
          item.classList.remove("data-te-carousel-active");
        }
      });
    }
  }
  initCarouselPhotography();
});
