import Svg, { SvgProps, Rect, G, Path, Defs, ClipPath } from 'react-native-svg'

export const DestinyIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#0085FF" rx={20} />
        <G clipPath="url(#a)">
            <Path
                fill="#fff"
                d="M20.223 29.33a1.167 1.167 0 0 1 .055 2.334l-.278.003-.278-.003a1.167 1.167 0 0 1 .055-2.333l.223.003.223-.003Zm4.634-1.358a1.167 1.167 0 1 1 1.217 1.99c-.158.097-.318.19-.481.279a1.167 1.167 0 0 1-1.12-2.047c.13-.071.258-.145.384-.222Zm-11.318.387a1.167 1.167 0 0 1 1.604-.387c.126.077.254.151.384.222a1.167 1.167 0 0 1-1.12 2.047 11.672 11.672 0 0 1-.48-.278 1.167 1.167 0 0 1-.388-1.604ZM20 13a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm8.194 11.473a1.167 1.167 0 0 1 2.047 1.12c-.09.163-.182.323-.278.48a1.167 1.167 0 1 1-1.992-1.215c.078-.127.152-.255.223-.385Zm-17.971-.463a1.167 1.167 0 0 1 1.583.463c.071.13.145.258.223.385a1.167 1.167 0 0 1-1.992 1.216c-.096-.158-.189-.318-.278-.48a1.167 1.167 0 0 1 .463-1.584ZM20 17.667a2.333 2.333 0 1 0 0 4.667 2.333 2.333 0 0 0 0-4.667Zm-10.47.916c.644.015 1.154.55 1.14 1.194l-.003.335.002.112a1.167 1.167 0 0 1-2.332.054l-.003-.417.003-.139a1.167 1.167 0 0 1 1.193-1.139Zm20.94 0a1.167 1.167 0 0 1 1.193 1.14l.004.277-.004.278a1.167 1.167 0 0 1-2.332-.054l.002-.224-.002-.223a1.167 1.167 0 0 1 1.139-1.194Zm-2.111-5.044a1.167 1.167 0 0 1 1.604.388c.096.157.189.318.278.48a1.167 1.167 0 1 1-2.047 1.12 9.096 9.096 0 0 0-.223-.384 1.167 1.167 0 0 1 .388-1.604Zm-18.322.388a1.167 1.167 0 1 1 1.991 1.216 9.317 9.317 0 0 0-.222.384 1.167 1.167 0 0 1-2.047-1.12c.09-.162.182-.323.278-.48Zm13.972-3.704a1.167 1.167 0 0 1 1.584-.464c.163.09.323.182.48.278a1.167 1.167 0 1 1-1.216 1.992 9.387 9.387 0 0 0-.384-.223 1.167 1.167 0 0 1-.464-1.583Zm-9.602-.464a1.167 1.167 0 1 1 1.12 2.047c-.13.071-.258.146-.384.223a1.167 1.167 0 0 1-1.217-1.992c.158-.096.318-.189.481-.278ZM20 8.334l.278.003a1.167 1.167 0 0 1-.055 2.332L20 10.667l-.223.002a1.167 1.167 0 1 1-.055-2.332L20 8.334Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M6 6h28v28H6z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const StrengthIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#4B3DAA" rx={20} />
        <G clipPath="url(#a)">
            <Path
                fill="#fff"
                d="M18.036 9.384c-.73.75-.772 1.12-1.14 2.153.131.448.25.83.444 1.231.25.014.523.023.745.021-.296-.5-.402-.947-.23-1.73.21.935.624 1.471 1.03 1.684.147-.016.289-.035.425-.056-.303-.507-.412-.955-.238-1.745.19.847.548 1.367.915 1.615.227-.051.451-.11.676-.173-.267-.475-.357-.917-.192-1.665.163.73.451 1.216.763 1.496.247-.077.451-.142.673-.213a2.896 2.896 0 0 1 .051-.937l.092-.432.854.184-.091.432c-.177.834.064 1.198.354 1.406.29.208.713.17.778.127l.368-.238.472.743c-.187.115-.384.267-.574.346.905 1.357 1.562 3.014 1.202 4.588-.115.464-.293.894-.569 1.225.618.595 1.03 1.08 1.506 1.691-.18-.117-.368-.237-.567-.361a23.423 23.423 0 0 0-1.698-.971c-.777-.383-1.523-.893-2.317-1.006-1.094-.146-2.245.235-3.558 1.032.382.428.644.76.985 1.191-.338-.212-.71-.444-1.124-.697-1.58-.858-3.174-2.365-4.875-2.452-1.483-.053-2.91.734-4.352 1.892l-.216.173v11.754h1.551c2.193-.855 3.897-2.827 4.71-4.634l.012-.028.016-.026c.459-.748.54-1.456.815-2.193.274-.738.82-1.457 2.033-1.9.21-.107.245-.07.418.068 1.48 1.177 2.781 1.57 4.04 1.586 1.584-.076 2.837-.485 4.16-.95a6.793 6.793 0 0 1-.68.527c-.743.512-1.66.978-2.247 1.217-.714.098-1.376.118-2.037.03-.483.593-1.241.998-1.813 1.308 3.103.687 5.625.044 8.125-1.123l-1.359-.266c1.535-.217 3.154-.184 4.597-.173.198 0 .35-.022.422-.043.688-2.505-.199-4.8-1.665-7.121-1.468-2.326-3.503-4.615-4.945-7.014-1.024-.847-2.36-1.543-3.763-2.265-.99.209-1.991.458-2.982.692Zm4.144 3.456c-.567.177-1.15.364-1.643.491.123.242.181.523.165.795a2.493 2.493 0 0 0 1.406-.312c.235-.13.424-.296.554-.44a1.734 1.734 0 0 1-.482-.534Zm-2.631.721c-.571.056-1.194.116-1.702.11.116.234.183.591.413.727.543.058 1 .098 1.452-.085.264-.158.088-.739-.163-.752ZM17.85 23.826c-.854.355-1.096.742-1.302 1.295-.194.523-.302 1.23-.702 2.011 1.567-.313 3.38-1.041 4.555-1.966-.826-.25-1.677-.679-2.551-1.34Zm.452 3.5c-.909.355-1.982.792-2.897.69-.674 1.356-1.633 2.697-3.198 3.676h4.11c1.047-1.46 1.848-2.774 1.985-4.366Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M9 9h23v23H9z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const CardsIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#796095" rx={20} />
        <Path
            fill="#fff"
            d="M17.4 15.534a.5.5 0 0 0-.8 0L14.225 18.7a.5.5 0 0 0 0 .6l2.375 3.167a.5.5 0 0 0 .8 0l2.375-3.167a.5.5 0 0 0 0-.6L17.4 15.534ZM12.092 13.639a.25.25 0 0 1 0-.278l.7-1.049a.25.25 0 0 1 .416 0l.7 1.05a.25.25 0 0 1 0 .277l-.7 1.049a.25.25 0 0 1-.416 0l-.7-1.05ZM21.208 23.312a.25.25 0 0 0-.416 0l-.7 1.05a.25.25 0 0 0 0 .277l.7 1.049a.25.25 0 0 0 .416 0l.7-1.05a.25.25 0 0 0 0-.277l-.7-1.049Z"
        />
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M9 12a3 3 0 0 1 3-3h10a3 3 0 0 1 2.629 1.553l4.21 1.128a3 3 0 0 1 2.121 3.675l-3.623 13.523A3 3 0 0 1 23.663 31l-7.465-2H12a3 3 0 0 1-3-3V12Zm3-1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1H12Z"
            clipRule="evenodd"
        />
    </Svg>
)

