export type PointType = 'trail' | 'water_fall' | 'park' | 'farm' | 'other';

export const POINT_TYPE_TRANSLATIONS: Record<PointType, string> = {
    'trail': 'Trilha',
    'water_fall': 'Cachoeira',
    'park': 'Parque',
    'farm': 'Fazenda',
    'other': 'Outro'
};

export const getPointTypeTranslation = (pointType: PointType): string => {
    return POINT_TYPE_TRANSLATIONS[pointType];
};

export const getAllPointTypes = (): Array<{ key: PointType; name: string }> => {
    return Object.entries(POINT_TYPE_TRANSLATIONS).map(([key, name]) => ({
        key: key as PointType,
        name
    }));
};