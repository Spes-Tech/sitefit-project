import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">Seu Logo</a>
        </Link>
        <div>
          <Link href="/login">
            <a className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600">Login</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