export const WeaknessesIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#667176" rx={20} />
        <Path
            fill="#fff"
            d="M20.406 8.406c-6.629 0-12 5.371-12 12 0 6.63 5.371 12 12 12 6.63 0 12-5.37 12-12 0-6.629-5.37-12-12-12Zm1.636 9.18 3.87-2.323c.562-.334 1.162.372.746.87l-1.626 1.95 1.626 1.95c.42.504-.189 1.2-.745.872l-3.871-2.323a.584.584 0 0 1 0-.997Zm-7.887-1.452c-.416-.499.184-1.205.745-.871l3.87 2.322a.58.58 0 0 1 0 .997l-3.87 2.323c-.557.329-1.162-.368-.745-.871l1.625-1.95-1.625-1.95Zm6.251 5.82c2.512 0 5.58 2.12 5.962 5.163.082.659-.388 1.19-.857.988-1.253-.538-3.116-.842-5.105-.842-1.988 0-3.851.304-5.105.842-.474.203-.938-.34-.856-.988.382-3.043 3.45-5.162 5.961-5.162Z"
        />
    </Svg>
)

export const PlanetsIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#4F3F39" rx={20} />
        <Path
            fill="#fff"
            d="M29.324 19.583c.33-.295.637-.588.92-.877.88-.897 1.567-1.797 1.95-2.646.379-.835.536-1.802.015-2.634-.49-.783-1.383-1.121-2.281-1.242-.923-.124-2.042-.048-3.264.178l-1.036.192A9.292 9.292 0 0 0 20 10.666a9.333 9.333 0 0 0-9.329 9.636l-.615.692c-.979.953-1.746 1.908-2.184 2.803-.427.875-.63 1.898-.081 2.776.505.807 1.438 1.143 2.371 1.254.962.114 2.132.019 3.41-.235.251-.05.508-.106.77-.168a9.383 9.383 0 0 1-1.53-1.47c-.995.17-1.82.21-2.444.135-.738-.087-1.009-.308-1.094-.444-.072-.116-.153-.417.17-1.08.282-.575.803-1.273 1.565-2.05a9.307 9.307 0 0 0 1.803 3.438c.136-.023.277-.049.42-.077 2.358-.468 5.382-1.577 8.493-3.234 3.11-1.657 5.656-3.515 7.266-5.157a9.31 9.31 0 0 0-1.803-3.439c1.032-.176 1.879-.212 2.507-.128.693.094.949.306 1.03.436.07.111.147.385-.125.985-.265.586-.797 1.317-1.606 2.143l-.003.003c.187.672.301 1.374.333 2.098Z"
        />
        <Path
            fill="#fff"
            d="M20 29.333a9.333 9.333 0 0 0 9.324-9.75c-1.728 1.55-4.071 3.162-6.777 4.603-2.906 1.55-5.785 2.662-8.204 3.238A9.292 9.292 0 0 0 20 29.334Z"
        />
    </Svg>
)

