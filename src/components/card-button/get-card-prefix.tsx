import { View } from '@gluestack-ui/themed'
import {
    AncestorsIcon,
    AngelIcon,
    AnimalIcon,
    BloodIcon,
    CardsIcon,
    DestinyIcon,
    FormulaIcon,
    GiftIcon,
    HealthIcon,
    HomeIcon,
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
        case 'destiny':
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
            return <View /> //
        case 'health':
            return <HealthIcon />
        case 'blood':
            return <BloodIcon />
        case 'charts':
            return <View /> //
        case 'phone':
            return <PhoneIcon />
        case 'home':
            return <HomeIcon />
        case 'prediction':
            return <PredictionIcon />
        case 'birthdate-style':
            return <View /> //
        case 'compatibility':
            return <View /> //
        case 'color-palette':
            return <View /> //
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
