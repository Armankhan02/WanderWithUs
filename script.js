const allPackages = {
  India: [
    {
      type: 'Solo',
      title: 'Solo Adventure in India 🇮🇳',
      description: 'Perfect for solo travelers. Enjoy Himalayas, Kerala backwaters, and more.',
      price: '₹5,000',
      image: 'images/india-solo.jpg'
    },
    {
      type: 'Family',
      title: 'Family Vacation in India ',
      description: 'Temples, wildlife, and resorts tailored for families.',
      price: '₹10,000',
      image: 'images/india-family.jpg'
    },
    {
      type: 'Friends',
      title: 'Friends Group Tour India ',
      description: 'Party in Goa, trek in Manali, beach days and more!',
      price: '₹15,000',
      image: 'images/india-friends.jpg'
    }
  ],
  Iran: [
    {
      type: 'Solo',
      title: 'Iran Solo Explorer 🇮🇷',
      description: 'Wander through deserts, Persian bazaars, and historic streets alone.',
      price: '₹5,000',
      image: 'images/iran-solo.jpg'
    },
    {
      type: 'Family',
      title: 'Iran Family Trip ',
      description: 'Safe and rich cultural journey with family comfort.',
      price: '₹10,000',
      image: 'images/iran-family.jpg'
    },
    {
      type: 'Friends',
      title: 'Iran with Friends ',
      description: 'Group trekking, cultural nights and authentic Iranian food!',
      price: '₹15,000',
      image: 'images/iran-friends.jpg'
    }
  ],
  Italy: [
    {
      type: 'Solo',
      title: 'Italy Solo Trip 🇮🇹',
      description: 'Stroll through Rome, Venice canals, and Pisa as a solo explorer.',
      price: '₹5,000',
      image: 'images/italy-solo.jpg'
    },
    {
      type: 'Family',
      title: 'Italy Family Tour ',
      description: 'Gelato, museums and beaches for the whole family.',
      price: '₹10,000',
      image: 'images/italy-family.jpg'
    },
    {
      type: 'Friends',
      title: 'Italy Party with Friends ',
      description: 'Nightlife, pasta tours, and hiking with friends!',
      price: '₹15,000',
      image: 'images/italy-friends.jpg'
    }
  ],
  Singapore: [
    {
      type: 'Solo',
      title: 'Singapore Solo City Tour 🇸🇬',
      description: 'Explore Marina Bay, Sentosa and gardens solo-style.',
      price: '₹5,000',
      image: 'images/singapore-solo.jpg'
    },
    {
      type: 'Family',
      title: 'Singapore Family Vacation ',
      description: 'Zoo, aquarium, and Universal Studios for all ages.',
      price: '₹10,000',
      image: 'images/singapore-family.jpg'
    },
    {
      type: 'Friends',
      title: 'Singapore with Squad',
      description: 'Shopping, food trails, and unforgettable memories.',
      price: '₹15,000',
      image: 'images/singapore-friends.jpg'
    }
  ],
  Thailand: [
    {
      type: 'Solo',
      title: 'Solo Escape to Thailand 🇹🇭',
      description: 'Explore Bangkok temples, street food, and serene beaches alone.',
      price: '₹5,000',
      image: 'images/thailand-solo.jpg'
    },
    {
      type: 'Family',
      title: 'Thailand Family Getaway ',
      description: 'Enjoy theme parks, beach resorts, and elephant sanctuaries.',
      price: '₹10,000',
      image: 'images/thailand-family.jpg'
    },
    {
      type: 'Friends',
      title: 'Thailand Group Fun Trip',
      description: 'Pattaya nightlife, island hopping, and jungle adventures.',
      price: '₹15,000',
      image: 'images/thailand-friends.jpg'
    }
  ]
};

const countryPlans = {
  // (You already have this defined separately, not duplicating here)
};

