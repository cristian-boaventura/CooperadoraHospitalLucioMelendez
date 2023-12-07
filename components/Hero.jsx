import Image from 'next/image'
import heartIcon from '@/public/images/heart_icon.svg'
import coopHeroImg from '@/public/images/coop_hero_hd.webp'

export default function Hero() {
	return (
		<section className="flex h-[calc(100svh-var(--header-height))] flex-col bg-primary pt-10">
			<div className="flex flex-col items-center justify-between gap-2 px-4">
				<h1 className="text-center text-4xl font-bold tracking-tight text-white">
					¡Ayudanos a Ayudar!
				</h1>
				<h3 className="text-center text-xl font-medium text-white">
					Tu donación nos permite seguir ayudando a los que más lo necesitan.
				</h3>
			</div>
			<button className="mb-2 mt-4 flex items-center justify-center gap-1 self-center rounded-10 bg-accent px-4 py-2 font-bold text-white">
				<Image src={heartIcon} alt="Icono de manos formando un corazón" />
				<span>DONAR</span>
			</button>
			<div className="relative flex-1">
				<Image
					src={coopHeroImg}
					alt="Foto de Inauguración Sala de Oncología"
					priority
					fill
					className="object-cover [mask-image:linear-gradient(transparent,rgba(0,0,0,1)_30%)]"
				/>
			</div>
		</section>
	)
}
