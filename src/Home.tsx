import { useEffect } from 'react';
import { LetsTalk } from './sections/LetsTalk'


function Home() {
  function isShortcutKey(e: KeyboardEvent, keyCode: string) {
    // Check for Ctrl + Shift + Key or Cmd + Option + Key
    return (
      (e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0)) ||
      (e.metaKey && e.altKey && e.keyCode === keyCode.charCodeAt(0))
    );
  }

  useEffect(() => {
    document.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });

    document.onkeydown = (e) => {
      // Disable F12, Ctrl + Shift + I/J/C, Cmd + Option + I/J/C, Ctrl + U
      if (
        e.keyCode === 123 ||
        isShortcutKey(e, "I") ||
        isShortcutKey(e, "J") ||
        isShortcutKey(e, "C") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0)) ||
        (e.metaKey && e.keyCode === "U".charCodeAt(0))
      ) {
        e.preventDefault();
        return false;
      }
    };
  }, []);

  return (
    <>
     <LetsTalk/>
    </>
  )
}

export default Home