export const KarmaIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#004F6C" rx={20} />
        <G fill="#fff" clipPath="url(#a)">
            <Path d="M20 13.543a1.298 1.298 0 1 0 0 2.597 1.298 1.298 0 0 0 0-2.597Z" />
            <Path d="M31.056 15.329a11.95 11.95 0 0 0-2.571-3.814A11.951 11.951 0 0 0 20 8a11.96 11.96 0 0 0-8.485 3.515A11.956 11.956 0 0 0 8 20a11.96 11.96 0 0 0 3.515 8.485A11.952 11.952 0 0 0 20 32c1.616 0 3.192-.318 4.671-.944a11.952 11.952 0 0 0 3.814-2.571A11.96 11.96 0 0 0 32 20a11.93 11.93 0 0 0-.944-4.671ZM20 26.456a1.298 1.298 0 1 1 0-2.595 1.298 1.298 0 0 1 0 2.595Zm3.64-7.975A5.132 5.132 0 0 1 20 19.99a5.17 5.17 0 0 0-.487 10.316c-5.471-.254-9.83-4.77-9.83-10.305 0-5.698 4.62-10.317 10.317-10.317v.01c1.421 0 2.708.577 3.64 1.508a5.133 5.133 0 0 1 1.507 3.64 5.13 5.13 0 0 1-1.507 3.64Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M8 8h24v24H8z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const HealthIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#2BB986" rx={20} />
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M16.962 27.469C14.019 25.214 10 21.489 10 17.966c0-5.883 5.5-8.08 10-3.535 4.5-4.545 10-2.348 10 3.536 0 3.522-4.02 7.247-6.962 9.502C21.706 28.489 21.04 29 20 29c-1.04 0-1.706-.51-3.038-1.531ZM24.5 15.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25V20a.75.75 0 0 1-1.5 0v-1.25H22.5a.75.75 0 0 1 0-1.5h1.25V16a.75.75 0 0 1 .75-.75Z"
            clipRule="evenodd"
        />
    </Svg>
)

export const BloodIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#D32F31" rx={20} />
        <G fill="#fff" clipPath="url(#a)">
            <Path d="M11.498 21.892c0-.7.18-1.526.483-2.42C11.153 20.606 8 25.054 8 27.058a4.179 4.179 0 0 0 7.756 2.162 8.444 8.444 0 0 1-4.258-7.328ZM27.821 19.204l-.013.018c.356.991.57 1.905.57 2.67a8.445 8.445 0 0 1-4.166 7.274 4.179 4.179 0 0 0 7.787-2.106c.002-2.309-4.178-7.856-4.178-7.856Z" />
            <Path d="M26.924 21.892c0-3.858-6.985-13.13-6.985-13.13s-6.986 9.272-6.986 13.13a6.986 6.986 0 0 0 13.97 0Zm-9.439 3.953a.971.971 0 0 1-1.366.116c-2.755-2.319-1.804-5.745-1.763-5.89a.97.97 0 0 1 1.865.534c-.03.11-.625 2.381 1.147 3.872a.97.97 0 0 1 .117 1.368Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M8 8h24v24H8z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const ChartsIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#5669CD" rx={20} />
        <Path
            fill="#fff"
            d="M25.293 10.293C25 10.586 25 11.057 25 12v13c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293.943 0 1.414 0 1.707-.293C29 26.414 29 25.943 29 25V12c0-.943 0-1.414-.293-1.707C28.414 10 27.943 10 27 10c-.943 0-1.414 0-1.707.293ZM18 15c0-.943 0-1.414.293-1.707C18.586 13 19.057 13 20 13c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v10c0 .943 0 1.414-.293 1.707C21.414 27 20.943 27 20 27c-.943 0-1.414 0-1.707-.293C18 26.414 18 25.943 18 25V15ZM11.293 17.293C11 17.586 11 18.057 11 19v6c0 .943 0 1.414.293 1.707.293.293.764.293 1.707.293.943 0 1.414 0 1.707-.293C15 26.414 15 25.943 15 25v-6c0-.943 0-1.414-.293-1.707C14.414 17 13.943 17 13 17c-.943 0-1.414 0-1.707.293ZM11 29.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H11Z"
        />
    </Svg>
)

