export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-sm">
        &copy; {new Date().getFullYear()} Kirk. All rights reserved.
      </small>
    </footer>
  );
}