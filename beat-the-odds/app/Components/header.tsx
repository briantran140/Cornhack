import Link from "next/link";

export default async function LandingHeader(){
    return <>
    <header>
        <h1>StuSupportNet</h1>
        <Link href="/GetStarted">Get Started</Link>
    </header>
    </>
}