export const PhoneIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#0085FF" rx={20} />
        <Path
            fill="#fff"
            d="M23.5 9h-8a2.5 2.5 0 0 0-2.5 2.5v17a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 23.5 9Zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm4.5-4h-9V12h9v14Z"
        />
    </Svg>
)

export const HomeIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#4B3DAA" rx={20} />
        <Path
            fill="#fff"
            d="M30 29.249h-1v-11.27c0-.62-.28-1.2-.77-1.58l-1.23-.96-.02-2.45c0-.55-.45-.99-1-.99h-3.41l-1.34-1.04c-.72-.57-1.74-.57-2.46 0l-7 5.44c-.49.38-.77.96-.77 1.57l-.05 11.28H10c-.41 0-.75.34-.75.75s.34.75.75.75h20c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Zm-15.5-8.5v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1Zm8 8.5h-5v-2.75c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v2.75Zm3-8.5c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1.5Z"
        />
    </Svg>
)

export const PredictionIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#F29F15" rx={20} />
        <Path
            fill="#fff"
            d="m25.463 23.414 1.499 4.496a2.042 2.042 0 0 1-.945 2.43c-1.6.89-3.609 1.327-6.017 1.327-2.408 0-4.416-.437-6.017-1.327a2.041 2.041 0 0 1-.945-2.43l1.5-4.496A9.002 9.002 0 0 0 20 25.25a9.002 9.002 0 0 0 5.463-1.836ZM20 8.334c1.56 0 3.013.453 4.236 1.235-.096.365-.243.634-.43.82-.294.295-.796.491-1.545.55l-.26.015-.44.011c-2.532.186-2.468 4.077.189 4.077 1.039 0 1.7.211 2.056.569.295.294.49.795.55 1.545l.015.259.01.442c.113 1.533 1.585 2.114 2.729 1.743A7.875 7.875 0 1 1 20 8.333Zm7.292 0c0 1.34.314 2.285.91 2.88.55.55 1.397.861 2.579.906l.302.005c1.118 0 1.165 1.607.14 1.741l-.14.01c-1.34 0-2.285.314-2.88.91-.55.55-.861 1.396-.906 2.578l-.005.303c0 1.166-1.75 1.166-1.75 0 0-1.341-.315-2.286-.91-2.882-.55-.55-1.398-.86-2.58-.904l-.302-.006c-1.118 0-1.165-1.607-.14-1.741l.14-.009c1.341 0 2.286-.315 2.881-.91.596-.596.91-1.54.91-2.881 0-1.167 1.75-1.167 1.75 0Z"
        />
    </Svg>
)

