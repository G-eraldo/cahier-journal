"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const dropDownModal = useRef(null);
  function toggleModal() {
    setShowModal(!showModal);
  }
  function closeModal() {
    setShowModal(false);
  }
  useEffect(() => {
    function dropDown(event) {
      if (!dropDownModal.current.contains(event.target)) {
        closeModal();
      }
    }
    document.addEventListener("click", dropDown);
    return () => {
      document.removeEventListener("click", dropDown);
    };
  }, []);
  return (
    <div
      className="navbar bg-base-100 shadow-sm"
      data-theme="dracula"
      ref={dropDownModal}
    >
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl font-playfair">
          Mon cahier journal
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={toggleModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            ></path>{" "}
          </svg>
        </button>
      </div>
      {showModal && (
        <div
          className="absolute top-17 right-5 w-[250px] rounded-2xl"
          data-theme="dracula"
        >
          <ul className="mx-12 flex gap-y-5 flex-col my-4">
            <li>
              <Link href="/">A propos</Link>
            </li>
            <li>
              <Link href="/signin">Se connecter</Link>
            </li>
            <li>
              <Link href="/signup">S'incrire</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
