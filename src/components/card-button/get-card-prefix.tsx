import { View } from '@gluestack-ui/themed'
import {
    AncestorsIcon,
    AngelIcon,
    AnimalIcon,
    BirthdateStyleIcon,
    BloodIcon,
    CardsIcon,
    ChartsIcon,
    ColorPaletteIcon,
    CompatibilityIcon,
    DestinyIcon,
    FormulaIcon,
    GiftIcon,
    HealthIcon,
    HomeIcon,
    KarmaIcon,
    LuckyIcon,
    MindIcon,
    PhoneIcon,
    PlanetsIcon,
    PredictionIcon,
    ProfessionIcon,
    StrengthIcon,
    WeaknessesIcon,
} from '@/assets/icons/pages'
import { PageType } from '@/types/interface/numbers'

const getCardPrefix = (type: PageType) => {
    switch (type) {
        case 'destiny-program':
            return <DestinyIcon />
        case 'strong-qualities':
            return <StrengthIcon />
        case 'fate-card':
            return <CardsIcon />
        case 'weak-qualities':
            return <WeaknessesIcon />
        case 'planets':
            return <PlanetsIcon />
        case 'karma':
            return <KarmaIcon />
        case 'health':
            return <HealthIcon />
        case 'blood':
            return <BloodIcon />
        case 'charts':
            return <ChartsIcon />
        case 'phone-calculation':
            return <PhoneIcon />
        case 'house-calculation':
            return <HomeIcon />
        case 'prediction':
            return <PredictionIcon />
        case 'birthdate-style':
            return <BirthdateStyleIcon />
        case 'compatibility':
            return <CompatibilityIcon />
        case 'color-palette':
            return <ColorPaletteIcon />
        case 'formula':
            return <FormulaIcon />
        case 'gift':
            return <GiftIcon />
        case 'animal':
            return <AnimalIcon />
        case 'lucky-numbers':
            return <LuckyIcon />
        case 'angel':
            return <AngelIcon />
        case 'professions':
            return <ProfessionIcon />
        case 'guessing-number':
            return <MindIcon />
        case 'ancestors':
            return <AncestorsIcon />
        default:
            return <View w="$10" h="$10" />
    }
}

export default getCardPrefix