export const BirthdateStyleIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#F05191" rx={20} />
        <G clipPath="url(#a)">
            <G fill="#fff" clipPath="url(#b)">
                <Path d="m29.982 18.812-4.54-9.42a2.016 2.016 0 0 0-1.198-1.022 2.224 2.224 0 0 0-1.628.093l-1.013.38c-.078.035-.317.11-.317.19v.002c0 1.646-.737 3.046-1.617 3.046s-1.617-1.399-1.617-3.046v-.002c0-.08.092-.155.015-.19l-.765-.38a2.117 2.117 0 0 0-1.588-.093 1.976 1.976 0 0 0-1.176 1.022l-4.53 9.42c-.132.275 0 .597.291.732l1.233.572a.67.67 0 0 0 .47.032.603.603 0 0 0 .355-.283l3.318-6.058c.801 1.8.88 3.809.192 5.66l-2.847 6.435c1.39.296 3.747.438 6.976.438h.011c3.229 0 5.586-.142 6.975-.438l-2.847-6.509c-.689-1.85-.61-3.824.192-5.622l3.317 6.077c.073.133.201.245.355.292a.673.673 0 0 0 .468-.027l1.23-.57c.292-.136.417-.456.285-.731ZM20 28.765h.006c4.037 0 6.735-.512 7.756-.86l-.456-1.07c-2.384.553-5.687.612-7.305.623-1.62-.01-4.922-.091-7.306-.644l-.455 1.095c1.021.347 3.72.857 7.756.857H20ZM20 30.272c-2.426-.012-6.38-.18-8.399-.947 0 0-.562 1.183-.562 1.25 0 .818 4.11 1.425 8.956 1.425h.011c4.847 0 8.956-.607 8.956-1.426 0-.066-.561-1.292-.561-1.292-2.02.768-5.974.978-8.4.99Z" />
            </G>
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M8 8h24v24H8z" />
            </ClipPath>
            <ClipPath id="b">
                <Path fill="#fff" d="M8 8h24v24H8z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const CompatibilityIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#00969F" rx={20} />
        <G clipPath="url(#a)">
            <Path
                fill="#fff"
                d="M27.73 24.663a3.467 3.467 0 0 0 .77-2.163 3.5 3.5 0 1 0-7 0c.004.788.275 1.55.77 2.163A6.04 6.04 0 0 0 20 26.69a6.04 6.04 0 0 0-2.27-2.027 3.467 3.467 0 0 0 .77-2.163 3.5 3.5 0 1 0-7 0c.004.788.275 1.55.77 2.163A6 6 0 0 0 9 30a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1 6 6 0 0 0-3.27-5.337ZM22 9a3.548 3.548 0 0 0-2 .562A3.548 3.548 0 0 0 18 9a3.452 3.452 0 0 0-2.694 1.254 4.134 4.134 0 0 0-.689 3.514c.568 2.762 4.474 4.884 4.918 5.118a1.005 1.005 0 0 0 .93 0c.444-.234 4.35-2.356 4.918-5.117a4.136 4.136 0 0 0-.689-3.515A3.452 3.452 0 0 0 22 9Zm1.425 4.365c-.256 1.235-2.073 2.683-3.425 3.487-1.131-.681-3.149-2.139-3.426-3.488a2.173 2.173 0 0 1 .28-1.846A1.459 1.459 0 0 1 18 11a1.35 1.35 0 0 1 1.128.433 1 1 0 0 0 .845.491 1.101 1.101 0 0 0 .88-.463A1.323 1.323 0 0 1 22 11a1.46 1.46 0 0 1 1.145.518 2.175 2.175 0 0 1 .279 1.847h.001Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M8 8h24v24H8z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const ColorPaletteIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#0091FB" rx={20} />
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M20.004 10.573v-.005h-.006l-.001.002v.004h.001l.002.002.002-.001h.001v-.002Zm0 .001Zm-.007-.006Zm0 0Zm.006 0Zm-1.574.003a1.571 1.571 0 1 1 3.143 0 1.571 1.571 0 0 1-3.143 0ZM17.386 21.574v-.005l-.001-.002h-.002l-.002-.001h-.003l-.001.001v.002l-.002.002.001.003.001.001h.001l.003.002.002-.001h.002v-.002Zm-.001.001Zm-.008 0Zm0-.008Zm0 0Zm-2.091.004a2.095 2.095 0 1 1 4.19 0 2.095 2.095 0 0 1-4.19 0ZM22.624 21.574v-.005l-.001-.002h-.001l-.003-.001h-.002l-.002.001v.002l-.001.002v.003l.001.001h.002l.002.002.003-.001h.001v-.002Zm0 .001Zm-.009-.008Zm0 0Zm-2.091.004a2.095 2.095 0 1 1 4.19 0 2.095 2.095 0 0 1-4.19 0Z"
            clipRule="evenodd"
        />
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M20.524 12.143v9.429h-1.048v-9.429h1.048ZM16.338 15.288v-.006l-.002-.001h-.006l-.001.002v.007h.002l.003.001h.002l.001-.001.001-.002Zm0 .002Zm-.008 0Zm0-.008Zm0 0Zm.007 0Zm-2.099.004a2.095 2.095 0 1 1 4.19 0 2.095 2.095 0 0 1-4.19 0ZM23.671 15.288v-.006l-.002-.001h-.006l-.001.002v.007h.002l.002.001h.003l.001-.001.001-.002Zm0 .002Zm-.008-.008Zm.007 0Zm-2.099.004a2.095 2.095 0 1 1 4.19 0 2.095 2.095 0 0 1-4.19 0ZM15.29 28.907l.001-.002v-.003l-.001-.001h-.002l-.002-.002-.003.001h-.001l-.001.002v.007h.002l.003.001h.002l.002-.001v-.002Zm0 .002Zm-.008 0Zm0-.008Zm.008 0Zm-2.1.004a2.095 2.095 0 1 1 4.19 0 2.095 2.095 0 0 1-4.19 0ZM24.194 28.907v-.006h-.002l-.001-.002-.002.001h-.001v.002l-.002.003.001.002v.002h.002l.002.001h.001l.002-.001v-.002Zm0 .002Zm-.006 0Zm0-.008Zm0 0Zm-1.569.004c0-1.157.704-2.095 1.572-2.095.867 0 1.571.938 1.571 2.095 0 1.157-.704 2.095-1.571 2.095-.868 0-1.572-.938-1.572-2.095ZM28.91 17.907v-.004l-.001-.001h-.002l-.002-.001h-.003l-.001.001v.001l-.002.002.001.002.002.001.003.001h.002l.002-.001v-.001Zm-.001 0Zm-.008 0Zm0-.005Zm0 0Zm.008 0Zm-2.1.003c0-.868.939-1.572 2.096-1.572S31 17.038 31 17.905c0 .868-.938 1.571-2.095 1.571-1.157 0-2.095-.703-2.095-1.571ZM10.575 17.907v-.005h-.002l-.002-.001h-.001l-.002.001v.005l.002.001.001.001h.002l.001-.001v-.001Zm0 0Zm-.006 0Zm0-.005Zm0 0ZM9 17.905a1.571 1.571 0 1 1 3.143 0 1.571 1.571 0 0 1-3.143 0Z"
            clipRule="evenodd"
        />
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M22.619 16.334h-5.238v-2.096h5.238v2.096ZM14.238 28.305l2.15-5.686 2.04.6-2.15 5.686-2.04-.6ZM23.722 28.905l-2.15-5.687 2.04-.599 2.15 5.686-2.04.6ZM11.095 16.45l3.425-2.212.766 1.979-3.425 2.212-.766-1.979ZM27.947 18.429l-4.28-2.212.957-1.979 4.28 2.212-.957 1.979ZM21.572 22.62h-3.143v-2.096h3.143v2.095Z"
            clipRule="evenodd"
        />
    </Svg>
)

