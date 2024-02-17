import Link from "next/link";

export default async function Header(){
    return <>
    <header>
        <h1>StudentSupportNet</h1>
        <Link href="/GetStarted">Get Started</Link>
    </header>
    </>
}
