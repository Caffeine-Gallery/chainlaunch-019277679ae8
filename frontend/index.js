import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const visitorCount = await backend.getVisitorCount();
    updateVisitorCount(visitorCount);
    await backend.incrementVisitorCount();
  } catch (error) {
    console.error('Error fetching visitor count:', error);
  }
});

function updateVisitorCount(count) {
  const visitorCountElement = document.getElementById('visitor-count');
  visitorCountElement.textContent = `Visitors: ${count}`;
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add animation to the CTA button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
  ctaButton.style.transform = 'scale(1.1)';
});
ctaButton.addEventListener('mouseout', () => {
  ctaButton.style.transform = 'scale(1)';
});