export const FormulaIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#0085FF" rx={20} />
        <G clipPath="url(#a)">
            <Path
                fill="#fff"
                d="M31.072 26.797 23.92 16.072v-5.69h.844c.618 0 1.134-.507 1.134-1.135 0-.62-.506-1.135-1.134-1.135h-9.516c-.619 0-1.134.507-1.134 1.135 0 .618.506 1.134 1.134 1.134h.844v5.69L8.938 26.798a3.124 3.124 0 0 0-.675 1.94 3.137 3.137 0 0 0 3.13 3.132h17.242a3.13 3.13 0 0 0 3.13-3.132 3.258 3.258 0 0 0-.693-1.94ZM14.525 24.35l-3.9 5.69a1.528 1.528 0 0 1-.722-1.312c0-.319.094-.619.263-.863l7.5-11.23V10.38h4.069v1.106H19.23v1.378h2.504v2.091H19.23v1.378h2.504v2.09H19.23v1.379h2.504v2.09H19.23v1.379h2.504v1.078h-7.21Z"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M8 8h24v24H8z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const GiftIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#CE5A51" rx={20} />
        <Path
            fill="#fff"
            d="M23.665 15.489h3.308c.793 0 1.449.629 1.449 1.449v4.977h-7.875v-5.797c-.274-.082-.52-.192-.684-.355-.027 0-.027-.028-.055-.028 0 0 0 .027-.027.027-.191.165-.41.274-.656.356v5.797H11.25v-4.977c0-.821.63-1.45 1.422-1.45h3.336c-.383-.191-.738-.464-1.04-.71-1.312-1.259-1.558-3.009-.519-3.993a2.47 2.47 0 0 1 1.64-.602c.903 0 1.833.355 2.626 1.093.437.41.848.985 1.093 1.532a5.681 5.681 0 0 1 1.121-1.532c.766-.738 1.75-1.093 2.625-1.093.657 0 1.23.218 1.64.602 1.04.984.794 2.734-.546 3.992-.274.246-.628.52-.983.712Zm-4.868-.793c.11-.246-.165-1.504-1.067-2.352-.464-.438-1.093-.683-1.64-.683-.165 0-.438.027-.63.191-.055.055-.218.165-.218.465 0 .355.218.902.738 1.367.657.63 1.696 1.067 2.462 1.067.245 0 .355-.055.355-.055Zm2.078 0s.137.055.355.055c.766 0 1.805-.438 2.462-1.067.52-.464.683-1.011.683-1.367 0-.301-.137-.41-.165-.465-.191-.164-.492-.191-.656-.191-.52 0-1.176.245-1.64.683-.875.848-1.176 2.078-1.04 2.379v-.027h.001Zm-1.75 15.094h-6.453c-.793 0-1.422-.63-1.422-1.422v-5.004h7.875v6.426Zm7.848 0h-6.426v-6.426h7.875v5.004c0 .793-.656 1.422-1.45 1.422Z"
        />
    </Svg>
)

