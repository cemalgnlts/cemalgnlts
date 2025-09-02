const navEl = document.querySelector("nav");

const observer = new IntersectionObserver(observerCallback, {
    rootMargin: "-0% 0% -35% 0%",
    threshold: [1]
});

document.querySelectorAll("section > .title")
    .forEach(el => observer.observe(el));

/**
 * @param {Array<IntersectionObserverEntry>} entries
 * @param {IntersectionObserverEntry} entries[0]
 */
function observerCallback([entry]) {
    if (!entry.isIntersecting) return;

    const targetSectionId = entry.target.parentElement.id;

    /** @type {HTMLLIElement} */
    const passedNavItem = navEl.querySelector("li.active");

    if (passedNavItem) passedNavItem.classList.remove("active");

    navEl.querySelector(`a[href="#${targetSectionId}"]`).parentElement
        .classList
        .add("active");
}