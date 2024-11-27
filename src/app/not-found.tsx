
import Link from 'next/link'

export default function NotFound() {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="text-center p-6 bg-white rounded-lg shadow-lg space-y-6 max-w-md w-full">
                    <h2 className="text-4xl font-semibold text-[#092A67]">Not Found | 404</h2>
                    <p className="text-lg text-gray-600">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
                    <Link href="/">
                        <button className="mt-6 px-6 py-3 text-white bg-[#B5D336] rounded-xl hover:bg-[#A4C52A] transition duration-300">
                            Return Home
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}