export const AnimalIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#00A692" rx={20} />
        <Path
            fill="#fff"
            d="M31.996 19.976a.52.52 0 0 1 .002-.522.622.622 0 0 1 .473-.296l.986-.108a.619.619 0 0 0 .473-.299.518.518 0 0 0-.004-.526s-3.57-6.284-4.917-8.334c-1.576-2.4-2.704-2.655-5.856-2.655h-6.305c-3.153 0-4.28.256-5.857 2.655-1.346 2.05-4.917 8.334-4.917 8.334a.517.517 0 0 0-.004.526.619.619 0 0 0 .474.3l.986.107a.621.621 0 0 1 .472.296.52.52 0 0 1 .002.522L6.07 23.36a.52.52 0 0 0 .006.53.623.623 0 0 0 .486.29l2.054.17a.637.637 0 0 1 .439.226.525.525 0 0 1 .11.448l-.592 2.629a.523.523 0 0 0 .13.474.644.644 0 0 0 .491.201l2.78-.069c.31-.007.58.196.627.476l.361 2.11c.028.16.13.301.28.388.15.087.335.11.504.065l2.768-.742a.663.663 0 0 1 .581.116l2.445 1.954c.132.105.299.149.46.136a.653.653 0 0 0 .46-.136l2.445-1.954a.662.662 0 0 1 .581-.116l2.768.742c.17.045.354.022.504-.065a.562.562 0 0 0 .28-.388l.36-2.11c.05-.28.318-.483.628-.476l2.78.07c.19.003.37-.07.49-.202a.525.525 0 0 0 .131-.474l-.591-2.63a.525.525 0 0 1 .11-.447.635.635 0 0 1 .439-.226l2.054-.17a.623.623 0 0 0 .485-.29.52.52 0 0 0 .006-.53l-1.934-3.383Zm-20.003-5.838s-1.784-1.05-.985-2.447c.832-1.457 2.629-.613 2.629-.613l-1.644 3.06ZM24.035 25.98c-.094.42-.47 1.049-1.22 1.049H17.18c-.75 0-1.126-.63-1.22-1.049-.039-.172-.19-.605-.352-1.056 1.072.062 2.476-.098 4.307-.689 1.594.514 2.866.704 3.876.704.212 0 .41-.012.6-.027-.165.454-.318.894-.357 1.069Zm2.493-9.868-.704 1.374s.195 2.516.352 4.124c.136 1.39-.721 3.472-5.607 1.598.124-.059.238-.133.328-.227l1.03-1.093c.258-.272.301-.64.113-.946a.83.83 0 0 0-.064-.086l-.438-1.397a.161.161 0 0 0-.177-.106.153.153 0 0 0-.137.148v.953a1.45 1.45 0 0 0-.186-.013H18.976c-.098 0-.194.012-.287.031v-.971a.152.152 0 0 0-.136-.148.161.161 0 0 0-.177.106l-.532 1.692.048-.018a.769.769 0 0 0 .194.755l1.032 1.093c.088.092.2.166.321.224-4.892 1.879-5.75-.205-5.615-1.595.157-1.608.353-4.124.353-4.124l-.704-1.374c-.634-.86-.746-1.241-.424-1.885l.975-1.99c.389-.779 1.379-1.186 2.316-.954L20 12.826l3.66-1.543c.938-.232 1.927.175 2.316.954l.974 1.99c.323.644.212 1.025-.422 1.885Zm1.479-1.974-1.644-3.06s1.798-.843 2.63.613c.798 1.398-.986 2.446-.986 2.446Z"
        />
        <Path
            fill="#fff"
            d="M16.74 16.42c-.482 0-.873.364-.873.813 0 .448.391.812.872.812.482 0 .873-.364.873-.812 0-.449-.39-.812-.872-.812ZM23.26 16.42c-.482 0-.872.364-.872.813 0 .448.39.812.872.812s.873-.364.873-.812c0-.449-.39-.812-.873-.812Z"
        />
    </Svg>
)

export const LuckyIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#F29F15" rx={20} />
        <Path
            fill="#fff"
            d="M26.226 9.294c.005-.002.01 0 .016 0 0-.003-.016 0-.016 0Z"
        />
        <Path
            fill="#fff"
            d="M30.52 9.647a.262.262 0 0 0-.212-.042c0 .002-.044.018-.274.076-1.245.315-4.34.835-8.25-.408-4.74-1.509-8.726.232-8.726.232V8H9.374v10.364h3.684v-1.881h8.728S13.511 22.972 13.511 32h9.78s-.187-9.78 7.336-17.586V9.859a.264.264 0 0 0-.106-.212Z"
        />
    </Svg>
)

