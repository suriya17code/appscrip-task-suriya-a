import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="logo"> 
      <img src={"/images/logo/Vector.svg"} alt='logo'/>
      
    </Link>
  )
}