const countryReviews = {
  India: `
    <h3>India – Customer Review</h3>
    <div class="review-header">
      <img src="images/reviewers/ananya.jpg" alt="Ananya" class="reviewer-img" />
      <strong>Ananya S., Pune</strong>
    </div>
    <blockquote>
      “A magical trip! The Ganga Aarti, the Taj Mahal, and the rich culture were beyond expectations.
      Our solo tour was well-managed and extremely memorable.”
    </blockquote>
    <img src="images/trips/india-trip.jpg" alt="India Trip Photo" class="trip-photo" />
  `,
  Iran: `
    <h3>Iran – Customer Review</h3>
    <div class="review-header">
      <img src="images/reviewers/mehran.jpg" alt="Mehran" class="reviewer-img" />
      <strong>Mehran A., Hyderabad</strong>
    </div>
    <blockquote>
      “Traveling with my friends to Iran was such a unique experience. The architecture and bazaars
      are stunning. Very safe and welcoming!”
    </blockquote>
    <img src="images/trips/iran-trip.jpg" alt="Iran Trip Photo" class="trip-photo" />
  `,
  Italy: `
    <h3>Italy – Customer Review</h3>
    <div class="review-header">
      <img src="images/reviewers/sara.jpg" alt="Sara" class="reviewer-img" />
      <strong>Sara M., Mumbai</strong>
    </div>
    <blockquote>
      “Italy felt like a dream! Venice and Florence were breathtaking. Loved the pasta, wine, and old streets.
      Best family vacation ever.”
    </blockquote>
    <img src="images/trips/italy-trip.jpg" alt="Italy Trip Photo" class="trip-photo" />
  `,
  Singapore: `
    <h3>Singapore – Customer Review</h3>
    <div class="review-header">
      <img src="images/reviewers/rahul.jpg" alt="Rahul" class="reviewer-img" />
      <strong>Rahul K., Chennai</strong>
    </div>
    <blockquote>
      “Clean, fun, and futuristic. Universal Studios was a hit with my kids. Great trip from start to end!”
    </blockquote>
    <img src="images/trips/singapore-trip.jpg" alt="Singapore Trip Photo" class="trip-photo" />
  `,
  Thailand: `
    <h3>Thailand – Customer Review</h3>
    <div class="review-header">
      <img src="images/reviewers/divya.jpg" alt="Divya" class="reviewer-img" />
      <strong>Divya J., Bengaluru</strong>
    </div>
    <blockquote>
      “Nightlife, beaches, temples — everything was perfect! Pattaya was a blast with my friends.
      Affordable and unforgettable.”
    </blockquote>
    <img src="images/trips/thailand-trip.jpg" alt="Thailand Trip Photo" class="trip-photo" />
  `
};


function scrollToPackages() {
  const section = document.getElementById("packagesContainer");
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function renderPackage(container, pack) {
  container.innerHTML += `
    <section class="package-card">
      <img src="${pack.image}" alt="${pack.title}" style="width:100%; max-height:200px; object-fit:cover;" />
      <h2>${pack.title}</h2>
      <p>${pack.description}</p>
      <p><strong>Price:</strong> ${pack.price}</p>
      <button onclick="selectPackage('${pack.type.toLowerCase()}')">Book ${pack.type}</button>
    </section>
  `;
}

function showCountryPlan(country) {
  const planContainer = document.getElementById("planDetails");
  if (planContainer) {
    if (country === "all") {
      planContainer.innerHTML = "";
    } else {
      planContainer.innerHTML = countryPlans[country] || "<p>No plan available.</p>";
    }
  }
}

function showCountryReview(country) {
  const reviewContainer = document.getElementById("reviewContainer");
  if (reviewContainer) {
    if (country === "all") {
      reviewContainer.innerHTML = "";
    } else {
      reviewContainer.innerHTML = countryReviews[country] || "<p>No review available.</p>";
    }
  }
}

function toggleOtherSections(show) {
  const sections = [
    document.querySelector('.reviews'),
    document.querySelector('.submit-review'),
    document.querySelector('.testimonial-slider'),
    document.querySelector('.faqs'),
    document.querySelector('.contact')
  ];
  sections.forEach(section => {
    if (section) section.style.display = show ? 'block' : 'none';
  });
}

function filterByCountry(country) {
  const container = document.getElementById("packagesContainer");
  container.innerHTML = '';

  if (country === 'all') {
    Object.keys(allPackages).forEach(destination => {
      allPackages[destination].forEach(pack => renderPackage(container, pack));
    });
    showCountryPlan("all");
    showCountryReview("all");
    toggleOtherSections(true);
    renderCountryReviewsGrid();
  } else {
    if (allPackages[country]) {
      allPackages[country].forEach(pack => renderPackage(container, pack));
    }
    showCountryPlan(country);
    showCountryReview(country);
    toggleOtherSections(false);
  }
}

function selectPackage(type) {
  localStorage.setItem("selectedPackage", type);
  window.location.href = "booking.html";
}

function renderCountryReviewsGrid() {
  const reviewContainer = document.getElementById('reviewGridContainer');
  if (!reviewContainer) return;

  reviewContainer.innerHTML = '';

  Object.keys(countryReviews).forEach(country => {
    const box = document.createElement('div');
    box.className = 'review-box';
    box.innerHTML = countryReviews[country];
    reviewContainer.appendChild(box);
  });
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  const filterElement = document.getElementById("countryFilter");
  if (filterElement) {
    filterElement.addEventListener("change", (e) => {
      const selectedCountry = e.target.value;
      filterByCountry(selectedCountry);
    });
  }

  filterByCountry("all");
  renderCountryReviewsGrid();
});


function renderPackage(container, pack) {
  container.innerHTML += `
    <section class="package-card">
      <img src="${pack.image}" alt="${pack.title}" style="width:100%; max-height:200px; object-fit:cover;" />
      <h2>${pack.title}</h2>
      <p>${pack.description}</p>
      <p><strong>Price:</strong> ${pack.price}</p>
      <button class="book-btn" onclick="selectPackage('${pack.type.toLowerCase()}')">
        Book ${pack.type} →
      </button>
    </section>
  `;
}