export const AngelIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#5EBBFF" rx={20} />
        <G fill="#fff" clipPath="url(#a)">
            <Path d="M20 34c-3.15 0-6.3-.788-9.188-2.275-.262-.175-.437-.438-.437-.788 0-.35.175-.612.438-.787l.524-.263a6.591 6.591 0 0 0 3.325-4.287c.7-2.8 2.45-5.075 4.9-6.388a.656.656 0 0 1 .788 0c2.45 1.313 4.2 3.588 4.9 6.388a6.591 6.591 0 0 0 3.325 4.287l.525.263c.262.175.438.437.438.787 0 .35-.175.613-.438.788A19.48 19.48 0 0 1 20 34ZM20 12.125c-2.975 0-5.25-1.313-5.25-3.063C14.75 7.313 17.025 6 20 6s5.25 1.313 5.25 3.063c0 1.75-2.275 3.062-5.25 3.062Zm0-4.375c-2.188 0-3.5.875-3.5 1.313 0 .437 1.313 1.312 3.5 1.312 2.188 0 3.5-.875 3.5-1.313 0-.437-1.313-1.312-3.5-1.312Z" />
            <Path d="M25.163 14.75c-.438-2.45-2.625-4.375-5.163-4.375a5.199 5.199 0 0 0-3.237 1.137c.087 0 .087.088.175.088 2.1 2.188 5.162 3.412 8.225 3.15ZM24.288 16.5a11.795 11.795 0 0 1-8.663-3.763 5.35 5.35 0 0 0-.875 2.888c0 2.887 2.363 5.25 5.25 5.25 2.625 0 4.813-1.925 5.163-4.375h-.875ZM13.088 16.5c-.088 0-.088 0 0 0H6.875c-.525 0-.875.35-.875.875 0 1.313.7 2.45 1.75 3.063.175 1.487 1.225 2.625 2.713 2.975.262 1.224 1.137 2.1 2.275 2.537l.262-.787c.438-1.663 1.137-3.15 2.188-4.463a6.688 6.688 0 0 1-2.1-4.2ZM33.125 16.5h-6.212c-.175 1.663-.963 3.063-2.1 4.2 1.05 1.313 1.837 2.8 2.187 4.463l.262.787c1.138-.35 2.013-1.313 2.276-2.537 1.4-.35 2.537-1.488 2.712-2.976A3.53 3.53 0 0 0 34 17.375c0-.525-.35-.875-.875-.875Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M6 6h28v28H6z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export const ProfessionIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#4B3016" rx={20} />
        <Path
            fill="#fff"
            d="M22.541 10.681c1.31 0 2.372-1.048 2.372-2.34C24.913 7.048 23.85 6 22.54 6c-1.31 0-2.372 1.048-2.372 2.34 0 1.293 1.062 2.341 2.372 2.341ZM27.278 21.937v-.81a.847.847 0 0 0 .329-.478c.076-.296 1.828-7.276-2.094-9.512a.987.987 0 0 0-.459-.112c-1.294 0-5.07.004-5.07.004v-.002a.844.844 0 0 0-.743.43c-.827 1.47-1.814 2.342-2.933 2.593-1.564.35-2.956-.618-2.966-.626a.846.846 0 0 0-.992 1.37c.068.05 1.439 1.024 3.254 1.024.337 0 .689-.034 1.05-.113 1.146-.251 2.162-.902 3.046-1.941V32.73a1.266 1.266 0 1 0 2.532 0v-9.58h.607v9.58a1.267 1.267 0 1 0 2.531 0V13.197c1.492 1.778.973 5.555.595 7.029a.845.845 0 0 0 .463.979v.732a.85.85 0 0 0-.85.85v3.936c0 .47.38.85.85.85h.971c.47 0 .85-.38.85-.85v-3.936a.85.85 0 0 0-.85-.85h-.121Zm-5.29-9.769c0-.207.169-.375.376-.375h.36c.207 0 .374.168.374.375v.377a.375.375 0 0 1-.375.375h-.36a.375.375 0 0 1-.374-.375v-.377Zm.71 4.728a.24.24 0 0 1-.315 0l-.438-.38a.583.583 0 0 1-.19-.545l.468-2.576a.24.24 0 0 1 .237-.197h.162a.24.24 0 0 1 .237.197l.468 2.576a.584.584 0 0 1-.19.544l-.438.381Z"
        />
    </Svg>
)

export const MindIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#4B3DAA" rx={20} />
        <Path
            fill="#fff"
            d="M27.125 19.008a3.902 3.902 0 0 1-4.982 5.842 5.503 5.503 0 0 1-9.853-3.375c0-.146.011-.287.022-.43a5.503 5.503 0 1 1 6.513-8.868 5.396 5.396 0 0 1 8.3 6.831Zm-10.955-.39a1.182 1.182 0 0 0-1.195-1.278 1.198 1.198 0 0 0-1.218 1.277 1.206 1.206 0 0 0 1.207 1.282 1.208 1.208 0 0 0 1.206-1.282Zm4.194 0a1.182 1.182 0 0 0-1.195-1.278 1.199 1.199 0 0 0-1.216 1.277 1.208 1.208 0 1 0 2.41 0Zm4.195 0a1.18 1.18 0 0 0-1.196-1.278 1.199 1.199 0 0 0-1.216 1.277 1.208 1.208 0 1 0 2.413 0Zm3.803 9.86a1.682 1.682 0 1 1-.003-3.363 1.682 1.682 0 0 1 .004 3.363h-.001Z"
        />
    </Svg>
)

export const AncestorsIcon = (props: SvgProps) => (
    <Svg width={40} height={40} fill="none" {...props}>
        <Rect width={40} height={40} fill="#FF7C7C" rx={20} />
        <G fill="#fff" clipPath="url(#a)">
            <Path d="M20 7.555c-5.6-.233-10.267 4.123-10.5 9.723-.233 5.6 4.122 10.266 9.722 10.5v-4.045l-4.044-4.044a.752.752 0 0 1 0-1.09.752.752 0 0 1 1.089 0l2.955 2.956v-4.822l-2.1-2.1a.752.752 0 0 1 0-1.089.752.752 0 0 1 1.09 0l2.566 2.567v2.333l2.567-2.566a.752.752 0 0 1 1.088 0 .752.752 0 0 1 0 1.088l-3.655 3.656v7.156c5.6-.234 9.956-4.9 9.722-10.5-.233-5.6-4.9-9.956-10.5-9.723Z" />
            <Path d="M20 27.778h-.778v3.889c0 .466.311.777.778.777s.778-.31.778-.777v-3.89H20Z" />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M6 6h28v28H6z" />
            </ClipPath>
        </Defs>
    </Svg>
)
