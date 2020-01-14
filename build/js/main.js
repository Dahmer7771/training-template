const VIDEO_PLAYER=document.querySelector(".work-process__video"),PLAY_BUTTON=document.querySelector(".play-icon"),CLICK_LISTENER=document.querySelector(".click-listener");VIDEO_PLAYER.controls=!1,CLICK_LISTENER.onclick=e=>{VIDEO_PLAYER.paused?(e.target===PLAY_BUTTON&&VIDEO_PLAYER.play(),VIDEO_PLAYER.controls=!0,PLAY_BUTTON.style.display="none"):(VIDEO_PLAYER.pause(),VIDEO_PLAYER.controls=!1,PLAY_BUTTON.style.display="block")};const HEADER=document.querySelector(".header"),MENU=document.querySelector(".nav"),MENU_TOGGLE=document.querySelector(".menu-toggle"),BODY=document.querySelector("body");MENU_TOGGLE.onclick=()=>{MENU.classList.toggle("adaptive-nav")},BODY.onresize=()=>{BODY.offsetWidth>930&&MENU.classList.remove("adaptive-nav")},window.onscroll=()=>{BODY.offsetWidth<=930||(window.scrollY>100&&BODY.offsetWidth>930?HEADER.style.height="60px":HEADER.style.height="100px")};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiVklERU9fUExBWUVSIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiUExBWV9CVVRUT04iLCJDTElDS19MSVNURU5FUiIsImNvbnRyb2xzIiwib25jbGljayIsImUiLCJwYXVzZWQiLCJ0YXJnZXQiLCJwbGF5Iiwic3R5bGUiLCJkaXNwbGF5IiwicGF1c2UiLCJIRUFERVIiLCJNRU5VIiwiTUVOVV9UT0dHTEUiLCJCT0RZIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwib25yZXNpemUiLCJvZmZzZXRXaWR0aCIsInJlbW92ZSIsIndpbmRvdyIsIm9uc2Nyb2xsIiwic2Nyb2xsWSIsImhlaWdodCJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsYUFBZUMsU0FBU0MsY0FBYyx3QkFDdENDLFlBQWNGLFNBQVNDLGNBQWMsY0FDckNFLGVBQWlCSCxTQUFTQyxjQUFjLG1CQUU5Q0YsYUFBYUssVUFBVyxFQUV4QkQsZUFBZUUsUUFBV0MsSUFDTFAsYUFBYVEsUUFFdkJELEVBQUVFLFNBQVdOLGFBQWFILGFBQWFVLE9BQzFDVixhQUFhSyxVQUFXLEVBQ3hCRixZQUFZUSxNQUFNQyxRQUFVLFNBRTVCWixhQUFhYSxRQUNiYixhQUFhSyxVQUFXLEVBQ3hCRixZQUFZUSxNQUFNQyxRQUFVLFVBR3BDLE1BQU1FLE9BQVNiLFNBQVNDLGNBQWMsV0FDaENhLEtBQU9kLFNBQVNDLGNBQWMsUUFDOUJjLFlBQWNmLFNBQVNDLGNBQWMsZ0JBQ3JDZSxLQUFPaEIsU0FBU0MsY0FBYyxRQUVwQ2MsWUFBWVYsUUFBVSxLQUNsQlMsS0FBS0csVUFBVUMsT0FBTyxpQkFHMUJGLEtBQUtHLFNBQVcsS0FDVEgsS0FBS0ksWUFBYyxLQUNsQk4sS0FBS0csVUFBVUksT0FBTyxpQkFJOUJDLE9BQU9DLFNBQVcsS0FDWFAsS0FBS0ksYUFBZSxNQUNwQkUsT0FBT0UsUUFBVSxLQUFPUixLQUFLSSxZQUFjLElBQzFDUCxPQUFPSCxNQUFNZSxPQUFTLE9BRXRCWixPQUFPSCxNQUFNZSxPQUFTIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBWSURFT19QTEFZRVIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndvcmstcHJvY2Vzc19fdmlkZW9cIik7XHJcbmNvbnN0IFBMQVlfQlVUVE9OID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWljb25cIik7XHJcbmNvbnN0IENMSUNLX0xJU1RFTkVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbGljay1saXN0ZW5lclwiKTtcclxuXHJcblZJREVPX1BMQVlFUi5jb250cm9scyA9IGZhbHNlO1xyXG5cclxuQ0xJQ0tfTElTVEVORVIub25jbGljayA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBpc1BhdXNlZCA9IFZJREVPX1BMQVlFUi5wYXVzZWQ7XHJcbiAgICBpZihpc1BhdXNlZCkge1xyXG4gICAgICAgIGlmKGUudGFyZ2V0ID09PSBQTEFZX0JVVFRPTikgVklERU9fUExBWUVSLnBsYXkoKTtcclxuICAgICAgICBWSURFT19QTEFZRVIuY29udHJvbHMgPSB0cnVlO1xyXG4gICAgICAgIFBMQVlfQlVUVE9OLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgVklERU9fUExBWUVSLnBhdXNlKCk7XHJcbiAgICAgICAgVklERU9fUExBWUVSLmNvbnRyb2xzID0gZmFsc2U7XHJcbiAgICAgICAgUExBWV9CVVRUT04uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIH1cclxufTtcclxuY29uc3QgSEVBREVSID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xyXG5jb25zdCBNRU5VID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdicpO1xyXG5jb25zdCBNRU5VX1RPR0dMRSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LXRvZ2dsZScpO1xyXG5jb25zdCBCT0RZID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG5cclxuTUVOVV9UT0dHTEUub25jbGljayA9ICgpID0+IHtcclxuICAgIE1FTlUuY2xhc3NMaXN0LnRvZ2dsZSgnYWRhcHRpdmUtbmF2Jyk7XHJcbn07XHJcblxyXG5CT0RZLm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgaWYoQk9EWS5vZmZzZXRXaWR0aCA+IDkzMCkge1xyXG4gICAgICAgIE1FTlUuY2xhc3NMaXN0LnJlbW92ZSgnYWRhcHRpdmUtbmF2Jyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG53aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZihCT0RZLm9mZnNldFdpZHRoIDw9IDkzMCkgcmV0dXJuO1xyXG4gICAgaWYod2luZG93LnNjcm9sbFkgPiAxMDAgJiYgQk9EWS5vZmZzZXRXaWR0aCA+IDkzMCkge1xyXG4gICAgICAgIEhFQURFUi5zdHlsZS5oZWlnaHQgPSAnNjBweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEhFQURFUi5zdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xyXG4gICAgfVxyXG59OyJdfQ==
