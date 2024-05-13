import { ScrollView, VStack } from '@gluestack-ui/themed'
import { Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import CardButton from '@/components/card-button/card-button'
import getCardPrefix from '@/components/card-button/get-card-prefix'
import CategoryLabel from '@/components/dashboard/category-label'
import TopBar from '@/components/top-bar/top-bar'
import Scaffold from '@/components/ui/scaffold'
import { AppColors } from '@/constants/theme'
import { DefaultStackScreenProps } from '@/types/interface'
import { CategoryInterface } from '@/types/interface/categories'

export default function CategoriesScreen({
    navigation,
    route,
}: DefaultStackScreenProps) {
    const routeParams = route.params as CategoryInterface

    return (
        <Scaffold>
            <TopBar
                position="absolute"
                bgColor={AppColors.transparent}
                navigation={navigation}
                zIndex={2}
            />
            <LinearGradient
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: 180,
                    zIndex: 1,
                }}
                colors={['#00000000', '#00000000', '#00000000', '#FFFFFFFF']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            />
            <Image
                style={{
                    width: '100%',
                    height: 180,
                }}
                source={routeParams.image}
            />
            <CategoryLabel top={-8}>{routeParams.label}</CategoryLabel>
            <ScrollView>
                <VStack p="$6" gap="$5">
                    {routeParams.pages.map((value, index) => (
                        <CardButton
                            key={index}
                            prefix={getCardPrefix(value.type)}
                            label={value.label}
                            onPress={() =>
                                navigation.navigate(value.route, {
                                    label: value.label,
                                    type: value.type,
                                })
                            }
                        />
                    ))}
                </VStack>
            </ScrollView>
        </Scaffold>
    )
}
