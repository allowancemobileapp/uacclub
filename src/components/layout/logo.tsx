import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image 
        src="https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/uacclub/WhatsApp%20Image%202025-11-03%20at%2011.55.26_7dcd4d12.jpg" 
        alt="UAC Logo" 
        width={40} 
        height={40}
        className="rounded-full"
      />
      <span className="text-xl font-semibold tracking-tight font-headline">
        UAC
      </span>
    </Link>
  );
}
