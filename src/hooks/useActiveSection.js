import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for high-performance SPA hash section tracking using IntersectionObserver.
 * Handles initial hash deep-linking, smooth scroll offset for sticky header, browser back/forward history, and ScrollSpy.
 * 
 * @param {string[]} sectionIds List of section DOM IDs to observe
 * @param {number} navbarOffset Header height offset in pixels (default: 80)
 * @returns {string} Active section ID
 */
export function useActiveSection(sectionIds, navbarOffset = 80) {
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (sectionIds.includes(hash)) return hash;
    }
    return sectionIds[0] || 'home';
  });

  const activeSectionRef = useRef(activeSection);

  // Sync ref in effect
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // 1. Initial page load & browser Back/Forward (popstate/hashchange) navigation handler
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          if (activeSectionRef.current !== hash) {
            setActiveSection(hash);
          }
        }
      }
    };

    // Trigger scroll on initial load if hash is present in URL
    if (window.location.hash) {
      setTimeout(handleHashNavigation, 100);
    }

    window.addEventListener('hashchange', handleHashNavigation);
    window.addEventListener('popstate', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
      window.removeEventListener('popstate', handleHashNavigation);
    };
  }, [sectionIds, navbarOffset]);

  // 2. High-performance ScrollSpy using IntersectionObserver
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const visibleSectionsMap = new Map();

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSectionsMap.set(entry.target.id, entry.intersectionRatio);
        } else {
          visibleSectionsMap.delete(entry.target.id);
        }
      });

      if (visibleSectionsMap.size > 0) {
        let highestRatio = 0;
        let mostVisibleId = activeSectionRef.current;

        for (const [id, ratio] of visibleSectionsMap.entries()) {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            mostVisibleId = id;
          }
        }

        if (mostVisibleId && mostVisibleId !== activeSectionRef.current) {
          setActiveSection(mostVisibleId);
          if (window.history.replaceState) {
            window.history.replaceState(null, '', `#${mostVisibleId}`);
          }
        }
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: `-${navbarOffset}px 0px -40% 0px`,
      threshold: [0.1, 0.3, 0.5, 0.7]
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, navbarOffset]);

  return activeSection;
}
