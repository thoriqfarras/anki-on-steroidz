import '@/app/ui/globals.css';
import { inter } from '@/app/ui/fonts';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} antialiased grid place-items-center`}>
      {children}
    </div>
  );
}
