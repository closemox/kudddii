gsap.registerPlugin(ScrollTrigger);

// Initial Load Sequence
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

// Header Slide Down
tl.from(".main-header", {
    y: "-100%",
    opacity: 0,
    duration: 1
})
// Hero Content Fade & Slide Up
.from(".hero-subheading", {
    y: 30,
    opacity: 0,
    duration: 0.8
}, "-=0.5")
.from(".hero-heading", {
    y: 30,
    opacity: 0,
    duration: 0.8
}, "-=0.6")
.from(".hero-cta-btn", {
    y: 20,
    opacity: 0,
    duration: 0.8
}, "-=0.6");

// Parallax Hero Background
gsap.to(".hero", {
    backgroundPosition: "50% 80%",
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Circular Categories Fade & Stagger
gsap.from(".circle-item", {
    scrollTrigger: {
        trigger: ".circular-categories",
        start: "top 85%"
    },
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "back.out(1.7)"
});

// Loop over all Category Showcase sections properly
gsap.utils.toArray(".category-showcase").forEach(section => {
    gsap.from(section.querySelectorAll(".showcase-header > *"), {
        scrollTrigger: {
            trigger: section,
            start: "top 85%"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });

    gsap.from(section.querySelectorAll(".category-card"), {
        scrollTrigger: {
            trigger: section.querySelector(".showcase-grid"),
            start: "top 85%"
        },
        scale: 0.85,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
    });
});

// Bento Grid Section
gsap.from(".grid-header > *", {
    scrollTrigger: {
        trigger: ".grid-banner-section",
        start: "top 80%"
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});

gsap.from(".bento-item:nth-child(odd)", {
    scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 75%"
    },
    x: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

gsap.from(".bento-item:nth-child(even)", {
    scrollTrigger: {
        trigger: ".bento-grid",
        start: "top 75%"
    },
    x: 30,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
});

// Best Sellers Grid
gsap.from(".section-header-flex > *", {
    scrollTrigger: {
        trigger: ".new-arrivals-section",
        start: "top 80%"
    },
    y: 20,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});

gsap.from(".product-card", {
    scrollTrigger: {
        trigger: ".product-grid",
        start: "top 80%"
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out"
});

// Founder Section
const founderTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".founder-section",
        start: "top 75%"
    }
});

founderTl.from(".founder-image", {
    scale: 1.05,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
})
.from(".founder-image-backdrop", {
    x: -10,
    y: -10,
    opacity: 0,
    duration: 1
}, "-=1")
.from(".founder-content > *", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
}, "-=1");

// Mega Footer
gsap.from(".kuddi-footer", {
    scrollTrigger: {
        trigger: ".kuddi-footer",
        start: "top 95%"
    },
    y: 30,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});
