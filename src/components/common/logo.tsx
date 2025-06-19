import Link from 'next/link'
import Image from 'next/image'
export default function Logo() {
   return (
    <Link href="/" className="logo"> 
      <Image src={"/images/logo/Vector.svg"} alt='logo'/>
    </Link>
  )
}