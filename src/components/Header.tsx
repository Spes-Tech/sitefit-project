import Link from 'next/link'

import Modal from '@/components/modal'

const Header: React.FC = () => {
  return (
    <header className="bg-secondary p-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 lg:px-8">
        <Link href="/" className="text-2xl font-bold">
          Seu Logo
        </Link>
        <Modal>
          <button className="h-10 w-32 rounded-lg bg-primary font-semibold transition-all hover:opacity-80">
            Button
          </button>
        </Modal>
      </div>
    </header>
  )
}

export default Header
