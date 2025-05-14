export default function Footer() {
  return (
    <footer
      className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4"
      data-theme="dracula"
    >
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Tout droit réservé - Geraldo
        </p>
      </aside>
    </footer>
  );
}
