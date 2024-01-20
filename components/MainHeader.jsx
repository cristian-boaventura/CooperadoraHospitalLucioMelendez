import Image from 'next/image'
import logo from '@/public/images/coop_new_logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import heartIcon from '@/public/images/heart_icon.svg'
import Link from 'next/link'

export default function MainHeader() {
	return (
		<header className="fixed top-0 z-50 flex h-[--header-height] w-full items-center justify-between bg-primary px-4 shadow-sm md:px-6 xl:px-8 2xl:px-12">
			<Image
				src={logo}
				alt="logo de la cooperadora hospital lucio melendez"
				className="md:w-[249px] 2xl:w-[300px]"
			/>
			<div className="flex gap-12 text-lg font-medium text-white max-lg:hidden xl:text-xl">
				<Link href="/" className="transition-colors hover:text-accent">
					Home
				</Link>
				<Link href="/nosotros" className="transition-colors hover:text-accent">
					Nosotros
				</Link>
				<Link href="/contacto" className="transition-colors hover:text-accent">
					Contacto
				</Link>
			</div>
			<div className="flex items-center gap-2 md:gap-8">
				<button className="flex items-center gap-2 rounded-10 bg-accent px-4 py-1 font-bold text-white md:px-8 md:py-3 md:text-xl 2xl:px-10 2xl:py-3.5 2xl:text-2xl">
					<Image
						src={heartIcon}
						alt="Icono de manos formando un corazón"
						className="max-md:hidden 2xl:size-8"
					/>
					DONAR
				</button>
				<GiHamburgerMenu className="h-auto w-6 fill-white md:w-9 lg:hidden" />
			</div>
		</header>
	)
}
