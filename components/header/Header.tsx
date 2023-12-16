import SearchBar from "./SearchBar";

export default function Header({}) {
  const isLogin = false;

  if (!isLogin) {
    return;
  }
  return (
    <header
      id="main-header"
      className="w-full h-fit flex items-center justify-between p-4"
    >
      {/* left div where facebook icon and search bar is located */}
      <div className="flex gap-2 items-center justify-center">
        <img src="/logo-icon.png" alt="Facebook-icon" className="w-8" />

        <SearchBar />
      </div>
    </header>
  );
}
