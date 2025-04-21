const guideData = {
    usa: [{
            title: "Visa Info",
            content: "The F1 visa is required for full-time international students in the USA."
        },
        {
            title: "Top Universities",
            content: "MIT, Stanford, Harvard, UC Berkeley."
        },
        {
            title: "Living Costs",
            content: "$10,000 - $18,000 per year depending on city and lifestyle."
        },
        {
            title: "Academic Requirements",
            content: "Good GPA, TOEFL/IELTS, and standardized test scores (SAT/ACT)."
        },
        {
            title: "Scholarships",
            content: "Many universities offer scholarships based on merit and need."
        },
        {
            title: "Work Opportunities",
            content: "Students can work up to 20 hours/week on-campus."
        },
        {
            title: "Healthcare",
            content: "Mandatory health insurance required; varies by state and university."
        },
        {
            title: "Climate",
            content: "Varies from snowy winters in the North to sunny beaches in the South."
        },
        {
            title: "Culture",
            content: "Diverse, with vibrant cities and multicultural communities."
        },
        {
            title: "Housing Options",
            content: "On-campus dorms, apartments, or homestays available."
        },
        {
            title: "Travel Access",
            content: "Well-connected airports and public transport systems."
        },
        {
            title: "Post-Study Options",
            content: "OPT and H1B visa options for staying after graduation."
        },
    ],
    uk: [{
            title: "Visa Info",
            content: "The Tier 4 (General) student visa is required."
        },
        {
            title: "Top Universities",
            content: "University of Oxford, Cambridge, Imperial College London."
        },
        {
            title: "Living Costs",
            content: "Around £12,000 annually depending on the city."
        },
        {
            title: "Academic Requirements",
            content: "A-levels or equivalent, IELTS/TOEFL scores."
        },
    ],
    canada: [{
            title: "Visa Info",
            content: "You need a Canadian study permit for full-time study."
        },
        {
            title: "Top Universities",
            content: "University of Toronto, UBC, McGill University."
        },
        {
            title: "Living Costs",
            content: "$10,000 - $15,000 per year."
        },
        {
            title: "Academic Requirements",
            content: "High school diploma, TOEFL/IELTS, proof of funds."
        },
    ],
    australia: [{
            title: "Visa Info",
            content: "The Subclass 500 student visa is needed."
        },
        {
            title: "Top Universities",
            content: "University of Melbourne, ANU, University of Sydney."
        },
        {
            title: "Living Costs",
            content: "$15,000 - $20,000 per year."
        },
        {
            title: "Academic Requirements",
            content: "High school certificate, English proficiency tests."
        },
    ]
};

function showGuide(event, country) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const guideContainer = document.getElementById('guideContainer');
    guideContainer.innerHTML = '';

    guideData[country].forEach(section => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <h3>${section.title}</h3>
          <p>${section.content}</p>
        `;
        guideContainer.appendChild(card);
    });
}

function toggleNavbar() {
    document.getElementById('navbarLinks').classList.toggle('active');
}

window.onload = () => {
    const firstTab = document.querySelector('.tab.active');
    showGuide({
        target: firstTab
    }, 'usa');
};