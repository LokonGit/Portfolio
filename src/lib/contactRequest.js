"use client";

const contactRequestEventName = "portfolio:contact-request";

// Lets any part of the experience (e.g. a project card) prefill the contact form
// contactRequest: { topic?: "job" | "project" | "question", subject?: string }
export function requestContact(contactRequest) {
  window.dispatchEvent(
    new CustomEvent(contactRequestEventName, {
      detail: contactRequest,
    })
  );
}

export function onContactRequest(listener) {
  function handleContactRequest(e) {
    listener(e.detail);
  }

  window.addEventListener(contactRequestEventName, handleContactRequest);
  return () =>
    window.removeEventListener(contactRequestEventName, handleContactRequest);
}
