"use client"
import LongPressButton from "@/components/LongPressButton";
import useWindowSize from '@/hooks/useWindowSize';

export default function Home() {
  const { width } = useWindowSize();

  const handleLongPress = () => {
    console.log('Long press detected');
  };

  if (width >= 993) {
    return (
      <div className="big-window-msg">
        <div>
          Game is not ready yet for this window size. Use phone instead.
        </div>
        <div>
          We apologize for any inconvenience.
        </div>
      </div>
    );
  }

  if (width > 0) {
    return (
      <div className="container p-4 gap-4 flex flex-col h-full">
        <div className="h-1/3">
          <LongPressButton
            className="h-full w-2/3"
            onLongPress={handleLongPress}
            ms={3000}
            imgPath="/trees-nobg.svg"
          />
        </div>
        <div className="border border-black grow w-full bg-white max-h-1/3"></div>
      </div>
    );
  }
}
