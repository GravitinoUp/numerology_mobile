import Svg, {
    ClipPath,
    Defs,
    G,
    LinearGradient,
    Path,
    Stop,
    SvgProps,
} from 'react-native-svg'

export const Logo = (props: SvgProps) => (
    <Svg width={249} height={57} fill="none" {...props}>
        <G clipPath="url(#a)">
            <Path
                fill="url(#b)"
                d="M175.24 17.67h.72l.72.02.72.02c.24 0 .48.04.72.05.07 0 .14.01.22.02l.07-.1c.17-.17.54-.46 1.11-.86.57-.4 1.26-.88 2.06-1.46.8-.57 1.67-1.17 2.61-1.8.94-.63 1.93-1.29 2.96-1.97l1.29-.86c2.4-1.66 4.03-2.79 4.89-3.41.86-.62 1.31-1.12 1.37-1.53.11-.57.14-1.13.09-1.67-.06-.54-.23-.9-.51-1.07-.4-.4-.69-.61-.86-.64-.17-.03-.57.07-1.2.3-2.23.69-4.26 1.27-6.09 1.76s-3.56.89-5.19 1.2c-1.63.32-3.2.53-4.71.64-1.51.12-3.04.17-4.59.17-1.43 0-2.66-.04-3.69-.13-1.03-.08-2.06-.21-3.09-.39-.8-.17-1.54-.33-2.23-.47-.69-.14-1.17-.21-1.46-.21-.29 0-.46.03-.51.09-.05.06-.12.31-.17.77-.06.22-.04.5.04.84.09.34.19.62.3.84.11.23.44.7.99 1.43.54.73 1.13 1.48 1.76 2.25.63.77 1.19 1.47 1.67 2.1.48.63.76.94.81.94.11 0 .06-.2-.17-.6-.23-.4-.49-.86-.77-1.37h.09l-.43-.6-.17-.34-1.2-1.63h4.54c1.89-.05 3.84-.19 5.87-.42 2.03-.22 4.13-.56 6.3-1h-.09c.63-.17 1.34-.32 2.14-.46s1.51-.21 2.14-.21l-2.83 2.06c-.69.63-1.46 1.34-2.31 2.14-.86.8-1.7 1.62-2.53 2.44-.83.83-1.6 1.62-2.31 2.36-.3.32-.57.59-.82.85.1 0 .2-.02.29-.03l1.44-.05v-.01Z"
            />
            <Path
                fill="url(#c)"
                d="M175.45 21.93h-.34l-.68-.01h-.34l-.34.01h-.31l-3.5.61c-.12.17-1.89 2.77-2.06 3-.12.17-.27.36-.47.56-.2.2-.42.44-.64.73l-.6.77c-.74 1.03-1.52 2.14-2.31 3.34-.8 1.2-1.56 2.44-2.27 3.73-.72 1.29-1.39 2.57-2.01 3.86-.63 1.29-1.17 2.5-1.63 3.64-.46 1.2-.74 2.29-.86 3.26-.11.97.03 1.66.43 2.06.29.29.54.41.77.39.23-.03.6-.24 1.11-.64v.09c.29-.34.46-.7.51-1.07.06-.37 0-.67-.17-.9v.09c-.29-.12-.36-.42-.21-.9.14-.49.64-1.59 1.5-3.3.91-1.77 1.8-3.37 2.66-4.8.86-1.43 1.73-2.77 2.61-4.03.89-1.26 1.8-2.46 2.74-3.6.94-1.14 1.96-2.29 3.04-3.43h-.09l2.6-2.77.87-.66-.01-.03Z"
            />
            <Path
                fill="url(#d)"
                d="M172.38 21.96c-.45.03-.91.09-1.36.14-.23.03-.45.04-.68.08l-.13.02-.28.31 3.5-.59-1.05.05v-.01Z"
            />
            <Path
                fill="url(#e)"
                d="M231.01 1.72c-.06-.54-.23-.9-.51-1.07-.4-.4-.69-.61-.86-.64-.17-.03-.57.07-1.2.3-2.23.69-4.26 1.27-6.09 1.76s-3.56.89-5.19 1.2c-1.63.32-3.2.53-4.71.64-1.51.12-3.04.17-4.59.17-1.43 0-2.66-.04-3.69-.13-1.03-.08-2.06-.21-3.09-.39-.8-.17-1.54-.33-2.23-.47-.69-.14-1.17-.21-1.46-.21-.29 0-.46.03-.51.09-.05.06-.12.31-.17.77-.06.22-.04.5.04.84.09.34.19.62.3.84.11.23.44.7.99 1.43.54.73 1.13 1.48 1.76 2.25.63.77 1.19 1.47 1.67 2.1.48.63.76.94.81.94.11 0 .06-.2-.17-.6-.23-.4-.49-.86-.77-1.37h.09l-.43-.6-.17-.34-1.2-1.63h4.54c1.89-.05 3.84-.19 5.87-.42 2.03-.22 4.13-.56 6.3-1h-.09c.63-.17 1.34-.32 2.14-.46s1.51-.21 2.14-.21l-2.83 2.06c-.69.63-1.46 1.34-2.31 2.14-.86.8-1.7 1.62-2.53 2.44-.83.83-1.6 1.62-2.31 2.36-.71.74-1.27 1.32-1.67 1.71l-1.2 1.29c-.12.17-1.89 2.77-2.06 3-.12.17-.27.36-.47.56-.2.2-.42.44-.64.73l-.6.77c-.74 1.03-1.52 2.14-2.31 3.34-.55.83-1.08 1.69-1.59 2.56.18.19.38.38.55.57.47.51.91 1.04 1.36 1.56.7-1.13 1.4-2.22 2.12-3.24.89-1.26 1.8-2.46 2.74-3.6.94-1.14 1.96-2.29 3.04-3.43h-.09l2.6-2.77 1.43-1.09.86-1.2c.17-.17.54-.46 1.11-.86.57-.4 1.26-.88 2.06-1.46.8-.57 1.67-1.17 2.61-1.8.94-.63 1.93-1.29 2.96-1.97l1.29-.86c2.4-1.66 4.03-2.79 4.89-3.41.86-.62 1.31-1.12 1.37-1.53.11-.57.14-1.13.09-1.67l.01.01Z"
            />
            <Path
                fill="url(#f)"
                d="M197.79 32.29c-.71 1.28-1.38 2.56-2 3.83-.63 1.29-1.17 2.5-1.63 3.64-.46 1.2-.74 2.29-.86 3.26-.11.97.03 1.66.43 2.06.29.29.54.41.77.39.23-.03.6-.24 1.11-.64v.09c.29-.34.46-.7.51-1.07.06-.37 0-.67-.17-.9v.09c-.29-.12-.36-.42-.21-.9.14-.49.64-1.59 1.5-3.3.84-1.62 1.65-3.1 2.44-4.44-.53-.62-1.07-1.23-1.62-1.82-.09-.1-.19-.18-.28-.28l.01-.01Z"
            />
            <Path
                fill="#00131A"
                d="M76.22 48.37c-.29.06-.54.29-.77.69-.34.57-1.09 1.27-2.23 2.1-1.14.83-2.4 1.59-3.77 2.27-2.46 1.14-4.37 1.73-5.74 1.76-1.37.03-2.57-.44-3.6-1.41-1.37-1.2-2.07-3.1-2.1-5.7-.03-2.6.64-5.64 2.01-9.13 1.08-3.26 2.97-7 5.66-11.23s5.83-8.51 9.43-12.86c1.08-1.37 1.71-2.34 1.89-2.91.17-.57.06-1.26-.34-2.06-.29-.46-.62-.78-.99-.99-.37-.2-.64-.24-.81-.13-.4.17-1.16.66-2.27 1.46-1.11.8-2.24 1.66-3.39 2.57-.97.86-2.14 1.94-3.51 3.26-1.37 1.32-2.86 2.76-4.46 4.33-1.6 1.57-3.23 3.2-4.89 4.89-1.66 1.69-3.26 3.33-4.8 4.93a270.5 270.5 0 0 0-4.2 4.46c-1.26 1.37-2.29 2.52-3.09 3.43-.63.86-1.23 1.62-1.8 2.27-.57.66-.91 1.04-1.03 1.16-.34.23-.43.2-.26-.09.06-.29.44-1.08 1.16-2.4.71-1.31 1.56-2.84 2.53-4.59.97-1.74 1.97-3.53 3-5.36 1.03-1.83 1.91-3.4 2.66-4.71 1.08-1.89 1.9-3.33 2.44-4.33s.93-1.74 1.16-2.23c.23-.49.33-.83.3-1.03-.03-.2-.1-.47-.21-.81-.23-.63-.6-1.2-1.11-1.71-.51-.51-.97-.77-1.37-.77-.17 0-.71.51-1.63 1.54-.29.46-.84 1.09-1.67 1.89-.83.8-1.56 1.6-2.19 2.4-2 1.94-3.84 3.79-5.53 5.53-1.69 1.74-3.31 3.46-4.89 5.14-1.57 1.69-3.13 3.39-4.67 5.1-1.54 1.71-3.12 3.54-4.71 5.49-.34.4-.51.59-.51.56 0-.03.2-.36.6-.99 3.43-5.37 6.14-9.97 8.14-13.8 2-3.83 3.23-6.69 3.69-8.57.4-1.31.56-2.49.47-3.51-.09-1.03-.36-1.86-.81-2.49-.57-.8-1.2-1.33-1.89-1.59s-1.86-.41-3.51-.47c-6.57-.29-16.17 2.09-28.8 7.11-.8.29-1.54.57-2.23.86-.69.29-1.09.43-1.2.43-.34.17-.44.5-.3.99s.44.99.9 1.5c.34.46.63.72.86.77.23.06.69.09 1.37.09.34 0 .91-.04 1.71-.13.8-.08 1.6-.18 2.4-.3.8-.11 1.5-.23 2.1-.34.6-.11.93-.2.99-.26.17-.11.1-.37-.21-.77s-.67-.74-1.07-1.03l-1.03-.51 2.49-1.03c1.08-.51 2.01-.93 2.79-1.24.77-.31 1.49-.6 2.14-.86.66-.26 1.27-.48 1.84-.69.57-.2 1.26-.41 2.06-.64 8.06-2.63 13.49-3.48 16.29-2.57.8.29 1.33.59 1.59.9.26.31.36.81.3 1.5.06.69-.03 1.43-.26 2.23s-.66 1.8-1.29 3-1.51 2.66-2.66 4.37c-1.14 1.71-2.6 3.8-4.37 6.26-1.49 2-2.66 3.63-3.51 4.89-.86 1.26-1.6 2.37-2.23 3.34-.63.97-1.21 1.92-1.76 2.83-.54.92-1.24 2.06-2.1 3.43-1.32 2.06-2.33 3.7-3.04 4.93-.72 1.23-1.19 2.21-1.41 2.96-.23.74-.26 1.33-.09 1.76.17.43.46.84.86 1.24.57.57 1.1.87 1.59.9.48.03.73.01.73-.04.23-.29.46-.57.69-.86.17-.29.36-.59.56-.9.2-.32.39-.64.56-.99 2.4-3.83 5.34-7.94 8.83-12.34 3.48-4.4 7.37-8.86 11.66-13.37 2.17-2.23 3.57-3.63 4.2-4.2.63-.57.71-.51.26.17-.8 1.49-1.67 3.26-2.61 5.31-.94 2.06-1.83 4.14-2.66 6.26-.83 2.12-1.53 4.11-2.1 6-.57 1.89-.89 3.37-.94 4.46-.12.57-.13.96-.04 1.16.09.2.33.47.73.81.29.17.53.33.73.47.2.14.36.21.47.21.23 0 .76-.44 1.59-1.33.83-.88 1.76-2.07 2.79-3.56 1.2-1.49 2.83-3.39 4.89-5.7 2.06-2.31 4.17-4.67 6.34-7.07.74-.86 1.77-1.93 3.09-3.21 1.31-1.29 2.6-2.53 3.86-3.73 1.26-1.2 2.36-2.2 3.3-3 .94-.8 1.41-1.17 1.41-1.11 0 .06-.13.27-.39.64s-.59.81-.99 1.33c-.8 1.14-1.6 2.46-2.4 3.94-.8 1.49-1.57 2.97-2.31 4.46-.74 1.49-1.4 2.94-1.97 4.37-.57 1.43-1 2.69-1.29 3.77-.46 2-.76 3.96-.9 5.87-.14 1.92-.04 3.53.3 4.84.29 2.17 1.01 3.96 2.19 5.36 1.17 1.4 2.61 2.33 4.33 2.79 1.31.34 2.87.27 4.67-.21 1.8-.49 3.61-1.33 5.44-2.53 1.54-1.14 2.73-2.14 3.56-3 .83-.86 1.16-1.51.99-1.97-.12-.29-.31-.4-.6-.34l-.08-.04Z"
            />
            <Path
                fill="#00131A"
                d="M123.02 32.17c.63-.51 1.03-.89 1.2-1.11.17-.23.23-.51.17-.86-.06-.29-.12-.54-.17-.77-.06-.23-.14-.34-.26-.34-1.54.34-2.86.6-3.94.77-1.09.17-2.14.26-3.17.26-.8 0-1.32-.01-1.54-.04-.23-.03-.34-.08-.34-.17 0-.09.03-.21.09-.39.06-.17 0-.4-.17-.69-.46-.63-.89-.93-1.29-.9-.4.03-.57.42-.51 1.16-.12.34-.39.86-.81 1.54-.42.68-1.1 1.57-2.01 2.66-2.74 3.71-4.11 5.37-4.11 4.97.17-.34.37-.69.6-1.03.17-.29.37-.64.6-1.07.23-.43.48-.87.77-1.33.4-.86.73-1.57.99-2.14.26-.57.43-1.06.51-1.46.09-.4.1-.76.04-1.07-.06-.31-.17-.64-.34-.99-.46-.63-.84-1.14-1.16-1.54-.32-.4-.62-.6-.9-.6s-.67.42-1.16 1.24c-.49.83-1.01 1.89-1.59 3.17-.47 1.07-.99 2.25-1.52 3.49-.57.42-1.17.87-1.82 1.35-1.54 1.14-3.14 2.31-4.8 3.51-1.66 1.2-3 2.14-4.03 2.83-.12.12-.42.3-.9.56-.49.26-.76.36-.81.3-.06-.06.03-.36.26-.9s.46-1.04.69-1.5c.4-.8 1-1.86 1.8-3.17.8-1.31 1.67-2.7 2.61-4.16s1.9-2.92 2.87-4.37c.97-1.45 1.83-2.76 2.57-3.9l3.26-4.97 3.94-.34c3.03-.29 6.24-.48 9.64-.6 3.4-.11 6.41-.17 9.04-.17 1.31 0 2.21-.06 2.7-.17.49-.11.73-.23.73-.34 0-.06-.01-.11-.04-.17-.03-.06-.21-.11-.56-.17-.4-.06-1.36-.1-2.87-.13s-3.3-.04-5.36-.04c-2.06 0-4.23.01-6.51.04-2.29.03-4.4.13-6.34.3-.4.06-.77.09-1.11.09h-.94c-.34 0-.66.03-.94.09-.12-.06-.06-.24.17-.56.23-.31.51-.73.86-1.24.4-.46.78-1 1.16-1.63.37-.63.64-1.08.81-1.37l.34-1.2-.6-1.29c-.12-.4-.33-.74-.64-1.03-.32-.29-.53-.48-.64-.6a.745.745 0 0 0-.51 0c-.17.06-.43.27-.77.64s-.8.96-1.37 1.76c-.57.8-1.34 1.92-2.31 3.34l-2.4 3.51c-1.71.23-3.56.43-5.53.6-1.97.17-3.8.36-5.49.56-1.68.2-3.11.4-4.29.6-1.17.2-1.87.44-2.1.73-.17.29-.26.69-.26 1.2s.06.92.17 1.2c.34.8 1 1.11 1.97.94.97-.17 2.69-.48 5.14-.94 1.14-.23 1.83-.41 2.06-.56.23-.14.08-.41-.43-.81-.29-.17-.4-.27-.34-.3.06-.03.23-.04.51-.04.23 0 .64-.04 1.24-.13s1.16-.18 1.67-.3c.51-.11 1.04-.23 1.59-.34.54-.11.99-.2 1.33-.26l1.46-.17-3.09 4.89a99.29 99.29 0 0 0-3.17 5.19c-1.03 1.8-1.96 3.51-2.79 5.14-.07.13-.13.25-.19.38-.68.54-1.42 1.16-2.25 1.89-.63.57-1.4 1.27-2.31 2.1-.91.83-1.8 1.62-2.66 2.36-.86.74-1.6 1.37-2.23 1.89-.63.51-.97.71-1.03.6-.12-.11.04-.6.47-1.46s.96-1.84 1.58-2.96c.62-1.12 1.27-2.21 1.93-3.3.66-1.08 1.16-1.89 1.5-2.4.17-.34.16-.77-.04-1.29-.2-.51-.47-.99-.81-1.41-.34-.42-.7-.76-1.07-.99-.37-.23-.64-.23-.81 0l-1.03 1.89c0-.57-.14-1.37-.43-2.4-.29-1.03-.63-1.66-1.03-1.89-.86-.4-1.96-.46-3.3-.17-1.34.29-2.71.84-4.11 1.67-1.4.83-2.77 1.84-4.11 3.04-1.34 1.2-2.44 2.52-3.3 3.94-1.49 2.34-2.26 4.19-2.31 5.53-.06 1.34.51 2.61 1.71 3.81.46.46.86.73 1.2.81.34.09.79-.04 1.33-.39.54-.34 1.29-.93 2.23-1.76s2.27-1.99 3.99-3.47c.97-.8 1.91-1.56 2.83-2.27.91-.71 1.51-1.19 1.8-1.42l1.46-1.11-2.91 4.29c-.4.63-.6 1.33-.6 2.1s.17 1.5.51 2.19c.34.69.83 1.23 1.46 1.63.63.4 1.37.49 2.23.26.51-.11 1.3-.66 2.36-1.63 1.06-.97 2.21-2.1 3.47-3.39.89-.91 1.75-1.83 2.6-2.76-.07.15-.14.3-.2.44-.57 1.29-.97 2.21-1.2 2.79-.46 1.09-.77 1.83-.94 2.23-.17.4.06.86.69 1.37.29.29.73.63 1.33 1.03.6.4 1.01.51 1.24.34 2.68-2.34 5.64-4.83 8.87-7.46 1.42-1.16 2.8-2.33 4.15-3.51-.37.85-.74 1.69-1.11 2.48-.86 1.83-1.49 3.26-1.89 4.29-.4 1.03-.63 1.84-.69 2.44-.06.6.01 1.06.21 1.37.2.31.53.67.99 1.07.57.57.97.8 1.2.69.12 0 .27-.23.47-.69.2-.46.53-1 .99-1.63.29-.51.74-1.27 1.37-2.27.63-1 1.34-2.08 2.14-3.26.8-1.17 1.64-2.39 2.53-3.64.88-1.26 1.7-2.38 2.44-3.39.74-1 1.37-1.84 1.89-2.53.51-.69.8-1.06.86-1.11-.06.12-.06.39 0 .81.06.43.19.89.39 1.37.2.49.49.92.86 1.29s.81.53 1.33.47c.97-.11 2.17-.48 3.6-1.11 1.43-.63 2.63-1.31 3.6-2.06l-.06.01Zm-45.77 4.71c-1.6 1.09-3.6 2.37-6 3.86-1.66.97-2.8 1.6-3.43 1.89-.63.29-.97.32-1.03.09.29-.51.69-1.1 1.2-1.76.51-.66 1.08-1.33 1.71-2.01.63-.69 1.29-1.33 1.97-1.93.68-.6 1.34-1.13 1.97-1.59 1.37-.97 2.66-1.56 3.86-1.76 1.2-.2 1.86.1 1.97.9.11.46-.63 1.23-2.23 2.31h.01ZM132.67 37.91c1-.97 1.84-1.84 2.53-2.61.69-.77 1.21-1.43 1.59-1.97.37-.54.53-.87.47-.99-.12-.11-1.37.77-3.77 2.66-1.77 1.43-3.44 2.77-5.01 4.03l-4.11 3.3c-1.17.94-2.12 1.67-2.83 2.19-.71.51-1.1.72-1.16.6-.06-.06.1-.47.47-1.24s.96-1.7 1.76-2.79c.23-.4.66-1.1 1.29-2.1s1.27-2.01 1.93-3.04c.66-1.03 1.24-1.96 1.76-2.79.51-.83.8-1.3.86-1.41.11-.29.03-.63-.26-1.03-.29-.4-.49-.74-.6-1.03-.29-.34-.5-.54-.64-.6-.14-.06-.39.06-.73.34-.51.29-1.2 1.03-2.06 2.23-.86 1.2-1.71 2.56-2.57 4.07a88.72 88.72 0 0 0-2.44 4.63c-.77 1.57-1.33 2.87-1.67 3.9-.29.69-.17 1.47.34 2.36.51.89 1.14 1.36 1.89 1.41.46 0 1.1-.26 1.93-.77.83-.51 1.73-1.16 2.7-1.93.97-.77 1.93-1.57 2.87-2.4.94-.83 1.73-1.53 2.36-2.1 1.08-.97 2.13-1.94 3.13-2.91l-.03-.01ZM245.57 25.7c-1.77-3.34-4.45-6.21-7.77-8.04-3.31-1.83-7.16-2.57-10.91-2.31-3.75.26-7.43 1.48-10.54 3.58l-.48-2.87-.48 2.87-2.87.48 2.87.48.48 2.87.48-2.87 2.87-.48-2.72-.45c3.1-2.02 6.73-3.18 10.41-3.39 3.71-.22 7.5.56 10.73 2.39 3.23 1.83 5.83 4.68 7.52 7.96 1.71 3.28 2.53 7.02 2.26 10.7-.07.92-.21 1.83-.41 2.72-.21.89-.49 1.77-.84 2.62-.69 1.7-1.69 3.27-2.86 4.68-2.38 2.8-5.55 4.92-9.03 6.05-1.74.57-3.56.88-5.38.9-.91 0-1.82-.05-2.72-.19l-.67-.11-.67-.16c-.22-.05-.45-.1-.66-.16l-.65-.2c-3.5-1.09-6.63-3.16-9.37-5.62-2.75-2.46-5.13-5.32-7.42-8.26-1.88-2.4-3.73-4.85-5.73-7.19-.16.27-.33.52-.49.79-.07.12-.14.24-.21.37 1.89 2.19 3.67 4.5 5.5 6.78 2.33 2.93 4.8 5.82 7.65 8.32 1.42 1.25 2.95 2.4 4.58 3.38s3.38 1.79 5.22 2.34l.69.2c.23.06.47.11.7.16l.7.16.71.11c.95.13 1.91.19 2.87.17 1.92-.05 3.82-.4 5.63-1.01 3.62-1.22 6.88-3.45 9.31-6.38 1.2-1.48 2.22-3.11 2.92-4.89.35-.88.64-1.8.85-2.73.2-.93.33-1.87.39-2.82.24-3.8-.66-7.62-2.44-10.96l-.02.01Z"
            />
            <Path
                fill="#00131A"
                d="M172.57 18.85c-.38.03-.76.07-1.14.1-.24.02-.48.04-.72.07l-.71.11-.71.11c-.24.04-.47.07-.71.13l-1.41.32c-.47.11-.93.26-1.39.39l-.69.2-.68.25c-.45.17-.91.32-1.35.51-1.57.64-18.1 11.42-23.15 14.7-.28-1.3-.45-2.32-.51-3.06-.06-.74-.09-1.34-.09-1.8 0-1.6-.26-2.26-.77-1.97-.12.12-.19.53-.21 1.24-.03.71-.04 1.62-.04 2.7l.26 3.77-1.97 1.11c-.69.46-1.4.96-2.14 1.5-.74.54-1.46 1.06-2.14 1.54-.69.49-1.3.96-1.84 1.41-.54.46-.93.83-1.16 1.11-.74.69-1.13 1.26-1.16 1.71-.03.46.3 1.03.99 1.71.63.74 1.11 1.11 1.46 1.11.12 0 .44-.24.99-.73.54-.48 1.13-1.13 1.76-1.93.74-.74 1.44-1.51 2.1-2.31.66-.8 1.27-1.43 1.84-1.89l1.89-1.63.43 1.46c.34.97.77 1.93 1.29 2.87.51.94 1.06 1.74 1.63 2.4.57.66 1.2 1.14 1.89 1.46.69.32 1.37.33 2.06.04 1.2-.4 2.3-.97 3.3-1.71s1.73-1.42 2.19-2.01c.46-.6.54-1.01.26-1.24-.29-.23-1.11-.06-2.49.51-1.32.57-2.47.76-3.47.56-1-.2-1.87-.61-2.61-1.24a8.096 8.096 0 0 1-1.84-2.23c-.42-.74-.73-1.46-.96-2.16 5.17-3.59 20.35-14.28 22.93-15.4.41-.19.85-.33 1.27-.49l.64-.24.65-.2c.44-.13.87-.28 1.31-.38l1.33-.31c.22-.06.44-.09.67-.13l.67-.11.54-.09.91-.98c.23-.23.52-.52.85-.87l-.05.01ZM199.08 29.57c-1.12-1.19-2.28-2.34-3.54-3.39-1.46-1.23-3.06-2.31-4.72-3.26-3.34-1.88-7.02-3.13-10.8-3.74l-1.42-.2c-.4-.04-.81-.07-1.21-.11l-.79 1.1-.56.42h.34c.23 0 .45.03.68.05.45.04.91.06 1.36.1l1.36.18c3.61.54 7.13 1.7 10.33 3.45 1.59.89 3.12 1.89 4.54 3.06 1.32 1.08 2.55 2.27 3.73 3.52 0 0 0-.02.01-.02.22-.4.45-.78.68-1.17l.01.01Z"
            />
            <Path
                fill="#00131A"
                d="M171.61 20.6c.45-.04.9-.11 1.36-.14l1.05-.05 2.58-.44.79-1.1c-.07 0-.14-.01-.22-.02-.24-.02-.48-.05-.72-.05l-.72-.02-.72-.02h-.72l-1.44.05c-.1 0-.2.02-.29.03-.33.34-.62.64-.85.87l-.91.98.13-.02c.23-.03.45-.05.68-.08v.01Z"
            />
            <Path
                fill="#00131A"
                d="m174.02 20.41.31-.01.34-.02.35.01.68.01h.34l.56-.42-2.58.43ZM200.99 31.7c-.45-.52-.89-1.05-1.36-1.56-.18-.2-.37-.38-.55-.57-.23.39-.46.77-.68 1.17 0 0 0 .02-.01.02.09.1.19.18.28.28.55.59 1.09 1.2 1.62 1.82.07-.12.14-.25.21-.37.16-.27.33-.52.49-.79ZM132.08 29.93l-.74-4.44-4.44-.74 4.44-.74.74-4.44.75 4.44 4.43.74-4.43.74-.75 4.44Z"
            />
        </G>
        <Defs>
            <LinearGradient
                id="b"
                x1={158.56}
                x2={194.8}
                y1={10.08}
                y2={10.08}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FFE471" />
                <Stop offset={1} stopColor="#FFBA22" />
            </LinearGradient>
            <LinearGradient
                id="c"
                x1={89.2}
                x2={279.78}
                y1={34.89}
                y2={34.89}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FFE471" />
                <Stop offset={1} stopColor="#FFBA22" />
            </LinearGradient>
            <LinearGradient
                id="d"
                x1={157.03}
                x2={193.27}
                y1={22.21}
                y2={22.21}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FFE471" />
                <Stop offset={1} stopColor="#FFBA22" />
            </LinearGradient>
            <LinearGradient
                id="e"
                x1={183.67}
                x2={274.11}
                y1={15.3}
                y2={15.3}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FFE471" />
                <Stop offset={1} stopColor="#FFBA22" />
            </LinearGradient>
            <LinearGradient
                id="f"
                x1={193.26}
                x2={229.5}
                y1={38.88}
                y2={38.88}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#FFE471" />
                <Stop offset={1} stopColor="#FFBA22" />
            </LinearGradient>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h248.05v56.64H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)
